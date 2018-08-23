import Home from '../template/Home';
import Documentation from '../template/Documentation';
import * as component from '../../../../components'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/Documentation-$about-ost', name: 'Documentation', component: Documentation },
  { path: '/Documentation-$install', name: 'Documentation', component: Documentation }
];

for (const key in component) {
  const route = { path: `/Documentation-${key}`, name: `Documentation_${key}`, component: Documentation };
  routes.push(route);
}


export default routes;
