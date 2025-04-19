<template>
  <!-- Button removed as component will be controlled through WeWeb actions -->
  <div></div>
</template>

<script>
import Vapi from "@vapi-ai/web";
import { ref } from 'vue';

export default {
  props: {
    content: { type: Object, required: true },
    uid: { type: String, required: true },
  },
  setup(props) {
    // Create component variables to expose call and speaking status
    const { value: isCallingLive, setValue: setIsCallingLive } = wwLib.wwVariable.useComponentVariable({
      uid: props.uid,
      name: 'isCallingLive',
      type: 'boolean',
      defaultValue: false,
      componentType: 'element', // Ensure it's registered as an element variable
    });

    const { value: assistantIsSpeaking, setValue: setAssistantIsSpeaking } = wwLib.wwVariable.useComponentVariable({
      uid: props.uid,
      name: 'assistantIsSpeaking',
      type: 'boolean',
      defaultValue: false,
      componentType: 'element',
    });

    // Ensure initial values are set
    setIsCallingLive(false);
    setAssistantIsSpeaking(false);

    const isCallActive = ref(false);
    const isInitialized = ref(false);
    const ringSound = ref(null);
    const endCallSound = ref(null);

    // Initialize sounds
    function initSounds() {
      // Always recreate Audio instances to handle URL changes
      if (props.content.ringSound) {
        ringSound.value = new Audio(props.content.ringSound);
        ringSound.value.loop = true; // Make the ring sound loop
      }
      if (props.content.endCallSound) {
        endCallSound.value = new Audio(props.content.endCallSound);
      }
    }

    // Start playing ring sound
    function startRinging() {
      // Reinitialize sounds to get latest URLs
      initSounds();
      if (ringSound.value) {
        ringSound.value.play().catch(error => {
          console.error('Error playing ring sound:', error);
        });
      }
    }

    // Stop playing ring sound
    function stopRinging() {
      if (ringSound.value) {
        ringSound.value.pause();
        ringSound.value.currentTime = 0;
      }
    }

    // Reset all call states
    function resetCallState() {
      stopRinging();
      isCallActive.value = false;
      setIsCallingLive(false);
      setAssistantIsSpeaking(false);
      console.log('Call state reset, isCallingLive:', isCallingLive.value, 'assistantIsSpeaking:', assistantIsSpeaking.value);
    }

    // Helper functions
    async function initializeVapi() {
      try {
        window.vapiInstance = new Vapi(props.content.providerId);

        // Add speech event listeners
        window.vapiInstance.on('speech-start', () => {
          console.log('Assistant started speaking');
          stopRinging(); // Stop ringing when assistant starts speaking
          setAssistantIsSpeaking(true);
        });

        window.vapiInstance.on('speech-end', () => {
          console.log('Assistant stopped speaking');
          setAssistantIsSpeaking(false);
        });

        // Add call end event listener
        window.vapiInstance.on('call-end', () => {
          console.log('Call ended');
          // Reinitialize sounds to get latest URLs
          initSounds();
          if (endCallSound.value) {
            endCallSound.value.play().catch(error => {
              console.error('Error playing end call sound:', error);
            });
          }
          // Ensure call status is reset
          setIsCallingLive(false);
          isCallActive.value = false;
          console.log('Call has ended, states:', {
            isCallActive: isCallActive.value,
            isCallingLive: isCallingLive.value
          });
        });

        isInitialized.value = true;
        console.log('Vapi initialized successfully');
        return true;
      } catch (error) {
        console.error('Error initializing Vapi:', error);
        isInitialized.value = false;
        setIsCallingLive(false); // Ensure status is reset on error
        return false;
      }
    }

    function getConfig() {
      const config = props.content.assistantConfig;

      // If it's already an object, return it directly
      if (typeof config === 'object' && config !== null) {
        return config;
      }

      // If it's a string, try to parse it
      if (typeof config === 'string') {
        try {
          return JSON.parse(config);
        } catch (parseError) {
          console.error('Error parsing assistant configuration:', parseError);
          return null;
        }
      }

      console.error('Invalid assistant configuration type:', typeof config);
      return null;
    }

    // Create methods that will be used both by the template and external actions
    const methods = {
      detectDevice() {
        const userAgent = navigator.userAgent.toLowerCase();
        if (/iphone|ipad|ipod/.test(userAgent)) return 'ios';
        if (/android/.test(userAgent)) return 'android';
        return 'desktop';
      },

      getDeviceSpecificInstructions() {
        const device = this.detectDevice();
        switch (device) {
          case 'ios':
            return 'iPhone/iPad Instructions:\n' +
                   '1. Open the Settings app\n' +
                   '2. Scroll down and tap on your browser (Safari/Chrome)\n' +
                   '3. Tap on "Microphone"\n' +
                   '4. Toggle the switch to "Allow"\n' +
                   '5. Return to the browser and refresh the page';
          case 'android':
            return 'Android Instructions:\n' +
                   '1. Tap the lock icon in the address bar\n' +
                   '2. Tap on "Site settings"\n' +
                   '3. Find "Microphone"\n' +
                   '4. Select "Allow"\n' +
                   '5. Refresh the page';
          default: // desktop
            return 'Desktop Instructions:\n' +
                   '1. Click the lock/site settings icon in the address bar\n' +
                   '2. Find "Microphone" in the permissions list\n' +
                   '3. Change it to "Allow"\n' +
                   '4. Refresh the page';
        }
      },

      async checkMicrophonePermission() {
        try {
          const permissionStatus = await navigator.permissions.query({ name: 'microphone' });
          return permissionStatus.state;
        } catch (error) {
          console.error('Error checking microphone permission:', error);
          return 'prompt'; // Default to prompt if we can't check
        }
      },

      async forceOpenPermissionDialog() {
        try {
          const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
          stream.getTracks().forEach(track => track.stop());
          return true;
        } catch (error) {
          return false;
        }
      },

      async requestMicrophonePermission() {
        try {
          const permissionState = await this.checkMicrophonePermission();
          
          if (permissionState === 'denied') {
            // Show device-specific instructions
            const message = 'Microphone access is blocked.\n\n' + 
                          this.getDeviceSpecificInstructions() + '\n\n' +
                          'After enabling access in settings, click OK to try again.';
            alert(message);
            
            // Try to force open the permission dialog again
            return await this.forceOpenPermissionDialog();
          }

          const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
          // Stop the stream immediately as we only needed it for permission
          stream.getTracks().forEach(track => track.stop());
          console.log('Enforce Microphone permission granted');
          return true;
        } catch (error) {
          if (error.name === 'NotAllowedError') {
            const retry = confirm('Microphone access is required. Would you like to try again?');
            if (retry) {
              // Try to force open the permission dialog again
              return await this.forceOpenPermissionDialog();
            }
          }
          console.error('Microphone permission denied:', error);
          return false;
        }
      },

      async startCall() {
        // Strict check: Don't allow new calls if one is in progress
        if (isCallingLive.value) {
          console.error('Cannot start a new call: A call is already in progress');
          return;
        }

        // Request microphone permission first
        const hasPermission = await methods.requestMicrophonePermission();
        if (!hasPermission) {
          console.error('Microphone permission is required to start the call');
          resetCallState();
          return;
        }

        try {
          // Set calling status immediately to prevent concurrent calls
          setIsCallingLive(true);
          console.log('Starting call attempt, isCallingLive:', isCallingLive.value);

          // Initialize sounds and start ringing
          initSounds();
          startRinging();

          // Get the latest configuration
          const config = getConfig();
          if (!config) {
            resetCallState(); // Reset all states if config is invalid
            return;
          }

          // Initialize Vapi if not initialized or try to start call
          const startCall = async () => {
            try {
              // Always use the latest configuration
              const latestConfig = getConfig();
              if (!latestConfig) throw new Error('Invalid configuration');

              await window.vapiInstance.start(latestConfig);
              console.log('Vapi conversation started with latest configuration');
              isCallActive.value = true;
              console.log('Call is now active, states:', {
                isCallActive: isCallActive.value,
                isCallingLive: isCallingLive.value
              });
            } catch (error) {
              resetCallState(); // Reset states before throwing
              throw error; // Propagate error for handling
            }
          };

          // First attempt
          if (!isInitialized.value) {
            await initializeVapi();
          }

          try {
            await startCall();
          } catch (error) {
            console.log('Error on first attempt, reinitializing Vapi...');
            // If first attempt fails, try reinitializing and starting again
            await initializeVapi();
            await startCall(); // This will use the latest configuration again
          }
        } catch (error) {
          console.error('Error starting Vapi call after retry:', error);
          isInitialized.value = false; // Reset initialization state
          resetCallState(); // Reset all states on error
        }
      },
      endCall() {
        try {
          if (window.vapiInstance) {
            // Stop the Vapi call
            window.vapiInstance.stop();
            console.log('Vapi call stopped');

            // Stop ringing and update call status
            resetCallState(); // Use centralized reset function
          } else {
            console.log('No Vapi instance found, just resetting state');
            resetCallState();
          }
        } catch (error) {
          console.error('Error stopping Vapi call:', error);
          stopRinging(); // Ensure ring stops even if there's an error
        }
      },
      async toggleCall() {
        console.log('Toggle called. Current states:', {
          isCallActive: isCallActive.value,
          isCallingLive: isCallingLive.value,
          vapiExists: !!window.vapiInstance
        });

        if (window.vapiInstance && (isCallActive.value || isCallingLive.value)) {
          methods.endCall();
        } else if (!isCallingLive.value) { // Only start if not already calling
          // The startCall method already has the concurrent call check
          await methods.startCall();
        } else {
          console.log('Cannot toggle: Call state is inconsistent, resetting...');
          resetCallState();
        }
      }
    };

    // Register actions for external use
    wwLib.wwElement.useRegisterElementLocalContext('vapiCaller', { isCallActive }, {
      startCall: {
        method: methods.startCall,
        editor: {
          label: 'Start Call',
          description: 'Start a new call.',
        },
      },
      endCall: {
        method: methods.endCall,
        editor: {
          label: 'End Call',
          description: 'End the current call.',
        },
      },
      toggleCall: {
        method: methods.toggleCall,
        editor: {
          label: 'Toggle Call',
          description: 'Toggle between starting and ending the call.',
        },
      },
    });

    return {
      isCallActive,
      isInitialized,
      isCallingLive, // Expose the call status
      assistantIsSpeaking, // Expose the speaking status
      ...methods // Spread methods to make them available in template
    };
  },
  // Button styles removed as they're no longer needed
  computed: {},
  methods: {},
};
</script>

<style lang="scss" scoped>
/* Component styles if needed */
</style>
