import 'babel-polyfill';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });
/**
 * require all files that need to test those ends with `.spec.js`
 */
const testContent = require.context('./specs/', true, /\.spec$/);
testContent.keys().forEach(testContent);

/**
 * require all components
 */
const componentContent = require.context('./src/', false, /index.js$/);
componentContent.keys().forEach(componentContent);

/**
 * require __style from all components
 */
const styleContent = require.context('../components/__style', false, /\/index.less$/)
styleContent.keys().forEach(styleContent);
