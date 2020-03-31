import Vue from 'vue'
import Vuex from 'vuex'
import qs from "qs";
Vue.use(Vuex)



const state = {
  //登陆弹窗
  centerDialogVisible: false,
  
  refresh: {
    loginCheck(){
      
      let logined = 1;
      Vue.prototype.$jquery.ajax({
        url:'/user/login-check',
        type:'get',
        async:false,
        success:function(res){
          
          if(res.code == 0){
            logined=res.data.logined
          }
        }
      })
      return logined;
    },
    loginRefresh: function() {
      
      let login={};
      Vue.prototype.$jquery.ajax({
        url: '/user/login-refresh',
        type: 'get',
        async: false,
        success: function(res) {
          
          if (res.code == 0) {
            login = res.data
            login.audits = ''
            login.types = ''
            if (res.data.wxVideoaccount) {
              if (res.data.wxVideoaccount.audit == 0) {
                login.audits = 0
              } else if (res.data.wxVideoaccount.audit == 1) {
                login.audits = 1
              } else if (res.data.wxVideoaccount.audit == 11) {
                login.audits = 11
              } else if (res.data.wxVideoaccount.audit == 12) {
                login.audits = 12
              }
            }
            if (res.data.wxVideoaccount === null) {
              login.types = 0
            } else if (res.data.wxVideoaccount && res.data.wxVideoaccount.type == 0) {
              login.types = 0
            } else if (res.data.wxVideoaccount && res.data.wxVideoaccount.type == 1) {
              login.types = 1
            } else if (res.data.wxVideoaccount && res.data.wxVideoaccount.type == 2) {
              login.types = 2
            } else if (res.data.wxVideoaccount && res.data.wxVideoaccount.type == 3) {
              login.types = 3
            }
          }
        }
      })
      login.loginIf = state.refresh.loginCheck();
      return login;
    }
  }
}
const getters = {
  //登陆弹窗
  centerDialogVisible: state => state.centerDialogVisible,
}
const actions = {}
const mutations = {}
export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})
