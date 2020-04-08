<template>
	<div class="douyinSearch" style="margin-top:24px;">
		<div class="search">
			<el-row style="height: 60px;">
				<div class="search_box">
					<div class="search_box_input">
						<img src="../../assets/img/search.png" alt="">
						<input @click="searchColor=true"  type="search" @keydown.enter="searchFn" v-model="kw" placeholder="请输入关键字">
						<svg v-if="kw" @click="kw =''" viewBox="64 64 896 896" focusable="false" class="" data-icon="close-circle" width="1em"
						 height="1em" fill="currentColor" aria-hidden="true">
							<path d="M685.4 354.8c0-4.4-3.6-8-8-8l-66 .3L512 465.6l-99.3-118.4-66.1-.3c-4.4 0-8 3.5-8 8 0 1.9.7 3.7 1.9 5.2l130.1 155L340.5 670a8.32 8.32 0 0 0-1.9 5.2c0 4.4 3.6 8 8 8l66.1-.3L512 564.4l99.3 118.4 66 .3c4.4 0 8-3.5 8-8 0-1.9-.7-3.7-1.9-5.2L553.5 515l130.1-155c1.2-1.4 1.8-3.3 1.8-5.2z"></path>
							<path d="M512 65C264.6 65 64 265.6 64 513s200.6 448 448 448 448-200.6 448-448S759.4 65 512 65zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"></path>
						</svg>
					</div>
					<span @click="searchFn" :class="searchColor? 'searchColor':''">搜索</span>
				</div>
			</el-row>
		</div>
		<div class="searchList" v-infinite-scroll="nextPage" :infinite-scroll-disabled="load" infinite-scroll-distance="10">
			<el-row style="margin-top: 15px;min-width: 500px;">
				<div class="_1oRkJsku" v-for="(item,inx) in videoList" :key="inx" @click="playFn">
					<a :href="item.video" target="_blank">
						<div class="_rGpKvENU">
							<video :src="item.video" :poster="item.cover"></video>
							<!-- <img class="_2CYlY4Be" :src="item.cover" alt=""> -->
							<div class="_1T95E-un">{{item.brief}}</div>
							<div class="_3Cs1TVJK">发布于{{moment(item.createTime).format('YYYY-MM-DD')}}</div>
						</div>
						<div class="listTitle">
							<div class="listTitle_shang">
								<svg width="20" height="20" viewBox="0 0 20 20"class="_30f8UTxO">
									<path d="M7.211 3.484a4.105 4.105 0 0 0-1.85.438 4.685 4.685 0 0 0-2.473 4.321c.012 1.484.7 5.255 6.849 8.213a.61.61 0 0 0 .531 0c6.119-2.969 6.825-6.741 6.845-8.225a4.629 4.629 0 0 0-2.374-4.259 4.117 4.117 0 0 0-1.907-.463 5.293 5.293 0 0 0-2.821.887 5.079 5.079 0 0 0-2.8-.911z"fill="#cdcfcf"></path>
								</svg>
								<span class="_2qolAsfj">{{numberTry(item.likeCount)}}</span>
							</div>
							<div class="listTitle_xia">
								<span class="ant-avatar ant-avatar-circle ant-avatar-image" style="width: 24px; height: 24px; line-height: 24px; font-size: 18px;">
									<img :src="item.wxVideoaccountLogo">
								</span>
								<span>{{item.wxVideoaccountName}}</span>
							</div>
						</div>
					</a>
				</div>
			</el-row>
		</div>
		<login ref="loginRef"></login>
	</div>
</template>

