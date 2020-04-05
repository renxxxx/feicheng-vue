<template>
	<div class="article">
		<el-row :gutter='17' class="nav">
			<el-col :xs="4" :sm="4" :md="4" :lg="3" :xl="3">
				<router-link :to="{path:'/'}" class='logo' style="height: 55px;width: 100%;display: block;position: relative">
					<div class="before"></div>
					<img src="../../assets/img/logo.png"   alt="">
				</router-link>
			</el-col>
			<el-col :xs="20" :sm="20" :md="20" :lg="21" :xl="21">
				<div class="topNav">
					<el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
						<div class="nav_user">
							<div class="nav_data">
								<img :src="this.$store.state.login? this.$store.state.login.userLogo:''" alt="">
								<h5>{{this.$store.state.login? this.$store.state.login.userNickname:''}}</h5>
								<el-popover placement="top-start" trigger="hover">
									<div class="nav_data_xiala">
										<ul>
											<!-- <li>视频管家</li> -->
											<li>我的收藏</li>
											<!-- <li>购买续费</li> -->
											<!-- <li>我的权限</li> -->
											<li @click="exitFn">退出</li>
										</ul>
									</div>
									<span v-if="this.$store.state.login" slot="reference" style="cursor: pointer;" >
										<span class="spanColor">
											{{ (!this.$store.state.wxVideoaccount ||  this.$store.state.wxVideoaccount.type==null)?"体验版"
											:this.$store.state.wxVideoaccount.type==0?"体验版"
											:this.$store.state.wxVideoaccount.type==1?"个人号"
											:this.$store.state.wxVideoaccount.type==2?"达人号"
											:this.$store.state.wxVideoaccount.type==3?"企业号"
											:"未知" }}
											{{(!this.$store.state.wxVideoaccount || this.$store.state.wxVideoaccount.audit==null) ?""
											:this.$store.state.wxVideoaccount.audit==0?"(审核中)"
											:this.$store.state.wxVideoaccount.audit==11?"(已认证)"
											:this.$store.state.wxVideoaccount.audit==12?"(认证失败)"
											:"未知" }}
										</span>
										<i class="el-icon-arrow-down"></i>
									</span>
								</el-popover>
							</div>
							<div class="nav_function">

								<svg width="16" height="15.999"  viewBox="0 0 40 37" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
									<!-- Generator: Sketch 52.4 (67378) - http://www.bohemiancoding.com/sketch -->
									<title>画板 copy 4</title>
									<desc>Created with Sketch.</desc>
									<g id="画板-copy-4" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
										<path d="M5.39067365,3.85377784 C3.84231863,2.99561219 3.19707559,3.96073193 3.57812555,8.31646132 C4.49278916,18.801859 5.83023749,26.0066034 7.46610122,30.0973829 C8.65509883,33.0706911 9.57117167,33.7637676 10.3142496,33.3988179 C11.6245853,32.7552695 14.4149117,28.5567184 18.2183327,21.1758626 C12.8922626,11.4518541 8.32996854,5.48286283 5.39067365,3.85377784 Z M29.6857504,33.3988179 C30.4288283,33.7637676 31.3449012,33.0706911 32.5338988,30.0973829 C34.1697625,26.0066034 35.5072108,18.801859 36.4219069,8.31609005 C36.8029244,3.96073193 36.1576814,2.99561219 34.6093264,3.85377784 C31.6700315,5.48286282 27.1077374,11.4518541 21.7816623,21.1758529 C25.5850859,28.5567147 28.3754141,32.7552692 29.6857504,33.3988179 Z M11.6367539,36.0915828 C6.06554735,38.8277834 2.43670477,29.753192 0.589507417,8.57753894 C0.0373697329,2.26613027 2.38340755,-1.24294655 6.84497086,1.22984575 C10.2520331,3.11818774 14.7731509,8.90088485 20,18.2031162 C25.2268491,8.90088485 29.7479669,3.11818774 33.1550291,1.22984575 C37.6165925,-1.24294655 39.9626303,2.26613027 39.410525,8.57716768 C37.5632952,29.753192 33.9344527,38.8277834 28.3632461,36.0915828 C26.3648155,35.1100885 23.7019234,31.26214 20,24.2487383 C16.2980766,31.26214 13.6351845,35.1100885 11.6367539,36.0915828 Z" id="合并形状" fill="#F49732" fill-rule="nonzero"></path>
									</g>
								</svg>
								<svg width="16" height="15.999" viewBox="0 0 16 15.999" class="_3lriKTLx _21wCsby0">
									<path d="M14.951 6.869a6.952 6.952 0 0 0-13.9 0 2.782 2.782 0 1 0 3.5 4.324L3.24 6.3a2.818 2.818 0 0 0-.455-.04 2.749 2.749 0 0 0-.3.017 5.561 5.561 0 0 1 11.039 0 2.763 2.763 0 0 0-.3-.017 2.836 2.836 0 0 0-.456.04l-1.31 4.89a2.774 2.774 0 0 0 1.316.6 5.572 5.572 0 0 1-2.436 1.533l-.115.115a1.739 1.739 0 1 0 .138 1.318 6.969 6.969 0 0 0 4.452-3.426 2.779 2.779 0 0 0 .146-4.456z"
									 fill="currentColor"></path>
								</svg>
							</div>
							<div class="nav_user_search">
								<input type="search" placeholder="搜索" @click="searchDiialogFn" readonly>
								<svg viewBox="64 64 896 896" focusable="false" class="" data-icon="search" width="1em" height="1em" fill="currentColor"
								 aria-hidden="true">
									<path d="M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0 0 11.6 0l43.6-43.5a8.2 8.2 0 0 0 0-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z"></path>
								</svg>
							</div>
						</div>
					</el-col>
				</div>
			</el-col>
		</el-row>
		<el-row :gutter='17' class="nav" style="background:#FFFFFF;margin-top: 57px;">
			 <iframe ref="iframe" align="center" width="100%" height="170" class="center">
			 </iframe>
		</el-row>
		<login ref="loginRef"></login>
		<searchDialog></searchDialog>
	</div>
