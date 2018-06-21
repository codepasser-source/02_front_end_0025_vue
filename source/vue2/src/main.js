// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
// Import BootstrapVue & Bootstrap 4.x scss
import BootstrapVue from 'bootstrap-vue';
import 'bootstrap/scss/bootstrap.scss'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import './style/extends.scss'
// App vue
import App from './app'
// Router configuration
import _Router from './router'
// Load permission handler
import './app/security/permission';

Vue.use(BootstrapVue);

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#application',
  router: _Router,
  components: {App}
});
