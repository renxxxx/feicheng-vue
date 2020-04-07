import Vue from 'vue'
import Store from '../store'
import Router from 'vue-router'
//主页面
const index = ()=>import("@/components/index/index.vue")
//404错误页面
const notFound = ()=>import( '@/components/notFound.vue')
//替换路由
const tihuan = ()=>import( '@/components/tihuan.vue')

//产品页面
const product = ()=>import( '@/components/product/product.vue')
const product_user = ()=>import( '@/components/product/user.vue')
const product_douyinSearch = ()=>import( '@/components/product/douyinSearch.vue')
const ruzhu = ()=>import( '@/components/ruzhu/ruzhu.vue')
const product_videoSearch = ()=>import( '@/components/product/videoSearch.vue')
const product_addressSearch = ()=>import( '@/components/product/addressSearch.vue')
const product_collection = ()=>import( '@/components/product/collection/collection.vue')

//产品详情页面
const searchDetails = ()=>import( '@/components/productSearchDetails/searchDetails.vue')
const searchDetails_index = ()=>import( '@/components/productSearchDetails/page/index.vue')

//文章详情页面
const article = ()=>import( '@/components/article.vue')

// //展示页面
// import showPage from '@/components/index/showPage.vue'
// //404错误页面
// import page404 from '@/components/404Page.vue'
// //替换路由
// import tihuan from '@/components/common/tihuan.vue'

// //产品页面
// import product from '@/components/product/product.vue'
// import product_user from '@/components/product/user.vue'
// import product_douyinSearch from '@/components/product/douyinSearch.vue'
// import ruzhu from '@/components/product/ruzhu.vue'
// import ruzhuView from '@/components/product/ruzhuView.vue'
// import product_videoSearch from '@/components/product/videoSearch.vue'

// //产品详情页面
// import searchDetails from '@/components/productSearchDetails/searchDetails.vue'
// import searchDetails_index from '@/components/productSearchDetails/page/index.vue'

// //文章详情页面
// import articleDetails from '@/components/article/article.vue'
Vue.use(Router)

const router = new Router({
	routes: [
		// unkeepLastRoute为true是不需要缓存路由值
		//auth为true是需要登录状态,否则为false
		{

		  path: '/',
		  component: index,
		  meta: {},
		},
		{
		  path: '/index',
		  component: index,
		  meta: {},
		},
		//错误页面
		{
			path: '*',
			component: notFound,
			meta: {},
		},
		{
			path: '/tihuan',
			component: tihuan,
			meta: {},
		},
		{
			path: '/product',
			component: product,
			meta: {auth:true},
			redirect:'/product/product_user',
			children:[
				// 登录后的页面路径配置
				{
					path: 'product_user',
					component: product_user,
					meta: {auth:true},
				},
				{
					path: 'product_douyinSearch',
					component: product_douyinSearch,
					meta: {auth:true},
				},
				{
					path: 'ruzhu',
					component: ruzhu,
					meta: {auth:true},
				},
				{
					path: 'product_videoSearch',
					component: product_videoSearch,
					meta: {auth:true},
				},
				
				{
					path: 'product_addressSearch',
					component: product_addressSearch,
					meta: {auth:true},
				},
				{
					path: 'product_collection',
					component: product_collection,
					meta: {auth:true},
				}
				
			]
		},
		{
			path: '/searchDetails',
			component: searchDetails,
			meta: {auth:true},
			redirect:'/searchDetails/searchDetails_index',
			children:[
				// 登录后的页面路径配置
				{
					path: 'searchDetails_index',
					component: searchDetails_index,
					meta: {auth:true},
				},

			]
		},
		{
			///文章详情页面
			path: '/article',
			component: article,
			meta: {auth:true},
			// redirect:'/articleDetails/searchDetails_index',
		// 	children:[
		// 		// 登录后的页面路径配置
		// 		{
		// 			path: 'searchDetails_index',
		// 			name: 'searchDetails_index',
		// 			component: searchDetails_index,
		// 			meta: {auth:true,},
		// 		},

		// 	]
		},
	]
})
router.afterEach((to,from) => {
  debugger
  // Store.state.bottomShow = !!to.meta.tabbar;
//   if(to.name == from.name){
// 	  router.push({path:'/tihuan',query:{urlName:to.path}})
//   }
  // 缓存最后一次路径
//   if(!to.meta.unkeepLastRoute){
//     localStorage.setItem('lastRoute',JSON.stringify({path:to.path,name:to.name,query:to.query}))
//   }

	
})
export default router