</template>

<script>
import axios from 'axios'
import {mapActions,mapGetters} from 'vuex'
import qs from 'qs';
import login from '../common/functionPage/login.vue'
import searchDialog from '../product/function/searchDialog.vue'
export default {
	name: 'article',
	data () {
		return {
			data:{
			}
		};
	},
	computed:{
		centerDialogVisible: {
		  get: function() {
		    return this.$store.state.centerDialogVisible;
		  },
		  set: function(newValue) {
		    this.$store.state.centerDialogVisible = newValue;
		  }
		}
	},
	components:{
		login,searchDialog
	},
	beforeCreate(){

	},
	created(){
		
	},
	//离开前判断前进和后退时间来判断是否保存滚动值
  beforeRouteLeave(to, from, next) {
	this.scrollTop =document.getElementById('app').scrollTop ||document.getElementById('app').pageYOffset
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
	 document.getElementById('app').scrollTop=document.getElementById('app').pageYOffset=vm.scrollTop;
	});

  },
	mounted(){
		//this.data = JSON.parse(this.$route.query.data)
		// this.$refs.urlPageRef.innerHTML = this.data.content
		// //console.log(this.data);
		// if(!this.$store.state.login){
		// 	if(!this.centerDialogVisible){
		// 		this.centerDialogVisible = true;
		// 		this.$refs.loginRef.getData();
		// 	}
		// }
		this.getData()
	},
	methods: {
		exitFn(){
			this.$axios.post("/user/logout")
			.then(res=>{
				if(res.data.code == 0){
					localStorage.clear();
					this.$router.replace('/')
					location.reload()
				}
			})
		},
		getData(){
			// var _this = this
			// //console.log(this.$route.query.data)
			this.$axios.get('/user/article/article?'+qs.stringify({
				articleId:this.$route.query.data
			}))
			.then(res=>{
				// console.dir(res)
				debugger;
				// this.url = res.data.data.contentUrl;
				this.$refs.iframe.src =res.data.data.contentUrl; 
				// //console.log(this.url)
			})
		},
		searchDiialogFn(){
		this.$store.state.publicSearchShow = true
				  
		},
	},
}
</script>

