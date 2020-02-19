import * as component from '../components';

const componentTitlesArr = Object.keys(component).filter(key => /MENU_ITEM*./ig.test(key));
const componentArr = Object.keys(component).filter(key => !/MENU_ITEM*./ig.test(key));

const titleArr = [
  {
    title: '介绍',
    before: '关于 ost ui',
    notComponent: true
  }
].concat(
  componentTitlesArr.map(key => ({
    title: component[key].title,
    before: component[key].before
  }))
);

const pagesArr = [
  {
    value: '关于 ost ui',
    hash: '$about-ost',
    doc: import('../doc/about-ostui.md').then(data => data.default),
    notComponent: true
  },{
    value: '如何安装',
    hash: '$install',
    doc: import('../doc/install.md').then(data => data.default),
    notComponent: true
  }
].concat(
  componentArr.map(value => ({
      value,
      hash: value,
      doc: import(`../components/${value}/demo/README.md`).then(data => data.default)
    })
  )
);


for (let i = 0; i < titleArr.length; i++) {
  for (let idx = 0; idx < pagesArr.length; idx++) {
    if(titleArr[i].before === pagesArr[idx].value) {
      pagesArr.splice(idx, 0, titleArr[i]);
      break;
    }
  }
}


export default pagesArr;