import React from 'react';
import ReactDOM from 'react-dom';
import Framework7 from 'framework7/framework7.esm.bundle';
import Framework7React from 'framework7-react';
import App from './app';

import 'framework7/css/framework7.min.css';

Framework7.use(Framework7React);

const startApp = () => {
  ReactDOM.render(React.createElement(App), document.getElementById('root'));
};

declare global {
  interface Window {
    cordova: any;
  }
}

if (!window.cordova) {
  startApp();
} else {
  document.addEventListener('deviceready', startApp, false);
}
