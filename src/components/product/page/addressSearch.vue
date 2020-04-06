<template>
	<div class="douyinSearch">
		<main class="ant-pro-basicLayout-content ant-pro-basicLayout-has-header ant-layout-content" style="margin: 24px 40px 24px 16px;">
			<div class="_3UQcDOSt">
				<div class="_3Wc9DmbT amap-container" style="background: rgb(42, 42, 42);"><object style="display: block; position: absolute; top: 0; left: 0; height: 100%; width: 100%; overflow: hidden; pointer-events: none; z-index: -1;"
					 type="text/html" data="about:blank"></object>
					<div class="amap-maps">
						<div class="amap-drags">
							<div class="amap-layers" style="transform: translateZ(0px);"><canvas class="amap-layer" width="1595" height="372"
								 style="width: 1276px; height: 298px;"></canvas>
								<div class="amap-markers"></div>
							</div>
							<div class="amap-overlays"></div>
						</div>
						<div id="l7_canvaslayer1" style="position: absolute; top: 0px; height: 100%; width: 100%; pointer-events: none;"><canvas
							 width="1595" height="372" style="width: 1276px; height: 298px;"></canvas></div>
						<div class="l7_marker"></div>
						<div class="l7-popup l7-popup-anchor-bottom" style="max-width: 240px; left: 638px; top: 149px; transform: translate(-50%, -100%);">
							<div class="l7-popup-tip"></div>
							<div class="l7-popup-content"><button class="l7-popup-close-button" type="button" aria-label="Close popup">×</button>
								<div class="newPower-tooltip newPower-tooltip-click">
									<div class="newPower-title newPower-title-click">
										<img class="newPower-icon" src="//xdcdn1.newrank.cn/data/static/media/location.8080aea0.svg" alt="">
										{{addressTitle}}
									</div>
									<div class="newPower-divider newPower-divider-click"></div>
									<div class="newPower-content">
										<div class="newPower-item">
											<div class="newPower-key-click">热门账号：</div>
											<div>
												<span class="newPower-point-click">1581</span>个
											</div>
										</div>
										<div class="newPower-item">
											<div class="newPower-key-click">机构账号：</div>
											<div>
												<span class="newPower-point-click">355</span>个
											</div>
										</div>
										<div class="newPower-item">
											<div class="newPower-key-click">MCN账号：</div>
											<div>
												<span class="newPower-point-click">1132</span>个
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div style="display: none;"></div>
					<div class="amap-controls"></div><a class="amap-logo"><img src="https://webapi.amap.com/theme/v1.3/logo@2x.png"></a>
					<div class="amap-copyright" style="display: none; visibility: hidden;">
						<!--v1.4.15--> © 2020 AutoNavi <span class="amap-mcode"></span></div>
					<div class="l7-control-container">
						<div class="l7-top l7-left"></div>
						<div class="l7-top l7-right"></div>
						<div class="l7-bottom l7-left">
							<div class="l7-control-scale l7-control">
								<div class="l7-control-scale-line" style="width: 71px;">50 km</div>
							</div>
						</div>
						<div class="l7-bottom l7-right">
							<div class="l7-control-zoom l7-bar l7-control"><a class="l7-control-zoom-in" href="#">+</a><a class="l7-control-zoom-out"
								 href="#">−</a></div>
						</div>
					</div>
				</div>
				<div class="_3bltiQjc" style="transform: translate(0px, 0px); opacity: 1;">
					<div class="_k2UnNLLH">
						<div class="_1fvfN95c">
							<div class="ant-row-flex ant-row-flex-space-between ant-row-flex-middle">
								<div class="ant-col _1VZnYjrk">城市列表</div>
								<div class="ant-col">
									<div class="_3BXX0zAm ant-select-show-search ant-select-auto-complete ant-select ant-select-combobox ant-select-enabled">
										<div class="ant-select-selection
		            ant-select-selection--single" role="combobox"
										 aria-autocomplete="list" aria-haspopup="true" aria-controls="271a7984-7536-47b8-e71a-bf9b5eebcf67"
										 aria-expanded="false">
											<div class="ant-select-selection__rendered">
												<!-- <div unselectable="on" class="ant-select-selection__placeholder" style="display: block; user-select: none;">城市搜索</div> -->
												<ul>
													<li class="ant-select-search ant-select-search--inline">
														<div class="ant-select-search__field__wrap">
															<input type="text" class="ant-input ant-select-search__field" placeholder="城市搜索" value=""><span class="ant-select-search__field__mirror">&nbsp;</span></div>
													</li>
												</ul>
											</div><span class="ant-select-arrow" unselectable="on" style="user-select: none;"><i aria-label="图标: down"
												 class="anticon anticon-down ant-select-arrow-icon"><svg viewBox="64 64 896 896" focusable="false" class=""
													 data-icon="down" width="1em" height="1em" fill="currentColor" aria-hidden="true">
														<path d="M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z"></path>
													</svg></i></span>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div class="_30Ri3BYx ant-divider ant-divider-horizontal" role="separator"></div>
						<div class="_Hnt9FQ7Z">
							<div class="ant-row-flex">
								<div class="ant-col _35OlFHw5" :class="[one.data? '_HsWNCK6P':'']" @click="searchFn({name:'全国',list:['','',''],_value:'one'})">全国</div>
								<div class="ant-col _35OlFHw5" :class="[two.data? '_HsWNCK6P':'']" @click="searchFn({name:'北京',list:['11','',''],_value:'two'})">北京</div>
								<div class="ant-col _35OlFHw5" :class="[threee.data? '_HsWNCK6P':'']" @click="searchFn({name:'成都',list:['11','',''],_value:'threee'})">成都</div>
								<div class="ant-col _35OlFHw5" :class="[four.data? '_HsWNCK6P':'']" @click="searchFn({name:'上海',list:['31','',''],_value:'four'})">上海</div>
								<div class="ant-col _35OlFHw5" :class="[five.data? '_HsWNCK6P':'']" @click="searchFn({name:'广州',list:['44','4401',''],_value:'five'})">广州</div>
								<div class="ant-col _35OlFHw5" :class="[six.data? '_HsWNCK6P':'']" @click="searchFn({name:'深圳',list:['44','4403',''],_value:'six'})">深圳</div>
								<div class="ant-col _35OlFHw5" :class="[seven.data? '_HsWNCK6P':'']" @click="searchFn({name:'杭州',list:['33','3301',''],_value:'seven'})">杭州</div>
								<div class="ant-col _35OlFHw5" :class="[eight.data? '_HsWNCK6P':'']" @click="searchFn({name:'重庆',list:['50','',''],_value:'eight'})">重庆</div>
								<div class="ant-col _35OlFHw5" :class="[nine.data? '_HsWNCK6P':'']" @click="searchFn({name:'西安',list:['61','6101',''],_value:'nine'})">西安</div>
								<div class="ant-col _35OlFHw5" :class="[ten.data? '_HsWNCK6P':'']" @click="searchFn({name:'天津',list:['12','',''],_value:'ten'})">天津</div>
							</div>
							<div class="_3UPrST7d" @click="showAllAdressFn" v-if="!showAllAdressValue">全部城市<i aria-label="图标: down" class="anticon anticon-down _2BQ_lYFp"><svg viewBox="64 64 896 896"
									 focusable="false" class="" data-icon="down" width="1em" height="1em" fill="currentColor" aria-hidden="true">
										<path d="M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z"></path>
									</svg></i></div>
						</div>
					</div>
					<div class="_3Ey3wkWC" v-if="showAllAdressValue">
						<div class="ant-row-flex ant-row-flex-middle" style="margin-left: -4px; margin-right: -4px;" >
							<div class="ant-col" style="padding-left: 4px; padding-right: 4px;" v-for="(item,inx) in heardZhiMu" :id="'anchor-'+inx" :key="inx">
								<div  @click="goAnchor(item)" class="_2f_3H5r8">{{item}}</div>
							</div>
						</div>
						<div class="_25VCulan citylist_scrollWrap" ref="_25VCulan">
							<div class="" v-for="(address,num) in area" :key="address"   class="item">
								<div class="_3QApy5VX citylist_A">
									<span class="_kys44yUE">{{address.zimu}}</span>
									<span :id="address.value">{{address.label}}</span>
								</div>
								<div class="ant-row-flex ant-row-flex-middle" style="margin-left: -8px; margin-right: -8px;">
									<div class="ant-col" style="padding-left: 8px; padding-right: 8px;" v-for="(city,num) in address.children" :key="address">
										<span class="_th7e_tvJ" :id="city.value">{{city.label}}</span>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div><span>
					<div class="_1k8nCGCC">
						<div class="_1VBdwm9n">
							<div class="ant-row-flex ant-row-flex-space-between ant-row-flex-middle">
								<div class="ant-col ant-col-4"><i aria-label="图标: environment" class="anticon anticon-environment _2d5UAJgz"><svg
										 viewBox="64 64 896 896" focusable="false" class="" data-icon="environment" width="1em" height="1em" fill="currentColor"
										 aria-hidden="true">
											<path d="M512 327c-29.9 0-58 11.6-79.2 32.8A111.6 111.6 0 0 0 400 439c0 29.9 11.7 58 32.8 79.2A111.6 111.6 0 0 0 512 551c29.9 0 58-11.7 79.2-32.8C612.4 497 624 468.9 624 439c0-29.9-11.6-58-32.8-79.2S541.9 327 512 327zm342.6-37.9a362.49 362.49 0 0 0-79.9-115.7 370.83 370.83 0 0 0-118.2-77.8C610.7 76.6 562.1 67 512 67c-50.1 0-98.7 9.6-144.5 28.5-44.3 18.3-84 44.5-118.2 77.8A363.6 363.6 0 0 0 169.4 289c-19.5 45-29.4 92.8-29.4 142 0 70.6 16.9 140.9 50.1 208.7 26.7 54.5 64 107.6 111 158.1 80.3 86.2 164.5 138.9 188.4 153a43.9 43.9 0 0 0 22.4 6.1c7.8 0 15.5-2 22.4-6.1 23.9-14.1 108.1-66.8 188.4-153 47-50.4 84.3-103.6 111-158.1C867.1 572 884 501.8 884 431.1c0-49.2-9.9-97-29.4-142zM512 615c-97.2 0-176-78.8-176-176s78.8-176 176-176 176 78.8 176 176-78.8 176-176 176z"></path>
										</svg></i><span title="北京" class="_2CKbhFtO">{{addressTitle}}</span></div>
								<div class="ant-col ant-col-20">
								</div>
							</div>
						</div>
						<div class="_Xz6wi22s"></div>
						<div class="ant-row-flex ant-row-flex-space-between ant-row-flex-middle" style="padding: 0px 16px;">
							<div class="ant-col ant-col-20">视频号</div>
							<div class="ant-col ant-col-4">总粉丝数</div>
						</div>
						<!-- <div class="_Xz6wi22s"></div> -->
						<div class="_2wSet93T" id="xd_lbs_datadesc">
							<div>
								<div class="ant-list ant-list-split">
									<div class="ant-spin-nested-loading">
										<div class="ant-spin-container">
											<div v-infinite-scroll="nextPage" :infinite-scroll-disabled="load" infinite-scroll-distance="10"> 
												<ul class="ant-list-items">
													<li class="ant-list-item" v-for="(item,inx) in userList" :key="inx">
														<router-link :to="{path:'/searchDetails/searchDetails_index',query:{data:item.wxVideoaccountId}}" class="_1CvqVG0b">
															<div class="ant-row-flex ant-row-flex-space-between ant-row-flex-middle">
																<div class="ant-col ant-col-20">
																	<div class="ant-row-flex" style="margin-left: -4px; margin-right: -4px;">
																		<div class="ant-col" style="padding-left: 4px; padding-right: 4px;">
																			<div class="_EW_6tDz1">
																				<img :src="item.logo"alt="">
																			 </div>
																		</div>
																		<div class="ant-col" style="padding-left: 4px; padding-right: 4px;">
																			<div :title="item.name" class="_aQk6zb4W">{{item.name}}</div>
																			<div class="_2TVkbDFI line-1">{{item.brief}}</div>
																		</div>
																	</div>
																</div>
																<div class="ant-col ant-col-4 _2aS8tvUP"><span class="_3b8ZVHGf">{{item.fansCount}}</span></div>
															</div>
														</router-link>
													</li>
												</ul>
											</div>
										</div>
									</div>
								</div>
								<!-- <div class="_3gThqJi5">
									<div class="_3Wotu6Sb">当前为免费版，默认显示20条结果</div>
								</div> -->
							</div>
						</div>
						<div class="_2N2o_-Tz">
							<div class="ant-row-flex ant-row-flex-space-between ant-row-flex-middle">
								<div class="ant-col"><i aria-label="图标: exclamation-circle" class="anticon anticon-exclamation-circle"><svg
										 viewBox="64 64 896 896" focusable="false" class="" data-icon="exclamation-circle" width="1em" height="1em"
										 fill="currentColor" aria-hidden="true">
											<path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"></path>
											<path d="M464 688a48 48 0 1 0 96 0 48 48 0 1 0-96 0zm24-112h48c4.4 0 8-3.6 8-8V296c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v272c0 4.4 3.6 8 8 8z"></path>
										</svg></i>&nbsp; 数据更新于<span class="_1mkksQJW">4 分钟前</span> | 每日更新</div>
								<div class="ant-col"><span class="_3OJPXaMg"><svg width="14" height="14" viewBox="0 0 14 14" class="_2M4XDDkt">
											<g>
												<path d="M7,14A7,7,0,0,1,2.05,2.05a7,7,0,0,1,9.9,9.9A6.955,6.955,0,0,1,7,14ZM7,.984a6.017,6.017,0,0,0-2.34,11.559,6.016,6.016,0,0,0,6.594-9.8A5.99,5.99,0,0,0,7,.984ZM6.911,11.108a.592.592,0,1,1,.3-.079A.594.594,0,0,1,6.911,11.108Zm.018-2.032-.037,0H6.88a.494.494,0,0,1-.442-.539A3.168,3.168,0,0,1,7.556,6.751c.883-.883.9-1.162.912-1.458a1.269,1.269,0,0,0-.361-.945A1.537,1.537,0,0,0,7,3.874a1.473,1.473,0,0,0-1.469,1.47.492.492,0,0,1-.984,0A2.453,2.453,0,0,1,6.992,2.89H7a2.525,2.525,0,0,1,1.825.78,2.244,2.244,0,0,1,.631,1.675c-.035.634-.23,1.133-1.2,2.1-.492.491-.8.861-.834,1.185A.49.49,0,0,1,6.929,9.077Z"
												 transform="translate(0 0)" fill="currentColor"></path>
											</g>
										</svg><span>数据说明</span></span></div>
							</div>
						</div>
					</div>
				</span>
			</div>
		</main>
		<login ref="loginRef"></login>
	</div>
