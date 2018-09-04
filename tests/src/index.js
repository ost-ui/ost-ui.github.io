import * as Components from 'components';
const cacheModule = {};
const compContext = require.context('components/', true, /\/index.js$/);
const compContextArray = compContext.keys().slice(0, -1);

if(getCompIndexLength() !== compContextArray.length) {
  throw new Error('Not all Componets were imported in index!');
}

compContextArray.forEach(path => {
  const moduleName = path.match(/Ost\w+\//)[0].slice(0, -1);
  cacheModule[moduleName] = compContext(path);
});

function getCompIndexLength() {
  let componentsIndexLength = 0;
  Object
    .keys(Components)
    .forEach(key => {
      /Ost\w+/.test(key) && componentsIndexLength++;
    });
  return componentsIndexLength;
}

export default cacheModule