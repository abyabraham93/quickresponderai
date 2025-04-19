import { defineStore } from 'pinia';
import { getInheritedConfiguration } from '@/_common/helpers/configuration/configuration';
 
export const useComponentBasesStore = defineStore('componentBases', () => {
    let configurations;
    /* wwFront:start */
    // eslint-disable-next-line no-undef
    configurations = {'plugin-f5856798-485d-47be-b433-d43d771c64e1': getInheritedConfiguration({ ...require('@/components/plugins/plugin-f5856798-485d-47be-b433-d43d771c64e1/ww-config.js').default, name: 'plugin-f5856798-485d-47be-b433-d43d771c64e1' }),
'plugin-cd33cf33-e29f-4e8c-ac26-b997fe507ce7': getInheritedConfiguration({ ...require('@/components/plugins/plugin-cd33cf33-e29f-4e8c-ac26-b997fe507ce7/ww-config.js').default, name: 'plugin-cd33cf33-e29f-4e8c-ac26-b997fe507ce7' }),
'plugin-2bd1c688-31c5-443e-ae25-59aa5b6431fb': getInheritedConfiguration({ ...require('@/components/plugins/plugin-2bd1c688-31c5-443e-ae25-59aa5b6431fb/ww-config.js').default, name: 'plugin-2bd1c688-31c5-443e-ae25-59aa5b6431fb' }),
'plugin-36816525-6e0d-4217-b792-19f5d8682c46': getInheritedConfiguration({ ...require('@/components/plugins/plugin-36816525-6e0d-4217-b792-19f5d8682c46/ww-config.js').default, name: 'plugin-36816525-6e0d-4217-b792-19f5d8682c46' }),
'plugin-fbf0feec-356b-461b-8738-3b1f44edaf02': getInheritedConfiguration({ ...require('@/components/plugins/plugin-fbf0feec-356b-461b-8738-3b1f44edaf02/ww-config.js').default, name: 'plugin-fbf0feec-356b-461b-8738-3b1f44edaf02' }),
'plugin-832d6f7a-42c3-43f1-a3ce-9a678272f811': getInheritedConfiguration({ ...require('@/components/plugins/plugin-832d6f7a-42c3-43f1-a3ce-9a678272f811/ww-config.js').default, name: 'plugin-832d6f7a-42c3-43f1-a3ce-9a678272f811' }),
'plugin-9c40819b-4a8f-468f-9ba5-4b9699f3361f': getInheritedConfiguration({ ...require('@/components/plugins/plugin-9c40819b-4a8f-468f-9ba5-4b9699f3361f/ww-config.js').default, name: 'plugin-9c40819b-4a8f-468f-9ba5-4b9699f3361f' }),
'section-99586bd3-2b15-4d6b-a025-6a50d07ca845': getInheritedConfiguration({ ...require('@/components/sections/section-99586bd3-2b15-4d6b-a025-6a50d07ca845/ww-config.js').default, name: 'section-99586bd3-2b15-4d6b-a025-6a50d07ca845' }),
'section-ef0ecc71-9a59-4eab-94b0-b36d66d3d61d': getInheritedConfiguration({ ...require('@/components/sections/section-ef0ecc71-9a59-4eab-94b0-b36d66d3d61d/ww-config.js').default, name: 'section-ef0ecc71-9a59-4eab-94b0-b36d66d3d61d' }),
'wwobject-734633a1-457d-4fe5-9eaa-773dddc755f1': getInheritedConfiguration({ ...require('@/components/elements/element-734633a1-457d-4fe5-9eaa-773dddc755f1/ww-config.js').default, name: 'wwobject-734633a1-457d-4fe5-9eaa-773dddc755f1' }),
'wwobject-af811adf-94d9-49dd-ab22-e2f29ae30299': getInheritedConfiguration({ ...require('@/components/elements/element-af811adf-94d9-49dd-ab22-e2f29ae30299/ww-config.js').default, name: 'wwobject-af811adf-94d9-49dd-ab22-e2f29ae30299' }),
'wwobject-21881619-a984-4847-81a9-922c3dbb5853': getInheritedConfiguration({ ...require('@/components/elements/element-21881619-a984-4847-81a9-922c3dbb5853/ww-config.js').default, name: 'wwobject-21881619-a984-4847-81a9-922c3dbb5853' }),
'wwobject-aeb78b9a-6fb6-4c49-931d-faedcfad67ba': getInheritedConfiguration({ ...require('@/components/elements/element-aeb78b9a-6fb6-4c49-931d-faedcfad67ba/ww-config.js').default, name: 'wwobject-aeb78b9a-6fb6-4c49-931d-faedcfad67ba' }),
'wwobject-fd8c482f-532c-4aeb-a7ae-6904a6b62a1b': getInheritedConfiguration({ ...require('@/components/elements/element-fd8c482f-532c-4aeb-a7ae-6904a6b62a1b/ww-config.js').default, name: 'wwobject-fd8c482f-532c-4aeb-a7ae-6904a6b62a1b' }),
'wwobject-84bb3944-0404-4c4e-b0d5-058a63e4554a': getInheritedConfiguration({ ...require('@/components/elements/element-84bb3944-0404-4c4e-b0d5-058a63e4554a/ww-config.js').default, name: 'wwobject-84bb3944-0404-4c4e-b0d5-058a63e4554a' }),
'wwobject-1ba25bdf-dee9-4e0e-a0b8-b3f3128c3b65': getInheritedConfiguration({ ...require('@/components/elements/element-1ba25bdf-dee9-4e0e-a0b8-b3f3128c3b65/ww-config.js').default, name: 'wwobject-1ba25bdf-dee9-4e0e-a0b8-b3f3128c3b65' }),
'wwobject-1de5438e-83c9-40f4-b519-86885e3e6416': getInheritedConfiguration({ ...require('@/components/elements/element-1de5438e-83c9-40f4-b519-86885e3e6416/ww-config.js').default, name: 'wwobject-1de5438e-83c9-40f4-b519-86885e3e6416' }),
'wwobject-e236def7-4ca9-4b68-9527-23c1f9a829ef': getInheritedConfiguration({ ...require('@/components/elements/element-e236def7-4ca9-4b68-9527-23c1f9a829ef/ww-config.js').default, name: 'wwobject-e236def7-4ca9-4b68-9527-23c1f9a829ef' }),
'wwobject-a36eacfa-16af-4363-858d-a03177f211d4': getInheritedConfiguration({ ...require('@/components/elements/element-a36eacfa-16af-4363-858d-a03177f211d4/ww-config.js').default, name: 'wwobject-a36eacfa-16af-4363-858d-a03177f211d4' }),
'wwobject-9c263ffe-7da7-45e7-832c-543aef56faef': getInheritedConfiguration({ ...require('@/components/elements/element-9c263ffe-7da7-45e7-832c-543aef56faef/ww-config.js').default, name: 'wwobject-9c263ffe-7da7-45e7-832c-543aef56faef' }),
'wwobject-0dc461bb-103e-4b2e-80e0-846ec3c30a6e': getInheritedConfiguration({ ...require('@/components/elements/element-0dc461bb-103e-4b2e-80e0-846ec3c30a6e/ww-config.js').default, name: 'wwobject-0dc461bb-103e-4b2e-80e0-846ec3c30a6e' }),
'wwobject-9ae1fce8-2e31-4bfd-a4d2-0450235bdfd5': getInheritedConfiguration({ ...require('@/components/elements/element-9ae1fce8-2e31-4bfd-a4d2-0450235bdfd5/ww-config.js').default, name: 'wwobject-9ae1fce8-2e31-4bfd-a4d2-0450235bdfd5' }),
'wwobject-985570fc-b3c0-4566-8004-82ab3b30a11d': getInheritedConfiguration({ ...require('@/components/elements/element-985570fc-b3c0-4566-8004-82ab3b30a11d/ww-config.js').default, name: 'wwobject-985570fc-b3c0-4566-8004-82ab3b30a11d' }),
'wwobject-0d3e75d1-9e77-44cb-a272-8b0825fbc5da': getInheritedConfiguration({ ...require('@/components/elements/element-0d3e75d1-9e77-44cb-a272-8b0825fbc5da/ww-config.js').default, name: 'wwobject-0d3e75d1-9e77-44cb-a272-8b0825fbc5da' }),
'wwobject-69d0b3ef-b265-494c-8cd1-874da4aa1834': getInheritedConfiguration({ ...require('@/components/elements/element-69d0b3ef-b265-494c-8cd1-874da4aa1834/ww-config.js').default, name: 'wwobject-69d0b3ef-b265-494c-8cd1-874da4aa1834' }),
'wwobject-3a7d6379-12d3-4387-98ff-b332bb492a63': getInheritedConfiguration({ ...require('@/components/elements/element-3a7d6379-12d3-4387-98ff-b332bb492a63/ww-config.js').default, name: 'wwobject-3a7d6379-12d3-4387-98ff-b332bb492a63' }),
'wwobject-14723a21-0178-4d92-a7e9-d1dfeaec29a7': getInheritedConfiguration({ ...require('@/components/elements/element-14723a21-0178-4d92-a7e9-d1dfeaec29a7/ww-config.js').default, name: 'wwobject-14723a21-0178-4d92-a7e9-d1dfeaec29a7' }),
'wwobject-b783dc65-d528-4f74-8c14-e27c934c39b1': getInheritedConfiguration({ ...require('@/components/elements/element-b783dc65-d528-4f74-8c14-e27c934c39b1/ww-config.js').default, name: 'wwobject-b783dc65-d528-4f74-8c14-e27c934c39b1' }),
'wwobject-83d890fb-84f9-4386-b459-fb4be89a8e15': getInheritedConfiguration({ ...require('@/components/elements/element-83d890fb-84f9-4386-b459-fb4be89a8e15/ww-config.js').default, name: 'wwobject-83d890fb-84f9-4386-b459-fb4be89a8e15' }),
'wwobject-6f8796b1-8273-498d-95fc-7013b7c63214': getInheritedConfiguration({ ...require('@/components/elements/element-6f8796b1-8273-498d-95fc-7013b7c63214/ww-config.js').default, name: 'wwobject-6f8796b1-8273-498d-95fc-7013b7c63214' }),
'wwobject-88ef76b6-46d5-4685-878f-2f1fa0d54cb8': getInheritedConfiguration({ ...require('@/components/elements/element-88ef76b6-46d5-4685-878f-2f1fa0d54cb8/ww-config.js').default, name: 'wwobject-88ef76b6-46d5-4685-878f-2f1fa0d54cb8' }),
'wwobject-d7904e9d-fc9a-4d80-9e32-728e097879ad': getInheritedConfiguration({ ...require('@/components/elements/element-d7904e9d-fc9a-4d80-9e32-728e097879ad/ww-config.js').default, name: 'wwobject-d7904e9d-fc9a-4d80-9e32-728e097879ad' }),
'wwobject-6dee3327-9afa-4b44-bade-bdb547cdb18b': getInheritedConfiguration({ ...require('@/components/elements/element-6dee3327-9afa-4b44-bade-bdb547cdb18b/ww-config.js').default, name: 'wwobject-6dee3327-9afa-4b44-bade-bdb547cdb18b' }),
'wwobject-aa27b26f-0686-4c29-98c5-8217044045b7': getInheritedConfiguration({ ...require('@/components/elements/element-aa27b26f-0686-4c29-98c5-8217044045b7/ww-config.js').default, name: 'wwobject-aa27b26f-0686-4c29-98c5-8217044045b7' }),
'wwobject-3265984a-eb92-4d73-b702-dbd0e4d1472e': getInheritedConfiguration({ ...require('@/components/elements/element-3265984a-eb92-4d73-b702-dbd0e4d1472e/ww-config.js').default, name: 'wwobject-3265984a-eb92-4d73-b702-dbd0e4d1472e' }),
'wwobject-9202d35c-2813-45bc-a7f3-0adb85f83e5e': getInheritedConfiguration({ ...require('@/components/elements/element-9202d35c-2813-45bc-a7f3-0adb85f83e5e/ww-config.js').default, name: 'wwobject-9202d35c-2813-45bc-a7f3-0adb85f83e5e' }),
'wwobject-deb10a01-5eef-4aa1-9017-1b51c2ad6fd0': getInheritedConfiguration({ ...require('@/components/elements/element-deb10a01-5eef-4aa1-9017-1b51c2ad6fd0/ww-config.js').default, name: 'wwobject-deb10a01-5eef-4aa1-9017-1b51c2ad6fd0' }),
'wwobject-6d692ca2-6cdc-4805-aa0c-211102f335d0': getInheritedConfiguration({ ...require('@/components/elements/element-6d692ca2-6cdc-4805-aa0c-211102f335d0/ww-config.js').default, name: 'wwobject-6d692ca2-6cdc-4805-aa0c-211102f335d0' }),
'wwobject-7355bf1c-3413-4bee-8f42-a7c608efe357': getInheritedConfiguration({ ...require('@/components/elements/element-7355bf1c-3413-4bee-8f42-a7c608efe357/ww-config.js').default, name: 'wwobject-7355bf1c-3413-4bee-8f42-a7c608efe357' })};
    /* wwFront:end */
 
    return {
        configurations,
     };
});
