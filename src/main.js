
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
 
import './assets/rest.css'
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import store from './store'
import jquery from 'jquery'
import qs from 'qs';
import h5p from '../build/h5p.js'
import moment from 'moment'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import VueLazyload from 'vue-lazyload'
//版本号

Vue.prototype.$version = '2004011038-6c81816'
Vue.prototype.$versionBrief = '修复了已知BUG, 优化了用户体验.'
Vue.config.productionTip = false
Vue.use(ElementUI);
Vue.prototype.$axios = axios
Vue.prototype.$store = store
Vue.prototype.$h5p = h5p
Vue.prototype.qs = qs
Vue.prototype.$jquery = jquery
Vue.prototype.moment = moment;




Vue.use(VueLazyload, {
  preLoad: 1.3,
  attempt: 1
})

new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
// debugger
