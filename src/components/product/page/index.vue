<template>
	<div>
		
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
  	let scrollTop = this.scrollTop =document.getElementById('hospital').scrollTop;
  	this.scrollTop = scrollTop?scrollTop :0;
  	console.log(this.scrollTop)
  	if(!to.query.time || !from.query.time || to.query.time < from.query.time){
  		 debugger
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
			document.getElementById('hospital').scrollTop=document.getElementById('hospital').pageYOffset=vm.scrollTop;
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
