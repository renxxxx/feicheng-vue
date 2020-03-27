<template>
	<div class="ruzhu">
		sssssssssssssssssssssssssssssssssssssssssss
	</div>
</template>

<script>
	import axios from 'axios'
	import {mapActions,mapGetters} from 'vuex'
	import qs from 'qs';
	export default {
		name: 'ruzhu',
		data() {
			return {

			}
		},
		computed: {

		},
		components: {

		},
		beforeCreate() {

		},
		created() {

		},
		//离开前判断前进和后退时间来判断是否保存滚动值
		beforeRouteLeave(to, from, next) {
			this.scrollTop = document.getElementById('productPage').scrollTop || document.getElementById('productPage').pageYOffset
			if (!to.query.time || !from.query.time || to.query.time < from.query.time) {
				if (this.$vnode && this.$vnode.data.keepAlive) {
					if (this.$vnode.parent && this.$vnode.parent.componentInstance && this.$vnode.parent.componentInstance.cache) {
						if (this.$vnode.componentOptions) {
							var key = this.$vnode.key == null ?
								this.$vnode.componentOptions.Ctor.cid + (this.$vnode.componentOptions.tag ?
									`::${this.$vnode.componentOptions.tag}` : '') :
								this.$vnode.key;
							var cache = this.$vnode.parent.componentInstance.cache;
							var keys = this.$vnode.parent.componentInstance.keys;
							if (cache[key]) {
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
				document.getElementById('productPage').scrollTop = document.getElementById('productPage').pageYOffset = vm.scrollTop;
			});

		},
		mounted() {},
		methods: {

		},
	}
</script>

<style>
</style>
