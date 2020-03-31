
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
//版本号  
Vue.prototype.$version = '2004010411-b54d86f'
Vue.config.productionTip = false
Vue.use(ElementUI);
Vue.prototype.$axios = axios
Vue.prototype.$store = store
Vue.prototype.$h5p = h5p
Vue.prototype.qs = qs
Vue.prototype.$jquery = jquery
Vue.prototype.moment = moment;



 
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
// debugger