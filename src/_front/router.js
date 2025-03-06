import { createRouter, createWebHistory } from 'vue-router';

import wwPage from './views/wwPage.vue';

import { initializeData, initializePlugins, onPageUnload } from '@/_common/helpers/data';

let router;
const routes = [];

function scrollBehavior(to) {
    if (to.hash) {
        return {
            el: to.hash,
            behavior: 'smooth',
        };
    } else {
        return { top: 0 };
    }
}

 
/* wwFront:start */
import pluginsSettings from '../../plugins-settings.json';

// eslint-disable-next-line no-undef
window.wwg_designInfo = {"id":"b7dbc394-55f6-4b91-8022-c91ff42d1223","homePageId":"2ce1609f-53d6-4aee-9d1d-3a2f9cc2fc0f","authPluginId":"f5856798-485d-47be-b433-d43d771c64e1","baseTag":null,"defaultTheme":"light","langs":[{"lang":"en","default":true}],"background":{},"workflows":[{"id":"7654f990-d101-400e-9496-9840818cdba0","name":"On All Page Loads","actions":{},"trigger":"onload"}],"pages":[{"id":"94f6d362-20e2-4768-aa94-47f2cdc869bb","linkId":"94f6d362-20e2-4768-aa94-47f2cdc869bb","name":"BotShowCase","folder":"Public/","paths":{"en":"d/{{param|jeevika-hospital}}","default":"d/{{param|jeevika-hospital}}"},"langs":["en"],"cmsDataSetPath":null,"sections":[{"uid":"abe8f7b0-be78-462d-966d-cefb871bbb6e","sectionTitle":"Body","linkId":"9e30d9d8-981a-405d-b80c-bdc198b726bb"},{"uid":"d9464ec9-96c0-4748-8ea3-f3bf4c3570ba","sectionTitle":"chatModal","linkId":"d5eff0d7-3f7d-4ee9-900c-c3e6b7368f45"},{"uid":"5ccd1ddb-a5ce-4414-8172-5ea0f53bfc61","sectionTitle":"Sticky Banner","linkId":"bb5c61e5-3a88-4288-9ec4-81e0be0c8094"}],"pageUserGroups":[],"title":{"en":"Google Demo"},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""},{"id":"1a1d1053-6e87-46c3-8ba6-d905c172f5dd","linkId":"1a1d1053-6e87-46c3-8ba6-d905c172f5dd","name":"Leaderboard","folder":"App Pages/","paths":{"en":"leaderboard","default":"leaderboard"},"langs":["en"],"cmsDataSetPath":null,"sections":[{"uid":"4e7b726d-c019-4d1b-b445-b6dc8c88a400","sectionTitle":"Sidemenu","linkId":"60e1581e-2cd1-4253-b90a-10887834383c"},{"uid":"65f7e692-8ce9-490e-abf4-216ae0e0586a","sectionTitle":"Header","linkId":"f3b431a9-d5be-4522-a14f-ed81e619a727"},{"uid":"f0e9aa9e-b307-4b0c-9d1e-7872a9f442db","sectionTitle":"Body","linkId":"1c68ca4a-157b-45ca-b056-257945456212"}],"pageUserGroups":[{}],"title":{"en":"Settings | 1 Minute Rule","fr":"Vide | Commencer à partir de zéro"},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""},{"id":"49e1c2f5-fda1-4ad1-93d9-8c305d3d0c2c","linkId":"49e1c2f5-fda1-4ad1-93d9-8c305d3d0c2c","name":"Trial","folder":"Course Pages/","paths":{"en":"trial","default":"trial"},"langs":["en"],"cmsDataSetPath":null,"sections":[{"uid":"4e7b726d-c019-4d1b-b445-b6dc8c88a400","sectionTitle":"Sidemenu","linkId":"60e1581e-2cd1-4253-b90a-10887834383c"},{"uid":"19f7a5bc-262d-47e0-8791-2133d7af26db","sectionTitle":"Trail Banner","linkId":"d15932f5-0f94-449e-b647-11f8ad28b581"},{"uid":"a96c4088-437e-476c-a2e2-c10c8d8e833a","sectionTitle":"Content","linkId":"54f14954-8d67-4d98-9386-e052a3d0c476"}],"pageUserGroups":[{}],"title":{"en":"Start Here | Quick Responder AI","fr":"Vide | Commencer à partir de zéro"},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""},{"id":"b2494a2c-1819-481a-9782-cd3b10b5cf20","linkId":"b2494a2c-1819-481a-9782-cd3b10b5cf20","name":"Student Accounts","folder":"Admin Pages/","paths":{"en":"student-accounts","default":"student-accounts"},"langs":["en"],"cmsDataSetPath":null,"sections":[{"uid":"65f7e692-8ce9-490e-abf4-216ae0e0586a","sectionTitle":"Header","linkId":"f3b431a9-d5be-4522-a14f-ed81e619a727"},{"uid":"4e7b726d-c019-4d1b-b445-b6dc8c88a400","sectionTitle":"Sidemenu","linkId":"60e1581e-2cd1-4253-b90a-10887834383c"},{"uid":"d3b84a39-83f3-4caa-88c6-beb497b8d8ac","sectionTitle":"Connect To GHL Modal","linkId":"e44eaf13-0413-441b-b568-9d94ccb6c73f"},{"uid":"3bd55f6d-eaff-400f-9b0a-5ac0d2e18478","sectionTitle":"Connect GHL Calendar Modal","linkId":"9f4dd7bc-d588-492e-ae18-e388fb5ee47d"},{"uid":"34e820b4-e9ba-4b27-887e-2c9d23a65bf5","sectionTitle":"Search Bar","linkId":"b5a387e5-db18-4c43-97e9-d3dc8b1e6384"},{"uid":"6875bbe0-72a9-4c48-a48d-d9318c8d1b85","sectionTitle":"Locations Showcase","linkId":"9225fc8d-bf29-4861-91c9-acecea5783a3"}],"pageUserGroups":[{}],"title":{"en":"Student Accounts | 1 Minute Rule"},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""},{"id":"fa1b3045-0550-45f0-9f73-d86f2ecd40b5","linkId":"fa1b3045-0550-45f0-9f73-d86f2ecd40b5","name":"DM & Email Generator","folder":"App Pages/","paths":{"en":"dm-and-email-generator","default":"dm-and-email-generator"},"langs":["en"],"cmsDataSetPath":null,"sections":[{"uid":"19f7a5bc-262d-47e0-8791-2133d7af26db","sectionTitle":"Trail Banner","linkId":"d15932f5-0f94-449e-b647-11f8ad28b581"},{"uid":"4e7b726d-c019-4d1b-b445-b6dc8c88a400","sectionTitle":"Sidemenu","linkId":"60e1581e-2cd1-4253-b90a-10887834383c"},{"uid":"65f7e692-8ce9-490e-abf4-216ae0e0586a","sectionTitle":"Header","linkId":"f3b431a9-d5be-4522-a14f-ed81e619a727"},{"uid":"b691bad9-15ea-4bb7-96b3-d029f5faf2f9","sectionTitle":"Content","linkId":"229cd28a-44cf-4dc4-a864-781b587eb340"},{"uid":"aadaf3d0-b91a-407d-a05f-1f7e1ca9cbdf","sectionTitle":"Creating DMs","linkId":"8019aeae-f7b0-4c63-90dd-125f23e4b627"},{"uid":"8dcec3b7-4e2e-4e02-bb63-858bad348bde","sectionTitle":"Open AI Api Key Not Set","linkId":"55a56b48-4a20-4e60-9b36-9c85247bc35a"}],"pageUserGroups":[{}],"title":{"en":"DM & Email Generator | 1 Minute Rule","fr":"Vide | Commencer à partir de zéro"},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""},{"id":"7fef46d4-636a-416a-b6e6-cbd78f16236b","linkId":"7fef46d4-636a-416a-b6e6-cbd78f16236b","name":"qr-crm-iframe","folder":"GHL/","paths":{"en":"qr-crm-iframe/{{locationid|it0jQ8kA4S0HNO7b5ycK}}","default":"qr-crm-iframe/{{locationid|it0jQ8kA4S0HNO7b5ycK}}"},"langs":["en"],"cmsDataSetPath":null,"sections":[{"uid":"b7019492-87bb-4e57-801c-cfbed86268d8","sectionTitle":"Body","linkId":"9397b76a-6e97-409c-9591-c415c1777405"},{"uid":"f25ff0b1-3ce6-42e6-9beb-be744fb5ac89","sectionTitle":"Generating Insturctions Modal","linkId":"f07b2b0c-094b-45af-bb89-42c6fa00f41d"},{"uid":"6d1c6104-7c78-46e4-a806-94ebadae221e","sectionTitle":"Creating Asistant","linkId":"0002828f-3099-4f0f-a4d6-7c46ccb1d33f"}],"pageUserGroups":[{}],"title":{"en":"CRM iFrame | 1 Minute Rule"},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""},{"id":"2145295c-0d9f-4f5d-b2c1-a32cb441782d","linkId":"27ff27eb-a90d-49c6-a5c2-199eab430822","name":"Settings","folder":"App Pages/","paths":{"en":"settings","default":"settings"},"langs":["en"],"cmsDataSetPath":null,"sections":[{"uid":"19f7a5bc-262d-47e0-8791-2133d7af26db","sectionTitle":"Trail Banner","linkId":"d15932f5-0f94-449e-b647-11f8ad28b581"},{"uid":"4e7b726d-c019-4d1b-b445-b6dc8c88a400","sectionTitle":"Sidemenu","linkId":"60e1581e-2cd1-4253-b90a-10887834383c"},{"uid":"65f7e692-8ce9-490e-abf4-216ae0e0586a","sectionTitle":"Header","linkId":"f3b431a9-d5be-4522-a14f-ed81e619a727"},{"uid":"561ec5ac-1b7f-4c64-b58f-b3682e75d385","sectionTitle":"Content","linkId":"da50435c-594c-4c49-9959-baa9f60af409"}],"pageUserGroups":[{}],"title":{"en":"Settings | 1 Minute Rule","fr":"Vide | Commencer à partir de zéro"},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""},{"id":"ba53c09c-c676-4fba-a535-e418cc427466","linkId":"ba53c09c-c676-4fba-a535-e418cc427466","name":"Usage Agreement","folder":"App Pages/","paths":{"en":"usage-agreement","default":"usage-agreement"},"langs":["en"],"cmsDataSetPath":null,"sections":[{"uid":"f15ce7ff-5232-4903-8743-dab0e437b562","sectionTitle":"Sidemenu","linkId":"d69d9f9e-104d-4780-99ef-160909abb28b"},{"uid":"2bcc11c8-4fb6-495c-80c8-106cd7f9aba6","sectionTitle":"Header","linkId":"712accb4-907b-4a2c-b517-3c953b389693"},{"uid":"82f30ebf-2eb7-48cf-a043-79bd0b391763","sectionTitle":"Body","linkId":"1151ded6-7f90-4788-a4c2-37783a14ec5a"},{"uid":"c399c068-bc83-44fe-b59a-27f7feea112b","sectionTitle":"Creating Asistant","linkId":"bad54a08-03ab-4747-b825-82ff381d43c8"}],"pageUserGroups":[{}],"title":{"en":"Settings | 1 Minute Rule","fr":"Vide | Commencer à partir de zéro"},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""},{"id":"fce2f30e-dd91-4310-bbd7-81c261002f82","linkId":"fce2f30e-dd91-4310-bbd7-81c261002f82","name":"Niche Calculator","folder":"App Pages/","paths":{"en":"niche-calculator","default":"niche-calculator"},"langs":["en"],"cmsDataSetPath":null,"sections":[{"uid":"4e7b726d-c019-4d1b-b445-b6dc8c88a400","sectionTitle":"Sidemenu","linkId":"60e1581e-2cd1-4253-b90a-10887834383c"},{"uid":"112f7ef0-47b2-4b52-9627-c4758838c183","sectionTitle":"Header","linkId":"ea3c7007-dc8c-436b-a44c-e1bcbcebdc38"},{"uid":"87626946-b402-425b-9b32-21b78a1f4762","sectionTitle":"Content","linkId":"eb6e91fa-4c94-4c76-a25c-918fcd3d75a1"}],"pageUserGroups":[{}],"title":{"en":"Niche Calculator | 1 Minute Rule","fr":"Vide | Commencer à partir de zéro"},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""},{"id":"401aaa43-4554-48a1-af67-8b406a90cdcd","linkId":"d03f87ed-c31d-419b-9b31-9078cf2fbbb7","name":"Users","folder":"Admin Pages/","paths":{"en":"users","default":"users"},"langs":["en"],"cmsDataSetPath":null,"sections":[{"uid":"65f7e692-8ce9-490e-abf4-216ae0e0586a","sectionTitle":"Header","linkId":"f3b431a9-d5be-4522-a14f-ed81e619a727"},{"uid":"4e7b726d-c019-4d1b-b445-b6dc8c88a400","sectionTitle":"Sidemenu","linkId":"60e1581e-2cd1-4253-b90a-10887834383c"},{"uid":"e36b9356-2003-4893-9aa2-1bf35f3e8509","sectionTitle":"Content","linkId":"6271a9ca-81dc-4105-8a94-44087979973f"},{"uid":"f5503bfc-f87a-4170-9eda-bf66ac53d705","sectionTitle":"Modal","linkId":"b473a8bc-ea8b-47bf-9895-8fb6f79c5164"}],"pageUserGroups":[{}],"title":{"en":"Users | 1 Minute Rule"},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""},{"id":"a2763a0e-c09d-444f-9b92-a1cf60819eed","linkId":"a2763a0e-c09d-444f-9b92-a1cf60819eed","name":"Add Location Manually","folder":"App Pages/","paths":{"en":"add-location-manually","default":"add-location-manually"},"langs":["en"],"cmsDataSetPath":null,"sections":[{"uid":"65f7e692-8ce9-490e-abf4-216ae0e0586a","sectionTitle":"Header","linkId":"f3b431a9-d5be-4522-a14f-ed81e619a727"},{"uid":"4e7b726d-c019-4d1b-b445-b6dc8c88a400","sectionTitle":"Sidemenu","linkId":"60e1581e-2cd1-4253-b90a-10887834383c"},{"uid":"d1456af5-a836-4a88-9bfb-80bdb8d5efb2","sectionTitle":"Body","linkId":"d67d51ee-def0-4493-9087-712d2613bb39"},{"uid":"c2b9581c-dcd1-4f4a-abc5-735b56f61102","sectionTitle":"Generating Insturctions Modal","linkId":"208e5508-a96a-4e83-b227-e30c3e873247"},{"uid":"86346e45-73f8-4516-b5fe-87ce0484c6d7","sectionTitle":"Creating Asistant","linkId":"3d62c566-fc75-43fc-b82f-49f6fc097073"}],"pageUserGroups":[{}],"title":{"en":"Add Locations Manual | 1 Minute Rule App"},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""},{"id":"08850f7a-8998-4775-8b85-42b7e94e3e1d","linkId":"08850f7a-8998-4775-8b85-42b7e94e3e1d","name":"Quick Leads","folder":"App Pages/","paths":{"en":"quick-leads","default":"quick-leads"},"langs":["en"],"cmsDataSetPath":null,"sections":[{"uid":"19f7a5bc-262d-47e0-8791-2133d7af26db","sectionTitle":"Trail Banner","linkId":"d15932f5-0f94-449e-b647-11f8ad28b581"},{"uid":"4e7b726d-c019-4d1b-b445-b6dc8c88a400","sectionTitle":"Sidemenu","linkId":"60e1581e-2cd1-4253-b90a-10887834383c"},{"uid":"65f7e692-8ce9-490e-abf4-216ae0e0586a","sectionTitle":"Header","linkId":"f3b431a9-d5be-4522-a14f-ed81e619a727"},{"uid":"87eeac74-0987-4df1-9954-0eaa1afd0077","sectionTitle":"Content","linkId":"351d7f66-d2f7-4321-9efa-e7db26106f82"},{"uid":"46cd33a5-67fd-4eda-8ab6-0783b4229d00","sectionTitle":"Modal","linkId":"4f130553-1fef-4b2d-9264-c46820652035"},{"uid":"d1e3a85f-ead5-46a5-a579-1f214f224fbd","sectionTitle":"Open AI Api Key Not Set","linkId":"cb441fc2-8f67-47e4-a1d4-0ff709d7e1d3"}],"pageUserGroups":[{}],"title":{"en":"Quick Leads | 1 Minute Rule","fr":"Vide | Commencer à partir de zéro"},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""},{"id":"2ce1609f-53d6-4aee-9d1d-3a2f9cc2fc0f","linkId":"d28e398b-412c-4d9f-b64f-136a3ad167d3","name":"Log in","folder":"Auth/","paths":{"en":"log_in","default":"log_in"},"langs":["en"],"cmsDataSetPath":null,"sections":[{"uid":"f84612a0-8109-422e-b9cf-8bfbd530f243","sectionTitle":"Sign in","linkId":"6e6c6034-7a03-4d90-b22a-07965a537932"}],"pageUserGroups":[],"title":{"en":"Login | 1 Minute Rule"},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""},{"id":"d55a3dfa-2d33-476a-a007-7d04154623b3","linkId":"d55a3dfa-2d33-476a-a007-7d04154623b3","name":"Add Locations","folder":"App Pages/","paths":{"en":"add_locations/{{ggl_place_id|0}}","default":"add_locations/{{ggl_place_id|0}}"},"langs":["en"],"cmsDataSetPath":null,"sections":[{"uid":"19f7a5bc-262d-47e0-8791-2133d7af26db","sectionTitle":"Trail Banner","linkId":"d15932f5-0f94-449e-b647-11f8ad28b581"},{"uid":"65f7e692-8ce9-490e-abf4-216ae0e0586a","sectionTitle":"Header","linkId":"f3b431a9-d5be-4522-a14f-ed81e619a727"},{"uid":"4e7b726d-c019-4d1b-b445-b6dc8c88a400","sectionTitle":"Sidemenu","linkId":"60e1581e-2cd1-4253-b90a-10887834383c"},{"uid":"c6dc26a2-38c9-46cd-95fe-1067884c088e","sectionTitle":"Body","linkId":"8ee4772c-2b3d-4fad-857b-859652b10f1f"},{"uid":"285bb7ca-6242-4044-bb7b-15757fd94028","sectionTitle":"Error","linkId":"f608ab90-c547-4b16-905a-152b630f1219"},{"uid":"30ecc485-f063-4095-920b-d7d7013dddd6","sectionTitle":"Loading","linkId":"57111977-1bf9-4aee-8f3b-0db1e5e59112"},{"uid":"9c749143-c0de-4176-a354-4c0148e18e7b","sectionTitle":"Generating Insturctions Modal","linkId":"94aaef7d-2508-4f92-be0c-ce6ef1f34262"},{"uid":"e14a5626-f401-4d41-aa3e-4b4637c1d56c","sectionTitle":"Creating Asistant","linkId":"7c008add-e9ca-458c-9016-8a9da9f26351"}],"pageUserGroups":[{}],"title":{"en":"Add Locations | 1 Minute Rule App"},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""},{"id":"95c3a392-2746-43dd-94c3-ff65f645f5ca","linkId":"95c3a392-2746-43dd-94c3-ff65f645f5ca","name":"Self Service Step2","folder":"Public/","paths":{"en":"get-your-bot-step-2/{{ggl_place_id|0}}/{{user_id_local|1}}","default":"get-your-bot-step-2/{{ggl_place_id|0}}/{{user_id_local|1}}"},"langs":["en"],"cmsDataSetPath":null,"sections":[{"uid":"cdc5253d-312a-471b-9236-3a5f2ef7915b","sectionTitle":"Body","linkId":"e9b477c9-12ac-47d1-9d72-bba77f975f8d"},{"uid":"dca0a0a1-5355-40f5-b507-1ae7b167479c","sectionTitle":"Modal","linkId":"dfebf791-7e19-47d7-8d62-721d8b16d618"}],"pageUserGroups":[],"title":{"en":"Self"},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""},{"id":"cb5cb7e8-58a2-4df2-854f-818ccc75e20f","linkId":"cb5cb7e8-58a2-4df2-854f-818ccc75e20f","name":"GHL LOCATION ACCESS","folder":"App Pages/","paths":{"en":"location-access/{{locationid|Xw85vpHOSUe4uyx99oGy}}","default":"location-access/{{locationid|Xw85vpHOSUe4uyx99oGy}}"},"langs":["en"],"cmsDataSetPath":null,"sections":[{"uid":"0461912e-1190-441e-9be3-c12fe95075da","sectionTitle":"Body","linkId":"56ad1139-62b1-4dd0-8953-4eac08e252d6"},{"uid":"315fa875-22e7-4b4d-b12d-224e28edc53a","sectionTitle":"Generating Insturctions Modal","linkId":"9b26ed1e-5e70-4807-8866-c5c349cc683a"},{"uid":"1b217aa7-1994-4f2b-b25f-c2c8b42cb7b1","sectionTitle":"Creating Asistant","linkId":"1201a46a-9216-4bcf-b327-e9e68707d692"}],"pageUserGroups":[],"title":{"en":"Edit Location | 1 Minute Rule"},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""},{"id":"ef9253da-1173-4cd2-bcc6-ea70d5d63cb1","linkId":"ef9253da-1173-4cd2-bcc6-ea70d5d63cb1","name":"Edit Google Location","folder":"App Pages/","paths":{"en":"edit_locations/{{location_id_local|0}}","default":"edit_locations/{{location_id_local|0}}"},"langs":["en"],"cmsDataSetPath":null,"sections":[{"uid":"19f7a5bc-262d-47e0-8791-2133d7af26db","sectionTitle":"Trail Banner","linkId":"d15932f5-0f94-449e-b647-11f8ad28b581"},{"uid":"65f7e692-8ce9-490e-abf4-216ae0e0586a","sectionTitle":"Header","linkId":"f3b431a9-d5be-4522-a14f-ed81e619a727"},{"uid":"4e7b726d-c019-4d1b-b445-b6dc8c88a400","sectionTitle":"Sidemenu","linkId":"60e1581e-2cd1-4253-b90a-10887834383c"},{"uid":"95b5c3b3-c598-466a-9354-949c3e42eb02","sectionTitle":"Body","linkId":"98249c8f-5551-4c77-b3db-381abb488c95"},{"uid":"0f8d58f4-5853-447c-b2fb-e5910b2b0bb2","sectionTitle":"Generating Insturctions Modal","linkId":"8739b8fe-cc53-47df-9102-f91f0c03ef8c"},{"uid":"baf72d5c-a0bf-4a9d-ab7d-5aea15bfd5ea","sectionTitle":"Creating Asistant","linkId":"032c2ef0-df68-403c-b4a4-37bc4eed0b23"}],"pageUserGroups":[{}],"title":{"en":"Edit Location | 1 Minute Rule"},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""},{"id":"0e6962a1-14e7-47e9-863f-d5c91ac6ccc6","linkId":"8e106f57-c664-4b2a-90e5-97bfc461d9d2","name":"Dashboard","folder":"App Pages/","paths":{"en":"home","default":"home"},"langs":["en"],"cmsDataSetPath":null,"sections":[{"uid":"4e7b726d-c019-4d1b-b445-b6dc8c88a400","sectionTitle":"Sidemenu","linkId":"60e1581e-2cd1-4253-b90a-10887834383c"},{"uid":"19f7a5bc-262d-47e0-8791-2133d7af26db","sectionTitle":"Trail Banner","linkId":"d15932f5-0f94-449e-b647-11f8ad28b581"},{"uid":"65f7e692-8ce9-490e-abf4-216ae0e0586a","sectionTitle":"Header","linkId":"f3b431a9-d5be-4522-a14f-ed81e619a727"},{"uid":"757c5818-fa62-44c6-b504-f656b6e620a4","sectionTitle":"Loading","linkId":"d48ad022-bbbc-4c11-b27d-8c98e5f4c364"},{"uid":"7ea0d71e-4dd0-4da5-b369-2383f54fcfed","sectionTitle":"Content","linkId":"f68cb9f6-bdea-4e51-a290-ebd9adb35696"}],"pageUserGroups":[{}],"title":{"en":"Dashboard | 1 Minute Rule","fr":"Vide | Commencer à partir de zéro"},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""},{"id":"bc656ce5-6877-4bd5-94fc-5823d77db079","linkId":"bc656ce5-6877-4bd5-94fc-5823d77db079","name":"Chat Bot Page Customizer","folder":"App Pages/","paths":{"en":"prospecting-tools","default":"prospecting-tools"},"langs":["en"],"cmsDataSetPath":null,"sections":[{"uid":"19f7a5bc-262d-47e0-8791-2133d7af26db","sectionTitle":"Trail Banner","linkId":"d15932f5-0f94-449e-b647-11f8ad28b581"},{"uid":"4e7b726d-c019-4d1b-b445-b6dc8c88a400","sectionTitle":"Sidemenu","linkId":"60e1581e-2cd1-4253-b90a-10887834383c"},{"uid":"65f7e692-8ce9-490e-abf4-216ae0e0586a","sectionTitle":"Header","linkId":"f3b431a9-d5be-4522-a14f-ed81e619a727"},{"uid":"c2144d5a-078b-49db-a799-2d029876b431","sectionTitle":"Body","linkId":"3d8d25c2-c92e-457b-9c5a-9cd0544936c6"},{"uid":"246efd54-7a59-4c07-9478-1193cfe72941","sectionTitle":"Creating Asistant","linkId":"c7ebed5e-8ce2-4929-9e92-7b43f3e18c57"},{"uid":"6697c511-eafa-46c1-9a71-ebd0a95ec043","sectionTitle":"Body","linkId":"2ab221ec-3be1-4608-8e8c-d10afb8f16df"},{"uid":"a3fa8a00-a6ce-47e4-8e2a-4aa9bc7bde0c","sectionTitle":"HelpVideoModal","linkId":"4af27a76-cb78-47f9-9966-5da0e16053b0"},{"uid":"96140299-c013-4238-aaca-4b561ef23cc3","sectionTitle":"Open AI Api Key Not Set","linkId":"e5b25394-8b16-45f4-b08b-069cff5883fe"}],"pageUserGroups":[{}],"title":{"en":"Chatbot Page Customizer | 1 Minute Rule","fr":"Vide | Commencer à partir de zéro"},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""},{"id":"ef7d398d-c228-4505-aab6-a9f3dab8d197","linkId":"ef7d398d-c228-4505-aab6-a9f3dab8d197","name":"Sign Up","folder":"Auth/","paths":{"en":"signup","default":"signup"},"langs":["en"],"cmsDataSetPath":null,"sections":[{"uid":"b89621f3-8bae-4f35-a9f1-703071d091c9","sectionTitle":"Sign in","linkId":"ed378405-6735-4989-9b07-4f13183dabac"}],"pageUserGroups":[],"title":{"en":"Signup | 1 Minute Rule"},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""},{"id":"8f091e35-363c-4c2b-9837-60b13c7f92d3","linkId":"8f091e35-363c-4c2b-9837-60b13c7f92d3","name":"Cashback Offer","folder":"App Pages/","paths":{"en":"cashback","default":"cashback"},"langs":["en"],"cmsDataSetPath":null,"sections":[{"uid":"4e7b726d-c019-4d1b-b445-b6dc8c88a400","sectionTitle":"Sidemenu","linkId":"60e1581e-2cd1-4253-b90a-10887834383c"},{"uid":"429a0103-70d3-4ad7-87cd-2d044955a4bd","sectionTitle":"Content","linkId":"ef77d9ca-9b01-45e7-ba4a-8a8b9d79ce75"}],"pageUserGroups":[{}],"title":{"en":"$20 Cashback | 1 Minute Rule App","fr":"Vide | Commencer à partir de zéro"},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""},{"id":"c740a11b-1f74-4c10-ac2d-3a14371b6260","linkId":"c740a11b-1f74-4c10-ac2d-3a14371b6260","name":"Get Started Here","folder":"Course Pages/","paths":{"en":"get-started","default":"get-started"},"langs":["en"],"cmsDataSetPath":null,"sections":[{"uid":"4e7b726d-c019-4d1b-b445-b6dc8c88a400","sectionTitle":"Sidemenu","linkId":"60e1581e-2cd1-4253-b90a-10887834383c"},{"uid":"f368873b-fb2a-4883-98ae-6f343c8df5ff","sectionTitle":"Content","linkId":"92d65c60-159c-423c-9f25-134eae3b325a"}],"pageUserGroups":[{}],"title":{"en":"Start Here | 1 Minute Rule","fr":"Vide | Commencer à partir de zéro"},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""},{"id":"ccecd1a4-30d8-4e96-a262-386f14dbe1ea","linkId":"ccecd1a4-30d8-4e96-a262-386f14dbe1ea","name":"Whitelabel Settings","folder":"App Pages/","paths":{"en":"whitelabel","default":"whitelabel"},"langs":["en"],"cmsDataSetPath":null,"sections":[{"uid":"4e7b726d-c019-4d1b-b445-b6dc8c88a400","sectionTitle":"Sidemenu","linkId":"60e1581e-2cd1-4253-b90a-10887834383c"},{"uid":"65f7e692-8ce9-490e-abf4-216ae0e0586a","sectionTitle":"Header","linkId":"f3b431a9-d5be-4522-a14f-ed81e619a727"},{"uid":"a50583bd-2ff1-4d9b-9733-f07528eb8a07","sectionTitle":"Body","linkId":"285d5bfe-f72e-42e2-92ed-ef8950a15986"},{"uid":"1c6b8325-0d1f-4f44-8430-74c9177e0d1b","sectionTitle":"Progress Modal","linkId":"312cf8a1-175c-4b65-a382-647d0fa3791e"},{"uid":"d7430f00-16ca-4277-9a38-fefe72780fc2","sectionTitle":"Body","linkId":"c187c592-63fc-4d26-8fc7-c5ec516237f1"}],"pageUserGroups":[{}],"title":{"en":"Whitelabel | 1 Minute Rule","fr":"Vide | Commencer à partir de zéro"},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""},{"id":"3376ac29-fb94-4128-ae3b-d387f7f9e87f","linkId":"3376ac29-fb94-4128-ae3b-d387f7f9e87f","name":"Sources","folder":"App Pages/","paths":{"en":"sources","default":"sources"},"langs":["en"],"cmsDataSetPath":null,"sections":[{"uid":"65f7e692-8ce9-490e-abf4-216ae0e0586a","sectionTitle":"Header","linkId":"f3b431a9-d5be-4522-a14f-ed81e619a727"},{"uid":"4e7b726d-c019-4d1b-b445-b6dc8c88a400","sectionTitle":"Sidemenu","linkId":"60e1581e-2cd1-4253-b90a-10887834383c"},{"uid":"ff5ede6d-0ddc-459f-96d8-98f3c62c63bb","sectionTitle":"Search Bar","linkId":"61410a14-d528-4a7c-a328-fb8784e6f9aa"},{"uid":"59f9c69e-e2c5-4cb8-afbe-90964f013b08","sectionTitle":"List Of Agencies","linkId":"2d975fcd-8f5d-4caf-b894-532a374da94f"},{"uid":"8428fc2f-9043-422b-8e7d-84582451c526","sectionTitle":"Modal","linkId":"9c984891-a906-4fb4-9530-e7749a394bb4"},{"uid":"a9b47811-670b-4df3-a9f7-81ba2916fbc2","sectionTitle":"Connect To QR-CRM","linkId":"47a3d208-83e0-439b-84ae-522c5b43120e"}],"pageUserGroups":[{}],"title":{"en":"Sources | 1 Minute Rule"},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""},{"id":"0b42f65d-ae94-4c63-8336-70bb2dd9db8a","linkId":"0b42f65d-ae94-4c63-8336-70bb2dd9db8a","name":"Self Service","folder":"Public/","paths":{"en":"get-your-bot/{{user_id_local|1}}","default":"get-your-bot/{{user_id_local|1}}"},"langs":["en"],"cmsDataSetPath":null,"sections":[{"uid":"3db78771-5b7b-43df-99f4-2119bf358b3b","sectionTitle":"Body","linkId":"80f21eaf-b00e-4965-a206-1e992e847d8c"},{"uid":"b3188298-7994-49e8-94ae-61608ff7a6a4","sectionTitle":"Locations Search","linkId":"a3602dda-88e3-4bf1-a83f-b51559ca60fd"}],"pageUserGroups":[],"title":{"en":"Self"},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""},{"id":"cb87178e-8069-4d6f-9521-1759ff24077e","linkId":"cb87178e-8069-4d6f-9521-1759ff24077e","name":"Get Started Here (copy)","folder":"Course Pages/","paths":{"en":"get-started-copy","default":"get-started-copy"},"langs":["en"],"cmsDataSetPath":null,"sections":[{"uid":"4e7b726d-c019-4d1b-b445-b6dc8c88a400","sectionTitle":"Sidemenu","linkId":"60e1581e-2cd1-4253-b90a-10887834383c"},{"uid":"342cdb33-ad2d-4684-8537-44d6215816be","sectionTitle":"Content","linkId":"b85f1163-bf78-494d-afd2-fc56a96c497d"}],"pageUserGroups":[{}],"title":{"en":"Start Here | 1 Minute Rule","fr":"Vide | Commencer à partir de zéro"},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""},{"id":"0baf0588-380d-4064-9797-c6d359af9fa9","linkId":"0baf0588-380d-4064-9797-c6d359af9fa9","name":"Expired","folder":"App Pages/","paths":{"en":"expired","default":"expired"},"langs":["en"],"cmsDataSetPath":null,"sections":[{"uid":"2c306381-548f-4fb2-9a4c-769dbda3a022","sectionTitle":"Sidemenu","linkId":"16df57d3-3f02-49cf-afd6-d07842bb3f75"},{"uid":"0f8dd6be-cc0f-4d22-8182-7ad1d7834cc4","sectionTitle":"Header","linkId":"791f3c01-0652-4ea4-b2d1-d06c7f5c76af"},{"uid":"0a213e86-c651-4d06-8e80-fe784c7f05f0","sectionTitle":"Body","linkId":"60a78a09-3916-40f2-b433-422371fa73c3"},{"uid":"f389b083-621b-4f64-920c-f3fa16057049","sectionTitle":"Creating Asistant","linkId":"f319ad35-2f1b-47d0-bd22-503796404ecf"}],"pageUserGroups":[{}],"title":{"en":"Plan Expired | 1 Minute Rule","fr":"Vide | Commencer à partir de zéro"},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""},{"id":"a559d5c2-7b0c-4343-82f8-f700da243b5a","linkId":"a559d5c2-7b0c-4343-82f8-f700da243b5a","name":"QR-CRM","folder":"App Pages/","paths":{"en":"qr-crm","default":"qr-crm"},"langs":["en"],"cmsDataSetPath":null,"sections":[{"uid":"65f7e692-8ce9-490e-abf4-216ae0e0586a","sectionTitle":"Header","linkId":"f3b431a9-d5be-4522-a14f-ed81e619a727"},{"uid":"4e7b726d-c019-4d1b-b445-b6dc8c88a400","sectionTitle":"Sidemenu","linkId":"60e1581e-2cd1-4253-b90a-10887834383c"},{"uid":"187adc60-ecce-44cb-9343-a3ad35000a19","sectionTitle":"QR CRM SECTION","linkId":"d9e6ddfa-312a-443e-ab26-a9131c32bc1a"},{"uid":"b321d806-3f1f-46c7-b88a-cbd3b28ef584","sectionTitle":"Modal","linkId":"f693d6b9-2e83-4452-bdd2-ba347218c17f"},{"uid":"447f74ef-30ca-49c8-b31b-028414e648b3","sectionTitle":"Connect To QR-CRM","linkId":"fb1d770b-1340-4a8d-98bf-26a96c982abf"}],"pageUserGroups":[{}],"title":{"en":"CRM | 1 Minute Rule"},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""},{"id":"b2088d56-1fd3-4962-8021-c1f37d699146","linkId":"782309c0-b86e-4fef-af68-c81bc89d4e89","name":"Create / View AI Bots","folder":"App Pages/","paths":{"en":"locations","default":"locations"},"langs":["en"],"cmsDataSetPath":null,"sections":[{"uid":"19f7a5bc-262d-47e0-8791-2133d7af26db","sectionTitle":"Trail Banner","linkId":"d15932f5-0f94-449e-b647-11f8ad28b581"},{"uid":"65f7e692-8ce9-490e-abf4-216ae0e0586a","sectionTitle":"Header","linkId":"f3b431a9-d5be-4522-a14f-ed81e619a727"},{"uid":"a66502fc-65d8-4b2c-98ff-d42e7a45ae7b","sectionTitle":"Edit Website Screenshot Modal","linkId":"46d1a4cd-f6d2-4851-a119-d600ac63ea53"},{"uid":"fe22b346-72fc-4690-b412-2c4c607492d8","sectionTitle":"Connect To GHL Modal","linkId":"82ce0636-61d2-4bd5-aecf-93ad10fc0812"},{"uid":"f8488d06-e100-4cbe-8089-86ea16886f9e","sectionTitle":"Connect GHL Calendar Modal","linkId":"dbc96e0d-039c-465f-8b34-ae11f05926f3"},{"uid":"4e7b726d-c019-4d1b-b445-b6dc8c88a400","sectionTitle":"Sidemenu","linkId":"60e1581e-2cd1-4253-b90a-10887834383c"},{"uid":"4ef3a365-6e30-414a-a349-3486532533ff","sectionTitle":"Select Search Mode Modal","linkId":"f3b2b5e4-cba6-4ff3-8897-9280e861ae7e"},{"uid":"6cc89186-b005-48f8-a74f-d73e12c24452","sectionTitle":"Open AI Api Key Not Set","linkId":"a2dae009-a352-4be6-be09-6fa337e29637"},{"uid":"53cdb8b6-01d6-4d58-b754-7e0fb0dcd626","sectionTitle":"Add Locations Modal Popup","linkId":"cfd768df-caa3-4a2a-8695-074ca22df2ce"},{"uid":"cfe54136-96f1-4b73-8ab9-91558884f06d","sectionTitle":"Generating Location Data Popup","linkId":"620985b6-587f-4ad5-88a3-0330faaea043"},{"uid":"469ef3bd-21cf-4215-87d7-4adfe3e322a8","sectionTitle":"Search Bar","linkId":"3cfdc909-abc5-4e8c-8601-af80c282b01c"},{"uid":"fcf9c4a0-cf40-407d-9273-c2f197ef280a","sectionTitle":"Locations Showcase","linkId":"ef0afadc-3d66-429a-9102-8aa70297844f"},{"uid":"9fc021be-c4b4-4dbc-b476-655acfb282e9","sectionTitle":"Section","linkId":"0ebd0f95-1fe0-4838-9d06-1aaa9da7017f"}],"pageUserGroups":[{}],"title":{"en":"Locations | 1 Minute Rule"},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""},{"id":"cf64d7f2-f4a9-417b-87a0-ff04c539c3a3","linkId":"cf64d7f2-f4a9-417b-87a0-ff04c539c3a3","name":"hl-code-resync","folder":"GHL/","paths":{"en":"hl-code-resync","default":"hl-code-resync"},"langs":["en"],"cmsDataSetPath":null,"sections":[{"uid":"e599de22-7aa4-41c4-8f9f-a971ae9d86eb","sectionTitle":"Loading Screen","linkId":"379476eb-a0f4-4301-ab88-e3aeb475f9c1"},{"uid":"1f2ec685-774e-45dd-8893-228e009aa380","sectionTitle":"Section","linkId":"1b323d83-ef84-41e6-95b1-7e54fbc0eb7b"}],"pageUserGroups":[],"title":{"en":"HL Code Resync | 1 Minute Rule"},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""},{"id":"fcccdf4a-2a83-4cb9-b82a-7fe3c32568e7","linkId":"fcccdf4a-2a83-4cb9-b82a-7fe3c32568e7","name":"VSLv2","folder":"Public/","paths":{"en":"v/{{param|adligence-llc}}","default":"v/{{param|adligence-llc}}"},"langs":["en"],"cmsDataSetPath":null,"sections":[{"uid":"a41873e3-2a6c-4003-a265-01ed539c90da","sectionTitle":"Section","linkId":"df072c81-4c90-4670-a715-49d84ee1560a"},{"uid":"786311bd-2fc8-4f18-b21a-ebe786f1d9bc","sectionTitle":"Body","linkId":"1218d2cf-952b-46b3-9884-921018a495b8"},{"uid":"899e22e4-eee7-4862-adb1-eae64a1897ba","sectionTitle":"sms-chatModal","linkId":"de795f6b-2c07-4812-83af-88f22a5ef8bf"},{"uid":"5cb6b84a-a3e8-4567-b32b-83806034ecd9","sectionTitle":"whatsapp-chatModal","linkId":"6a8aaa42-82c7-4f64-a907-0ccc52d410ab"},{"uid":"d1e82a71-f4ca-493c-bd69-9258e646370a","sectionTitle":"ig-chatModal","linkId":"6fea8b4c-4e0f-45eb-ba0b-eb463594b555"},{"uid":"5699eb97-dd00-474c-a56d-1f6a6adb1e86","sectionTitle":"fb-chatModal","linkId":"d6720adf-0faa-4706-9792-85ee97b658c7"},{"uid":"a96c1688-bbcd-49f8-858f-abb461c5dfe3","sectionTitle":"Sticky Banner","linkId":"45e0fc80-f82c-4740-ad51-f8f8fdd2b1b4"}],"pageUserGroups":[],"title":{"en":"Chatbot Demo | QRAI"},"meta":{"desc":{"en":""},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""},{"id":"5bf51cd1-0005-4370-b21d-62c1b600f536","linkId":"5bf51cd1-0005-4370-b21d-62c1b600f536","name":"VSL x1 (Old Google Chat)","folder":"Public/","paths":{"en":"vx1/{{param|jeevika-hospital}}","default":"vx1/{{param|jeevika-hospital}}"},"langs":["en"],"cmsDataSetPath":null,"sections":[{"uid":"49e8cda2-b12b-4dc8-a241-9c8b6e7ab1e0","sectionTitle":"Section","linkId":"a972ce1a-da91-45fe-9c23-d72da91aecab"},{"uid":"dde5782f-e73d-4f98-b222-1bb68e891945","sectionTitle":"Body","linkId":"b14d0082-8f11-4c9f-89af-fe30d011bcea"},{"uid":"5741b9ee-f96b-4b9b-b7a1-67702947ccd8","sectionTitle":"chatModal","linkId":"1c20fc53-1fc0-4099-82c5-582946bbb4b0"},{"uid":"42c1a93d-fc68-43ee-868c-43bddbc4c11a","sectionTitle":"Sticky Banner","linkId":"682c378c-d8c2-40d5-afde-e9e9a7b8ba60"}],"pageUserGroups":[],"title":{"en":"Custom Demo Chatbot | QRAI"},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""},{"id":"9f3cb7ee-46fc-432c-bb10-7880329bffcb","linkId":"9f3cb7ee-46fc-432c-bb10-7880329bffcb","name":"hl-code-auth","folder":"GHL/","paths":{"en":"hl-code-auth","default":"hl-code-auth"},"langs":["en"],"cmsDataSetPath":null,"sections":[{"uid":"2e77777e-fd31-4d5b-bed0-0e0b1de30381","sectionTitle":"Loading Screen","linkId":"619fc005-0e96-4dc1-8ad5-a000b2c48b1a"},{"uid":"5b73b6cb-a44f-4ce1-8ce1-24263e041d6b","sectionTitle":"Section","linkId":"412a7697-0489-43bd-9637-f7a30464d8d1"}],"pageUserGroups":[],"title":{"en":"HL Code Auth | 1 Minute Rule"},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""},{"id":"e58b3458-5e87-4ecb-895f-f3240ccdaa43","linkId":"e58b3458-5e87-4ecb-895f-f3240ccdaa43","name":"Bot Website Show Case","folder":"Public/","paths":{"en":"w/{{param|urban-doggie-spa}}","default":"w/{{param|urban-doggie-spa}}"},"langs":["en"],"cmsDataSetPath":null,"sections":[{"uid":"906d1769-cb76-42dd-8b8a-85b10ec02a9e","sectionTitle":"Loading Screen","linkId":"780b0351-a2d8-44f0-84ab-0875df43558c"},{"uid":"188f9c83-da32-4f99-b180-bbe24a654a83","sectionTitle":"Body","linkId":"90933aa2-13bc-4926-962c-118177d9ea68"},{"uid":"a2e61c53-8f36-4d80-b27f-159d40de12be","sectionTitle":"attention grabber overlay","linkId":"43e6e588-900e-4546-ad9c-55f48c0d4d9c"},{"uid":"b6b6dc38-2ad3-416b-934e-ad2da8c3c206","sectionTitle":"chat Bubble","linkId":"0c334749-31de-4501-a0d7-733798090d4e"},{"uid":"b5b62fa1-7c78-4f5c-a3e7-a71e4174a13e","sectionTitle":"Sticky Banner","linkId":"c3d6f54c-f04d-46af-80f4-62d26ea4bf38"}],"pageUserGroups":[],"title":{"en":"Website Demo"},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""}],"plugins":[{"id":"fbf0feec-356b-461b-8738-3b1f44edaf02","name":"Google GTM","namespace":"gtm"},{"id":"9c40819b-4a8f-468f-9ba5-4b9699f3361f","name":"Charts","namespace":"chartjs"},{"id":"f5856798-485d-47be-b433-d43d771c64e1","name":"Xano Auth","namespace":"xanoAuth"},{"id":"36816525-6e0d-4217-b792-19f5d8682c46","name":"GraphQL","namespace":"graphql"},{"id":"832d6f7a-42c3-43f1-a3ce-9a678272f811","name":"Date","namespace":"dayjs"},{"id":"2bd1c688-31c5-443e-ae25-59aa5b6431fb","name":"REST API","namespace":"restApi"},{"id":"cd33cf33-e29f-4e8c-ac26-b997fe507ce7","name":"Xano","namespace":"xano"}]};
// eslint-disable-next-line no-undef
window.wwg_cacheVersion = 367;
// eslint-disable-next-line no-undef
window.wwg_pluginsSettings = pluginsSettings;
// eslint-disable-next-line no-undef
window.wwg_disableManifest = false;

const defaultLang = window.wwg_designInfo.langs.find(({ default: isDefault }) => isDefault) || {};

const registerRoute = (page, lang, forcedPath) => {
    const langSlug = !lang.default || lang.isDefaultPath ? `/${lang.lang}` : '';
    let path =
        forcedPath ||
        (page.id === window.wwg_designInfo.homePageId ? '/' : `/${page.paths[lang.lang] || page.paths.default}`);

    //Replace params
    path = path.replace(/{{([\w]+)\|([^/]+)?}}/g, ':$1');

    routes.push({
        path: langSlug + path,
        component: wwPage,
        name: `page-${page.id}-${lang.lang}`,
        meta: {
            pageId: page.id,
            lang,
            isPrivate: !!page.pageUserGroups?.length,
        },
        async beforeEnter(to, from) {
            if (to.name === from.name) return;
            //Set page lang
            wwLib.wwLang.defaultLang = defaultLang.lang;
            wwLib.$store.dispatch('front/setLang', lang.lang);

            //Init plugins
            await initializePlugins();

            //Check if private page
            if (page.pageUserGroups?.length) {
                // cancel navigation if no plugin
                if (!wwLib.wwAuth.plugin) {
                    return false;
                }

                await wwLib.wwAuth.init();

                // Redirect to not sign in page if not logged
                if (!wwLib.wwAuth.getIsAuthenticated()) {
                    window.location.href = `${wwLib.wwPageHelper.getPagePath(
                        wwLib.wwAuth.getUnauthenticatedPageId()
                    )}?_source=${to.path}`;

                    return null;
                }

                //Check roles are required
                if (
                    page.pageUserGroups.length > 1 &&
                    !wwLib.wwAuth.matchUserGroups(page.pageUserGroups.map(({ userGroup }) => userGroup))
                ) {
                    window.location.href = `${wwLib.wwPageHelper.getPagePath(
                        wwLib.wwAuth.getUnauthorizedPageId()
                    )}?_source=${to.path}`;

                    return null;
                }
            }

            try {
                await import(`@/pages/${page.id.split('_')[0]}.js`);
                await wwLib.wwWebsiteData.fetchPage(page.id);

                //Scroll to section or on top after page change
                if (to.hash) {
                    const targetElement = document.getElementById(to.hash.replace('#', ''));
                    if (targetElement) targetElement.scrollIntoView();
                } else {
                    document.body.scrollTop = document.documentElement.scrollTop = 0;
                }

                return;
            } catch (err) {
                wwLib.$store.dispatch('front/showPageLoadProgress', false);

                if (err.redirectUrl) {
                    return { path: err.redirectUrl || '404' };
                } else {
                    //Any other error: go to target page using window.location
                    window.location = to.fullPath;
                }
            }
        },
    });
};

for (const page of window.wwg_designInfo.pages) {
    for (const lang of window.wwg_designInfo.langs) {
        if (!page.langs.includes(lang.lang)) continue;
        registerRoute(page, lang);
    }
}

const page404 = window.wwg_designInfo.pages.find(page => page.paths.default === '404');
if (page404) {
    for (const lang of window.wwg_designInfo.langs) {
        // Create routes /:lang/:pathMatch(.*)* etc for all langs of the 404 page
        if (!page404.langs.includes(lang.lang)) continue;
        registerRoute(
            page404,
            {
                default: false,
                lang: lang.lang,
            },
            '/:pathMatch(.*)*'
        );
    }
    // Create route /:pathMatch(.*)* using default project lang
    registerRoute(page404, { default: true, isDefaultPath: false, lang: defaultLang.lang }, '/:pathMatch(.*)*');
} else {
    routes.push({
        path: '/:pathMatch(.*)*',
        async beforeEnter() {
            window.location.href = '/404';
        },
    });
}

let routerOptions = {};

const isProd =
    !window.location.host.includes(
        '-staging.' + (process.env.WW_ENV === 'staging' ? process.env.VUE_APP_PREVIEW_URL : '')
    ) && !window.location.host.includes(process.env.VUE_APP_PREVIEW_URL);

if (isProd && window.wwg_designInfo.baseTag?.href) {
    let baseTag = window.wwg_designInfo.baseTag.href;
    if (!baseTag.startsWith('/')) {
        baseTag = '/' + baseTag;
    }
    if (!baseTag.endsWith('/')) {
        baseTag += '/';
    }

    routerOptions = {
        base: baseTag,
        history: createWebHistory(baseTag),
        routes,
    };
} else {
    routerOptions = {
        history: createWebHistory(),
        routes,
    };
}

router = createRouter({
    ...routerOptions,
    scrollBehavior,
});

//Trigger on page unload
let isFirstNavigation = true;
router.beforeEach(async (to, from) => {
    if (to.name === from.name) return;
    if (!isFirstNavigation) await onPageUnload();
    isFirstNavigation = false;
    wwLib.globalVariables._navigationId++;
    return;
});

//Init page
router.afterEach((to, from, failure) => {
    wwLib.$store.dispatch('front/showPageLoadProgress', false);
    let fromPath = from.path;
    let toPath = to.path;
    if (!fromPath.endsWith('/')) fromPath = fromPath + '/';
    if (!toPath.endsWith('/')) toPath = toPath + '/';
    if (failure || (from.name && toPath === fromPath)) return;
    initializeData(to);
});
/* wwFront:end */

export default router;