<script>
	import axios from 'axios'
	import {mapActions,mapGetters} from 'vuex'
	import qs from 'qs';
	import login from '@/components/login.vue'
	export default {
		name: 'douyinSearch',
		data() {
			return {
				kw: '',
				page: 0,
				load: false,
				videoList:[],
				searchColor:false
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
			},
		},
		components: {
			login
		},
		beforeCreate() {

		},
		created() {

		},
		//离开前判断前进和后退时间来判断是否保存滚动值
		beforeRouteLeave(to, from, next) {
			this.scrollTop = document.getElementById('product').scrollTop || document.getElementById('product').pageYOffset
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
				document.getElementById('product').scrollTop = document.getElementById('product').pageYOffset = vm.scrollTop;
			});

		},
		mounted() {
			if(this.$route.query.value){
				this.page = 0;
				this.kw = this.$route.query.value;
				this.videoList = []
			}else{
        this.nextPage();
      }
			
		},
		methods: {
			nextPage() {
				this.page++;
				this.getData();
			},
			getData() {
				this.load = true;
				this.$axios.get("/user/wx-videoaccount-video/wx-videoaccount-video-list?" + qs.stringify({
						kw: this.kw,
						pn: this.page,
					}))
					.then(res => {
						if (res.data.codeMsg)
							this.$message(res.data.codeMsg);
						if (res.data.code == 0) {
							if (res.data.data.itemList.length != 0) {
								for (let i in res.data.data.itemList) {
									this.videoList.push(res.data.data.itemList[i])
								}
							}
						} else {
							//开始失败逻辑
							if (!this.centerDialogVisible) {
								this.centerDialogVisible = true;
								this.$refs.loginRef.getData();
							}
						}
						this.load = false;
					})
					.catch()
			},
			searchFn() {
				//console.log(this.kw)
				this.page = 1;
				this.videoList = []
				this.getData()
			},
			playFn(){
				// this.$route.
			}
		},
	}
</script>