</template>

<script>
	import axios from 'axios'
	import {mapActions,mapGetters} from 'vuex'
	import qs from 'qs';
	import login from '../../common/functionPage/login.vue'
	// import area from ';
	export default {
		name: 'douyinSearch',
		data() {
			return {
				num: 0,
				kw: '',
				addressTitle:'全国',
				userList: [],
				page: 0,
				load: false,
				area1Id:'',
				area2Id:'',
				area3Id:'',
				one:{data:'false',num:0},two:{data:'false',num:0},threee:{data:'false',num:0},four:{data:'false',num:0},five:{data:'false',num:0},
				six:{data:'false',num:0},seven:{data:'false',num:0},eight:{data:'false',num:0},nine:{data:'false',num:0},ten:{data:'false',num:0},
				searchColor: false,
				showAllAdressValue:false,
				heardZhiMu:['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'],
				area:require('../../../assets/area.json'),
				id:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,34]
			}
		},
		computed: {
			centerDialogVisible: {
				get: function() {
					return this.$store.state.centerDialogVisible;
				},
				set: function(newValue) {
					this.$store.state.centerDialogVisible = newValue;
				}
			}
		},
		components: {
			login
		},
		beforeCreate() {

		},
		created() {

		},
		activated() {
			let thisVue = this
			if (this.$route.meta.auth && !this.$store.state.login) {
				this.$store.state.centerDialogVisible = true;
				this.$refs.loginRef.getData();
			}
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
		mounted() {
			this.nextPage();
			console.log(this.area)
		},
		methods: {
			searchFn(_value){
				this.area1Id = _value.list[0];
				this.area2Id = _value.list[1];
				this.area3Id = _value.list[2];
				// this.one={data:'false',num:0};this.two={data:'false',num:0};this.threee={data:'false',num:0};this.four={data:'false',num:0};this.five={data:'false',num:0};
				// this.six={data:'false',num:0};this.seven={data:'false',num:0};this.eight={data:'false',num:0};this.nine={data:'false',num:0};this.ten={data:'false',num:0};
				this.addressTitle = _value.name
				// // console.log(_value)
				
				// for(let i = 0;i<this.area.length;i++){
				// 	debugger
				// 	if(this.area[i].label == _value){
				// 		this.area1Id = this.area[i].value;
						
				// 		console.log('a')
				// 		console.log(this.area[i])
				// 	}
				// 	if(this.area[i].children.length!=0){
				// 		debugger
				// 		for(let a = 0;i<this.area[i].children.length;a++){
				// 			console.log(this.area[i].children[a])
				// 			if(this.area[i].children[a]){
				// 				if(this.area[i].children[a].label == _value){
				// 					this.area2Id = this.area[i].children[a].value;
				// 					debugger
				// 					console.log('b')
				// 					console.log(this.area[i].children[a])
				// 				}
				// 				if(this.area[i].children[a].children.length!=0){
				// 					for(let b = 0;i<this.area[i].children[a].children.length;b++){
				// 						if(this.area[i].children[a].children){
				// 							if(this.area[i].children[a].children[b].label == _value){
				// 								this.area3Id = this.area[i].children[a].children[b].value;
				// 								debugger
				// 								console.log('c')
				// 								console.log(this.area[i].children[a].children[b].label)
				// 							}
				// 						}
										
				// 					}
				// 				}
				// 			}
				// 		}
				// 	}
					console.log(this.area1Id+','+this.area2Id+','+this.area3Id)
					
				// }
				// this.area1Id = this.area.find(n=>{n.})
				this.page = 0;
				this.userList = [];
				// this.kw = _value
				this.nextPage()
			},
			nextPage(){
				this.page++;
				this.getData();
			},
			getData(){
				this.load = true;
				this.$axios.get("/user/wx-videoaccount/wx-videoaccount-list?"+qs.stringify({
					kw:this.kw,
					pn:this.page,
					area1Id:this.area1Id,
					area2Id:this.area2Id,
					area3Id:this.area3Id,
					ps:10,
				}))
				.then(res =>{
					if(res.data.code == 0){
					   if(res.data.data.itemList.length !=0){
					   	for(let i in res.data.data.itemList){
					   		this.userList.push(res.data.data.itemList[i])
					   	}
						console.log(this.userList)
					   }
					}
					this.load = false;
				})
				.catch()
			},
			showAllAdressFn(){
				console.log('ss')
				// this.showAllAdressValue = true;
			},
			goAnchor(selector) {
			        // var anchor = this.$el.querySelector("#12");
					console.dir(document.getElementById("31"))
					console.dir(document.getElementById("31").scrollTop.getElementById("31").getBoundingClientRect().height)
					// console.log(anchor.offsetHeight)
					if(anchor)
			        this.$refs._25VCulan.scrollTop = document.getElementById("31").scrollTop-document.getElementById("31").getBoundingClientRect().height
			}
		}
	}
