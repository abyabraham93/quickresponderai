import emitter from 'tiny-emitter/instance';
import services from './services/index.js';
import { useIconsStore } from '@/pinia/icons';

 /* wwFront:start */
// eslint-disable-next-line no-undef
import plugin_f5856798_485d_47be_b433_d43d771c64e1 from '@/components/plugins/plugin-f5856798-485d-47be-b433-d43d771c64e1/src/wwPlugin.js';
import plugin_832d6f7a_42c3_43f1_a3ce_9a678272f811 from '@/components/plugins/plugin-832d6f7a-42c3-43f1-a3ce-9a678272f811/src/wwPlugin.js';
import plugin_cd33cf33_e29f_4e8c_ac26_b997fe507ce7 from '@/components/plugins/plugin-cd33cf33-e29f-4e8c-ac26-b997fe507ce7/src/wwPlugin.js';
import plugin_2bd1c688_31c5_443e_ae25_59aa5b6431fb from '@/components/plugins/plugin-2bd1c688-31c5-443e-ae25-59aa5b6431fb/src/wwPlugin.js';
import plugin_36816525_6e0d_4217_b792_19f5d8682c46 from '@/components/plugins/plugin-36816525-6e0d-4217-b792-19f5d8682c46/src/wwPlugin.js';
import plugin_fbf0feec_356b_461b_8738_3b1f44edaf02 from '@/components/plugins/plugin-fbf0feec-356b-461b-8738-3b1f44edaf02/src/wwPlugin.js';
import plugin_9c40819b_4a8f_468f_9ba5_4b9699f3361f from '@/components/plugins/plugin-9c40819b-4a8f-468f-9ba5-4b9699f3361f/src/wwPlugin.js';
/* wwFront:end */

import { computed, reactive } from 'vue';