<style scoped>
	.douyinSearch {
		width: 100%;
		/* height: 100%; */
		overflow-y: scroll;
	}

	.douyinSearch::-webkit-scrollbar {
		width: 4px;
		border-radius: 50px;
	}

	.douyinSearch::-webkit-scrollbar-track {
		background-color: #2b2b2e;
		border-radius: 50px;
	}

	.douyinSearch::-webkit-scrollbar-thumb {
		background-color: #66666d;
		border-radius: 50px;
	}

	.douyinSearch::-webkit-scrollbar-thumb:hover {
		background-color: #2b2b2e;
		border-radius: 50px;
	}

	.douyinSearch::-webkit-scrollbar-thumb:active {
		background-color: #2b2b2e;
		border-radius: 50px;
	}

	.search {
		width: 100%;
		position: relative;
	}

	.search_box {
		width: 532px;
		height: 32px;
		line-height: 30px;
		/* margin: 16px 0px; */
		/* border: 1px solid #6d6d6d; */

	}

	.search_box_xiala {
		width: 67px;
		text-align: center;
		border-right: 1px solid #6d6d6d;
		background-color: #363636;
		position: relative;
		float: left;
		border: 1px solid #6d6d6d;
		border-right: none;
	}

	.search_box_xiala>ul {
		position: absolute;
		top: 20px;
		left: 0;
		background-color: #5a5a5a;
		color: #e8edee;
		width: 100%;
		padding: 0px;
		border-radius: 4px;
		box-shadow: 0 2px 8px rgba(0, 0, 0, .15);
		z-index: 9;
	}

	.search_box_xiala>ul>li {
		height: 40px;
		line-height: 40px;
		text-align: center;
		white-space: nowrap;
		text-overflow: ellipsis;
	}

	.search_box_xiala>ul>li:first-child {
		margin-top: 5px;
	}

	.search_box_xiala>ul>li:last-child {
		margin-bottom: 5px;
	}

	.search_box_xiala>ul>li:hover {
		transition: background .3s ease;
		cursor: pointer;
		transition: all .5s;
		background-color: hsla(0, 0%, 100%, .1) !important;
	}

	.search_box_input {
		height: 34px;
		width: 400px;
		position: relative;
		float: left;
	}

	.search_box_input>img {
		width: 20px;
		position: absolute;
		left: 5px;
		top: 0px;
		bottom: 0px;
		margin: auto 0px;
	}

	.search_box_input>input {
		padding-left: 30px;
		transition: all .5s;
		height: 34px;
		background-color: transparent;
		border: 1px solid #6d6d6d;
		width: 400px;
		color: #e8edee;
		border-radius: 5px 0 0 5px;
	}

	.search_box_input>svg {
		position: absolute;
		right: 13px;
		top: 0;
		bottom: 0;
		margin: auto 0px;
		color: #949393;
		cursor: pointer;
	}

	.search_box_input>svg:hover {
		transition: all .5s;
		color: #e8edee;
	}

	.search_box>span {
		height: 32px;
		width: 64px;
		color: #fff;
		font-size: 14px;
		font-weight: 700;
		text-align: center;
		float: left;
		/* background-color: #ff7800; */
		color: #6b6d6d;
		background-color: #3e3e3e;
		border: 1px solid #6d6d6d;
		border-left: 0px;
		box-shadow: 0 2px 0 rgba(0,0,0,.045);
		border-radius: 0px 4px 4px 0px;
		cursor: pointer;
	}

	.search_box>span:focus, {
		cursor: pointer;
		color: #fff;
		background-color: #ff9429;
		border-color: #ff9429;
		transition: all .3s cubic-bezier(.645, .045, .355, 1);
	}
	.searchColor{
		 color: #fff!important;
		 background-color: #ff7800!important;
		 border-color: #ff9429!important;
		transition: all .3s cubic-bezier(.645,.045,.355,1);
	}
	.search_box_input>input[type=search]:focus,
	.search_box_input>input[type=search]:hover,
	.search_box_input>input[type=search]:link,
	search_box_input>input[type=search]:visited {
		outline: none;
		border: 1px solid #ff9429;
		padding-right: 5px;
	}

	.search_box_input>input[type=search]::-webkit-search-cancel-button {
		-webkit-appearance: none;
	
	}

	.search_type_span {
		display: inline-block;
		width: 100%;
		/* text-align: center; */
		color: #787a7a;
		font-size: 14px;
		flex-shrink: 0;
	}

	.search_type ul,
	.search_renzheng ul,
	.search_zhishu ul {
		width: 100%;
		margin: 0;
		padding: 0;
	}

	.search_type ul li,
	.search_zhishu ul li {
		display: inline-block;
		margin-right: 18px;

	}

	.search_type ul li span,
	.search_zhishu ul li span {
		display: inline-block;
		height: 22px;
		line-height: 22px;
		font-size: 12px;
		left: 22px;
		border-radius: 4px;
		padding: 5px;
	}

	.search_type ul li span:hover,
	.search_zhishu ul li span:hover {
		cursor: pointer;
		color: #ff9429;
		transition: all .3s cubic-bezier(.78, .14, .15, .86);
		/* background-color: #ff7800; */
	}

	.typeCilckColor {
		color: #fff !important;
		background-color: #ff7800;
		transition: all .3s cubic-bezier(.78, .14, .15, .86);
	}

	.search_renzheng ul li {
		display: inline-block;
		margin-right: 30px;
		position: relative;
	}

	.search_renzheng ul li:first-child span,
	.search_zhishu ul li {
		display: inline-block;
		width: 104px;
		height: 30px;
		line-height: 32px;
		text-align: center;
		color: #cdcfcf;
		border-radius: 4px;
		border: 1px solid #6d6d6d;
	}

	.search_renzheng ul li:first-child span:hover,
	.search_zhishu ul li:hover {
		transition: all .2s;
		border-color: #ff7800;
	}

	.search_renzheng ul li:nth-child(2) span {
		margin-right: 0px;
	}

	.search_renzheng ul li span {
		margin-right: 5px;
		color: #e8edee;
	}

	.search_renzheng ul li svg {
		position: absolute;
		top: 0;
		bottom: 0;
		margin: auto 0px;
		right: -15px;
	}

	.dataColor {
		color: #6b6d6d !important;
		cursor: not-allowed;
	}

	.ant-checkbox-disabled .ant-checkbox-input {
		cursor: not-allowed;
	}

	.ant-checkbox-input {
		position: absolute;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		z-index: 1;
		width: 100%;
		height: 100%;
		cursor: pointer;
		opacity: 0;
	}

	._1OZfUfro .ant-checkbox-inner {
		background-color: transparent;
		/* background-color: #3e3e3e; */
		/* border-color: #6d6d6d!important; */
	}

	.ant-checkbox-inner {
		position: relative;
		top: 0;
		left: 0;
		display: block;
		width: 16px;
		height: 16px;
		background-color: #fff;
		border: 1px solid #6d6d6d;
		border-radius: 2px;
		border-collapse: separate;
		-webkit-transition: all .3s;
		transition: all .3s;
		background-color: transparent;
	}

	.ant-checkbox {
		margin: 0;
		padding: 0;
		color: #e8edee;
		font-size: 14px;
		font-variant: tabular-nums;
		line-height: 1.5;
		list-style: none;
		-webkit-font-feature-settings: "tnum", "tnum";
		font-feature-settings: "tnum", "tnum";
		position: relative;
		top: -.09em;
		display: inline-block;
		line-height: 1;
		white-space: nowrap;
		vertical-align: middle;
		outline: none;
		cursor: pointer;
	}

	.ant-checkbox-disabled {
		cursor: not-allowed;
	}

