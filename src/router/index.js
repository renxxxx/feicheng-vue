import Vue from 'vue'
import Store from '../store'
import Router from 'vue-router'

//展示页面
import showPage from '@/components/product/showPage.vue'
//404错误页面
import page404 from '@/components/404Page.vue'

//产品页面
import productPage from '@/components/product/productPage.vue'
import productPage_index from '@/components/product/page/index.vue'

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
			redirect:'/hospital/hospital_index',
			children:[
				// 登陆后的页面路径配置
				{
					path: 'productPage_index',
					name: 'productPage_index',
					component: productPage_index,
					meta: {auth:true,unkeepLastRoute:true},
				},
			]
		},
	]
})
router.afterEach((to,from) => {
  debugger
  // Store.state.bottomShow = !!to.meta.tabbar;
  // 缓存最后一次路径
  if(!to.meta.unkeepLastRoute){
    localStorage.setItem('lastRoute',JSON.stringify({path:to.path,name:to.name,query:to.query}))
  }
})
export default router
