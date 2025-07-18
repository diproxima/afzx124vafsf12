import emitter from 'tiny-emitter/instance';
import services from './services/index.js';
import { useIconsStore } from '@/pinia/icons';

 /* wwFront:start */
// eslint-disable-next-line no-undef
import plugin_cabb43dd_6161_4140_8ebf_03b6fb045a0b from '@/components/plugins/plugin-cabb43dd-6161-4140-8ebf-03b6fb045a0b/src/wwPlugin.js';
import plugin_832d6f7a_42c3_43f1_a3ce_9a678272f811 from '@/components/plugins/plugin-832d6f7a-42c3-43f1-a3ce-9a678272f811/src/wwPlugin.js';
import plugin_69d4a5bb_09a3_4f3d_a94e_667c21c057eb from '@/components/plugins/plugin-69d4a5bb-09a3-4f3d-a94e-667c21c057eb/src/wwPlugin.js';
import plugin_41448d5d_ae26_49bd_82b6_1c79f462e972 from '@/components/plugins/plugin-41448d5d-ae26-49bd-82b6-1c79f462e972/src/wwPlugin.js';
import plugin_2bd1c688_31c5_443e_ae25_59aa5b6431fb from '@/components/plugins/plugin-2bd1c688-31c5-443e-ae25-59aa5b6431fb/src/wwPlugin.js';
import plugin_66a79c98_70e7_4bc4_8859_20776b024ec2 from '@/components/plugins/plugin-66a79c98-70e7-4bc4-8859-20776b024ec2/src/wwPlugin.js';
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
        wwLib.wwPluginHelper.registerPlugin('plugin-cabb43dd-6161-4140-8ebf-03b6fb045a0b', plugin_cabb43dd_6161_4140_8ebf_03b6fb045a0b);