._1oRkJsku {
    display: inline-block;
    border-radius: 4px;
    overflow: hidden;
    background: #333337;
    -webkit-transition: all .3s;
    transition: all .3s;
    cursor: pointer;
	 /* max-width: 324px; */
	 /* min-width: 250px; */
	 width: 244px;
	 margin-right: 10px;
	 margin-bottom: 10px;
}
.ant-layout, .ant-layout * {
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
}
._rGpKvENU {
    position: relative;
    width: 100%;
    height: 324px;
    background-color: #000;
}
._rGpKvENU>video{
	height: 100%;
	width: 100%;
	object-fit: cover;
}
.ant-layout, .ant-layout * {
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
}
a {
    color: #ff7800;
    text-decoration: none;
    background-color: transparent;
    outline: none;
    cursor: pointer;
    -webkit-transition: color .3s;
    transition: color .3s;
    -webkit-text-decoration-skip: objects;
}
a:active, a:hover {
    text-decoration: none;
    outline: 0;
}
._2CYlY4Be, ._12UOyUVp {
    width: 100%;
    object-fit: cover;
	 box-sizing: border-box;
}
._2CYlY4Be {
    height: 100%;
}
._1oRkJsku:hover ._1T95E-un, ._1oRkJsku:hover ._3zIPwL_I {
    opacity: 1;
}
._1T95E-un {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    overflow: hidden;
    left: 0;
    bottom: 0;
    color: #fff;
    opacity: 0;
    z-index: 4;
    width: 100%;
    padding: 4px;
    box-sizing: border-box;
    background-image: -webkit-gradient(linear,left top,left bottom,from(rgba(51,51,55,.1)),to(rgba(51,51,55,.8)));
    background-image: linear-gradient(180deg,rgba(51,51,55,.1),rgba(51,51,55,.8));
}
._1T95E-un, ._3Cs1TVJK {
    position: absolute;
    -webkit-transition: all .3s;
    transition: all .3s;
}
._3zIPwL_I {
    position: absolute;
    left: 16px;
    top: 16px;
}
._3EvFtjMa span, ._3EvFtjMa svg {
    vertical-align: middle;
}
._3EvFtjMa span {
    margin-right: 7px;
}
._3EvFtjMa span, ._3EvFtjMa svg {
    vertical-align: middle;
	 overflow: hidden;
}
._3Cs1TVJK {
    right: 16px;
    top: 18px;
    font-size: 12px;
    color: #cdcfcf;
    padding: 2px 3px;
    background-color: rgba(58,58,62,.5);
    border-radius: 2px;
    opacity: 1;
}
._3_4Sz3Oj {
    padding: 8px;
    height: 70px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    color: #cdcfcf;
}
.ant-row-flex-middle {
    -ms-flex-align: center;
    align-items: center;
}
.ant-col {
    position: relative;
    min-height: 1px;
}
.ant-avatar-image {
    background: transparent;
}
.ant-avatar {
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
    display: inline-block;
    overflow: hidden;
    color: #fff;
    white-space: nowrap;
    text-align: center;
    vertical-align: middle;
    background: #ccc;
    width: 32px;
    height: 32px;
    line-height: 32px;
    border-radius: 50%;
}
.ant-avatar>img {
    display: block;
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
}
._1T95E-un {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    overflow: hidden;
    left: 0;
    bottom: 0;
    color: #fff;
    opacity: 0;
    z-index: 4;
    width: 100%;
    padding: 4px;
    box-sizing: border-box;
    background-image: -webkit-gradient(linear,left top,left bottom,from(rgba(51,51,55,.1)),to(rgba(51,51,55,.8)));
    background-image: linear-gradient(180deg,rgba(51,51,55,.1),rgba(51,51,55,.8));
}
a:active {
    color: #f60;
}
.listTitle{
	padding: 8px;
	    height: 70px;
	    box-sizing: border-box;
	    display: flex;
	    flex-direction: column;
	    justify-content: space-around;
	    color: #cdcfcf;
}
.listTitle_shang{
	width: 100%;
	position: relative;
}
.listTitle_shang>svg{
	position: absolute;
	top: 0;
	bottom: 0;
	margin: auto 0px;
}
.listTitle_shang>span{
	margin-left: 25px;
}
.listTitle_xia>span:last-child{
	font-size: 12px;
	line-height: 26px;
	height: 24px;
	color: #787a7a;
	max-width: 12em;
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
}
.listTitle_xia>span:last-child:hover {
    color: #ff7800;
}
</style>
