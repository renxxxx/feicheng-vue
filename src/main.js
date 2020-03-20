
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import store from './store'
import jquery from 'jquery'
import qs from 'qs';
import h5p from '../build/h5p.js'

//版本号
Vue.prototype.$version = '2002281641-8595e87'
Vue.config.productionTip = false

Vue.prototype.$axios = axios
Vue.prototype.moment = moment;
Vue.prototype.$store = store
Vue.prototype.$h5p = h5p
Vue.prototype.qs = qs
Vue.prototype.$jquery = jquery


new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
debugger