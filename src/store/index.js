import Vue from 'vue'
import Vuex from 'vuex'
import qs from "qs";
Vue.use(Vuex)



const state={
	//登陆弹窗
	centerDialogVisible:false,
	refresh:{
		loginRefresh:function(){
			let login;
			if(localStorage.getItem('refresh')){
				login = localStorage.getItem('refresh')
			}else{
				Vue.prototype.$jquery.ajax({
					url:'/user/login-refresh',
					type:'get',
					async:false,
					success:function(res){
						if(res.code == 0){
							login=res.data
							localStorage.setItem('refresh',login)
						}
					}
				})
			}
			return login;
		}
	}
}
const getters={
  //登陆弹窗
  centerDialogVisible : state => state.centerDialogVisible,
}
const actions={}
const mutations={}
export default new Vuex.Store({
	state,
	mutations,
	actions,
	getters
})
