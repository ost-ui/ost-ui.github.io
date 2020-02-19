/* 定义分类标题须以 'MENU_ITEM*' 开头声明一个对象，title 为标题，before 指插入该模块之前；
*  输出模块命名务必与组件文件夹名称保持一致，否则将无法获取到部分资源；
*/

export const MENU_ITEM_Layout = {title: '布局类', before: 'OstWhiteSpace'};
export { default as OstWhiteSpace } from './OstWhiteSpace';
export { default as OstWhiteBlank } from './OstWhiteBlank';


export const MENU_ITEM_Navigation = {title: '导航', before: 'OstHeader'};
export { default as OstHeader } from './OstHeader';


export const MENU_ITEM_DataDisplay = {title: '数据展示', before: 'OstText'};
export { default as OstText } from './OstText';
export { default as OstList } from './OstList';


export const MENU_ITEM_DataEntry = {title: '数据输入', before: 'OstInput'};
export { default as OstInput } from './OstInput';
export { default as OstCheckbox } from './OstCheckbox';
export { default as OstButton } from './OstButton';
export { default as OstSwitch } from './OstSwitch';
export { default as OstNumKeyboard } from './OstNumKeyboard';


export const MENU_ITEM_Feedback = {title: '反馈类', before: 'OstLoading'};
export { default as OstLoading } from './OstLoading';
export { default as OstModal } from './OstModal';


export const MENU_ITEM_Other = {title: '样例', before: 'OstMask'};
export { default as OstMask } from './OstMask';
export { default as OstDemo } from './OstDemo';