<style>
.article{
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	height: 100%;
	width: 100%;
	overflow-y: scroll;
	overflow-x:hidden;
	min-width: 800px;
	background-color: #f6fff042;
}
.logo>img{
	width: 34%;
	    position: absolute;
	    left: 34px;
	top: 0;
	bottom: 0;
	margin: auto 0px;
}

.before{
	width: 2px;
	height: 38px;
	position: absolute;
	left: 0;
	top: 0;
	bottom: 0;
	margin: auto 0px;
	background-color: rgb(255, 120, 0);
}
.nav{
	background-color: #2b2b2e;
}
.article::-webkit-scrollbar {
    width: 8px;
    height: 8px;
    -webkit-appearance: none;
}
.article::-webkit-scrollbar-thumb {
    border-radius: 6px;
    background-color: #66666d;
}
.article::-webkit-scrollbar-track {
    background-color: #2b2b2e;
}
.article::selection {
    color: #fff;
    background: #ff7800;
}
	.topNav {
		width: 100%;
		height: 55px;
		line-height: 55px;
		border-bottom: 1px solid #3a3a3e;
	}

	.nav_title {
		width: 100%;
	}

	.tanAbout {
		margin-left: 4px;
		display: inline;
		position: relative;
	}

	.tanAbout>span:first-child {
		padding: 0 16px;
		background: #fe2c55;
		font-size: 16px;
		border-radius: 16px;
		line-height: 30px;
		cursor: pointer;
		z-index: 2;
		-webkit-transition: all .2s ease;
		transition: all .2s ease;
		display: inline-flex;
		height: 30px;
		color: #fff;
		line-height: 30px;
		position: relative;
	}

	.tanAbout>span>svg {
		margin-top: 6px;
		/* position: absolute;
	top: 0;
	bottom: 0;
	right: 0;
	margin: auto 0; */
	}

	.tanchuang {
		width: 484px;
		background: #5a5a5a;
		border-radius: 4px;
		box-shadow: 0 3px 6px rgba(0, 0, 0, .1);
		padding: 45px 24px 35px 27px;
		position: absolute;
		left: 0;
		top: 27px;
		z-index: 1;
		line-height: 1.5;
		background-size: 388px 194px;
		background-position: 100% 0;
		background-repeat: no-repeat;
	}

	.tanchuang>svg {
		display: inline-block;
		float: left;
	}

	.tanchuang>span:nth-child(2) {
		display: inline-block;
		font-size: 32px;
		color: #fff;
		align-items: center;
		font-weight: 700;
		margin-left: 4px;
		margin-bottom: 22px;
	}

	.tanchuangcolor>span {
		margin-top: 16px;
		height: 32px;
		line-height: 32px;
		display: inline-block;
		font-weight: 400;
		white-space: nowrap;
		text-align: center;
		background-image: none;
		-webkit-box-shadow: 0 2px 0 rgba(0, 0, 0, .015);
		box-shadow: 0 2px 0 rgba(0, 0, 0, .015);
		cursor: pointer;
		-webkit-transition: all .3s cubic-bezier(.645, .045, .355, 1);
		transition: all .3s cubic-bezier(.645, .045, .355, 1);
		-webkit-user-select: none;
		-moz-user-select: none;
		-ms-user-select: none;
		user-select: none;
		-ms-touch-action: manipulation;
		touch-action: manipulation;
		height: 32px;
		padding: 0 15px;
		font-size: 14px;
		border-radius: 4px;
		color: #e8edee;
		border: 1px solid #6d6d6d;
	}

	.tanchuangcolor>span:active,
	.nav_user>input:active {
		color: #d95e00;
		background-color: transparent;
		border-color: #d95e00
	}

	.tanchuangcolor>span:hover,
	.nav_user>input:hover {
		color: #d95e00;
		background-color: transparent;
		border-color: #d95e00
	}

	.tanchuangcolor>span:focus,
	.nav_user>input:focus {
		color: #d95e00;
		background-color: transparent;
		border-color: #d95e00
	}

	.nav_user {
		height: 56px;
		/* position: absolute; */
	}

	.nav_user_search {
		position: relative;
		float: right;
	}

	.nav_user_search>input {
		height: 24px;
		width: 162px;
		color: #e8edee;
		border: 1px solid #6d6d6d;
		background: transparent;
		padding-left: 30px;
		border-radius: 5px;
	}

	.nav_user_search>input:active {
		transition: all .5s;
		color: #d95e00;
		border: 1px solid #ff9429;
	}

	.nav_user_search>input:hover {
		transition: all .5s;
		color: #d95e00;
		border: 1px solid #ff9429;
	}

	.nav_user_search>input:focus {
		transition: all .5s;
		color: #d95e00;
		border: 1px solid #ff9429;
	}

	.nav_function {
		height: 100%;
		width: 50px;
		float: right;
		margin-left: 12px;
		position: relative;
	}

	.nav_function>svg:hover {
		cursor: pointer;
		color: #ff7800;
		transition: color .2s ease;
	}

	.nav_function>svg:first-child {
		position: absolute;
		top: 0;
		bottom: 0;
		margin: auto 0;
		left: 0;
	}

	.nav_function>svg:last-child {
		position: absolute;
		top: 0;
		bottom: 0;
		margin: auto 0;
		right: 0;
	}

	.nav_user_search>svg {
		position: absolute;
		left: 10px;
		top: 0px;
		bottom: 0px;
		margin: auto 0px;
	}
	.nav_data{
		float: right;
		margin-right: 20px;
		height: 56px;
		line-height: 56px!important;
	}
	.nav_data>i{
			line-height: 0;
		}
	.nav_data>img {
		height: 24px;
		width: 24px;
		border-radius: 50%;
		margin-right: 7px;
		position: relative;
	}
	.nav_data>h5{
		display: inline;
		margin-right: 5px;
	}
	.nav_data:before {
		content: '';
		/* height: 100%; */
		display: inline-block;
		vertical-align: middle;
		width: 1px;
		height: 12px;
		background: #66666d;
		margin: 0 16px;
	}
	
	.nav_data>span:nth-child(2) {
		margin-right: 4px;
	}
	
	.spanColor{
		font-size: 12px;
		height: 22px;
		line-height: 22px;
		padding: 0 14px;
		border-radius: 4px;
		border: 1px solid #66666d;
		background: rgba(102,102,109,.1);
		display: inline-block;
	}
	.nav_data_xiala{
		width: 100px;
		margin: 0px auto;
	}
	.nav_data_xiala>ul {
		width: 100px;
		/* height: 166px; */
		border-radius: 4px;
		padding: 0px;
		background-color: #2b2b2e;
		-webkit-box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
		box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
	}
	
	.nav_data_xiala>ul>li {
		height: 42px;
		line-height: 42px;
		text-align: center;
		width: 100%;
		/* padding: 5px 12px; */
		color: #e8edee;
		font-weight: 400;
		font-size: 14px;
		/* line-height: 22px; */
		white-space: nowrap;
		cursor: pointer;
		transition: all .3s;
	}
	
	.nav_data_xiala>ul>li:hover {
		transition: all .3s;
		background-color: hsla(0, 0%, 100%, .1);
	}
	.center{
		padding: 5px;
		width: 100%;
		text-align: center;
		color: rgba(255, 255, 255, 0.65);
	}
	.data{
		color: #cdcfcf;
	}
	.el-popover {
	    position: absolute;
	    background: transparent;
	    min-width: none;
	    border: none;
	    padding: 0px;
	    z-index: 2000;
	    color: #cdcfcf;
	    line-height: 0;
	    text-align: justify;
	    font-size: 14px;
	   box-shadow:none;
	    word-break: break-all;
		top: 30px!important;
		/* left: auto!important; */
		right: 0px;
		    /* left: 285px!important; */
	}
	.el-popper[x-placement^=top] .popper__arrow{
		display: none;
	}
	.el-popper[x-placement^=bottom] .popper__arrow{
		display: none;
	}
	.el-icon--right {
	    display: none;
	}
</style>
