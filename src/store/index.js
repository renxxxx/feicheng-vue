import Vue from 'vue'
import Vuex from 'vuex'
import qs from "qs";
Vue.use(Vuex)



const state = {
  //登陆弹窗
  centerDialogVisible: false,
	//视频播放弹窗
	showVideoDialog: false,
  refresh: {
    loginRefresh: function() {
      let login;
      let loginIf;
      // if(localStorage.getItem('refresh')){
      // 	login = JSON.parse(localStorage.getItem('refresh'))
      // }else{
      Vue.prototype.$jquery.ajax({
        url: '/user/login-refresh',
        type: 'get',
        async: false,
        success: function(res) {
          // console.log(res)

          if (res.code == 0) {
            login = res.data
            login.loginIf = 1
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
              login.loginIf = 0
              login.types = 0
            } else if (res.data.wxVideoaccount && res.data.wxVideoaccount.type == 0) {
              login.loginIf = 1
              login.types = 0

            } else if (res.data.wxVideoaccount && res.data.wxVideoaccount.type == 1) {
              login.loginIf = 1
              login.types = 1

            } else if (res.data.wxVideoaccount && res.data.wxVideoaccount.type == 2) {
              login.loginIf = 1
              login.types = 2

            } else if (res.data.wxVideoaccount && res.data.wxVideoaccount.type == 3) {
              login.loginIf = 1
              login.types = 3

            }
            // localStorage.setItem('refresh',JSON.stringify(login))
          } else if (res.code == 20) {
            login=false
            login.loginIf = 0
          }
        }
      })
      // }
      console.log(login)
      return login;
    }
  }
}
const getters = {
  //登陆弹窗
  centerDialogVisible: state => state.centerDialogVisible,
	//视频播放弹窗
	showVideoDialog: state => state.showVideoDialog,
}
const actions = {}
const mutations = {}
export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})