</script>

<style scoped>
	.ant-pro-basicLayout-content {
	    position: relative;
	    margin: 24px;
	    -webkit-transition: all .2s;
	    transition: all .2s;
	}
	.ant-layout-content {
	    -ms-flex: auto;
	    flex: auto;
	    min-height: 0;
	}
	.ant-layout, .ant-layout * {
	    -webkit-box-sizing: border-box;
	    box-sizing: border-box;
	}
	._3UQcDOSt {
	    position: relative;
	}
	._3bltiQjc {
	    position: absolute;
	    top: 19px;
	    left: 15px;
	    width: 236px;
	    /* cursor: auto; */
	    -webkit-transform: translateY(-30px);
	    transform: translateY(-30px);
	    opacity: 0;
		text-align: center;
		/* cursor: pointer; */
	}
	._k2UnNLLH {
	    border-radius: 6px 6px 0 0;
	    background: #3a3a3e;
	}
	._1fvfN95c {
	    padding: 10px 16px;
	}
	.ant-layout, .ant-layout * {
	    -webkit-box-sizing: border-box;
	    box-sizing: border-box;
	}
	.ant-row-flex-middle {
	    -ms-flex-align: center;
	    align-items: center;
	}
	._3BXX0zAm {
	    width: 100px;
	}
	.ant-select, .ant-select ol, .ant-select ul {
	    margin: 0;
	    padding: 0;
	    list-style: none;
	}
	.ant-select {
	    -webkit-box-sizing: border-box;
	    box-sizing: border-box;
	    color: #e8edee;
	    font-size: 14px;
	    font-variant: tabular-nums;
	    line-height: 1.5;
	    -webkit-font-feature-settings: "tnum","tnum";
	    font-feature-settings: "tnum","tnum";
	    position: relative;
	    display: inline-block;
	    outline: 0;
	}
	.ant-select-auto-complete.ant-select .ant-select-selection--single {
	    height: auto;
	}
	.ant-select-auto-complete.ant-select .ant-select-selection {
	    border: 0;
	    -webkit-box-shadow: none;
	    box-shadow: none;
	}
	.ant-select-selection--single {
	    position: relative;
	    height: 32px;
	    cursor: pointer;
	}
	.ant-select-selection--single {
	    position: relative;
	    height: 32px;
	    cursor: pointer;
	}
	.ant-select-selection {
	    display: block;
	    -webkit-box-sizing: border-box;
	    box-sizing: border-box;
	    background-color: #2b2b2e;
	    border: 1px solid #6d6d6d;
	    border-top: 1.02px solid #6d6d6d;
	    border-radius: 4px;
	    outline: none;
	    -webkit-transition: all .3s cubic-bezier(.645,.045,.355,1);
	    transition: all .3s cubic-bezier(.645,.045,.355,1);
	    -webkit-user-select: none;
	    -moz-user-select: none;
	    -ms-user-select: none;
	    user-select: none;
	}
	.ant-select-auto-complete.ant-select .ant-select-selection__rendered {
	    height: 100%;
	    margin-right: 0;
	    margin-left: 0;
	    line-height: 32px;
	}
	.ant-select-selection--single .ant-select-selection__rendered {
	    margin-right: 24px;
	}
	.ant-select-selection__rendered {
	    position: relative;
	    display: block;
	    margin-right: 11px;
	    margin-left: 11px;
	    line-height: 30px;
	}
	.ant-select-auto-complete.ant-select .ant-select-selection__placeholder {
	    margin-right: 12px;
	    margin-left: 12px;
	}
	.ant-select-search__field__placeholder, .ant-select-selection__placeholder {
	    position: absolute;
	    top: 50%;
	    right: 9px;
	    left: 0;
	    max-width: 100%;
	    height: 20px;
	    margin-top: -10px;
	    overflow: hidden;
	    color: #bfbfbf;
	    line-height: 20px;
	    white-space: nowrap;
	    text-align: left;
	    text-overflow: ellipsis;
	}
	.ant-select-combobox .ant-select-search--inline {
	    float: none;
	    width: 100%;
	    height: 100%;
	}
	.ant-select-search--inline .ant-select-search__field__wrap {
	    width: 100%;
	    height: 100%;
	}
	.ant-select-search__field__wrap {
	    position: relative;
	    display: inline-block;
	}
	.ant-select-auto-complete.ant-select .ant-input {
	    height: 32px;
	    line-height: 1.5;
	    background: transparent;
	    border-width: 1px;
	}
	.ant-select-combobox .ant-select-search__field {
	    position: relative;
	    z-index: 1;
	    width: 100%;
	    height: 100%;
	    -webkit-box-shadow: none;
	    box-shadow: none;
	    -webkit-transition: all .3s cubic-bezier(.645,.045,.355,1),height 0s;
	    transition: all .3s cubic-bezier(.645,.045,.355,1),height 0s;
	}
	.ant-select-search--inline .ant-select-search__field {
	    width: 100%;
	    height: 100%;
	    font-size: 100%;
	    line-height: 1;
	    background: transparent;
	    border-width: 0;
	    border-radius: 4px;
	    outline: 0;
	}
	.ant-select-search__field__mirror {
	    position: absolute;
	    top: 0;
	    left: 0;
	    white-space: pre;
	    opacity: 0;
	    pointer-events: none;
	}
	 .ant-layout * {
	    -webkit-box-sizing: border-box;
	    box-sizing: border-box;
	}
	.ant-row-flex-middle {
	    -ms-flex-align: center;
	    align-items: center;
	}	
	._1VZnYjrk {
	    color: #fff;
	    font-weight: 700;
	}
	.ant-layout * {
	    -webkit-box-sizing: border-box;
	    box-sizing: border-box;
	}
	.ant-col {
	    position: relative;
	    min-height: 1px;
	}
	.ant-select, .ant-select ol, .ant-select ul {
	    margin: 0;
	    padding: 0;
	    list-style: none;
	}
	.ant-select {
	    -webkit-box-sizing: border-box;
	    box-sizing: border-box;
	    color: #e8edee;
	    font-size: 14px;
	    font-variant: tabular-nums;
	    line-height: 1.5;
	    -webkit-font-feature-settings: "tnum","tnum";
	    font-feature-settings: "tnum","tnum";
	    position: relative;
	    display: inline-block;
	    outline: 0;
	}
	._3BXX0zAm {
	    width: 100px;
	}
	.ant-select, .ant-select ol, .ant-select ul {
	    margin: 0;
	    padding: 0;
	    list-style: none;
	}
	.ant-select {
	    -webkit-box-sizing: border-box;
	    box-sizing: border-box;
	    color: #e8edee;
	    font-size: 14px;
	    font-variant: tabular-nums;
	    line-height: 1.5;
	    -webkit-font-feature-settings: "tnum","tnum";
	    font-feature-settings: "tnum","tnum";
	    position: relative;
	    display: inline-block;
	    outline: 0;
	}
	.ant-select-auto-complete {
	    -webkit-box-sizing: border-box;
	    box-sizing: border-box;
	    margin: 0;
	    padding: 0;
	    color: #e8edee;
	    font-size: 14px;
	    font-variant: tabular-nums;
	    line-height: 1.5;
	    list-style: none;
	    -webkit-font-feature-settings: "tnum","tnum";
	    font-feature-settings: "tnum","tnum";
	}
	.ant-select-auto-complete.ant-select .ant-select-selection--single {
	    height: 32px;
	}
	.ant-modal-centered:before {
    display: inline-block;
    width: 0;
    height: 100%;
    vertical-align: middle;
    content: "";
}
	.ant-select-auto-complete.ant-select .ant-select-selection {
	    border: 0;
	    -webkit-box-shadow: none;
	    box-shadow: none;
	}
	.ant-select-selection--single {
	    position: relative;
	    height: 32px;
	    cursor: pointer;
	}
	.ant-select-selection {
	    display: block;
	    -webkit-box-sizing: border-box;
	    box-sizing: border-box;
	    background-color: #2b2b2e;
	    border: 1px solid #6d6d6d;
	    border-top: 1.02px solid #6d6d6d;
	    border-radius: 4px;
	    outline: none;
	    -webkit-transition: all .3s cubic-bezier(.645,.045,.355,1);
	    transition: all .3s cubic-bezier(.645,.045,.355,1);
	    -webkit-user-select: none;
	    -moz-user-select: none;
	    -ms-user-select: none;
	    user-select: none;
	}
	.ant-select-selection--single {
	    position: relative;
	    height: 32px;
	    cursor: pointer;
	}
	.ant-select-selection {
	    display: block;
	    -webkit-box-sizing: border-box;
	    box-sizing: border-box;
	    background-color: #2b2b2e;
	    border: 1px solid #6d6d6d;
	    border-top: 1.02px solid #6d6d6d;
	    border-radius: 4px;
	    outline: none;
	    -webkit-transition: all .3s cubic-bezier(.645,.045,.355,1);
	    transition: all .3s cubic-bezier(.645,.045,.355,1);
	    -webkit-user-select: none;
	    -moz-user-select: none;
	    -ms-user-select: none;
	    user-select: none;
	}
	.ant-select-auto-complete.ant-select .ant-select-selection__rendered {
	    height: 100%;
	    margin-right: 0;
	    margin-left: 0;
	    line-height: 32px;
	}
	.ant-select-auto-complete.ant-select .ant-select-selection__placeholder {
	    margin-right: 12px;
	    margin-left: 12px;
	}
	.ant-select-search__field__placeholder, .ant-select-selection__placeholder {
	    position: absolute;
	    top: 50%;
	    right: 9px;
	    left: 0;
	    max-width: 100%;
	    height: 20px;
	    margin-top: -10px;
	    overflow: hidden;
	    color: #bfbfbf;
	    line-height: 20px;
	    white-space: nowrap;
	    text-align: left;
	    text-overflow: ellipsis;
		z-index: 99;
	}
	.ant-select-search__field__placeholder, .ant-select-selection__placeholder {
	    position: absolute;
	    top: 50%;
	    right: 9px;
	    left: 0;
	    max-width: 100%;
	    height: 20px;
	    margin-top: -10px;
	    overflow: hidden;
	    color: #bfbfbf;
	    line-height: 20px;
	    white-space: nowrap;
	    text-align: left;
	    text-overflow: ellipsis;
	}
	.ant-select-auto-complete.ant-select .ant-select-search--inline {
	    position: static;
	    float: left;
	}
	.ant-select-combobox .ant-select-search--inline {
	    float: none;
	    width: 100%;
	    height: 100%;
	}
	.ant-select-combobox .ant-select-search--inline {
	    float: none;
	    width: 100%;
	    height: 100%;
	}
	.ant-select-search--inline {
	    position: absolute;
	    width: 100%;
	    height: 100%;
	}
	.ant-select-combobox .ant-select-search__field__wrap {
	    width: 100%;
	    height: 100%;
	}
	.ant-select-auto-complete.ant-select .ant-input {
	    height: 32px;
	    line-height: 32px;
	    background-color: #2b2b2e;
	    border-width: 1px;
	}
	.ant-select-combobox .ant-select-search__field {
	    position: relative;
	    z-index: 1;
	    width: 100%;
	    height: 100%;
	    -webkit-box-shadow: none;
	    box-shadow: none;
	    -webkit-transition: all .3s cubic-bezier(.645,.045,.355,1),height 0s;
	    transition: all .3s cubic-bezier(.645,.045,.355,1),height 0s;
	}
	input[type=number], input[type=password], input[type=text], textarea {
	    -webkit-appearance: none;
	}
	.ant-input {
	    background-color: transparent;
	}
	.ant-input {
	    -webkit-box-sizing: border-box;
	    box-sizing: border-box;
	    margin: 0;
	    font-variant: tabular-nums;
	    list-style: none;
	    -webkit-font-feature-settings: "tnum","tnum";
	    font-feature-settings: "tnum","tnum";
	    position: relative;
	    display: inline-block;
	    width: 100%;
	    height: 32px;
	    padding: 4px 11px;
	    color: #e8edee;
	    font-size: 14px;
	    line-height: 1.5;
	    background-color: #2b2b2e;
	    background-image: none;
	    border: 1px solid #6d6d6d;
	    border-radius: 4px;
	    -webkit-transition: all .3s;
	    transition: all .3s;
	}
	.ant-select-auto-complete.ant-select .ant-select-selection__rendered {
	    height: 100%;
	    margin-right: 0;
	    margin-left: 0;
	    line-height: 32px;
	}
	.ant-select-selection__rendered {
	    position: relative;
	    display: block;
	    margin-right: 11px;
	    margin-left: 11px;
	    line-height: 30px;
	}
	.ant-select-selection {
	    display: block;
	    -webkit-box-sizing: border-box;
	    box-sizing: border-box;
	    background-color: #2b2b2e;
	    border: 1px solid #6d6d6d;
	    border-top: 1.02px solid #6d6d6d;
	    border-radius: 4px;
	    outline: none;
	    -webkit-transition: all .3s cubic-bezier(.645,.045,.355,1);
	    transition: all .3s cubic-bezier(.645,.045,.355,1);
	    -webkit-user-select: none;
	    -moz-user-select: none;
	    -ms-user-select: none;
	    user-select: none;
	}
	.ant-select-search--inline .ant-select-search__field {
	    width: 100%;
	    height: 100%;
	    font-size: 100%;
	    line-height: 1;
	    background: transparent;
	    border-width: 0;
	    border-radius: 4px;
	    outline: 0;
	}
	.ant-select-search__field__mirror {
	    position: absolute;
	    top: 0;
	    left: 0;
	    white-space: pre;
	    opacity: 0;
	    pointer-events: none;
	}
	ant-select-combobox .ant-select-arrow {
	    display: none;
	}
	.ant-select-combobox .ant-select-arrow {
	    display: none;
	}
	.ant-select-arrow {
	    display: inline-block;
	    color: inherit;
	    font-style: normal;
	    line-height: 0;
	    text-align: center;
	    text-transform: none;
	    vertical-align: -.125em;
	    text-rendering: optimizeLegibility;
	    -webkit-font-smoothing: antialiased;
	    -moz-osx-font-smoothing: grayscale;
	    position: absolute;
	    top: 50%;
	    right: 11px;
	    margin-top: -6px;
	    color: #6b6d6d;
	    font-size: 12px;
	    line-height: 1;
	    -webkit-transform-origin: 50% 50%;
	    -ms-transform-origin: 50% 50%;
	    transform-origin: 50% 50%;
	}
	.ant-select-arrow .ant-select-arrow-icon {
	    display: block;
	}
	._Hnt9FQ7Z {
	    padding: 16px;
	}
	.ant-row-flex, .ant-row-flex:after, .ant-row-flex:before {
	    display: -ms-flexbox;
	    display: flex;
	}
	.ant-row-flex {
	    -ms-flex-flow: row wrap;
	    flex-flow: row wrap;
	}
	._35OlFHw5 {
	    width: 20%;
	    text-align: center;
	    color: #cdcfcf;
	    margin-bottom: 8px;
	    cursor: pointer;
	}
	._HsWNCK6P {
	    /* color: #ff7800; */
	    font-weight: 700;
	}
	._3Ey3wkWC {
	    min-height: 352px;
	    border-radius: 0 0 6px 6px;
	    background: #3a3a3e;
	    margin-top: 1px;
	    -webkit-transition: all .3s;
	    transition: all .3s;
	    /* opacity: 0; */
	    padding: 16px;
	    color: #cdcfcf;
	}
	.ant-row-flex-middle {
	    -ms-flex-align: center;
	    align-items: center;
		box-sizing: border-box;
	}
	.ant-col {
	    position: relative;
	    min-height: 1px;
	}
	._2f_3H5r8 {
	    margin-bottom: 4px;
	    cursor: pointer;
	}
	._25VCulan {
	    height: 400px;
	    overflow-y: auto;
	    overflow-x: hidden;
	}
	.ant-layout, .ant-layout * {
	    -webkit-box-sizing: border-box;
	    box-sizing: border-box;
	}
	._3QApy5VX, ._th7e_tvJ {
	    margin-bottom: 8px;
		text-align: left;
	}
	._kys44yUE {
	    color: #787a7a;
	    font-size: 14px;
	    margin-right: 8px;
	}
	._th7e_tvJ {
	    display: inline-block;
	    cursor: pointer;
	    -webkit-transition: all .3s;
	    transition: all .3s;
	}
	@media screen and (max-width: 1680px)
	._1k8nCGCC {
	    width: 455px;
	}
	._1k8nCGCC {
	    position: absolute;
	    right: 40px;
	    top: 19px;
	    height: calc(100% - 38px);
	    width: 500px;
	    background-color: rgba(58,58,62,.92);
	    border-radius: 6px;
	    padding: 16px 0;
	    color: #e8edee;
	}
	._1VBdwm9n {
	    font-weight: 700;
	    color: #fff;
	    padding: 0 16px;
	}
	.ant-row-flex {
	    -ms-flex-flow: row wrap;
	    flex-flow: row wrap;
	}
	.ant-layout, .ant-layout * {
	    -webkit-box-sizing: border-box;
	    box-sizing: border-box;
	}
	.ant-col-4 {
	    display: block;
	    -webkit-box-sizing: border-box;
	    box-sizing: border-box;
	    width: 16.66666667%;
	}
	._2d5UAJgz {
	    color: #fe2c55;
	    font-size: 12px;
	}
	.anticon {
	    display: inline-block;
	    color: inherit;
	    font-style: normal;
	    line-height: 0;
	    text-align: center;
	    text-transform: none;
	    vertical-align: -.125em;
	    text-rendering: optimizeLegibility;
	    -webkit-font-smoothing: antialiased;
	    -moz-osx-font-smoothing: grayscale;
	}
	._2CKbhFtO {
	    margin-left: 4px;
	    max-width: 4em;
	    overflow: hidden;
	    text-overflow: ellipsis;
	    white-space: nowrap;
	    display: inline-block;
	    vertical-align: bottom;
	}
	.ant-col-20 {
	    display: block;
	    -webkit-box-sizing: border-box;
	    box-sizing: border-box;
	    width: 83.33333333%;
	}
	.ant-tabs {
	    -webkit-box-sizing: border-box;
	    box-sizing: border-box;
	    margin: 0;
	    padding: 0;
	    color: #e8edee;
	    font-size: 14px;
	    font-variant: tabular-nums;
	    line-height: 1.5;
	    list-style: none;
	    -webkit-font-feature-settings: "tnum","tnum";
	    font-feature-settings: "tnum","tnum";
	    position: relative;
	    overflow: hidden;
	    zoom: 1;
	}
	.ant-tabs:after, .ant-tabs:before {
	    display: table;
	    content: "";
	}
	._1nF74FAR .ant-tabs-bar {
	    border: 1px solid #6d6d6d;
	    padding: 0 32px;
	    border-radius: 4px;
	    margin: 0;
	}
	.ant-tabs-nav-container-scrolling {
	    padding-right: 32px;
	    padding-left: 32px;
	}
	.ant-tabs-nav-container {
	    position: relative;
	    -webkit-box-sizing: border-box;
	    box-sizing: border-box;
	    margin-bottom: -1px;
	    overflow: hidden;
	    font-size: 14px;
	    line-height: 1.5;
	    white-space: nowrap;
	    zoom: 1;
	}
	.ant-tabs-nav-container:after, .ant-tabs-nav-container:before {
	    display: table;
	    content: "";
	}
	:root .ant-tabs-tab-prev {
	    -webkit-filter: none;
	    filter: none;
	}
	.ant-tabs-tab-next.ant-tabs-tab-arrow-show, .ant-tabs-tab-prev.ant-tabs-tab-arrow-show {
	    width: 32px;
	    height: 100%;
	    opacity: 1;
	    pointer-events: auto;
	}
	.ant-tabs-tab-next-icon, .ant-tabs-tab-prev-icon {
	    position: absolute;
	    top: 50%;
	    left: 50%;
	    font-weight: 700;
	    font-style: normal;
	    -webkit-font-feature-settings: normal;
	    font-feature-settings: normal;
	    font-variant: normal;
	    line-height: inherit;
	    text-align: center;
	    text-transform: none;
	    -webkit-transform: translate(-50%,-50%);
	    -ms-transform: translate(-50%,-50%);
	    transform: translate(-50%,-50%);
	}
	.anticon {
	    display: inline-block;
	    color: inherit;
	    font-style: normal;
	    line-height: 0;
	    text-align: center;
	    text-transform: none;
	    vertical-align: -.125em;
	    text-rendering: optimizeLegibility;
	    -webkit-font-smoothing: antialiased;
	    -moz-osx-font-smoothing: grayscale;
	}
	.ant-tabs-tab-next-icon-target, :root .ant-tabs-tab-prev-icon-target {
	    font-size: 12px;
	}
	.ant-tabs-nav-wrap {
	    margin-bottom: -1px;
	    overflow: hidden;
	}
	.ant-tabs-nav-scroll {
	    overflow: hidden;
	    white-space: nowrap;
	}
	.ant-tabs-nav {
	    position: relative;
	    display: inline-block;
	    -webkit-box-sizing: border-box;
	    box-sizing: border-box;
	    margin: 0;
	    padding-left: 0;
	    list-style: none;
	    -webkit-transition: -webkit-transform .3s cubic-bezier(.645,.045,.355,1);
	    transition: -webkit-transform .3s cubic-bezier(.645,.045,.355,1);
	    transition: transform .3s cubic-bezier(.645,.045,.355,1);
	    transition: transform .3s cubic-bezier(.645,.045,.355,1),-webkit-transform .3s cubic-bezier(.645,.045,.355,1);
	}
	.ant-tabs-nav:after, .ant-tabs-nav:before {
	    display: table;
	    content: " ";
	}
	._1nF74FAR .ant-tabs-nav .ant-tabs-tab-active {
	    font-weight: 700;
	}
	.ant-tabs-nav .ant-tabs-tab {
	    position: relative;
	    display: inline-block;
	    -webkit-box-sizing: border-box;
	    box-sizing: border-box;
	    height: 100%;
	    margin: 0 32px 0 0;
	    padding: 0;
	    text-decoration: none;
	    cursor: pointer;
	    -webkit-transition: color .3s cubic-bezier(.645,.045,.355,1);
	    transition: color .3s cubic-bezier(.645,.045,.355,1);
	}
	.ant-tabs-nav .ant-tabs-tab:before {
	    position: absolute;
	    top: -1px;
	    left: 0;
	    width: 100%;
	    border-top: 2px solid transparent;
	    border-radius: 4px 4px 0 0;
	    -webkit-transition: all .3s;
	    transition: all .3s;
	    content: "";
	    pointer-events: none;
	}
	.ant-tabs-tab-active ._QdwKqhgu {
	    color: #fff;
	}
	.ant-tabs-nav .ant-tabs-tab {
	    position: relative;
	    display: inline-block;
	    -webkit-box-sizing: border-box;
	    box-sizing: border-box;
	    height: 100%;
	    margin: 0 32px 0 0;
	    padding: 0;
	    text-decoration: none;
	    cursor: pointer;
	    -webkit-transition: color .3s cubic-bezier(.645,.045,.355,1);
	    transition: color .3s cubic-bezier(.645,.045,.355,1);
	}
	.ant-tabs-nav .ant-tabs-tab:before {
	    position: absolute;
	    top: -1px;
	    left: 0;
	    width: 100%;
	    border-top: 2px solid transparent;
	    border-radius: 4px 4px 0 0;
	    -webkit-transition: all .3s;
	    transition: all .3s;
	    content: "";
	    pointer-events: none;
	}
	._QdwKqhgu {
	    line-height: 32px;
	    font-weight: 400;
	    color: #cdcfcf;
	}
	.ant-tabs-nav .ant-tabs-tab {
	    position: relative;
	    display: inline-block;
	    -webkit-box-sizing: border-box;
	    box-sizing: border-box;
	    height: 100%;
	    margin: 0 32px 0 0;
	    padding: 0;
	    text-decoration: none;
	    cursor: pointer;
	    -webkit-transition: color .3s cubic-bezier(.645,.045,.355,1);
	    transition: color .3s cubic-bezier(.645,.045,.355,1);
	}
	.ant-tabs .ant-tabs-bottom-content.ant-tabs-content-animated, .ant-tabs .ant-tabs-top-content.ant-tabs-content-animated {
	    display: -ms-flexbox;
	    display: flex;
	    -ms-flex-direction: row;
	    flex-direction: row;
	    -webkit-transition: margin-left .3s cubic-bezier(.645,.045,.355,1);
	    transition: margin-left .3s cubic-bezier(.645,.045,.355,1);
	    will-change: margin-left;
	}
	.ant-tabs-content:before {
	    display: block;
	    overflow: hidden;
	    content: "";
	}
	.ant-tabs .ant-tabs-bottom-content>.ant-tabs-tabpane, .ant-tabs .ant-tabs-top-content>.ant-tabs-tabpane {
	    -ms-flex-negative: 0;
	    flex-shrink: 0;
	    width: 100%;
	    opacity: 1;
	    -webkit-transition: opacity .45s;
	    transition: opacity .45s;
	}
	.ant-tabs-nav-container:after, .ant-tabs-nav-container:before {
	    display: table;
	    content: "";
	}
	:root .ant-tabs-tab-prev {
	    -webkit-filter: none;
	    filter: none;
	}
	.ant-tabs-tab-next.ant-tabs-tab-arrow-show, .ant-tabs-tab-prev.ant-tabs-tab-arrow-show {
	    width: 32px;
	    height: 100%;
	    opacity: 1;
	    pointer-events: auto;
	}
	.ant-tabs-tab-next-icon, .ant-tabs-tab-prev-icon {
	    position: absolute;
	    top: 50%;
	    left: 50%;
	    font-weight: 700;
	    font-style: normal;
	    -webkit-font-feature-settings: normal;
	    font-feature-settings: normal;
	    font-variant: normal;
	    line-height: inherit;
	    text-align: center;
	    text-transform: none;
	    -webkit-transform: translate(-50%,-50%);
	    -ms-transform: translate(-50%,-50%);
	    transform: translate(-50%,-50%);
	}
	:root .ant-tabs-tab-next-icon-target, :root .ant-tabs-tab-prev-icon-target {
	    font-size: 12px;
	}
	.ant-list-items {
	    margin: 0;
	    padding: 0;
	    list-style: none;
	}
	.ant-list-split .ant-list-item {
	    border-bottom: 1px solid #6d6d6d;
	}
	._2wSet93T .ant-list-item {
	    padding: 12px 16px;
	}
	.ant-list-item {
	    display: -ms-flexbox;
	    display: flex;
	    -ms-flex-align: center;
	    align-items: center;
	    padding: 12px 0;
	}
	.ant-list * {
	    outline: none;
	}
	._1CvqVG0b {
	    display: block;
	    color: #e8edee;
	    width: 100%;
	    padding: 4px 0;
	}
	.ant-list * {
	    outline: none;
	}
	.ant-list * {
	    outline: none;
	}
	.ant-layout, .ant-layout * {
	    -webkit-box-sizing: border-box;
	    box-sizing: border-box;
	}
	.ant-col-20 {
	    display: block;
	    -webkit-box-sizing: border-box;
	    box-sizing: border-box;
	    width: 83.33333333%;
	}
	.ant-list * {
	    outline: none;
	}
	.ant-layout, .ant-layout * {
	    -webkit-box-sizing: border-box;
	    box-sizing: border-box;
	}
	.ant-list * {
	    outline: none;
	}
	._EW_6tDz1 {
	    width: 40px;
	    height: 40px;
	    border: 2px solid #fff;
	    border-radius: 50%;
	    overflow: hidden;
	    box-sizing: border-box;
	}
	.ant-list * {
	    outline: none;
	}
	.ant-list * {
	    outline: none;
	}
	._21cnzwb0, ._aQk6zb4W {
	    overflow: hidden;
	    text-overflow: ellipsis;
	    white-space: nowrap;
	}
	._aQk6zb4W {
	    max-width: 10em;
	}
	.ant-list * {
	    outline: none;
	}
	._2TVkbDFI {
	    color: #787a7a;
	}
	.ant-list * {
	    outline: none;
	}
	._3b8ZVHGf {
	    font-size: 16px;
	}
	._2wSet93T {
	    height: calc(100% - 90px);
	    overflow-y: auto;
	    overflow-x: hidden;
	}
	::-webkit-scrollbar {
	    width: 8px;
	    height: 8px;
	    -webkit-appearance: none;
	}
	::-webkit-scrollbar-thumb {
	    border-radius: 6px;
	    background-color: #66666d;
	}
	._2wSet93T::-webkit-scrollbar-track {
	    background-color: rgba(58,58,62,.92);
	}
	::-webkit-scrollbar-track {
	    background-color: #2b2b2e;
	}
	::selection {
	    color: #fff;
	    background: #ff7800;
	}
	._3gThqJi5 {
	    position: relative;
	}
	._3Wotu6Sb {
	    margin-top: 24px;
	    color: #787a7a;
	    text-align: center;
	}
	._2N2o_-Tz {
	    margin-top: 8px;
	    color: #787a7a;
	    padding: 0 16px;
	}
	.ant-layout, .ant-layout * {
	    -webkit-box-sizing: border-box;
	    box-sizing: border-box;
	}
	.ant-row-flex-middle {
	    -ms-flex-align: center;
	    align-items: center;
	}
	.ant-row-flex-space-between {
	    -ms-flex-pack: justify;
	    justify-content: space-between;
	}
	.ant-col {
	    position: relative;
	    min-height: 1px;
	}
	.ant-col {
	    position: relative;
	    min-height: 1px;
	}
	._3OJPXaMg {
	    color: #787a7a;
	    cursor: default;
	}
	._2M4XDDkt {
	    margin-right: 4px;
	    vertical-align: -2px;
	}
	._Xz6wi22s {
	    height: 24px;
	}
	@media screen and (max-width: 1680px)
	._1k8nCGCC {
	    width: 455px;
	}
	._30Ri3BYx {
	    margin: 0;
	}
	.ant-divider-horizontal {
	    display: block;
	    clear: both;
	    width: 100%;
	    min-width: 100%;
	    height: 1px;
	    margin: 24px 0;
	}

	.ant-divider {
	    -webkit-box-sizing: border-box;
	    box-sizing: border-box;
	    margin: 0;
	    padding: 0;
	    color: #e8edee;
	    font-size: 14px;
	    font-variant: tabular-nums;
	    line-height: 1.5;
	    list-style: none;
	    -webkit-font-feature-settings: "tnum","tnum";
	    font-feature-settings: "tnum","tnum";
	    background: #6d6d6d;
		
	}
	._EW_6tDz1 img {
	    width: 100%;
	    height: 100%;
	    object-fit: convert;
	}
	._3UPrST7d {
	    text-align: center;
	    color: #787a7a;
	    cursor: pointer;
	}
	._25VCulan {
	    height: 400px;
	    overflow-y: auto;
	    overflow-x: hidden;
	}
</style>
