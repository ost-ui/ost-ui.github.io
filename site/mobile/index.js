import React from 'react';
import ReactDOM from 'react-dom';
import 'babel-polyfill';
import 'core-js';
import App from './src/index'

ReactDOM.render(
  <App/>,
  document.getElementById('app')
)

if (module.hot) {
  module.hot.accept('./src/index', () => {
    window.location.reload();
  });
}