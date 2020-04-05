import Vue from 'vue'
import Vuex from 'vuex'
import qs from "qs";
Vue.use(Vuex)



const state = {
  //登录弹窗
  centerDialogVisible: false,
  // 全局搜索弹出显示值
	publicSearchShow:false,
  login:null,
  wxVideoaccount:null,
	//视频播放弹窗
  showVideoDialog: false,
  

 
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
  //登录弹窗
  centerDialogVisible: state => state.centerDialogVisible,
	//视频播放弹窗
	showVideoDialog: state => state.showVideoDialog,
	// 全局搜索弹出显示值
	publicSearchShow: state => state.publicSearchShow,
	
}
const actions = {}
const mutations = {}
export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})
