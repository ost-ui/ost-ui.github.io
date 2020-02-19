import Home from '../template/Home';
import MyComponent from '../template/Component';
import * as component from '../../../../components';

const routes = [
  { path: '/', name: 'Home', component: Home }
];

for (const key in component) {
  const route = { path: `/${key}`, name: `component_${key}`, component: MyComponent };
  routes.push(route);
}


export default routes;
