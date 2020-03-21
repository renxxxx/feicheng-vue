<template>
	<div id="showPage">
		<router-link :to="{path:'/productPage/productPage_index'}">
			ssss
		</router-link>
	</div>
</template>

<script>
import {mapActions,mapGetters} from 'vuex'
export default {
	name: 'account',
	data () {
		return {
		
		}
	},
	directives: {
		
	},
	beforeRouteLeave(to, from, next) {
		debugger;
		let scrollTop = this.scrollTop =document.getElementById('showPage').scrollTop;
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
	// 进入该页面时，用之前保存的滚动位置赋值
	beforeRouteEnter(to, from, next) {
		next(vm => {
		  document.getElementById('showPage').scrollTop=document.getElementById('showPage').pageYOffset=vm.scrollTop;
		});

	},
	mounted() {
		 // if(this.$store.state.hospitalEntrance.loginRefresh())
		 //  this.$toast({message:'已登录',onClose:function(){
			// thisVue.$router.replace({ path : '/hospital/hospital_index',query:{time:new Date().getTime()}});
		 //  }})
	},
	activated(){
		
	},
	computed:{
	   
	},
	methods:{
		
	},
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.showPage{
	width: 100%;
	height: 100%;
}
</style>
