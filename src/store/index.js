import Vue from 'vue'
import Vuex from 'vuex'
import qs from "qs";
Vue.use(Vuex)



const state = {
  //登陆弹窗
  centerDialogVisible: false,
  login:null,
  wxVideoaccount:null,
	//视频播放弹窗
  showVideoDialog: false,
  
// 获取配置信息
 getConfig:{
   config:function(){
	   let configList;
	   Vue.prototype.$jquery.ajax({
		   url: '/config',
		    type: 'get',
		    async: false,
		    success: function(res) {
		        if(res.code==0){
		          configList = res.data
		         
		        }
		    },
		   })
			 return configList;
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
