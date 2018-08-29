import React from 'react';
import ReactDOM from 'react-dom';
import 'babel-polyfill';
import 'core-js';
import App from './src/app';


ReactDOM.render(
  <App/>,
  document.getElementById('app')
)

if (module.hot) {
  module.hot.accept('./src/app', () => {
    window.location.reload();
  });
}