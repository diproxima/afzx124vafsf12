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
window.wwg_designInfo = {"id":"deba54df-0e80-4187-a68b-4ad3e4ba2b89","homePageId":"c113d4f0-25fc-4434-ae85-ff7e32e7b454","authPluginId":"41448d5d-ae26-49bd-82b6-1c79f462e972","baseTag":null,"defaultTheme":"light","langs":[{"lang":"en","default":true,"isDefaultPath":true},{"lang":"ru","default":false,"isDefaultPath":false},{"lang":"uk","default":false,"isDefaultPath":false}],"background":{},"workflows":[{"id":"d24f821a-03d1-48f9-aa7c-bdfa5bae0e51","name":"Hide Modal After Loading","actions":{"56cb0e1b-2801-49b5-bfad-66f4c3090a1e":{"id":"56cb0e1b-2801-49b5-bfad-66f4c3090a1e","code":"{\n  wwLib.getFrontDocument().body.style.overflow = \"auto\";\n  wwLib.getFrontDocument().documentElement.style.overflow = \"auto\";\n}","next":null,"type":"custom-js"}},"trigger":"before-collection-fetch","firstAction":"56cb0e1b-2801-49b5-bfad-66f4c3090a1e","triggerConditions":null},{"id":"372f3ab0-b911-4d5a-8b07-c8a13acde6dd","name":"Error Fetch Collection","actions":{"277037ca-8f1f-4e49-a1da-7e7954d26042":{"id":"277037ca-8f1f-4e49-a1da-7e7954d26042","type":"switch","value":{"code":"event?.['collectionName']","__wwtype":"f"},"branches":[{"id":"5674dc3b-b70f-4a15-9cc7-88ca57075037","value":"/accounts/"},{"id":"7fca244b-ec8d-47e5-825b-996ae020c89d","value":"/accounts/id"},{"value":"default","isDefault":true}],"disabled":false},"3069aad7-070c-4616-883d-745722402b36":{"id":"3069aad7-070c-4616-883d-745722402b36","next":"ad3a009a-9f50-40a2-a1c0-f6ea7bdddb5f","type":"41448d5d-ae26-49bd-82b6-1c79f462e972-logout"},"5674dc3b-b70f-4a15-9cc7-88ca57075037":{"id":"5674dc3b-b70f-4a15-9cc7-88ca57075037","next":"3069aad7-070c-4616-883d-745722402b36","type":"reset-variables","varsId":["584cc741-445b-40b8-9ea5-a5a705ca9523"]},"7fca244b-ec8d-47e5-825b-996ae020c89d":{"id":"7fca244b-ec8d-47e5-825b-996ae020c89d","next":"e4d0ed8e-83e6-4680-9687-62dd2210301f","type":"fetch-collection","collectionId":"3c898426-f2dc-49c7-9a1f-98d111db881d"},"ad3a009a-9f50-40a2-a1c0-f6ea7bdddb5f":{"id":"ad3a009a-9f50-40a2-a1c0-f6ea7bdddb5f","type":"change-page","pageId":"2f929641-2a4e-4ec6-abac-9fd8ab451c42","navigateMode":"internal"},"b950cf6f-f7ee-4a26-988e-27c086c3ef20":{"id":"b950cf6f-f7ee-4a26-988e-27c086c3ef20","type":"change-page","pageId":"99d22c7c-9700-45ea-a49f-a6a0e61c2f78","disabled":false,"parameters":{"account_id":{"code":"collections['3c898426-f2dc-49c7-9a1f-98d111db881d']?.['data']?.['result']?.['own_accounts']?.[0]?.['id']||collections['3c898426-f2dc-49c7-9a1f-98d111db881d']?.['data']?.['result']?.['invited_accounts']?.[0]?.['id']","__wwtype":"f"}},"navigateMode":"internal"},"d61f2e32-c55d-46aa-814e-dc845bf116de":{"id":"d61f2e32-c55d-46aa-814e-dc845bf116de","next":"b950cf6f-f7ee-4a26-988e-27c086c3ef20","type":"fetch-collection","disabled":false,"collectionId":"a48cf953-e4e4-45d8-91b3-0c4ab302926a"},"e4d0ed8e-83e6-4680-9687-62dd2210301f":{"id":"e4d0ed8e-83e6-4680-9687-62dd2210301f","next":"d61f2e32-c55d-46aa-814e-dc845bf116de","type":"variable","varId":"584cc741-445b-40b8-9ea5-a5a705ca9523","internal":false,"varValue":{"code":"collections['3c898426-f2dc-49c7-9a1f-98d111db881d']?.['data']?.['result']?.['own_accounts']?.[0]?.['id']||collections['3c898426-f2dc-49c7-9a1f-98d111db881d']?.['data']?.['result']?.['invited_accounts']?.[0]?.['id']","__wwtype":"f"}},"e634a4f8-89b2-49a7-a09f-b29bd691cf34":{"id":"e634a4f8-89b2-49a7-a09f-b29bd691cf34","next":"277037ca-8f1f-4e49-a1da-7e7954d26042","type":"return","value":{"code":"event","__wwtype":"f"}}},"trigger":"on-collection-fetch-error","firstAction":"e634a4f8-89b2-49a7-a09f-b29bd691cf34","firstErrorAction":null,"triggerConditions":null},{"id":"271263f9-dd30-427b-bd74-f49d2775c3c1","actions":{"375ee4bd-5bbe-4ef1-bdd8-be47ed67af12":{"id":"375ee4bd-5bbe-4ef1-bdd8-be47ed67af12","code":"window.Intercom('update', {\n    user_id: pluginVariables[/* Token Based Auth user */ '41448d5d-ae26-49bd-82b6-1c79f462e972']['user']?.['id'],\n    email: pluginVariables[/* Token Based Auth user */ '41448d5d-ae26-49bd-82b6-1c79f462e972']['user']?.['email'],\n    account: variables['584cc741-445b-40b8-9ea5-a5a705ca9523']\n});\n","type":"custom-js"},"6adc54a8-3e5f-49b7-a5ee-96639fa04e8c":{"id":"6adc54a8-3e5f-49b7-a5ee-96639fa04e8c","code":"window.Intercom(\"boot\", {\n  api_base: \"https://api-iam.intercom.io\",\n  app_id: \"ro6erv31\",\n  hide_default_launcher: true,\n});\n","next":"375ee4bd-5bbe-4ef1-bdd8-be47ed67af12","type":"custom-js"},"7048a0e4-a0e5-4d0a-b138-8d7e1edcda09":{"id":"7048a0e4-a0e5-4d0a-b138-8d7e1edcda09","next":"6adc54a8-3e5f-49b7-a5ee-96639fa04e8c","type":"filter","value":{"code":"pluginVariables['41448d5d-ae26-49bd-82b6-1c79f462e972']['isAuthenticated']&&pluginVariables['41448d5d-ae26-49bd-82b6-1c79f462e972']['user']?.['status']==\"Allowed\"","__wwtype":"f"}}},"trigger":"onload","firstAction":"7048a0e4-a0e5-4d0a-b138-8d7e1edcda09","triggerConditions":null}],"pages":[{"id":"594195c7-2cd2-4ebb-b462-f337db267093","linkId":"594195c7-2cd2-4ebb-b462-f337db267093","name":"Activation","folder":"Auth/","paths":{"en":"activation","default":"activation"},"langs":["en","ru","uk"],"cmsDataSetPath":null,"sections":[{"uid":"8dc2a480-6603-46ef-90f8-9cb80871747f","sectionTitle":"Section","linkId":"0dba9eda-2890-4a94-b3bc-02bffba39dea"},{"uid":"a35e78d9-d6ea-4438-97d5-adb799a53d4d","sectionTitle":"Modal: Send from wallet","linkId":"b4bfa81b-77f2-4865-b9b1-e17f16fbac6b"}],"pageUserGroups":[],"title":{"en":"Suspended — Finup"},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""},{"id":"9944980f-238b-481d-8a10-ac83bc44748f","linkId":"9944980f-238b-481d-8a10-ac83bc44748f","name":"Referrals","folder":"Auth/","paths":{"en":"referrals","default":"referrals"},"langs":["en","ru","uk"],"cmsDataSetPath":null,"sections":[{"uid":"ce664d01-92d3-401d-9a8c-2520f29adc2e","sectionTitle":"Sidemenu","linkId":"db37dcc9-2c03-4f7e-9f58-ed8621db9687"},{"uid":"65d5a303-86f3-4e8d-9936-bde977609127","sectionTitle":"Modal (mobile): More","linkId":"0522a8b3-c923-40e6-ae71-340b2f59e131"},{"uid":"2d5edca6-bb9b-4080-b20d-4d0dd16d9a44","sectionTitle":"Bottom Nav","linkId":"76344fe5-3d47-4c7e-b6a9-9ceba500d9ff"},{"uid":"07a3eba9-b477-40d5-a7df-f0b79b24fa0d","sectionTitle":"Modal: Accounts","linkId":"325d1cd5-27ae-4799-b2a3-52914bb394ab"},{"uid":"843bd1a3-7c3a-46a9-9348-a3a3e79e3e9c","sectionTitle":"Section","linkId":"252afdc7-329f-4a1c-ae2c-551d4dcb6702"},{"uid":"29a9b764-fd52-49ca-89ba-8e579579d2d3","sectionTitle":"Modal: Close Card","linkId":"f42a5e62-c929-4673-b2df-826350247625"},{"uid":"86b90118-5b1b-483a-9d0d-ab15f8165ad8","sectionTitle":"Modal: Edit Referral Name","linkId":"70e459ee-449b-4a54-a3f1-58a2da129758"},{"uid":"787bc6c1-2f8a-4572-aaf5-c9adf1342264","sectionTitle":"Modal: Create Referral Link","linkId":"7d81e059-d904-49b0-a291-3635e04466aa"}],"pageUserGroups":[],"title":{"en":"Referrals — Finup","fr":"Vide | Commencer à partir de zéro","ru":"Рефералы — Finup","uk":"Реферали — Finup"},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""},{"id":"ad59eab8-0ea3-4b9d-b619-8dc8245c5d86","linkId":"ad59eab8-0ea3-4b9d-b619-8dc8245c5d86","name":"Forgot password","folder":null,"paths":{"en":"forgot-password","default":"forgot-password"},"langs":["en","ru","uk"],"cmsDataSetPath":null,"sections":[{"uid":"973c6544-099a-43c0-8510-60ce77e2d936","sectionTitle":"Section","linkId":"a75b4d6d-2220-4027-9e99-f54b0a25e5cf"}],"pageUserGroups":[],"title":{"en":"Forgot Password — Finup","ru":"Восстановление пароля — Finup","uk":"Відновлення паролю — Finup"},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""},{"id":"28523b7a-df40-4351-97c2-6498de879d5f","linkId":"28523b7a-df40-4351-97c2-6498de879d5f","name":"Switch","folder":"Auth/","paths":{"en":"switch","default":"switch"},"langs":["en","ru","uk"],"cmsDataSetPath":null,"sections":[{"uid":"699ad4a3-95ea-4648-a0fd-ee1b340c1fe1","sectionTitle":"Section","linkId":"1bc62371-7bab-4fb8-9ad2-7fc6782e9a5c"}],"pageUserGroups":[],"title":{"en":"Switch — Finup","ru":"Переход — Finup","uk":"Перехід — Finup"},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""},{"id":"2f929641-2a4e-4ec6-abac-9fd8ab451c42","linkId":"2f929641-2a4e-4ec6-abac-9fd8ab451c42","name":"Login","folder":null,"paths":{"en":"login","default":"login"},"langs":["en","ru","uk"],"cmsDataSetPath":null,"sections":[{"uid":"ce1fb6aa-02c7-4121-acdf-f9cbad31fdfa","sectionTitle":"Login section","linkId":"dd5904c3-6c9a-4567-ae40-3a65a0e86212"},{"uid":"7a83ce00-024c-40f3-a0b2-a02ad412479e","sectionTitle":"Modal: Delete Telegram Account","linkId":"d52ed011-73ef-40f8-a144-f69d8fe5e2f6"}],"pageUserGroups":[],"title":{"en":"Login — Finup","ru":"Вход — Finup","uk":"Вхід — Finup"},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""},{"id":"99d22c7c-9700-45ea-a49f-a6a0e61c2f78","linkId":"99d22c7c-9700-45ea-a49f-a6a0e61c2f78","name":"Wallet","folder":"Auth/","paths":{"en":"wallet","default":"wallet"},"langs":["en","ru","uk"],"cmsDataSetPath":null,"sections":[{"uid":"93500e0f-591b-4fa9-8f95-4a8aa761b496","sectionTitle":"Modal: Deposit to Wallet","linkId":"1e1b48a8-47fe-43dc-a2a8-9e9da900eb20"},{"uid":"fcb19bcd-e228-4d48-b7c8-b9dd3c5bd125","sectionTitle":"Modal: Filter Status","linkId":"4773849f-cbaa-45fe-9716-9d86c967aca1"},{"uid":"7cfdc59f-d451-44fe-b206-10adde799223","sectionTitle":"Modal: Forced support","linkId":"8dc0376d-7737-4f8f-9baf-fa01dbf1ae87"},{"uid":"a35e78d9-d6ea-4438-97d5-adb799a53d4d","sectionTitle":"Modal: Send from wallet","linkId":"b4bfa81b-77f2-4865-b9b1-e17f16fbac6b"},{"uid":"ce664d01-92d3-401d-9a8c-2520f29adc2e","sectionTitle":"Sidemenu","linkId":"db37dcc9-2c03-4f7e-9f58-ed8621db9687"},{"uid":"65d5a303-86f3-4e8d-9936-bde977609127","sectionTitle":"Modal (mobile): More","linkId":"0522a8b3-c923-40e6-ae71-340b2f59e131"},{"uid":"bb04414c-611e-4ba1-b03e-3db2db4996de","sectionTitle":"Modal (mobile): Merchants","linkId":"ac210772-cd8c-4284-9af2-f784fd14756a"},{"uid":"2d5edca6-bb9b-4080-b20d-4d0dd16d9a44","sectionTitle":"Bottom Nav","linkId":"76344fe5-3d47-4c7e-b6a9-9ceba500d9ff"},{"uid":"ecf50cf8-27d8-402e-a870-62627a08019d","sectionTitle":"Main: Wallet","linkId":"13aed0ac-783d-48db-9244-75abb16d9f8f"},{"uid":"b3e30c2d-2eb9-47dd-9ff0-62cde1e278ac","sectionTitle":"Modal: Filter Date","linkId":"c9336ceb-3a0f-44d8-a3a0-b50a27579886"},{"uid":"3685842b-9ed4-4f9c-83f9-ef145598631e","sectionTitle":"Modal: Filter Type","linkId":"2b5b05d5-499f-44aa-ae65-633e40aad369"},{"uid":"5bbdcc3b-bfde-4267-8cf6-4e639b292b92","sectionTitle":"Modal: Filter Side","linkId":"5e61f023-7560-4ba9-b7b7-ba14ed052fb1"},{"uid":"f9b971a4-6fba-44db-b7b5-af3f4822e2eb","sectionTitle":"Modal: Export","linkId":"affb6135-229f-4a37-9fdb-ee87e26c9244"},{"uid":"9d90b4ca-896b-4d1b-906a-141d03e501a8","sectionTitle":"Modal: Choose language","linkId":"5a5f4c2d-8c8f-47ff-be92-0a7ec15c613d"},{"uid":"4d20d832-b186-4fd1-9ec4-51bd1ed2e02a","sectionTitle":"Modal: Notifications","linkId":"cb24f6c3-cc77-4f43-a8fc-04ebeb4e280e"},{"uid":"07a3eba9-b477-40d5-a7df-f0b79b24fa0d","sectionTitle":"Modal: Accounts","linkId":"325d1cd5-27ae-4799-b2a3-52914bb394ab"}],"pageUserGroups":[],"title":{"en":"Wallet — Finup","fr":"Vide | Commencer à partir de zéro","ru":"Кошелек — Finup","uk":"Гаманець — Finup"},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""},{"id":"8b0652a8-530d-4210-bcf7-785ff16248e0","linkId":"8b0652a8-530d-4210-bcf7-785ff16248e0","name":"Cards","folder":"Auth/","paths":{"en":"cards","default":"cards"},"langs":["en","ru","uk"],"cmsDataSetPath":null,"sections":[{"uid":"d7922a30-9a3d-4440-a18f-2320309a35f3","sectionTitle":"Modal: Card Withdraw","linkId":"26fdef5b-a223-4dbe-9f74-6e3a8c4b2697"},{"uid":"47bb6f6c-17ea-437c-9282-d6120f3cb42a","sectionTitle":"Modal: Card Deposit","linkId":"962905d8-8a67-4658-a6c4-7545c25076cd"},{"uid":"a43816af-8de1-4441-ad1e-c9c7c7ac5fbf","sectionTitle":"Modal: Mass Rename","linkId":"41bb120b-b977-4ef5-9e39-f6a876476119"},{"uid":"05200a38-e20a-427b-ad42-13196b1b4f7e","sectionTitle":"Modal: Negative Card Deposit","linkId":"a41e9754-1fd8-4645-a600-9a23a28bdd87"},{"uid":"3bc78756-ad7b-4be3-a0ec-859a454c5500","sectionTitle":"Modal: Mass Close","linkId":"0db9d98c-ff5a-4b51-a9c1-1179bd5d2daa"},{"uid":"9b4c7c0c-4600-4811-b65c-85bebff52706","sectionTitle":"Modal: Freeze Card","linkId":"1a85f22b-7bd2-47cb-b169-745a485e47e0"},{"uid":"b6b78027-1761-49af-8a92-2544b0dc7827","sectionTitle":"Modal: Unfreeze Card","linkId":"83e31a24-f684-411a-872d-733aec1ded2e"},{"uid":"4f6ed110-3ffc-4b46-8021-fed9a7b7d7d4","sectionTitle":"Modal: Negative balance","linkId":"05480afc-b679-4431-9a96-2fa3e9b82864"},{"uid":"463e9ff5-a215-421e-bc02-25f80aa8ffcd","sectionTitle":"Modal: Close Card","linkId":"bfe911cb-7c2f-4d8f-a70a-f14d364f9ba5"},{"uid":"ce664d01-92d3-401d-9a8c-2520f29adc2e","sectionTitle":"Sidemenu","linkId":"db37dcc9-2c03-4f7e-9f58-ed8621db9687"},{"uid":"65d5a303-86f3-4e8d-9936-bde977609127","sectionTitle":"Modal (mobile): More","linkId":"0522a8b3-c923-40e6-ae71-340b2f59e131"},{"uid":"2d5edca6-bb9b-4080-b20d-4d0dd16d9a44","sectionTitle":"Bottom Nav","linkId":"76344fe5-3d47-4c7e-b6a9-9ceba500d9ff"},{"uid":"a95c7899-36e2-470d-93d3-bfee452e39ed","sectionTitle":"Bottom (mobile): Bulk","linkId":"349d9ea2-9874-4e4e-bc6d-b7933a338baf"},{"uid":"278e22a2-4dda-4af1-8280-ad866342cc8d","sectionTitle":"Sub: All Cards","linkId":"1ae022f1-00cb-47c9-bc92-32e2f3f1da33"},{"uid":"8d101ef7-7d18-4318-9627-14b376928909","sectionTitle":"Modal: Questionare","linkId":"42870537-02ec-488e-8ae0-659ca4d8f9c7"},{"uid":"b69a6325-25a3-49bd-acdb-b25ce82e3639","sectionTitle":"Modal: Filter Status","linkId":"885366f2-7ef3-4a97-af3c-e32e2c89a842"},{"uid":"dbf25943-bf0c-4d2c-8635-cf4f47ac84fa","sectionTitle":"Modal: Filter Sorting","linkId":"699c7c88-2df3-4151-86e6-a57ada576ece"},{"uid":"07a3eba9-b477-40d5-a7df-f0b79b24fa0d","sectionTitle":"Modal: Accounts","linkId":"325d1cd5-27ae-4799-b2a3-52914bb394ab"},{"uid":"91f5c197-8624-459b-9a79-9363f6ccf49e","sectionTitle":"Modal: Card","linkId":"f98f7497-1a80-4e6e-a376-d4a518d8f4d3"},{"uid":"e1a3bb87-6a4f-4990-9458-15424423baeb","sectionTitle":"Modal: Bulk Actions","linkId":"b4a248b6-198c-4d23-a03a-e926492d9566"}],"pageUserGroups":[],"title":{"en":"Cards — Finup","fr":"Vide | Commencer à partir de zéro","ru":"Карты — Finup","uk":"Картки — Finup"},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""},{"id":"3d8acda9-57b4-42fc-b9ec-18ee06f2a23f","linkId":"3d8acda9-57b4-42fc-b9ec-18ee06f2a23f","name":"Members","folder":"Auth/","paths":{"en":"members","default":"members"},"langs":["en","ru","uk"],"cmsDataSetPath":null,"sections":[{"uid":"314c6c75-327c-43d4-986c-fdbd5a08a878","sectionTitle":"Modal: Invite Member","linkId":"7c9daea9-c50d-4a36-88b5-65496b749d27"},{"uid":"473ed04a-928c-4131-a6fe-c7f205f959fb","sectionTitle":"Modal: Edit Member","linkId":"097ff625-5c60-4441-8bb2-70585e91cff9"},{"uid":"541a1ae0-bf6b-4919-8940-85bab4737e6e","sectionTitle":"Modal: Member Delete","linkId":"ca9fc8fb-8bac-4768-9d8b-9b07bcee8db0"},{"uid":"ce664d01-92d3-401d-9a8c-2520f29adc2e","sectionTitle":"Sidemenu","linkId":"db37dcc9-2c03-4f7e-9f58-ed8621db9687"},{"uid":"65d5a303-86f3-4e8d-9936-bde977609127","sectionTitle":"Modal (mobile): More","linkId":"0522a8b3-c923-40e6-ae71-340b2f59e131"},{"uid":"2d5edca6-bb9b-4080-b20d-4d0dd16d9a44","sectionTitle":"Bottom Nav","linkId":"76344fe5-3d47-4c7e-b6a9-9ceba500d9ff"},{"uid":"2c5872bf-9e04-40eb-aeee-24ce162566ae","sectionTitle":"Members","linkId":"81cafa69-e7a4-49b3-a230-6916777beaf3"},{"uid":"07a3eba9-b477-40d5-a7df-f0b79b24fa0d","sectionTitle":"Modal: Accounts","linkId":"325d1cd5-27ae-4799-b2a3-52914bb394ab"}],"pageUserGroups":[],"title":{"en":"Members — Finup","fr":"Vide | Commencer à partir de zéro","ru":"Команда — Finup","uk":"Команда — Finup"},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""},{"id":"3f867470-781e-4043-9891-3288cedf5465","linkId":"3f867470-781e-4043-9891-3288cedf5465","name":"Settings","folder":"Auth/","paths":{"en":"settings","default":"settings"},"langs":["en","ru","uk"],"cmsDataSetPath":null,"sections":[{"uid":"07a3eba9-b477-40d5-a7df-f0b79b24fa0d","sectionTitle":"Modal: Accounts","linkId":"325d1cd5-27ae-4799-b2a3-52914bb394ab"},{"uid":"9cb39e13-e723-425c-9f3c-407dd069eb15","sectionTitle":"Modal: 2FA","linkId":"2d633822-4d39-49ed-b9ec-c5c3c45049c1"},{"uid":"d9f6eb3a-f62a-481a-b591-33dad977fa1d","sectionTitle":"Modal: Delete Telegram Account","linkId":"626c55b4-1292-4414-8a05-43cd53b05517"},{"uid":"4e135fda-2253-4788-bdfb-9b07ef1f3cd3","sectionTitle":"Modal: Delete Session","linkId":"c86f590c-fd4b-4212-b19d-d6bbf16e2517"},{"uid":"6a7b161b-8b16-4581-a7bc-b835bcb50e6d","sectionTitle":"Modal: Telegram Connect","linkId":"35692287-f05f-4710-9fae-9676d2ef709d"},{"uid":"ce664d01-92d3-401d-9a8c-2520f29adc2e","sectionTitle":"Sidemenu","linkId":"db37dcc9-2c03-4f7e-9f58-ed8621db9687"},{"uid":"65d5a303-86f3-4e8d-9936-bde977609127","sectionTitle":"Modal (mobile): More","linkId":"0522a8b3-c923-40e6-ae71-340b2f59e131"},{"uid":"2d5edca6-bb9b-4080-b20d-4d0dd16d9a44","sectionTitle":"Bottom Nav","linkId":"76344fe5-3d47-4c7e-b6a9-9ceba500d9ff"},{"uid":"67f4038d-14b7-400e-8c8e-77fd0124a594","sectionTitle":"Settings","linkId":"ad88f8ba-50c2-4879-9229-635a0ea1aa81"},{"uid":"8164d0de-0aed-4d0b-ac7a-71f150cef007","sectionTitle":"Modal: Webhook edit","linkId":"dafa48fb-d1ea-4592-9719-34a16548ddb0"}],"pageUserGroups":[],"title":{"en":"Settings — Finup","fr":"Vide | Commencer à partir de zéro","ru":"Настройки — Finup","uk":"Налаштування — Finup"},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""},{"id":"9525d206-b951-43a8-890f-f2ae49e9e47b","linkId":"9525d206-b951-43a8-890f-f2ae49e9e47b","name":"Transactions","folder":"Auth/","paths":{"en":"transactions","default":"transactions"},"langs":["en","ru","uk"],"cmsDataSetPath":null,"sections":[{"uid":"c3861c75-0ef4-4ce2-b636-a831bdbc5eaa","sectionTitle":"Modal: Onboarding","linkId":"65d3bc27-6599-4fb0-a7a2-bbdbecd87e3c"},{"uid":"9b4c7c0c-4600-4811-b65c-85bebff52706","sectionTitle":"Modal: Freeze Card","linkId":"1a85f22b-7bd2-47cb-b169-745a485e47e0"},{"uid":"8d101ef7-7d18-4318-9627-14b376928909","sectionTitle":"Modal: Questionare","linkId":"42870537-02ec-488e-8ae0-659ca4d8f9c7"},{"uid":"b6b78027-1761-49af-8a92-2544b0dc7827","sectionTitle":"Modal: Unfreeze Card","linkId":"83e31a24-f684-411a-872d-733aec1ded2e"},{"uid":"463e9ff5-a215-421e-bc02-25f80aa8ffcd","sectionTitle":"Modal: Close Card","linkId":"bfe911cb-7c2f-4d8f-a70a-f14d364f9ba5"},{"uid":"ce664d01-92d3-401d-9a8c-2520f29adc2e","sectionTitle":"Sidemenu","linkId":"db37dcc9-2c03-4f7e-9f58-ed8621db9687"},{"uid":"65d5a303-86f3-4e8d-9936-bde977609127","sectionTitle":"Modal (mobile): More","linkId":"0522a8b3-c923-40e6-ae71-340b2f59e131"},{"uid":"2d5edca6-bb9b-4080-b20d-4d0dd16d9a44","sectionTitle":"Bottom Nav","linkId":"76344fe5-3d47-4c7e-b6a9-9ceba500d9ff"},{"uid":"6f0d8144-6130-4830-bc42-eea8b73de2ab","sectionTitle":"Main: Cards","linkId":"0a3fa888-fc55-4e54-b981-be1ef970c266"},{"uid":"377d2ea6-10e6-4223-87a2-d56675f3a29a","sectionTitle":"Modal: Filter Side","linkId":"6c44b53c-bbfc-440b-92f9-23170e82f9f5"},{"uid":"5a481bd8-77c3-43b1-8343-f7132d91840f","sectionTitle":"Modal: Filter Status","linkId":"59ae5d0a-ee55-4e48-aab7-54b7b1c0d885"},{"uid":"fd42b3df-b33b-4b6d-ac09-dbc390f47b75","sectionTitle":"Modal: Filter Virtual Card","linkId":"7eba8d33-ee3c-466b-b162-eea69e47613a"},{"uid":"a69d5aa1-a7cf-4e2c-b99e-8d2cc4929d1d","sectionTitle":"Modal: Filter Date","linkId":"7a98b976-9e9d-47be-832d-e08df3c4719d"},{"uid":"07a3eba9-b477-40d5-a7df-f0b79b24fa0d","sectionTitle":"Modal: Accounts","linkId":"325d1cd5-27ae-4799-b2a3-52914bb394ab"},{"uid":"47bb6f6c-17ea-437c-9282-d6120f3cb42a","sectionTitle":"Modal: Card Deposit","linkId":"962905d8-8a67-4658-a6c4-7545c25076cd"},{"uid":"d7922a30-9a3d-4440-a18f-2320309a35f3","sectionTitle":"Modal: Card Withdraw","linkId":"26fdef5b-a223-4dbe-9f74-6e3a8c4b2697"},{"uid":"f9b971a4-6fba-44db-b7b5-af3f4822e2eb","sectionTitle":"Modal: Export","linkId":"affb6135-229f-4a37-9fdb-ee87e26c9244"},{"uid":"91f5c197-8624-459b-9a79-9363f6ccf49e","sectionTitle":"Modal: Card","linkId":"f98f7497-1a80-4e6e-a376-d4a518d8f4d3"},{"uid":"3bc78756-ad7b-4be3-a0ec-859a454c5500","sectionTitle":"Modal: Mass Close","linkId":"0db9d98c-ff5a-4b51-a9c1-1179bd5d2daa"}],"pageUserGroups":[],"title":{"en":"Transactions — Finup","fr":"Vide | Commencer à partir de zéro","ru":"Транзакции — Finup","uk":"Транзакції — Finup"},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""},{"id":"58b9d09a-433e-42fa-865e-127494e52c64","linkId":"58b9d09a-433e-42fa-865e-127494e52c64","name":"Suspended","folder":null,"paths":{"en":"limited","default":"limited"},"langs":["en","ru","uk"],"cmsDataSetPath":null,"sections":[{"uid":"69ae2676-41ff-4895-8910-4d582cbacef2","sectionTitle":"Section","linkId":"8e8ec259-ff22-4638-84c1-0a1179f58d52"},{"uid":"a35e78d9-d6ea-4438-97d5-adb799a53d4d","sectionTitle":"Modal: Send from wallet","linkId":"b4bfa81b-77f2-4865-b9b1-e17f16fbac6b"},{"uid":"05200a38-e20a-427b-ad42-13196b1b4f7e","sectionTitle":"Modal: Negative Card Deposit","linkId":"a41e9754-1fd8-4645-a600-9a23a28bdd87"}],"pageUserGroups":[],"title":{"en":"Limited — Finup","ru":"Ограничено — Finup","uk":"Обмежено — Finup"},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""},{"id":"c113d4f0-25fc-4434-ae85-ff7e32e7b454","linkId":"c113d4f0-25fc-4434-ae85-ff7e32e7b454","name":"Home","folder":null,"paths":{"en":"home","default":"home"},"langs":["en","ru","uk"],"cmsDataSetPath":null,"sections":[{"uid":"1f4a176f-14e9-4f14-9e8b-5fd9cb333987","sectionTitle":"Section","linkId":"84e1e38e-c112-4b57-ba68-fdb225559ff2"}],"pageUserGroups":[],"title":{"en":"Finup","ru":"Finup","uk":"Finup"},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""},{"id":"4fbb9a3d-292f-42bc-a09f-eb0c8454fe00","linkId":"4fbb9a3d-292f-42bc-a09f-eb0c8454fe00","name":"Admin Panel","folder":null,"paths":{"en":"adminpanel/{{action|login}}/{{id|66d1849cac57d9b19a33a3c7}}","default":"adminpanel/{{action|login}}/{{id|66d1849cac57d9b19a33a3c7}}"},"langs":["en","ru","uk"],"cmsDataSetPath":null,"sections":[{"uid":"18f0d5ce-c699-47c4-a31e-0fdf5315eb1c","sectionTitle":"Main: Cards","linkId":"3a68997e-e95c-4437-8e09-fa12f67230c7"},{"uid":"2ddf5033-1034-4708-b26c-542df25586db","sectionTitle":"Modal: Login","linkId":"8af0b37d-bc98-4b1d-99b6-dbe7b96623bd"},{"uid":"f599b133-00ce-4474-8e16-d705c0856f8b","sectionTitle":"Modal: Invoice Recalculate","linkId":"4d962ff0-46eb-46cf-bf69-bfd2ddf7a4fb"},{"uid":"c9485815-fa08-451b-b88a-e5ab063c65b3","sectionTitle":"Modal: Rain","linkId":"fb1d4c5d-862e-44d4-bd4d-25ddf8c4f46b"},{"uid":"50763edd-13b1-4946-acd0-2e2f87637b02","sectionTitle":"Modal: Account Card Limit","linkId":"b639ed50-4dbd-467b-82b4-824d755ba39a"},{"uid":"c3951d6b-d622-4ad9-8261-5c5537217213","sectionTitle":"Modal: Card Add","linkId":"ca060a6d-4408-40ed-864a-e955d8bc832b"},{"uid":"504fa138-96f7-4bad-ba00-1af97ca7bac4","sectionTitle":"Modal: Withdraw","linkId":"c36a39cd-d49f-4d7a-8788-44c553cf4353"},{"uid":"40af5054-c2e7-4591-8ba8-ce2f18442f83","sectionTitle":"Modal: Deposit","linkId":"269ec99f-8172-447d-9862-7c145348abae"},{"uid":"c116edbf-9c40-4e37-a971-26e9dfa84816","sectionTitle":"Modal: Recalculate balance","linkId":"1299fdcf-7b2a-42d8-8850-9f7850d96172"},{"uid":"7be571bf-1403-42ea-ae9a-333458626ce6","sectionTitle":"Modal: Promo","linkId":"800f7f0e-ff4a-48a2-8cb6-6113bca59b95"},{"uid":"c3780315-02bb-4a83-91b2-e2622e2a629a","sectionTitle":"Modal: User Card Access","linkId":"b2d835a4-6844-4a8f-8bdb-4fb177659972"},{"uid":"f79b214d-258d-4dc8-a147-9d25c8ba57d1","sectionTitle":"Modal: User","linkId":"d78da856-4205-403f-92f6-e69ab8a055aa"},{"uid":"29719c9c-5b61-429c-89ed-c377eb3e7309","sectionTitle":"Modal: Card Status","linkId":"65d13196-0dc3-477e-8628-07034c59cc2f"},{"uid":"e1fa51c3-9563-408d-b2fb-e0407536b799","sectionTitle":"Modal: Payment Status","linkId":"d2791165-d412-4e15-84d2-29654c1fa0f1"},{"uid":"3e834a64-4f9d-4c8a-8d76-71932d5a3d5d","sectionTitle":"Modal: Processing","linkId":"96c52881-6959-4d95-92a3-8b6db922ac7b"},{"uid":"f891b4cd-06fc-43b9-8a25-4c634c30e74f","sectionTitle":"Modal: Manual Action","linkId":"07078639-0091-4642-b763-39c3c8bbbc24"},{"uid":"9959d2ed-f8fd-43f4-9906-88376647725c","sectionTitle":"Modal: Global Recalc","linkId":"ed760354-8cd2-48e3-9547-d8efe5651cc5"},{"uid":"a28fe324-86ec-42d8-bddf-563ac5d9cda0","sectionTitle":"Modal: Monitoring","linkId":"a4578686-4416-4a43-867f-42bb615f815f"}],"pageUserGroups":[],"title":{},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""},{"id":"8042574d-183e-456a-baa1-833f99f8286c","linkId":"8042574d-183e-456a-baa1-833f99f8286c","name":"Sign up","folder":null,"paths":{"en":"signup","default":"signup"},"langs":["en","ru","uk"],"cmsDataSetPath":null,"sections":[{"uid":"8382c0ad-79ae-40e6-a84f-0b120cc3f006","sectionTitle":"Login section","linkId":"935dc368-5e12-467a-a7f4-184c28e89e49"}],"pageUserGroups":[],"title":{"en":"Sign Up — Finup","ru":"Регистрация — Finup","uk":"Реестрація — Finup"},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""},{"id":"a58c1494-8464-4a82-b1fe-37385eca444a","linkId":"a58c1494-8464-4a82-b1fe-37385eca444a","name":"Logout","folder":"Auth/","paths":{"en":"logout","default":"logout"},"langs":["en","ru","uk"],"cmsDataSetPath":null,"sections":[{"uid":"7fba7b46-64a2-4f32-8156-fd3877365a3d","sectionTitle":"Section","linkId":"a7030438-6e17-49ee-ad00-f604a8bfd4bd"}],"pageUserGroups":[],"title":{"en":"Switch — Finup","ru":"Переход — Finup","uk":"Перехід — Finup"},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""},{"id":"2d54ff12-7049-4806-8417-181f5ec861bf","linkId":"2d54ff12-7049-4806-8417-181f5ec861bf","name":"Verification","folder":"Auth/","paths":{"en":"verification","default":"verification"},"langs":["en","ru","uk"],"cmsDataSetPath":null,"sections":[{"uid":"deb774fc-6780-4c59-8533-af99aef64c25","sectionTitle":"Section","linkId":"512061fa-6a0a-400b-b8a3-c686082c2f45"},{"uid":"362353a9-0815-46c8-9341-cfd0fa8a3ce4","sectionTitle":"Modal: Delete Telegram Account","linkId":"4a522bb4-6e40-4920-bd14-bc4af54d37d5"}],"pageUserGroups":[],"title":{"en":"Verification — Finup","fr":"Vide | Commencer à partir de zéro","ru":"Верификация — Finup","uk":"Верифікація — Finup"},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""},{"id":"68dda011-603e-4c73-bc79-538831326e83","linkId":"68dda011-603e-4c73-bc79-538831326e83","name":"KYC","folder":"Auth/","paths":{"en":"kyc","default":"kyc"},"langs":["en","ru","uk"],"cmsDataSetPath":null,"sections":[{"uid":"1c147855-51a7-466b-8e61-f02a36d7c970","sectionTitle":"Section","linkId":"580f9789-a6dd-4aa3-9e04-6458ee0a2e13"},{"uid":"93500e0f-591b-4fa9-8f95-4a8aa761b496","sectionTitle":"Modal: Deposit to Wallet","linkId":"1e1b48a8-47fe-43dc-a2a8-9e9da900eb20"},{"uid":"05200a38-e20a-427b-ad42-13196b1b4f7e","sectionTitle":"Modal: Negative Card Deposit","linkId":"a41e9754-1fd8-4645-a600-9a23a28bdd87"}],"pageUserGroups":[],"title":{"en":"New Card — Finup","fr":"Vide | Commencer à partir de zéro","ru":"Новая карта — Finup","uk":"Нова картка — Finup"},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""},{"id":"4c92fd43-2798-4ef7-9e53-32a32a71ab9b","linkId":"4c92fd43-2798-4ef7-9e53-32a32a71ab9b","name":"Analytics","folder":"Auth/","paths":{"en":"analytics","default":"analytics"},"langs":["en","ru","uk"],"cmsDataSetPath":null,"sections":[{"uid":"ce664d01-92d3-401d-9a8c-2520f29adc2e","sectionTitle":"Sidemenu","linkId":"db37dcc9-2c03-4f7e-9f58-ed8621db9687"},{"uid":"07a3eba9-b477-40d5-a7df-f0b79b24fa0d","sectionTitle":"Modal: Accounts","linkId":"325d1cd5-27ae-4799-b2a3-52914bb394ab"},{"uid":"65d5a303-86f3-4e8d-9936-bde977609127","sectionTitle":"Modal (mobile): More","linkId":"0522a8b3-c923-40e6-ae71-340b2f59e131"},{"uid":"2d5edca6-bb9b-4080-b20d-4d0dd16d9a44","sectionTitle":"Bottom Nav","linkId":"76344fe5-3d47-4c7e-b6a9-9ceba500d9ff"},{"uid":"d4ac2e38-8428-4466-9e43-28574287c180","sectionTitle":"Main: Wallet","linkId":"e5578fed-324f-4d10-b9af-0ba12c6df59a"}],"pageUserGroups":[],"title":{"en":"Analytics — Finup","fr":"Vide | Commencer à partir de zéro","ru":"Аналитика — Finup","uk":"Аналітика — Finup"},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""},{"id":"569ed74b-1326-41b1-b3ad-c0a8ac92cf20","linkId":"569ed74b-1326-41b1-b3ad-c0a8ac92cf20","name":"New Card","folder":"Auth/","paths":{"en":"newcard","default":"newcard"},"langs":["en","ru","uk"],"cmsDataSetPath":null,"sections":[{"uid":"0b8ab4e1-00ac-46ad-96c1-bd78c1e9898d","sectionTitle":"Section","linkId":"b9d7a94b-b6c3-4058-8098-019d960efe2c"},{"uid":"93500e0f-591b-4fa9-8f95-4a8aa761b496","sectionTitle":"Modal: Deposit to Wallet","linkId":"1e1b48a8-47fe-43dc-a2a8-9e9da900eb20"},{"uid":"05200a38-e20a-427b-ad42-13196b1b4f7e","sectionTitle":"Modal: Negative Card Deposit","linkId":"a41e9754-1fd8-4645-a600-9a23a28bdd87"}],"pageUserGroups":[],"title":{"en":"New Card — Finup","fr":"Vide | Commencer à partir de zéro","ru":"Новая карта — Finup","uk":"Нова картка — Finup"},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""},{"id":"f7c16946-26ea-4f16-9a8a-35e829122418","linkId":"f7c16946-26ea-4f16-9a8a-35e829122418","name":"Invoice","folder":null,"paths":{"en":"invoice/{{invoice_id|5e3a52a2-d65e-4b02-b364-d92ae62bff6f}}","ru":"","default":"invoice/{{invoice_id|5e3a52a2-d65e-4b02-b364-d92ae62bff6f}}"},"langs":["en","ru","uk"],"cmsDataSetPath":null,"sections":[{"uid":"0dc37858-196d-42e1-aa5a-c3bd92fe1bd9","sectionTitle":"Section","linkId":"c263a55e-0f51-48d4-abba-c196d9b3cc85"}],"pageUserGroups":[],"title":{"en":"Invoice — Finup","fr":"Vide | Commencer à partir de zéro","ru":"Инвойс — Finup","uk":"Інвойс — Finup"},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""},{"id":"1cdd8f1f-98d8-4ba2-a8ef-fe5fc710cebf","linkId":"1cdd8f1f-98d8-4ba2-a8ef-fe5fc710cebf","name":"testroom","folder":null,"paths":{"en":"testroom","default":"testroom"},"langs":["en","ru","uk"],"cmsDataSetPath":null,"sections":[{"uid":"91f4dc19-5f3a-4ebe-a667-c6852b9a6a1e","sectionTitle":"Section","linkId":"bea7b7a5-8f00-4be1-85f5-07fb87ae8dc4"}],"pageUserGroups":[],"title":{},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""}],"plugins":[{"id":"66a79c98-70e7-4bc4-8859-20776b024ec2","name":"PWA","namespace":"pwa"},{"id":"69d4a5bb-09a3-4f3d-a94e-667c21c057eb","name":"NPM","namespace":"npm"},{"id":"fbf0feec-356b-461b-8738-3b1f44edaf02","name":"Google GTM","namespace":"gtm"},{"id":"cabb43dd-6161-4140-8ebf-03b6fb045a0b","name":"Google","namespace":"google"},{"id":"9c40819b-4a8f-468f-9ba5-4b9699f3361f","name":"Charts","namespace":"chartjs"},{"id":"832d6f7a-42c3-43f1-a3ce-9a678272f811","name":"Date","namespace":"dayjs"},{"id":"2bd1c688-31c5-443e-ae25-59aa5b6431fb","name":"REST API","namespace":"restApi"},{"id":"41448d5d-ae26-49bd-82b6-1c79f462e972","name":"Token Based Auth","namespace":"authToken"}]};
// eslint-disable-next-line no-undef
window.wwg_cacheVersion = 2;
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
        // TODO: add staging2 ?
        '-staging.' + (process.env.WW_ENV === 'staging' ? import.meta.env.VITE_APP_PREVIEW_URL : '')
    ) && !window.location.host.includes(import.meta.env.VITE_APP_PREVIEW_URL);

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
