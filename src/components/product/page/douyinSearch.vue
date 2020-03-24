<template>
	<div class="douyinSearch" >
		<div class="search">
			<el-row>
				<div class="search_box">
					<div class="search_box_xiala">
						<span slot="reference">{{searchData}}</span>	
						<ul>
							<li @click="searchChoesFn('全部')">全部</li>
							<li @click="searchChoesFn('名称')">名称</li>
							<li @click="searchChoesFn('认证')">认证</li>
							<li @click="searchChoesFn('简介')">简介</li>
						</ul>
						<i class="el-icon-arrow-down" v-if="icon_down"></i>
						<i class="el-icon-arrow-up" v-if="icon_up"></i>
						
					</div>
					<!-- <input type="search" placeholder="请输入抖音名称或抖音号"> -->
					<!-- <span>搜索</span> -->
				</div>
			</el-row>
		</div>
		<div class="searchList"> 
			
		</div>
	</div>
</template>

<script>
import axios from 'axios'
import {mapActions,mapGetters} from 'vuex'
import qs from 'qs';
export default {
	name: 'douyinSearch',
	data () {
		return {
			icon_down:true,
			icon_up:false,
			searchData:"全部",
		}
	},
	computed:{
		
	},
	components:{

	},
	beforeCreate(){

	},
	created(){
		
	},
	//离开前判断前进和后退时间来判断是否保存滚动值
  beforeRouteLeave(to, from, next) {
	this.scrollTop =document.getElementById('productPage').scrollTop ||document.getElementById('productPage').pageYOffset
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
	mounted(){


	},
	methods: {
		searchChoesFn(_value){
			this.searchData = _value
		},
	},
}
</script>

<style scoped>

</style>
