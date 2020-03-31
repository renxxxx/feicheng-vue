import Vue from 'vue'
import Vuex from 'vuex'
import qs from "qs";
Vue.use(Vuex)



const state = {
  //登陆弹窗
  centerDialogVisible: false,
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
          console.log(res)
          login = res.data
          if (res.code == 0) {
            login.loginIf = 1
            // localStorage.setItem('refresh',JSON.stringify(login))
          } else if (res.code == 20) {
            // login.loginIf = 0
          }
        }
      })
      return login;
    }
  },
  getUserInfo:{
    info:function(){
      let userInfo,loginIf;
      Vue.prototype.$jquery.ajax({
        url: '/user/my/wx-videoaccount',
        type: 'get',
        async: false,
        success: function(res) {
            if(res.code==0){
              userInfo = res.data
              userInfo.audits = ''
              userInfo.types = ''
              if (Object.keys(res.data).length > 2) {
                userInfo.loginIf = 1
                if (res.data.audit == 0) {
                  userInfo.audits = 0
                } else if (res.data.audit == 1) {
                  userInfo.audits = 1
                } else if (res.data.audit == 11) {
                  userInfo.audits = 11
                } else if (res.data.audit == 12) {
                  userInfo.audits = 12
                }
                if (res.data.type == 0) {
                  userInfo.types = 0
                } else if (res.data.type == 1) {
                  userInfo.types = 1
                } else if (res.data.type == 2) {
                  userInfo.types = 2
                } else if (res.data.type == 3) {
                  userInfo.types = 3
                }
              }else if(Object.keys(res.data).length <= 2) {
                userInfo.loginIf = 0
              }
            }else if(res.code == 20){
                // userInfo.loginIf = 0
            }
        },
       })
       return userInfo;
    }
  },
  getVideoList:{
    list:function(){
      let videoList;
      Vue.prototype.$jquery.ajax({
        url: '/user/my/wx-videoaccount-video-list',
        type: 'get',
        async: false,
        success: function(res) {
            if(res.code==0){
              videoList = res.data
             
            }
        },
       })
       return videoList;
    }
  },
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
