<template>
	<div class="user">
		<!-- <el-row>
			<el-col :xs="6" :sm="6" :md="6" :lg="6" :xl="6">
				<div class="nvaLeft">
					<svg width="12" height="10.56" class="_3laxbDuw"><g><path d="M4.44 4.23h7.2a.12.12 0 0 0 .12-.12v-.84a.12.12 0 0 0-.12-.12h-7.2a.12.12 0 0 0-.12.12v.84a.12.12 0 0 0 .12.12zm-.12 3.06a.12.12 0 0 0 .12.12h7.2a.12.12 0 0 0 .12-.12v-.84a.12.12 0 0 0-.12-.12h-7.2a.12.12 0 0 0-.12.12zM11.88 0H.12A.12.12 0 0 0 0 .12v.84a.12.12 0 0 0 .12.12h11.76A.12.12 0 0 0 12 .96V.12a.12.12 0 0 0-.12-.12zm0 9.48H.12A.12.12 0 0 0 0 9.6v.84a.12.12 0 0 0 .12.12h11.76a.12.12 0 0 0 .12-.12V9.6a.12.12 0 0 0-.12-.12zM.051 5.38l2.345 1.846a.133.133 0 0 0 .216-.1V3.433a.133.133 0 0 0-.216-.1L.051 5.179a.131.131 0 0 0 0 .204z" fill="#e8edee"></path><path d="M.051 5.383l2.345 1.846a.133.133 0 0 0 .216-.1V3.436a.133.133 0 0 0-.216-.1L.051 5.182a.131.131 0 0 0 0 .201z" fill="#ff7800"></path></g></svg>
					<span>抖音数据平台</span>
				</div>
				
			</el-col>
			<el-col :xs="18" :sm="18" :md="18" :lg="18" :xl="18">
				<input type="text">
			</el-col>
		</el-row> -->
	</div>
</template>

<script>
import axios from "axios";
import { mapActions, mapGetters } from "vuex";
import qs from "qs";
export default {
  name: "gene",
  data() {
    return {
     
    };
  },
  components: {
  },
  computed: {
  },

  beforeCreate(){
    
  },
  created() {

  },
  beforeRouteLeave(to, from, next) {
  	let scrollTop = this.scrollTop =document.getElementById('productPage').scrollTop;
  	this.scrollTop = scrollTop?scrollTop :0;
  	console.log(this.scrollTop)
  	if(!to.query.time || !from.query.time || to.query.time < from.query.time){
  		 // debugger
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
		//判断回调页是否与当前前进路由相等，如果相等，删除路径
		let fromRoute =  JSON.stringify({path:from.path,name:from.name,query:from.query})
		let lastRoute = localStorage.getItem('lastRoute')
		console.log('fromRoute'+fromRoute)
		console.log('lastRoute'+lastRoute)
		if(fromRoute == lastRoute){
		  localStorage.removeItem('lastRoute')
		}
	  },
	beforeMount(){
		
	  },
	mounted() {
		// 跳转回跳页面
		let lastRoute = localStorage.getItem('lastRoute')
		if(lastRoute){
			this.$router.push(JSON.parse(lastRoute));
			return
		}
	},
	activated(){
		
	},
	deactivated(){
	},
	methods: {
	}
};
</script>

<style scoped>

</style>
