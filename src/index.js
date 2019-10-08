import dva from 'dva';
import './index.css';
import 'antd-mobile/dist/antd-mobile.css';
import router from './router';

const startApp = () => {
  const app = dva();
  // app.model(require('./models/').default);
  app.router(router);
  app.start('#root');
};
if (!window.cordova) {
  startApp();
} else {
  document.addEventListener('deviceready', startApp, false);
}