wwLib.wwPluginHelper.registerPlugin('plugin-832d6f7a-42c3-43f1-a3ce-9a678272f811', plugin_832d6f7a_42c3_43f1_a3ce_9a678272f811);
wwLib.wwPluginHelper.registerPlugin('plugin-69d4a5bb-09a3-4f3d-a94e-667c21c057eb', plugin_69d4a5bb_09a3_4f3d_a94e_667c21c057eb);
wwLib.wwPluginHelper.registerPlugin('plugin-41448d5d-ae26-49bd-82b6-1c79f462e972', plugin_41448d5d_ae26_49bd_82b6_1c79f462e972);
wwLib.wwPluginHelper.registerPlugin('plugin-2bd1c688-31c5-443e-ae25-59aa5b6431fb', plugin_2bd1c688_31c5_443e_ae25_59aa5b6431fb);
wwLib.wwPluginHelper.registerPlugin('plugin-66a79c98-70e7-4bc4-8859-20776b024ec2', plugin_66a79c98_70e7_4bc4_8859_20776b024ec2);
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
            return theme === 'dark' ? {"05de1e5e-b00f-4945-a97c-5681f96c4143":"#004EEB","92cdae94-1c47-4423-a3ef-f09c0db5bd7c":"#F2F3F8","6cd52e4b-49b6-4e98-8917-0ed494342016":"#F5F5F5","249d17f2-7d89-4895-953a-df35f3c9f83a":"#D92D20","183837a9-bad6-4f7f-a129-b6478c57e3f3":"#004EEB","5396790f-39b5-473d-941a-04f42458d916":"#C8CCDA","8a052097-8bc2-4814-b0d2-1ce2821716ad":"#D1E0FF","e4332e09-2b8e-4796-ab3f-367beee0b3cd":"#155EEF","7f61d357-aabe-4d32-967c-5d042bab0405":"#FDB022","dd7b8bd7-b870-47e5-8dd7-38d0046865b2":"#E04F16","6fc245d3-0b16-4615-bb89-11f0145ae417":"#C8CCDA","8249e9e7-6950-4824-b5f8-d266cbe72a22":"#DEE1ED","8ff57a16-8e10-4be1-bcd7-ee406d27592d":"#FFFFFF","b694ca1b-ad7c-4390-8133-128dd0e894bc":"#343846","bdf79e43-ef60-4310-8b4a-b6b19ead0e86":"#F2F3F8","19c7a42b-c3d3-4935-9591-f1c3fdfc253b":"#414651","9259431b-7158-4816-8e2b-38f8d6008847":"#EFF4FF","a2f554b2-1e6e-4ec9-a65d-4a782de73670":"#004EEB","576f5139-53e0-42a8-8af7-f144bad63c89":"#C8CCDA","1dc1d0ff-895d-4def-b2ed-d3ce95b3c3cf":"#155EEF","990a221d-4acd-4fc0-90a9-573c4a1057ff":"#343846","ff410123-b9c9-4ab9-bec1-40c91a3cbbe4":"#181D27","af641897-52f9-487b-b579-f7cd543d0eb4":"#FFFFFF","06a41969-2ecf-49d1-a958-cf34c5e55960":"#FFFFFF1F","f47267d2-f430-40d1-914a-8ab16a96ec52":"#004EEB","0a6faee3-cdf4-4968-a475-5b327c7ba941":"#F5F5F5","53d1b1c5-df52-438f-9f88-4484bc7a1b77":"#ADB2C2","f404fbf5-2a1e-4813-a48d-ebea3d64ae00":"#F2F3F8","94a67d42-6369-4d35-8a6e-0ecd1be34cd4":"#FFFFFF","2b31bb86-4f53-43e2-8d76-8d98cd246c4f":"#C8CCDA","2e576125-8872-430a-95c6-ab907ed86de1":"#414651","0dae7ee0-ee5e-4b96-8bf0-b27f25f8a9c4":"#252B37","9dec6753-919b-4af0-916d-1f5e77d17193":"#70778F","0b4df9e9-d769-4d12-bd59-b6f132daa358":"#70778F","9a39883b-22f3-4ad1-bfd1-c29401a35a29":"#F5F5F5","4c22352e-5696-4f60-b60b-b2d5f967021f":"#00000014","28f40272-72b5-49a6-a047-f27509ca48af":"#70778F","f8b5c3e9-f34f-41d2-94a0-20e110832a0c":"#F2F3F8","434c0d2e-4e1c-499b-9620-8355a2a13e09":"#414651","00d78e13-3f0a-4c89-a698-3c224dadb13a":"#ADB2C2","31b668df-2a58-443f-b323-f1dddb2bb7e1":"#17B26A","2704588d-5e5e-41b1-a6d8-96f1f201a063":"#079455","8023524b-32b1-4221-a44d-642a83223c92":"#414651","30f86289-4961-4ce7-8e6b-bfe16a14b0cf":"#70778F","4cdba36e-8849-42cc-a3db-d1f77a1a02c2":"#70778F","874a8c2b-cabd-4b3d-b1f2-c68e93ac3f1f":"#FFFFFF","84be9401-d267-40e9-a334-e5c17497942a":"#F2F3F8","7048790a-01bd-4623-b41f-60f137a63048":"#70778F","df173915-ac8c-4983-b52a-b00c09053b1f":"#70778F","d6c74df1-470f-4bff-92ef-ad67cd4a7b6f":"#EFF4FF","d43c803c-bdd5-41c2-9f46-bb25e6d31a19":"#155EEF","567c5011-f3fd-4a6c-bf5a-190b089924e5":"#C8CCDA","83ab528a-fa80-4649-8114-859b2972bdf9":"#414651","d066057b-3f7f-415c-bf27-5d63673621cb":"#155EEF","407f1127-51bd-4d79-87c6-85b7d21d5fdf":"#343846","dab6c5d6-fb1b-411a-a459-0f597cd728a3":"#EFF4FF","7eeeaee7-624d-42b5-8247-6d52fff8ea38":"#B2CCFF","a3439446-78f9-40c4-b13a-d1f9c0b46f31":"#004EEB","4a16e184-2ac6-4304-a049-6f662259cf61":"#DEE1ED","515aeacb-52c2-4d9a-af07-7a14a6d9bc3e":"#F2F3F8","1ca086cb-105f-4803-bf40-340da5aa83ae":"#F04438","aefdbd31-1708-41b3-931f-60d002cc5d5d":"#FEE4E2","83612562-d5b3-4d27-8526-15875d6f1f2f":"#C8CCDA","4b76ddf9-6cbd-4810-b87a-e1d1acf7e31a":"#414651","6fd2b6b7-4301-4dae-be49-3bc3899f4671":"#F2F3F8","897a1a8f-608e-4d2a-9770-2a73309cae72":"#70778F","f086a7a4-c155-4c48-9e29-f5db113c10a5":"#F79009","1214b91c-d571-41a7-bcc0-8b39bb95366f":"#00359E","0752a3a1-63ac-493a-aed3-4bec52179b83":"#B42318","60dc4a40-b5a8-4e60-9e09-d9c1aeee45a2":"#FFFFFF","ddbf277e-b95f-4947-8a3a-1d9cf6d5d761":"#FEF3F2","8f23af2c-71f4-4deb-bc9f-7ae9eee69acd":"#FDA29B","784b5171-b754-4d36-ac2d-a0805f9b0df8":"#FDA29B","8d3b0217-546b-4730-9526-46d284958624":"#B42318","1aa386d8-d79a-46e0-aa81-20dfc0422688":"#B42318","1e454a45-64e2-4258-8285-2244465039bf":"#FFFFFF","f5bc6533-5463-4f7e-b774-e58db238af6b":"#DEE1ED","64da8b0e-5636-4e66-8886-87dc3ac547d8":"#DEE1ED","e2ceb8c4-9e4c-464e-ab90-5f20a6a92861":"#155EEF","4c8cd39e-6fe3-4b9f-bf27-1e8bb7b2e5bd":"#155EEF","d2e61e4d-599f-430a-806d-35534ecae463":"#2970FF","a3c6d1d3-5fad-4d33-b9af-4f9c89e6a41f":"#181D27","39e3ba36-176d-4eaa-a9d8-dc4a9e68c192":"#343846","b1365c26-2ee7-4a53-9954-8b789bd42ce8":"#414651","e0f7d1f6-ab13-40ea-8147-6a97c41c7588":"#0040C1","43c2f9ff-11ff-4c76-9e18-1b0e8c433c8a":"#F2F3F8","e23dd2d9-ed56-4057-aa0a-d7116b1d0684":"#414651","78e47287-eaed-4d46-b1c3-fb7c7b52c57f":"#F2F3F8","6348e9eb-7bb4-44fb-a3cb-8139d28bb1a8":"#155EEF","2a5c0667-8bc2-4822-9be2-d692ad839a33":"#B2CCFF","42286f7b-13cd-41fe-95e0-7a8369bf976e":"#0A0A1F","a86ca1ce-f190-4ffc-b641-d81e6d70b38b":"#D92D20","f6f1962e-a2d6-4ab1-917f-791037e70728":"#F79009","03c4bf1a-310f-4c02-b1f2-9da704b86ef6":"#343846","4b679502-a16d-4374-b802-b7a0de838bf6":"#099250","e7bc591b-1ff2-4838-af90-b2420866d607":"#1570EF","f19660c7-5617-451b-8c73-8d4d0fdb350b":"#444CE7","862f8997-7c36-479f-8c8d-1f5b2b7d2c76":"#6938EF","d099ce39-00f4-4674-b167-0acdccdc28bc":"#BA24D5","67a5f40d-5eb4-429e-98ae-7d22ec225115":"#DD2590","5ea132c2-a672-4577-a583-e38037d767b9":"#FDFDFD","8b5b3223-32ee-4f03-9584-98023077a5be":"#FEF3F2","165ff89a-e25e-4648-a59b-397d3f1725fd":"#FEE4E2","8a042e8b-b564-47cf-8a00-e965264451a0":"#F6FEF9","29b8d908-6f23-4913-8640-935987b89b2c":"#DEE1ED"} : {"05de1e5e-b00f-4945-a97c-5681f96c4143":"#004EEB","92cdae94-1c47-4423-a3ef-f09c0db5bd7c":"#F2F3F8","6cd52e4b-49b6-4e98-8917-0ed494342016":"#F5F5F5","249d17f2-7d89-4895-953a-df35f3c9f83a":"#D92D20","183837a9-bad6-4f7f-a129-b6478c57e3f3":"#004EEB","5396790f-39b5-473d-941a-04f42458d916":"#C8CCDA","8a052097-8bc2-4814-b0d2-1ce2821716ad":"#D1E0FF","e4332e09-2b8e-4796-ab3f-367beee0b3cd":"#155EEF","7f61d357-aabe-4d32-967c-5d042bab0405":"#FDB022","dd7b8bd7-b870-47e5-8dd7-38d0046865b2":"#E04F16","6fc245d3-0b16-4615-bb89-11f0145ae417":"#C8CCDA","8249e9e7-6950-4824-b5f8-d266cbe72a22":"#DEE1ED","8ff57a16-8e10-4be1-bcd7-ee406d27592d":"#FFFFFF","b694ca1b-ad7c-4390-8133-128dd0e894bc":"#343846","bdf79e43-ef60-4310-8b4a-b6b19ead0e86":"#F2F3F8","19c7a42b-c3d3-4935-9591-f1c3fdfc253b":"#414651","9259431b-7158-4816-8e2b-38f8d6008847":"#EFF4FF","a2f554b2-1e6e-4ec9-a65d-4a782de73670":"#004EEB","576f5139-53e0-42a8-8af7-f144bad63c89":"#C8CCDA","1dc1d0ff-895d-4def-b2ed-d3ce95b3c3cf":"#155EEF","990a221d-4acd-4fc0-90a9-573c4a1057ff":"#343846","ff410123-b9c9-4ab9-bec1-40c91a3cbbe4":"#181D27","af641897-52f9-487b-b579-f7cd543d0eb4":"#FFFFFF","06a41969-2ecf-49d1-a958-cf34c5e55960":"#FFFFFF1F","f47267d2-f430-40d1-914a-8ab16a96ec52":"#004EEB","0a6faee3-cdf4-4968-a475-5b327c7ba941":"#F5F5F5","53d1b1c5-df52-438f-9f88-4484bc7a1b77":"#ADB2C2","f404fbf5-2a1e-4813-a48d-ebea3d64ae00":"#F2F3F8","94a67d42-6369-4d35-8a6e-0ecd1be34cd4":"#FFFFFF","2b31bb86-4f53-43e2-8d76-8d98cd246c4f":"#C8CCDA","2e576125-8872-430a-95c6-ab907ed86de1":"#414651","0dae7ee0-ee5e-4b96-8bf0-b27f25f8a9c4":"#252B37","9dec6753-919b-4af0-916d-1f5e77d17193":"#70778F","0b4df9e9-d769-4d12-bd59-b6f132daa358":"#70778F","9a39883b-22f3-4ad1-bfd1-c29401a35a29":"#F5F5F5","4c22352e-5696-4f60-b60b-b2d5f967021f":"#00000014","28f40272-72b5-49a6-a047-f27509ca48af":"#70778F","f8b5c3e9-f34f-41d2-94a0-20e110832a0c":"#F2F3F8","434c0d2e-4e1c-499b-9620-8355a2a13e09":"#414651","00d78e13-3f0a-4c89-a698-3c224dadb13a":"#ADB2C2","31b668df-2a58-443f-b323-f1dddb2bb7e1":"#17B26A","2704588d-5e5e-41b1-a6d8-96f1f201a063":"#079455","8023524b-32b1-4221-a44d-642a83223c92":"#414651","30f86289-4961-4ce7-8e6b-bfe16a14b0cf":"#70778F","4cdba36e-8849-42cc-a3db-d1f77a1a02c2":"#70778F","874a8c2b-cabd-4b3d-b1f2-c68e93ac3f1f":"#FFFFFF","84be9401-d267-40e9-a334-e5c17497942a":"#F2F3F8","7048790a-01bd-4623-b41f-60f137a63048":"#70778F","df173915-ac8c-4983-b52a-b00c09053b1f":"#70778F","d6c74df1-470f-4bff-92ef-ad67cd4a7b6f":"#EFF4FF","d43c803c-bdd5-41c2-9f46-bb25e6d31a19":"#155EEF","567c5011-f3fd-4a6c-bf5a-190b089924e5":"#C8CCDA","83ab528a-fa80-4649-8114-859b2972bdf9":"#414651","d066057b-3f7f-415c-bf27-5d63673621cb":"#155EEF","407f1127-51bd-4d79-87c6-85b7d21d5fdf":"#343846","dab6c5d6-fb1b-411a-a459-0f597cd728a3":"#EFF4FF","7eeeaee7-624d-42b5-8247-6d52fff8ea38":"#B2CCFF","a3439446-78f9-40c4-b13a-d1f9c0b46f31":"#004EEB","4a16e184-2ac6-4304-a049-6f662259cf61":"#DEE1ED","515aeacb-52c2-4d9a-af07-7a14a6d9bc3e":"#F2F3F8","1ca086cb-105f-4803-bf40-340da5aa83ae":"#F04438","aefdbd31-1708-41b3-931f-60d002cc5d5d":"#FEE4E2","83612562-d5b3-4d27-8526-15875d6f1f2f":"#C8CCDA","4b76ddf9-6cbd-4810-b87a-e1d1acf7e31a":"#414651","6fd2b6b7-4301-4dae-be49-3bc3899f4671":"#F2F3F8","897a1a8f-608e-4d2a-9770-2a73309cae72":"#70778F","f086a7a4-c155-4c48-9e29-f5db113c10a5":"#F79009","1214b91c-d571-41a7-bcc0-8b39bb95366f":"#00359E","0752a3a1-63ac-493a-aed3-4bec52179b83":"#B42318","60dc4a40-b5a8-4e60-9e09-d9c1aeee45a2":"#FFFFFF","ddbf277e-b95f-4947-8a3a-1d9cf6d5d761":"#FEF3F2","8f23af2c-71f4-4deb-bc9f-7ae9eee69acd":"#FDA29B","784b5171-b754-4d36-ac2d-a0805f9b0df8":"#FDA29B","8d3b0217-546b-4730-9526-46d284958624":"#B42318","1aa386d8-d79a-46e0-aa81-20dfc0422688":"#B42318","1e454a45-64e2-4258-8285-2244465039bf":"#FFFFFF","f5bc6533-5463-4f7e-b774-e58db238af6b":"#DEE1ED","64da8b0e-5636-4e66-8886-87dc3ac547d8":"#DEE1ED","e2ceb8c4-9e4c-464e-ab90-5f20a6a92861":"#155EEF","4c8cd39e-6fe3-4b9f-bf27-1e8bb7b2e5bd":"#155EEF","d2e61e4d-599f-430a-806d-35534ecae463":"#2970FF","a3c6d1d3-5fad-4d33-b9af-4f9c89e6a41f":"#181D27","39e3ba36-176d-4eaa-a9d8-dc4a9e68c192":"#343846","b1365c26-2ee7-4a53-9954-8b789bd42ce8":"#414651","e0f7d1f6-ab13-40ea-8147-6a97c41c7588":"#0040C1","43c2f9ff-11ff-4c76-9e18-1b0e8c433c8a":"#F2F3F8","e23dd2d9-ed56-4057-aa0a-d7116b1d0684":"#414651","78e47287-eaed-4d46-b1c3-fb7c7b52c57f":"#F2F3F8","6348e9eb-7bb4-44fb-a3cb-8139d28bb1a8":"#155EEF","2a5c0667-8bc2-4822-9be2-d692ad839a33":"#B2CCFF","42286f7b-13cd-41fe-95e0-7a8369bf976e":"#0A0A1F","a86ca1ce-f190-4ffc-b641-d81e6d70b38b":"#D92D20","f6f1962e-a2d6-4ab1-917f-791037e70728":"#F79009","03c4bf1a-310f-4c02-b1f2-9da704b86ef6":"#343846","4b679502-a16d-4374-b802-b7a0de838bf6":"#099250","e7bc591b-1ff2-4838-af90-b2420866d607":"#1570EF","f19660c7-5617-451b-8c73-8d4d0fdb350b":"#444CE7","862f8997-7c36-479f-8c8d-1f5b2b7d2c76":"#6938EF","d099ce39-00f4-4674-b167-0acdccdc28bc":"#BA24D5","67a5f40d-5eb4-429e-98ae-7d22ec225115":"#DD2590","5ea132c2-a672-4577-a583-e38037d767b9":"#FDFDFD","8b5b3223-32ee-4f03-9584-98023077a5be":"#FEF3F2","165ff89a-e25e-4648-a59b-397d3f1725fd":"#FEE4E2","8a042e8b-b564-47cf-8a00-e965264451a0":"#F6FEF9","29b8d908-6f23-4913-8640-935987b89b2c":"#DEE1ED"};
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
        {"5297a31d-484e-494b-90cd-8469f4b841be":"600 20px/30px var(--ww-default-font-family, sans-serif)","4f3e8a38-3c4f-4e6d-8a80-672a60fa2554":"500 48px/60px var(--ww-default-font-family, sans-serif)","2044039a-4bbb-4ae5-a196-caef0214c979":"600 14px/20px var(--ww-default-font-family, sans-serif)","49e4f5bb-d19c-4dd6-bd2c-a80e576896e4":"600 16px/24px var(--ww-default-font-family, sans-serif)","369a9299-76d6-42ec-84b8-b48f29b1721c":"600 36px/44px var(--ww-default-font-family, sans-serif)","8649263f-7d9b-4e0e-87c9-1a305cd1c9c3":"500 16px/24px var(--ww-default-font-family, sans-serif)","58f9e255-c6c0-49a4-9528-0f541d3e25c6":"600 12px/18px var(--ww-default-font-family, sans-serif)","783ecd1d-56db-4813-b9bc-e00702e72eb0":"600 24px/32px var(--ww-default-font-family, sans-serif)","d5f098ce-53af-4201-81f0-00a3eff34c6a":"400 16px/24px var(--ww-default-font-family, sans-serif)","b79dafbe-91bb-45fe-81a6-27805f4c6136":"300 14px/20px var(--ww-default-font-family, sans-serif)","34d34f56-b6d9-41c1-949e-fc23a713fefb":"600 30px/38px var(--ww-default-font-family, sans-serif)","d290b252-a624-408d-b1ca-48285d72f47e":"600 18px/28px var(--ww-default-font-family, sans-serif)","32dbb51f-b898-4d39-ab87-bd95bb1626bc":"300 30px/38px var(--ww-default-font-family, sans-serif)","6c3ba373-e61c-4e89-89b8-e7c1f9466364":"300 18px/28px var(--ww-default-font-family, sans-serif)","e86e712f-3494-4900-81ff-4d82d8cb7953":"600 12px/20px var(--ww-default-font-family, sans-serif)","e85a46a4-8915-446c-b80a-e766c1b1e459":"300 12px/18px 'Inter', sans-serif","9c7db0b0-9941-47c4-8c62-09abbce5ae6a":"500 12px/18px var(--ww-default-font-family, sans-serif)","e95a79d0-7d3c-477a-9969-ac1175578913":"500 14px/20px var(--ww-default-font-family, sans-serif)","e7a2851a-9858-4ca4-842c-f28e110208dd":"500 18px/28px var(--ww-default-font-family, sans-serif)"},
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
