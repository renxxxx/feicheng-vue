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
const productPage = ()=>import( '@/components/product/productPage.vue')
const productPage_user = ()=>import( '@/components/product/page/user.vue')
const productPage_douyinSearch = ()=>import( '@/components/product/page/douyinSearch.vue')
const productPage_ruzhu = ()=>import( '@/components/product/page/ruzhu.vue')
const productPage_ruzhuView = ()=>import( '@/components/product/page/ruzhuView.vue')
const productPage_videoSearch = ()=>import( '@/components/product/page/videoSearch.vue')
const productPage_addressSearch = ()=>import( '@/components/product/page/addressSearch.vue')
const productPage_collection = ()=>import( '@/components/product/page/collection.vue')

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
// import productPage from '@/components/product/productPage.vue'
// import productPage_user from '@/components/product/page/user.vue'
// import productPage_douyinSearch from '@/components/product/page/douyinSearch.vue'
// import productPage_ruzhu from '@/components/product/page/ruzhu.vue'
// import productPage_ruzhuView from '@/components/product/page/ruzhuView.vue'
// import productPage_videoSearch from '@/components/product/page/videoSearch.vue'

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
		  name: 'showPage',
		  component: index,
		  meta: {unkeepLastRoute:true},
		},
		{
		  path: '/index',
		  name: 'showPage',
		  component: index,
		  meta: {unkeepLastRoute:true},
		},
		//错误页面
		{
			path: '*',
			name: 'error',
			component: notFound,
			meta: {unkeepLastRoute:true},
		},
		{
			path: '/tihuan',
			name: 'tihuan',
			component: tihuan,
			meta: {unkeepLastRoute:true},
		},
		{
			path: '/productPage',
			name: 'productPage',
			component: productPage,
			meta: {auth:true},
			redirect:'/productPage/productPage_user',
			children:[
				// 登录后的页面路径配置
				{
					path: 'productPage_user',
					name: 'productPage_user',
					component: productPage_user,
					meta: {auth:true},
				},
				{
					path: 'productPage_douyinSearch',
					name: 'productPage_douyinSearch',
					component: productPage_douyinSearch,
					meta: {auth:true},
				},
				{
					path: 'productPage_ruzhu',
					name: 'productPage_ruzhu',
					component: productPage_ruzhu,
					meta: {auth:true},
				},
				{
					path: 'productPage_videoSearch',
					name: 'productPage_videoSearch',
					component: productPage_videoSearch,
					meta: {auth:true},
				},
				{
					path: 'productPage_ruzhuView',
					name: 'productPage_ruzhuView',
					component: productPage_ruzhuView,
					meta: {auth:true},
				},
				{
					path: 'productPage_addressSearch',
					name: 'productPage_addressSearch',
					component: productPage_addressSearch,
					meta: {auth:true},
				},
				{
					path: 'productPage_collection',
					name: 'productPage_collection',
					component: productPage_collection,
					meta: {auth:true},
				}
				
			]
		},
		{
			path: '/searchDetails',
			name: 'searchDetails',
			component: searchDetails,
			meta: {auth:true},
			redirect:'/searchDetails/searchDetails_index',
			children:[
				// 登录后的页面路径配置
				{
					path: 'searchDetails_index',
					name: 'searchDetails_index',
					component: searchDetails_index,
					meta: {auth:true},
				},

			]
		},
		{
			///文章详情页面
			path: '/article',
			name: 'article',
			component: article,
			meta: {auth:true},
			// redirect:'/articleDetails/searchDetails_index',
		// 	children:[
		// 		// 登录后的页面路径配置
		// 		{
		// 			path: 'searchDetails_index',
		// 			name: 'searchDetails_index',
		// 			component: searchDetails_index,
		// 			meta: {auth:true,unkeepLastRoute:true},
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
  if(!to.meta.unkeepLastRoute){
    localStorage.setItem('lastRoute',JSON.stringify({path:to.path,name:to.name,query:to.query}))
  }

	
})
export default router
