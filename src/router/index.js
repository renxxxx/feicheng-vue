import Vue from 'vue'
import Store from '../store'
import Router from 'vue-router'

//展示页面
import showPage from '@/components/product/showPage.vue'
//404错误页面
import page404 from '@/components/404Page.vue'

//产品页面
import productPage from '@/components/product/productPage.vue'
import productPage_user from '@/components/product/page/user.vue'
import productPage_douyinSearch from '@/components/product/page/douyinSearch.vue'

Vue.use(Router)

const router = new Router({
	routes: [
		// unkeepLastRoute为true是不需要缓存路由值
		//auth为true是需要登陆状态,否则为false
		{
		
		  path: '/',
		  name: 'showPage',
		  component: showPage,
		  meta: {unkeepLastRoute:true},
		},
		{
		  path: '/index',
		  name: 'showPage',
		  component: showPage,
		  meta: {unkeepLastRoute:true},
		},
		//错误页面
		{
			path: '*',
			name: 'error',
			component: page404,
			meta: {unkeepLastRoute:true},
		},
		{
			path: '/productPage',
			name: 'productPage',
			component: productPage,
			meta: {auth:true},
			redirect:'/productPage/productPage_user',
			children:[
				// 登陆后的页面路径配置
				{
					path: 'productPage_user',
					name: 'productPage_user',
					component: productPage_user,
					meta: {auth:true,unkeepLastRoute:true},
				},
				{
					path: 'productPage_douyinSearch',
					name: 'productPage_douyinSearch',
					component: productPage_douyinSearch,
					meta: {auth:true},
				},
				
			]
		},
		{
			path:'/productDetails'
		}
	]
})
router.afterEach((to,from) => {
  // debugger
  // Store.state.bottomShow = !!to.meta.tabbar;
  // 缓存最后一次路径
  if(!to.meta.unkeepLastRoute){
    localStorage.setItem('lastRoute',JSON.stringify({path:to.path,name:to.name,query:to.query}))
  }
})
export default router
