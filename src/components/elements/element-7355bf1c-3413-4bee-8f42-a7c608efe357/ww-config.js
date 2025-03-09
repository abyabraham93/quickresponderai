export default {
  editor: {
    label: {
      en: "Vapi",
    },
    variables: {
      isCallingLive: {
        path: 'isCallingLive',
        type: 'boolean',
        defaultValue: false,
        description: {
          en: 'True when a call is active and the assistant is connected, false otherwise',
        },
      },
      assistantIsSpeaking: {
        path: 'assistantIsSpeaking',
        type: 'boolean',
        defaultValue: false,
        description: {
          en: 'True when the assistant is currently speaking, false otherwise',
        },
      },
    },
  },
  actions: [
    {
      label: 'Start Call',
      action: 'startCall',
    },
    {
      label: 'End Call',
      action: 'endCall',
    },
    {
      label: 'Toggle Call',
      action: 'toggleCall',
    },
  ],
  properties: {
    textColor: {
      label: {
        en: "Text color",
      },
      type: "Color",
      defaultValue: "#F23636",
    },
    providerId: {
      label: {
        en: "Vapi Provider ID",
      },
      type: "Text",
      defaultValue: "8c8c3819-eebb-4724-92e5-ee6778497b73",
      section: "settings",
      bindable: true
    },
    ringSound: {
      label: {
        en: "Ring Sound URL",
      },
      type: "Text",
      section: "sounds",
      defaultValue: "https://weweb-production.s3.amazonaws.com/designs/b7dbc394-55f6-4b91-8022-c91ff42d1223/files/phone_ring_sound.mp3",
      bindable: true,
      helper: {
        en: "URL to the sound file that plays while initializing the call"
      }
    },
    endCallSound: {
      label: {
        en: "End Call Sound URL",
      },
      type: "Text",
      section: "sounds",
      defaultValue: "https://weweb-production.s3.amazonaws.com/designs/b7dbc394-55f6-4b91-8022-c91ff42d1223/files/end_call_sound_effect.mp3",
      bindable: true,
      helper: {
        en: "URL to the sound file that plays when the call ends"
      }
    },
    assistantConfig: {
      label: {
        en: "Assistant Configuration",
      },
      type: "Text",
      defaultValue: `{
  "name": "Vapi's Pizza Front Desk",
  "firstMessage": "Vappy's Pizzeria speaking, how can I help you?",
  "transcriber": {
    "provider": "deepgram",
    "model": "nova-2",
    "language": "en-US"
  },
  "voice": {
    "provider": "deepgram",
    "voiceId": "asteria"
  },
  "model": {
    "provider": "openai",
    "model": "gpt-4o-mini",
    "messages": [
      {
        "role": "system",
        "content": "You are taking orders for Vappy's pizzeria. Treat people well."
      }
    ]
  }
}`,
      section: "settings",
      bindable: true,
      helper: {
        en: "Enter the assistant configuration as a JSON object"
      }
    },
  },
};
