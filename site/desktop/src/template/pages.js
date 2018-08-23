import * as component from '../../../../components';

const pagesArr = [
  {
    value: '关于 ost ui',
    hash: '$about-ost',
    doc: import('../../../../doc/about-ostui.md').then(data => data.default)
  },{
    value: '如何安装',
    hash: '$install',
    doc: import('../../../../doc/install.md').then(data => data.default)
  }
].concat(
  Object.keys(component).map(value => ({
    value,
    hash: value,
    doc:import( `../../../../components/${value}/demo/README.md`).then(data => data.default)
  }))
);

export default pagesArr;