export default {
    ...services,
     $on(event, fn) {
        emitter.on(event, fn);
    },
    $once(event, fn) {
        emitter.once(event, fn);
    },
    $emit(event, ...args) {
        if (!event) {
            return;
        }
        emitter.emit(event, ...args);
    },
    $off(event, fn) {
        emitter.off(event, fn);
    },
     front: {},
    $focus: null,
    env: process.env.NODE_ENV,
    async initFront({ router, store }) {
 
        this.front.router = router;
        /* wwFront:start */
        this.$store = store;
        /* wwFront:end */

        //Init services
        this.wwLog.init();

 
        wwLib.logStore.verbose('Starting the application...');
        await this.wwWebsiteData.init();
        this.wwLang.init(router);

        /* wwFront:start */
        // eslint-disable-next-line no-undef
        wwLib.wwPluginHelper.registerPlugin('plugin-f5856798-485d-47be-b433-d43d771c64e1', plugin_f5856798_485d_47be_b433_d43d771c64e1);
wwLib.wwPluginHelper.registerPlugin('plugin-832d6f7a-42c3-43f1-a3ce-9a678272f811', plugin_832d6f7a_42c3_43f1_a3ce_9a678272f811);
wwLib.wwPluginHelper.registerPlugin('plugin-cd33cf33-e29f-4e8c-ac26-b997fe507ce7', plugin_cd33cf33_e29f_4e8c_ac26_b997fe507ce7);
wwLib.wwPluginHelper.registerPlugin('plugin-2bd1c688-31c5-443e-ae25-59aa5b6431fb', plugin_2bd1c688_31c5_443e_ae25_59aa5b6431fb);
wwLib.wwPluginHelper.registerPlugin('plugin-36816525-6e0d-4217-b792-19f5d8682c46', plugin_36816525_6e0d_4217_b792_19f5d8682c46);
wwLib.wwPluginHelper.registerPlugin('plugin-fbf0feec-356b-461b-8738-3b1f44edaf02', plugin_fbf0feec_356b_461b_8738_3b1f44edaf02);
wwLib.wwPluginHelper.registerPlugin('plugin-9c40819b-4a8f-468f-9ba5-4b9699f3361f', plugin_9c40819b_4a8f_468f_9ba5_4b9699f3361f);
        /* wwFront:end */

 
        services.scrollStore.start();
        services.keyboardEventStore.start();
    },
     // TODO: Verify with Alexis, still uses wwImageMultiLang
    getResponsiveStyleProp({ store, style, uid, states = [], prop }) {
        store = store || wwLib.getFrontWindow().wwLib.$store;
        if (!style && uid) {
            const wwObject = this.$store.getters['websiteData/getWwObjects'][uid];
            if (!wwObject) return '';
            style = (wwObject._state || {}).style || {};
        }

        const screenSizes = store.getters['front/getScreenSizes'];
        const screenSize = store.getters['front/getScreenSize'];

        let value = '';

        for (const media in screenSizes) {
            if (style[media] && typeof style[media][prop] !== 'undefined') {
                value = style[media][prop];
            }
            if (media === screenSize) {
                break;
            }
        }
        for (const state of states) {
            for (const media in screenSizes) {
                if (style[`${state}_${media}`] && style[`${state}_${media}`][prop]) {
                    value = style[`${state}_${media}`][prop];
                }
                if (media === screenSize) {
                    break;
                }
            }
        }

        return value;
    },
    globalContext: reactive({
        page: computed(() => {
            const page = wwLib.$store.getters['websiteData/getPage'];
            if (!page) return {};
            else if (!page.cmsDataSetPath) return { ...pageSanitizer(page) };
            return { ...pageSanitizer(page), data: wwLib.$store.getters['data/getPageCollectionData'] };
        }),
        pageParameters: computed(() => {
            const pageParameters = Object.values(wwLib.$store.getters['data/getPageParameterVariables']);
            const pageParametersValueMap = {};
            for (const pageParameter of pageParameters) pageParametersValueMap[pageParameter.id] = pageParameter.value;
            return pageParametersValueMap;
        }),
        pages: computed(() => {
            const pages = wwLib.$store.getters['websiteData/getPages'];
            const pagesValueMap = {};
            for (const page of pages) pagesValueMap[page.id] = pageSanitizer(page);
            return pagesValueMap;
        }),
        colors: computed(() => {
            const theme = wwLib.$store.getters['front/getTheme'];
             /* wwFront:start */
            // eslint-disable-next-line no-unreachable, no-undef
            return theme === 'dark' ? {"99a41160-1b7a-4be2-b7e7-8a052ffde499":"#F5F8FF","173287ff-2f86-433e-94e7-4eb4da2ef911":"#EFF6FF","bde5dc18-63e1-4631-bd0f-cca66bdba964":"#DBEAFE","54c4e622-08a6-48fa-a635-ecf1b112d414":"#BFDBFE","50a2a0dd-e468-45df-a212-28671333aa21":"#93C5FD","8746fb11-a24b-4be5-aeb1-1d55d57af557":"#60A5FA","2a862820-f5eb-4d45-8c43-82fe5bd1117b":"#3B82F6","14bd4a53-519b-4b41-a568-0fd932945d09":"#2563EB","3c949025-224e-4e31-b21b-8a6278b371b6":"#1D4ED8","b25f3690-8181-4c53-8c3d-b5ed6ee057ff":"#1E40AF","19acd294-7485-4850-9ed4-ac7cb76a3542":"#1E3A8A","40902922-c32f-4f43-90a7-d967a869b55d":"#FCFCFD","bbc0be7a-61b1-432f-827f-248aef1147a3":"#FFFFFF","4a5337fb-c680-4c0f-9792-32b003dbb52e":"#FAFAFA","f8dd596d-55b3-484f-98be-c3bfa0066838":"#F4F4F5","1e5df619-8174-431d-8681-ef5480c3798d":"#E4E4E7","fdacd15a-7380-449c-b602-32bffd32814d":"#D4D4D8","fda3068d-7270-4f6c-a532-afcfc4f45290":"#A1A1AA","36b45a99-9f0e-446b-916e-a43dc929ac45":"#71717A","6e918a38-af61-41c4-ae51-72d3e903806d":"#52525B","9bfa4796-a9b4-4246-a966-2faf0ca4d65c":"#3F3F46","b950d1b3-89d3-444a-9c67-81ee114aeba7":"#27272A","91f0e6a0-de7f-4fcc-82a6-695e998063ee":"#18181B","98ca77a3-cd3e-43ff-a925-c73e4cd6c9f4":"#2f56ab","2127da5a-5ad8-46d9-9017-98ab05d278e4":"#f8fafc","be7adf60-e96f-43d8-9557-e140a2b599bc":"#00d97e","449fa884-3b1c-4e85-884a-3f3e2814b3e3":"#FFAB00","714a5d34-42e1-4e93-90eb-8ef3a9088881":"#2c7be5","bb822abe-5745-485b-8a97-9a036531d1c5":"#727cf5","8740c94c-5f1d-41b8-a5f1-107f3f22516e":"#e63757","e8c209fd-5389-4eaf-85e5-7871dae722be":"#f6c343","c1361082-2add-4f77-b372-9bbb222da091":"#f6c343","03ea0bbd-9b83-4280-a5a1-3567596a6320":"#39afd1","16d9906e-6dd8-43c6-98e5-f8bc7ff6b38e":"#95aac9","2103ce82-4686-47a5-8bea-0c2cf24f910d":"#f9fbfd","0bedaf08-d954-4ce4-8fb5-85ab45f06209":"#edf2f9","9f7eaece-1b33-45d5-8836-8ede33a27cd3":"#FFFFFF","defd3ad8-ae0e-47bc-b588-c2f11f95b247":"#e3ebf6","bd56e500-4800-48aa-84fc-d7d93714db05":"#95aac9","3333aff8-9931-470c-be62-aa7ef63523e3":"#6b5eae","7eca559d-9a15-4a33-b6fa-1ce97c11a3e5":"#ff679b","856d0832-06c4-478a-ba53-bc7c0471296a":"#fd7e14","c92087cd-e314-4d0b-a1c3-1adbb5e5b1bb":"#02a8b5","424ed3b7-6511-49a2-9f73-e8fdaa81d740":"#3b506c","37ced9c1-ad43-4fe7-8503-f5af7e1054c0":"#d2ddec","563ca62f-2f04-4488-90f2-f37e125a8bbb":"#b1c2d9","47aa3df5-89cb-43a5-aaff-c90b9e00e86e":"#95aac9","91dd0fb1-c812-4562-b8f2-aa980d900a75":"#6e84a3","484f0f73-19cf-4fde-a1ad-9efae1674edd":"#3b506c","ff467d75-9609-4dd6-a25f-f87f82161559":"#283e59","628ba144-eb9e-4f79-8340-a5847824118c":"#2c7be5","fdbd35b8-1cac-4057-8f0a-370f75e388d5":"#6e84a3","3b096df8-f9fd-47ac-82b4-1fee60823e4d":"#00d97e","130ac6b4-802b-4035-97e7-77b349ee436d":"#39afd1","c9f32e09-ebd5-4255-a03a-aae696897ff4":"#f6c343","3eb4c2a0-99fe-4c32-8436-f55951baba1a":"#e63757","89c5d11b-889c-4076-abd8-aea055d535ad":"#edf2f9","a90c273c-7ef1-40c4-b8b3-c85f9fc2fdde":"#12263f","c9de98fd-96e7-448d-9bc2-880cc5089882":"#FFFFFF00","e5defdf9-39ea-45c1-835a-2970efd7f9c0":"#2569c3","2f2e47b8-7729-4446-97fa-8d8a46de7927":"#5e708b","46bd2b28-4d49-470c-a02b-8803ee7dfc10":"#00b86b","2fbb6cf7-ee59-4227-b796-54c74c352405":"#f5bf38","54feae51-da8d-42a7-99b4-64bcf0fb9388":"#3095b2","25fc3393-4b01-438c-990d-5ccac219f73d":"#c42f4a"} : {"99a41160-1b7a-4be2-b7e7-8a052ffde499":"#F5F8FF","173287ff-2f86-433e-94e7-4eb4da2ef911":"#EFF6FF","bde5dc18-63e1-4631-bd0f-cca66bdba964":"#DBEAFE","54c4e622-08a6-48fa-a635-ecf1b112d414":"#BFDBFE","50a2a0dd-e468-45df-a212-28671333aa21":"#93C5FD","8746fb11-a24b-4be5-aeb1-1d55d57af557":"#60A5FA","2a862820-f5eb-4d45-8c43-82fe5bd1117b":"#3B82F6","14bd4a53-519b-4b41-a568-0fd932945d09":"#2563EB","3c949025-224e-4e31-b21b-8a6278b371b6":"#1D4ED8","b25f3690-8181-4c53-8c3d-b5ed6ee057ff":"#1E40AF","19acd294-7485-4850-9ed4-ac7cb76a3542":"#1E3A8A","40902922-c32f-4f43-90a7-d967a869b55d":"#FCFCFD","bbc0be7a-61b1-432f-827f-248aef1147a3":"#FFFFFF","4a5337fb-c680-4c0f-9792-32b003dbb52e":"#FAFAFA","f8dd596d-55b3-484f-98be-c3bfa0066838":"#F4F4F5","1e5df619-8174-431d-8681-ef5480c3798d":"#E4E4E7","fdacd15a-7380-449c-b602-32bffd32814d":"#D4D4D8","fda3068d-7270-4f6c-a532-afcfc4f45290":"#A1A1AA","36b45a99-9f0e-446b-916e-a43dc929ac45":"#71717A","6e918a38-af61-41c4-ae51-72d3e903806d":"#52525B","9bfa4796-a9b4-4246-a966-2faf0ca4d65c":"#3F3F46","b950d1b3-89d3-444a-9c67-81ee114aeba7":"#27272A","91f0e6a0-de7f-4fcc-82a6-695e998063ee":"#18181B","98ca77a3-cd3e-43ff-a925-c73e4cd6c9f4":"#2f56ab","2127da5a-5ad8-46d9-9017-98ab05d278e4":"#f8fafc","be7adf60-e96f-43d8-9557-e140a2b599bc":"#00d97e","449fa884-3b1c-4e85-884a-3f3e2814b3e3":"#FFAB00","714a5d34-42e1-4e93-90eb-8ef3a9088881":"#2c7be5","bb822abe-5745-485b-8a97-9a036531d1c5":"#727cf5","8740c94c-5f1d-41b8-a5f1-107f3f22516e":"#e63757","e8c209fd-5389-4eaf-85e5-7871dae722be":"#f6c343","c1361082-2add-4f77-b372-9bbb222da091":"#f6c343","03ea0bbd-9b83-4280-a5a1-3567596a6320":"#39afd1","16d9906e-6dd8-43c6-98e5-f8bc7ff6b38e":"#95aac9","2103ce82-4686-47a5-8bea-0c2cf24f910d":"#f9fbfd","0bedaf08-d954-4ce4-8fb5-85ab45f06209":"#edf2f9","9f7eaece-1b33-45d5-8836-8ede33a27cd3":"#FFFFFF","defd3ad8-ae0e-47bc-b588-c2f11f95b247":"#e3ebf6","bd56e500-4800-48aa-84fc-d7d93714db05":"#95aac9","3333aff8-9931-470c-be62-aa7ef63523e3":"#6b5eae","7eca559d-9a15-4a33-b6fa-1ce97c11a3e5":"#ff679b","856d0832-06c4-478a-ba53-bc7c0471296a":"#fd7e14","c92087cd-e314-4d0b-a1c3-1adbb5e5b1bb":"#02a8b5","424ed3b7-6511-49a2-9f73-e8fdaa81d740":"#3b506c","37ced9c1-ad43-4fe7-8503-f5af7e1054c0":"#d2ddec","563ca62f-2f04-4488-90f2-f37e125a8bbb":"#b1c2d9","47aa3df5-89cb-43a5-aaff-c90b9e00e86e":"#95aac9","91dd0fb1-c812-4562-b8f2-aa980d900a75":"#6e84a3","484f0f73-19cf-4fde-a1ad-9efae1674edd":"#3b506c","ff467d75-9609-4dd6-a25f-f87f82161559":"#283e59","628ba144-eb9e-4f79-8340-a5847824118c":"#2c7be5","fdbd35b8-1cac-4057-8f0a-370f75e388d5":"#6e84a3","3b096df8-f9fd-47ac-82b4-1fee60823e4d":"#00d97e","130ac6b4-802b-4035-97e7-77b349ee436d":"#39afd1","c9f32e09-ebd5-4255-a03a-aae696897ff4":"#f6c343","3eb4c2a0-99fe-4c32-8436-f55951baba1a":"#e63757","89c5d11b-889c-4076-abd8-aea055d535ad":"#edf2f9","a90c273c-7ef1-40c4-b8b3-c85f9fc2fdde":"#12263f","c9de98fd-96e7-448d-9bc2-880cc5089882":"#FFFFFF00","e5defdf9-39ea-45c1-835a-2970efd7f9c0":"#2569c3","2f2e47b8-7729-4446-97fa-8d8a46de7927":"#5e708b","46bd2b28-4d49-470c-a02b-8803ee7dfc10":"#00b86b","2fbb6cf7-ee59-4227-b796-54c74c352405":"#f5bf38","54feae51-da8d-42a7-99b4-64bcf0fb9388":"#3095b2","25fc3393-4b01-438c-990d-5ccac219f73d":"#c42f4a"};
            /* wwFront:end */
        }),
        spacings:
         /* wwFront:start */
        // eslint-disable-next-line no-unreachable, no-undef
        {},
        /* wwFront:end */
        typographies:
         /* wwFront:start */
        // eslint-disable-next-line no-unreachable, no-undef
        {"c162e6fa-b0cb-43df-8225-fe843c8fed66":"500 64px/72px var(--ww-default-font-family, sans-serif)","70e95b48-a5cb-4783-9879-00068e298a75":"600 48px/56px var(--ww-default-font-family, sans-serif)","13193497-fa36-43dc-8e50-b82aad706704":"500 32px/40px var(--ww-default-font-family, sans-serif)","f7dcbe6b-307e-4591-a280-5f20ad3c1f57":"500 24px/32px var(--ww-default-font-family, sans-serif)","ce7ef155-b42d-4a33-8eac-da039bee308d":"500 20px/24px var(--ww-default-font-family, sans-serif)","7083c5e6-60c1-4a6b-8710-c627a8ebfd41":"400 18px/24px var(--ww-default-font-family, sans-serif)","029cbc56-3ebf-411d-873d-735745bc42df":"500 16px/22px var(--ww-default-font-family, sans-serif)","e3969432-d441-4a83-a0da-7beaf911ccb5":"500 14px/20px var(--ww-default-font-family, sans-serif)","6359c90a-ef2f-4707-aa70-b66a9d5badac":"500 12px/18px var(--ww-default-font-family, sans-serif)","be5b5107-fda2-4900-a63e-78b9f44efa9c":"400 16px/22px var(--ww-default-font-family, sans-serif)","9cc6d2f3-67c1-4109-baf7-99e53d80a5f4":"400 14px/20px var(--ww-default-font-family, sans-serif)","fb51e47e-f935-4350-b155-bc3d1f07214a":"400 12px/18px var(--ww-default-font-family, sans-serif)","21a8ee84-f6c9-4a75-ba37-5a29619f982b":"400 26px/normal var(--ww-default-font-family, sans-serif)","8ed97701-989b-446d-a1e9-952df1205004":"400 26px/normal var(--ww-default-font-family, sans-serif)","ca5a7f75-89ab-4064-9947-3477da1b07ec":"400 20px/normal var(--ww-default-font-family, sans-serif)","3e461430-459e-4e33-afdb-ffccc490ccf1":"500 26px/1.1em var(--ww-default-font-family, sans-serif)","61d88895-ea20-42db-a4e5-5bce4ec49900":"500 15px/110% var(--ww-default-font-family, sans-serif)","0be13ed8-c1c6-441d-8ef5-215cfee018ab":"500 20px/normal var(--ww-default-font-family, sans-serif)","a0c113b6-576d-43d7-821a-3ec9e3dc769a":"600 10px/normal var(--ww-default-font-family, sans-serif)","ab02d239-827c-46b4-b606-2f75f20a203b":"400 15px/150% var(--ww-default-font-family, sans-serif)","111edc99-c593-483c-8106-ebbd896639fc":"400 14px/normal var(--ww-default-font-family, sans-serif)","4ca7498d-572d-46d9-864c-dbb8036d08ce":"700 14px/normal var(--ww-default-font-family, sans-serif)","df7224d7-95e6-4836-82b8-edc59345a7f5":"700 26px/1.1em var(--ww-default-font-family, sans-serif)","5fc6ba1e-a1c3-42cc-b6f4-dd1e7e205c83":"700 20px/normal var(--ww-default-font-family, sans-serif)"},
        /* wwFront:end */
        browser: computed(() => {
            const router = wwLib.manager ? wwLib.getEditorRouter() : wwLib.getFrontRouter();
            const currentRoute = router.currentRoute.value;
            let currentQueries = currentRoute.query;
             return {
                url: window.location.origin + currentRoute.fullPath,
                path: currentRoute.path,
                // verify if auth plugin
                 /* wwFront:start */
                // eslint-disable-next-line no-dupe-keys
                source: currentQueries._source,
                /* wwFront:end */
                query: currentQueries,
                domain: window.location.hostname,
                baseUrl: window.location.origin,
                breakpoint: wwLib.$store.getters['front/getScreenSize'],
                environment: wwLib.getEnvironment(),
                theme: wwLib.$store.getters['front/getTheme'],
            };
        }),
        screen: services.scrollStore.screen,
        componentPositionInfo: services.scrollStore.componentPositionInfo,
    }),

    pageData: computed(() => {
        const lang = wwLib.$store.getters['front/getLang'];
        const cmsDataSetPath = wwLib.$store.getters['websiteData/getPage'].cmsDataSetPath;
        if (!cmsDataSetPath) {
            return { lang };
        }

        return { lang, data: wwLib.$store.getters['data/getPageCollectionData'] };
    }),

    getEnvironment() {
        return wwLib.manager
            ? 'editor'
            : window.location.host.includes(
                  // TODO: add staging2 ?
                  '-staging.' + (process.env.WW_ENV === 'staging' ? import.meta.env.VITE_APP_PREVIEW_URL : '')
              )
            ? 'staging'
            : window.location.host.includes(import.meta.env.VITE_APP_PREVIEW_URL)
            ? 'preview'
            : 'production';
    },

    useBaseTag() {
        return (
            wwLib.getEnvironment() === 'production' &&
            window.wwg_designInfo.baseTag &&
            window.wwg_designInfo.baseTag.href
        );
    },

    getBaseTag() {
        let baseTag = window.wwg_designInfo.baseTag?.href || '';
        if (!baseTag.startsWith('/')) {
            baseTag = '/' + baseTag;
        }
        if (!baseTag.endsWith('/')) {
            baseTag += '/';
        }
        return baseTag;
    },

    /**
     * @PUBLIC_API
     */
    getFrontWindow() {
        if (document.querySelector('.ww-manager-iframe')) {
            return document.querySelector('.ww-manager-iframe').contentWindow;
        }
        return window;
    },

    /**
     * @PUBLIC_API
     */
    getFrontDocument() {
        return this.getFrontWindow().document;
    },

    /**
     * @PUBLIC_API
     */
    getFrontRouter() {
        return this.front.router;
    },

    /**
     * @PUBLIC_API
     */
    getEditorWindow() {
         // eslint-disable-next-line no-unreachable
        return null;
    },

    /**
     * @PUBLIC_API
     */
    getEditorDocument() {
         // eslint-disable-next-line no-unreachable
        return null;
    },

    /**
     * @PUBLIC_API
     */
    getEditorRouter() {
        return this.editor.router;
    },

    /**
     * @PUBLIC_API
     * @DEPRECATED wwLib.wwApp.goTo
     */
    goTo(...args) {
        wwLib.wwLog.warn('wwLib.goTo is DEPRECATED, use wwLib.wwApp.goTo instead');
        wwLib.wwApp.goTo(...args);
    },

    /**
     * @PUBLIC_API
     * @DEPRECATED wwLib.wwUtils.getStyleFromToken
     */
    getStyleFromToken(...args) {
        // wwLib.wwLog.warn('wwLib.getStyleFromToken is DEPRECATED, use wwLib.wwUtils.getStyleFromToken instead');
        return wwLib.wwUtils.getStyleFromToken(...args);
    },

    /**
     * @PUBLIC_API
     * @DEPRECATED wwLib.wwUtils.getTypoFromToken
     */
    getTypoFromToken(...args) {
        // wwLib.wwLog.warn('wwLib.getTypoFromToken is DEPRECATED, use wwLib.wwUtils.getTypoFromToken instead');
        return wwLib.wwUtils.getTypoFromToken(...args);
    },

    /**
     * @PUBLIC_API
     * @DEPRECATED
     */
    element(value) {
        wwLib.wwLog.warn('wwLib.element is DEPRECATED');
        if (typeof value === 'object') {
            return { isWwObject: true, ...value };
        } else {
            return { isWwObject: true, type: value };
        }
    },

    /**
     * @PUBLIC_API
     * @DEPRECATED wwLib.wwUtils.resolveObjectPropertyPath
     */
    resolveObjectPropertyPath(...args) {
        // wwLib.wwLog.warn(
        //     'wwLib.resolveObjectPropertyPath is DEPRECATED, use wwLib.wwUtils.resolveObjectPropertyPath instead'
        // );
        return wwLib.wwUtils.resolveObjectPropertyPath(...args);
    },

    /**
     * @PUBLIC_API
     * @DEPRECATED wwLib.wwutils.getTextStyleFromContent
     */
    getTextStyleFromContent(...args) {
        // wwLib.wwLog.warn(
        //     'wwLib.getTextStyleFromContent is DEPRECATED, use wwLib.wwUtils.getTextStyleFromContent instead'
        // );
        return wwLib.wwUtils.getTextStyleFromContent(...args);
    },

    /**
     * @PUBLIC_API
     * @DEPRECATED wwLib.wwWorkflow.executeGlobal
     */
    async executeWorkflow(...args) {
        wwLib.wwLog.warn('wwLib.executeWorkflow is DEPRECATED, use wwLib.wwWorkflow.executeGlobal instead');
        return wwLib.wwWorkflow.executeGlobal(...args);
    },

    /**
     * @PUBLIC_API
     * @EDITOR
     * @DEPRECATED wwLib.wwEditor.findParentUidByFlag
     */
    findParentUidByFlag(...args) {
        wwLib.wwLog.warn('wwLib.wwEditor.findParentUidByFlag is DEPRECATED, use wwLib.findParentUidByFlag instead');
        return wwLib.wwEditor.findParentUidByFlag(...args);
    },

    /**
     * @PUBLIC_API
     * @EDITOR
     * @DEPRECATED wwLib.wwEditor.selectParentByFlag
     */
    selectParentByFlag(...args) {
        wwLib.wwLog.warn('wwLib.wwEditor.selectParentByFlag is DEPRECATED, use wwLib.selectParentByFlag instead');
        return wwLib.wwEditor.selectParentByFlag(...args);
    },

    /**
     * @PUBLIC_API
     * @DEPRECATED wwLib.wwElement.useCreate
     */
    useCreateElement() {
        wwLib.wwLog.warn('wwLib.useCreateElement is DEPRECATED, use wwLib.wwElement.useCreate instead');
        return this.wwElement.useCreate();
    },

    /**
     * @PUBLIC_API
     * @DEPRECATED wwLib.wwElement.useLayoutStyle
     */
    useLayoutStyle() {
        wwLib.wwLog.warn('wwLib.useLayoutStyle is DEPRECATED, use wwLib.wwElement.useLayoutStyle instead');
        return wwLib.wwElement.useLayoutStyle();
    },

    /**
     * @PUBLIC_API
     */
    useIcons() {
        const store = useIconsStore();
        return {
            getIcon: store.getIcon,
        };
    },
};

function pageSanitizer(page) {
    const keysToInclude = [
        'id',
        'name',
        'folder',
        'metaImage',
        'pageLoaded',
        'paths',
        'langs',
        'meta',
        'title',
        'sections',
        'pageUserGroups',
    ];

    const _page = {};
    keysToInclude.forEach(key => {
        _page[key] = page[key];
    });

    _page.meta && delete _page.meta.__typename;
    for (const section of _page.sections || []) {
        delete section.__typename;
    }

    const lang = wwLib.$store.getters['front/getLang'];
    if (_page.paths) _page.path = _page.paths[lang] || _page.paths.default;
    else _page.path = null;

    _page.lang = lang;

    return _page;
}
