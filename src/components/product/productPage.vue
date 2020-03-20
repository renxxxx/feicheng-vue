<template>
  <div id="productPage" ref="productPageRef">
	  <el-row class="height">
	    <el-col :xs="4" :sm="4" :md="4" :lg="4" :xl="4" class="height">
			<div class="leftNav">
				 <el-menu default-active="2" class="navList" @open="handleOpen" @close="handleClose"
				    background-color="#2b2b2e"  text-color="#e8edee" active-text-color="#ff7800" >
					<el-menu-item index="1">
					    <template slot="title">
							<img alt="">
							<span>飞橙</span>
						</template>
					</el-menu-item>
					<el-menu-item index="2">
					    <template slot="title">
							<img alt="">
							<span>首页</span>
						</template>
					</el-menu-item>
				    <el-submenu v-for="(item,inx) in leftNavList" :key="inx" v-bind:index="(inx+2)">
				        <template slot="title">
							<img :src="item.icon" alt="">
							<span>{{item.name}}</span>
						</template>
						<el-menu-item v-for="(child,zhi) in item.onechild" :key="zhi">
						     {{child.name}}
						</el-menu-item>
				    </el-submenu>
				</el-menu>
			</div>
		</el-col>
	    <el-col :xs="20" :sm="20" :md="20" :lg="20" :xl="20" class="height">
			<keep-alive>
				<router-view class="appView"/>
			</keep-alive>
		</el-col>
	  </el-row>
		
		
  </div>
</template>

<script>
import axios from 'axios'
import {mapActions,mapGetters} from 'vuex'
export default {
  name: 'productPage',
  data(){
  	return{
		// 左侧导航栏数据
		leftNavList: [{
			name:'找抖音号',
			icon:'',
			data:true,
			onechild:[{name:'抖音号搜索',data:'',url:''},
					{name:'MCN机构',data:'',url:''},
					{name:'地域找号',data:'',url:''},
					{name:'指数排行榜',data:'',url:''},
					{name:'单项指标排行',data:'',url:''},
					{name:'抖音·明星爱DOU榜',data:'',url:''},
		]},
		{
			name:'素材创意',
			icon:'',
			data:true,
			onechild:[{name:'视频搜索',data:'',url:''},
					{name:'抖音·热门视频',data:'',url:''},
					{name:'抖音·实时热点',data:'',url:''},
					{name:'音乐BGM',data:'',url:''},
					{name:'抖音·DOU听音乐榜',data:'',url:''},
					{name:'话题挑战赛',data:'',url:''},
					{name:'魔法道具',data:'',url:''},
					{name:'神评论',data:'',url:''},
		]},
		{
			name:'探店打卡',
			icon:'',
			data:false,
			onechild:[{name:'打卡地点搜索',data:'',url:''},
					{name:'热门城市',data:'',url:''},
		]},
		{
			name:'种草带货',
			icon:'',
			data:false,
			onechild:[{name:'查找商品',data:'',url:''},
					{name:'热门商品排行',data:'',url:''},
					{name:'KOL带货风向',data:'',url:''},
					{name:'带货视频',data:'',url:''},
					{name:'种草视频',data:'',url:''},
					{name:'抖音·小店达人榜',data:'',url:''},
		]},
		{
			name:'品牌营销',
			icon:'',
			data:false,
			onechild:[{name:'营销创意视频',data:'',url:''},
					{name:'品牌声量',data:'',url:''},
					{name:'带货品牌',data:'',url:''},
					{name:'抖音·品牌热DOU榜',data:'',url:''},
		]},
		{
			name:'DOU 管家',
			icon:'',
			data:true,
			onechild:[{name:'运营报表导出',data:'',url:''},
					{name:'视频实时看板',data:'',url:''},
		]},
		{
			name:'收藏 / 工具',
			icon:'',
			data:true,
			onechild:[{name:'我的收藏',data:'',url:''},
					{name:'分钟级监测视频',data:'',url:''},
					{name:'账号回采数据',data:'',url:''},
		]},
		{
			name:'权限管理',
			icon:'',
			data:true,
			onechild:[{name:'购买续费',data:'',url:''},
					{name:'我的权限',data:'',url:''},
					{name:'推广新抖',data:'',url:''},
		]},
		]
    }
  },
  beforeRouteLeave(to, from, next) {
  this.scrollTop =document.documentElement.scrollTop || window.pageYOffset || this.$refs.productPageRef.scrollTop
  if(!to.query.time || !from.query.time || to.query.time < from.query.time){
            if (this.$vnode && this.$vnode.data.keepAlive)
            {
                if (this.$vnode.parent && this.$vnode.parent.componentInstance && this.$vnode.parent.componentInstance.cache)
                {
                    if (this.$vnode.componentOptions)
                    {
                        var key = this.$vnode.key == null
                                    ? this.$vnode.componentOptions.Ctor.cid + (this.$vnode.componentOptions.tag ? `::${this.$vnode.componentOptions.tag}` : '')
                                    : this.$vnode.key;
                        var cache = this.$vnode.parent.componentInstance.cache;
                        var keys  = this.$vnode.parent.componentInstance.keys;
                        if (cache[key])
                        {
                            if (keys.length) {
                                var index = keys.indexOf(key);
                                if (index > -1) {
                                    keys.splice(index, 1);
                                }
                            }
                            delete cache[key];
                        }
                    }
                }
  		}
            this.$destroy();
  	}
  next();
  },
  //进入该页面时，用之前保存的滚动位置赋值
  beforeRouteEnter(to, from, next) {
    next(vm => {
   document.getElementById('productPage').scrollTop=document.getElementById('productPage').pageYOffset=vm.scrollTop;
  });
  
  },
  computed:{
    
  },
  mounted(){
  },
  watch:{
   
  },
  methods:{
    handleOpen(key, keyPath) {
            console.log(key, keyPath);
          },
          handleClose(key, keyPath) {
            console.log(key, keyPath);
          }
  },
}
</script>

<style>
#productPage {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100%;
  width: 100%;
  background-color: #2b2b2e;
}
.height{
	height: 100%;
}
.leftNav{
	height: 100%;
}
.navList{
	width: 100%!important;
	min-width: 130px!important;
	height: 100%;
	border: none;
}
.el-submenu .el-menu-item {
    height: 50px;
    line-height: 50px;
    padding: 0 45px;
	min-width: 100%;
}
.leftNav i{
	color: #e8edee;
}
.leftNav li:hover{
	color: #ff7800!important;
	background-color: transparent!important
}
</style>
