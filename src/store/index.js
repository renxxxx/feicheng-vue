import Vue from 'vue'
import Vuex from 'vuex'
import qs from "qs";
Vue.use(Vuex)



const state = {
  //登陆弹窗
  centerDialogVisible: false,
  
  refresh: {
    _logined:null,
    _login:null,
    loginCheck(){
      if(state._logined == 1)
        return state._logined;
      Vue.prototype.$jquery.ajax({
        url:'/user/login-check',
        type:'get',
        async:false,
        success:function(res){
          if(res.code == 0){
            state._logined=res.data.logined
          }
        }
      })
      return state._logined;
    },
    loginRefresh: function() {
      if(state._login != null)
        return state._login;
      Vue.prototype.$jquery.ajax({
        url: '/user/login-refresh',
        type: 'get',
        async: false,
        success: function(res) {
          if (res.code == 0) {
            state._login = res.data
            state._login.audits = ''
            state._login.types = ''
            if (res.data.wxVideoaccount) {
              if (res.data.wxVideoaccount.audit == 0) {
                state._login.audits = 0
              } else if (res.data.wxVideoaccount.audit == 1) {
                state._login.audits = 1
              } else if (res.data.wxVideoaccount.audit == 11) {
                state._login.audits = 11
              } else if (res.data.wxVideoaccount.audit == 12) {
                state._login.audits = 12
              }
            }
            if (res.data.wxVideoaccount === null) {
              state._login.types = 0
            } else if (res.data.wxVideoaccount && res.data.wxVideoaccount.type == 0) {
              state._login.types = 0
            } else if (res.data.wxVideoaccount && res.data.wxVideoaccount.type == 1) {
              state._login.types = 1
            } else if (res.data.wxVideoaccount && res.data.wxVideoaccount.type == 2) {
              state._login.types = 2
            } else if (res.data.wxVideoaccount && res.data.wxVideoaccount.type == 3) {
              state._login.types = 3
            }
          }
        }
      })
      return state._login;
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
