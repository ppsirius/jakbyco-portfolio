// import 'babel-polyfill';
// import 'animejs';

import App from './modules/app';

const app = new App();

setTimeout(function() {
  app.render();
}, 2000);
app.render();

