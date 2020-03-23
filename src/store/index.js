import Vue from 'vue'
import Vuex from 'vuex'
import qs from "qs";
Vue.use(Vuex)



const state={
  //登陆弹窗
  centerDialogVisible:false,
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
