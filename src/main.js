
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
// import './assets/rest.css'
  
import App from './App'
import router from './router'
import axios from 'axios'
import store from './store'
import jquery from 'jquery'
import Cookies from 'js-cookie'
import qs from 'qs';
import h5p from '../build/h5p.js'

    
import moment from 'moment'
import Viewer from 'v-viewer'
import 'viewerjs/dist/viewer.css'
Vue.use(Viewer);
Viewer.setDefaults({
  Options: { "inline": true, "button": true, "navbar": true, "title": true, "toolbar": true, "tooltip": true, "movable": true, "zoomable": true, "rotatable": true, "scalable": true, "transition": true, "fullscreen": true, "keyboard": true, "url": "data-source" }
});
import VueLazyload from 'vue-lazyload'
Vue.use(VueLazyload, {
  preLoad: 1.3,
  attempt: 1,
  loading:'./assets/loading.png'
})

 
Vue.prototype.$version = '2004071509-8cb6634'
Vue.prototype.$versionBrief = '修复了已知BUG, 优化了用户体验.'
Vue.config.productionTip = false

Vue.prototype.$axios = axios
Vue.prototype.$store = store
Vue.prototype.$h5p = h5p
Vue.prototype.qs = qs
Vue.prototype.$jquery = jquery
Vue.prototype.$Cookies = Cookies
Vue.prototype.moment = moment;


Vue.prototype.cookieOn=function() {
  debugger
  var result = false;
  if (navigator.cookiesEnabled)
    return true;
  Cookies.set('tc', 'yes', { path: "/"});
  if (Cookies.get('tc') && Cookies.get('tc').indexOf('yes') > -1)
    result = true;
  Cookies.set('tc', '', { expires: -1 });
  return result;
}




new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
// debugger
