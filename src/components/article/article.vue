<template>
	<div class="article">
		<el-row :gutter='17' class="nav">
			<el-col :xs="4" :sm="4" :md="4" :lg="4" :xl="4">
				<router-link :to="{path:'/'}" style="height: 55px;width: 100%;display: block;">
					<img src="../../assets/img/logo.png" style="height:100%" alt="">
				</router-link>
			</el-col>
			<el-col :xs="20" :sm="20" :md="20" :lg="20" :xl="20">
				<div class="topNav">
					<el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
						<div class="nav_user">
							<div class="nav_data">
								<img :src="this.$store.state.login? this.$store.state.login.userLogo:''" alt="">
								<h5>{{this.$store.state.login? this.$store.state.login.userNickname:''}}</h5>
								<el-popover placement="top-start" trigger="hover">
									<div class="nav_data_xiala">
										<ul>
											<li>视频管家</li>
											<li>我的收藏</li>
											<li>购买续费</li>
											<li>我的权限</li>
											<li @click="exitFn">退出</li>
										</ul>
									</div>
									<span slot="reference" style="cursor: pointer;">体验版 </span>
								</el-popover>
								<i class="el-icon-arrow-down" style="padding-top: 25px;"></i>
							</div>
							<div class="nav_function">
								<svg width="16" height="16" viewBox="0 0 16 16" class="_pniUROVW">
									<path fill="#25f4ee" d="M6.992 3.829c.011-1.276 0-2.553.011-3.829h2.609a3.251 3.251 0 0 0 .057.666h-1.92v10.369a2.477 2.477 0 0 1-.316 1.265 2.141 2.141 0 0 1-1.651 1.048 2.212 2.212 0 0 1-1.254-.26 2.151 2.151 0 0 1-.734-.655 2.153 2.153 0 0 0 2.18-.079 2.217 2.217 0 0 0 1.028-1.852c-.011-2.225-.011-4.45-.011-6.675zm4.3-.734a3.78 3.78 0 0 0 1.186.5 3.373 3.373 0 0 0 .757.079v.587a3.719 3.719 0 0 1-1.943-1.163zm0 0"></path>
									<path fill="#25f4ee" d="M2.294 6.348a4.726 4.726 0 0 1 3.163-.666v.621a5.7 5.7 0 0 0-.87.1 4.955 4.955 0 0 0-1.943.87 4.707 4.707 0 0 0-1.423 1.8 4.833 4.833 0 0 0-.463 2.146 4.886 4.886 0 0 0 .61 2.315 3.7 3.7 0 0 0 .655.9 4.634 4.634 0 0 1-1.355-1.491 4.89 4.89 0 0 1-.666-2.609 4.967 4.967 0 0 1 .712-2.383 4.773 4.773 0 0 1 1.58-1.603zm0 0"></path>
									<path d="M7.749.666H9.68a3.957 3.957 0 0 0 .373 1.062 3.252 3.252 0 0 0 1.152 1.288.264.264 0 0 1 .079.079 3.707 3.707 0 0 0 1.954 1.163c.011.678 0 1.367 0 2.044a6.117 6.117 0 0 1-3.592-1.141c0 1.626 0 3.253.011 4.88 0 .215.011.429 0 .655a5.338 5.338 0 0 1-.7 2.259 4.914 4.914 0 0 1-1.355 1.536 4.354 4.354 0 0 1-2.474.847 5.359 5.359 0 0 1-1.344-.113 4.836 4.836 0 0 1-1.728-.757l-.034-.034a4.019 4.019 0 0 1-.655-.9 4.939 4.939 0 0 1 1.276-6.257 4.954 4.954 0 0 1 1.943-.87 5.543 5.543 0 0 1 .87-.1c.011.26 0 .52.011.768v1.321a1.869 1.869 0 0 0-1.028-.034 2.545 2.545 0 0 0-1.107.542 2.024 2.024 0 0 0-.474.6 2.227 2.227 0 0 0-.226 1.265 2.13 2.13 0 0 0 .5 1.141 2.794 2.794 0 0 0 .655.553 2.151 2.151 0 0 0 .734.655 2.309 2.309 0 0 0 1.254.26 2.113 2.113 0 0 0 1.649-1.051 2.478 2.478 0 0 0 .316-1.265c.023-3.479.011-6.935.011-10.391zm0 0"
									 fill="#fff"></path>
									<path fill="#fe2c55" d="M9.685.666c.226.011.452 0 .689 0a3.715 3.715 0 0 0 .678 2.135c.056.079.113.147.169.215a3.171 3.171 0 0 1-1.152-1.288A4.258 4.258 0 0 1 9.685.666zm3.558 3.592a3.374 3.374 0 0 0 .757.079v2.632a6.173 6.173 0 0 1-3.626-1.175v5.218a4.558 4.558 0 0 1-.113 1.175 4.851 4.851 0 0 1-1.92 2.925 4.7 4.7 0 0 1-1.717.768 4.745 4.745 0 0 1-4.552-1.412 4.646 4.646 0 0 0 1.728.757 5.358 5.358 0 0 0 1.344.113 4.354 4.354 0 0 0 2.474-.847 5.057 5.057 0 0 0 1.355-1.536 5.338 5.338 0 0 0 .7-2.259 6.371 6.371 0 0 0 0-.655c-.011-1.627-.011-3.253-.011-4.88a6.118 6.118 0 0 0 3.592 1.141c-.015-.677-.004-1.366-.015-2.044zm0 0"></path>
									<path fill="#fe2c55" d="M5.468 6.287a5.662 5.662 0 0 1 .757.045v2.7a2.064 2.064 0 0 0-1.141-.045 2.205 2.205 0 0 0-1.276 3.434 2.375 2.375 0 0 1-.655-.553 2.13 2.13 0 0 1-.5-1.141 2.227 2.227 0 0 1 .226-1.265 2.022 2.022 0 0 1 .474-.6A2.746 2.746 0 0 1 4.46 8.32a1.87 1.87 0 0 1 1.028.034V7.032c-.02-.222-.009-.481-.02-.745zm0 0"></path>
									<g fill="none" stroke="#fff" stroke-linecap="round">
										<path d="M11.5 13.5h4M13.5 11.5v4"></path>
									</g>
								</svg>
								<svg width="16" height="15.999" viewBox="0 0 16 15.999" class="_3lriKTLx _21wCsby0">
									<path d="M14.951 6.869a6.952 6.952 0 0 0-13.9 0 2.782 2.782 0 1 0 3.5 4.324L3.24 6.3a2.818 2.818 0 0 0-.455-.04 2.749 2.749 0 0 0-.3.017 5.561 5.561 0 0 1 11.039 0 2.763 2.763 0 0 0-.3-.017 2.836 2.836 0 0 0-.456.04l-1.31 4.89a2.774 2.774 0 0 0 1.316.6 5.572 5.572 0 0 1-2.436 1.533l-.115.115a1.739 1.739 0 1 0 .138 1.318 6.969 6.969 0 0 0 4.452-3.426 2.779 2.779 0 0 0 .146-4.456z"
									 fill="currentColor"></path>
								</svg>
							</div>
							<div class="nav_user_search">
								<input type="search" placeholder="搜索">
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
		<object class="center" type="text/html" v-if:url :data="url">
			
		</object> 
		</el-row>
		<login ref="loginRef"></login>
	</div>
</template>

<script>
import axios from 'axios'
import {mapActions,mapGetters} from 'vuex'
import qs from 'qs';
import login from '../common/functionPage/login.vue'
export default {
	name: 'article',
	data () {
		return {
			data:{
				url:null
			}
		}
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
		login,
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
		this.data = JSON.parse(this.$route.query.data)
		// this.$refs.urlPageRef.innerHTML = this.data.content
		// console.log(this.data);
		if(!this.$store.state.login){
			if(!this.centerDialogVisible){
				this.centerDialogVisible = true;
				this.$refs.loginRef.getData();
			}
		}
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
			let _this = this
			console.log(this.$route.query.data)
			this.$axios.get('/user/article/article?'+qs.stringify({
				articleId:this.$route.query.data
			}))
			.then(res=>{
				// console.dir(res)
				debugger;
				_this.url = res.data.data.contentUrl
			})
		}
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
		line-height: 5px!important;
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
	
	.nav_data>span:nth-child(3) {
		font-size: 12px;
		height: 22px;
		display: inline-block;
		line-height: 20px;
		padding: 0 14px;
		border-radius: 4px;
		border: 1px solid #66666d;
		background: rgba(102, 102, 109, .1);
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
		left: auto!important;
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
