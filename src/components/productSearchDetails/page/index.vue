<template>
	<div class="index">
		<div class="index_data" style="width: 100%;position: relative;">
			<el-row style="height: 60px;">
				<div class="search_box">
					<div class="search_box_input">
						<img src="../../../assets/img/search.png" alt="">
						<input @click="searchColor=true" type="search" @keydown.enter="searchFn" v-model="kw" placeholder="请输入关键字">
						<svg v-if="kw" @click="kw =''" viewBox="64 64 896 896" focusable="false" class="" data-icon="close-circle" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M685.4 354.8c0-4.4-3.6-8-8-8l-66 .3L512 465.6l-99.3-118.4-66.1-.3c-4.4 0-8 3.5-8 8 0 1.9.7 3.7 1.9 5.2l130.1 155L340.5 670a8.32 8.32 0 0 0-1.9 5.2c0 4.4 3.6 8 8 8l66.1-.3L512 564.4l99.3 118.4 66 .3c4.4 0 8-3.5 8-8 0-1.9-.7-3.7-1.9-5.2L553.5 515l130.1-155c1.2-1.4 1.8-3.3 1.8-5.2z"></path><path d="M512 65C264.6 65 64 265.6 64 513s200.6 448 448 448 448-200.6 448-448S759.4 65 512 65zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"></path></svg>
					</div>
					<span @click="searchFn" :class="searchColor? 'searchColor':''">搜索</span>
				</div>
			</el-row>
			<!-- <el-row style="line-height: 47px;" class="search_type">
				<el-col :xs="5" :sm="4" :md="3" :lg="2" :xl="1">
					<span class="search_type_span">发布时间:</span>
				</el-col>
				<el-col :xs="19" :sm="20" :md="21" :lg="22" :xl="23">
					<ul>
						<li v-for="(item,inx) in dataList" :key="inx"  @click="typeClickFn(inx)">
							<span :class="[item.typeData? 'typeCilckColor':'']">{{item.name}}</span>
						</li>
					</ul>
				</el-col>
			</el-row> -->
		</div>
		<div class="searchList" v-infinite-scroll="nextPage" :infinite-scroll-disabled="load" infinite-scroll-distance="10">
			<el-table :data="userList"  style="width: 99%;min-width: 700px;" @row-click = "videoFn">
				<el-table-column   prop="date" label="视频号" min-width="62%">
					<template slot-scope="scope">
				       <div class="searchList_lie_xinxi">
				       	<video :src="scope.row.video" :poster="scope.row.cover"></video>
				       	<div class="searchList_lie_xinxi_jianjie">
				       		<h3>{{scope.row.name}}</h3>
				       		<!-- <svg width="1em" height="1em" viewBox="0 0 16 16" style="color: rgb(24, 144, 255); font-size: 16px;"><g transform="translate(-982 -658)"><circle cx="8" cy="8" r="8" transform="translate(982 658)" fill="#fff"></circle><path d="M72,64a8,8,0,1,0,8,8A8,8,0,0,0,72,64Zm3.455,5.388L71.695,74.6a.568.568,0,0,1-.923,0l-2.227-3.086a.143.143,0,0,1,.116-.227H69.5a.569.569,0,0,1,.463.238l1.271,1.764L74.039,69.4a.571.571,0,0,1,.463-.238h.837A.143.143,0,0,1,75.455,69.388Z" transform="translate(918 594)" fill="currentColor"></path></g></svg> -->
				       		<!-- <span>{{user.name}}</span> -->
				       		<p style="color: #787a7a;display: block;padding: 1px 0px;height: 63px;line-height: 33px;">
				       			<!-- 视频号:{{scope.row.wx}} -->
				       			<!-- <span class="_3wruq4Mm"></span> -->
				       			<!-- <span class="diquColor"><span>{{scope.row.area1Name}}</span><span v-if='scope.row.area2Name'>·{{scope.row.area2Name}}</span><span v-if='scope.row.area3Name'>·{{scope.row.area3Name}}</span></span> -->
				       		</p>
				       		<div class="line-2">日期：{{moment(scope.row.createTime).format('YYYY-MM-DD')}}</div>
				       	</div>
				       </div>
				    </template>
			   </el-table-column>
				<el-table-column align='center'   prop="name" min-width="10%">
					<template slot="header" slot-scope="scope">
						<div @click="clickFn('one')" :class="clickData.one? 'xuanzhongColor':''" style="text-align:center;cursor: pointer;">
							<span style="color: #cdcfcf;" :class="clickData.one? 'xuanzhongColor':''">获赞数</span>
							<svg viewBox="0 0 1024 1024" focusable="false" class=""  style="vertical-align: middle;"  data-icon="caret-down" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M840.4 300H183.6c-19.7 0-30.7 20.8-18.5 35l328.4 380.8c9.4 10.9 27.5 10.9 37 0L858.9 335c12.2-14.2 1.2-35-18.5-35z"></path></svg>
						</div>
					</template>
					<template slot-scope="scope">
						<span style="color: #e8edee;font-size: 14px;">{{numberTry(scope.row.likeCount)}}</span>
					</template>
				</el-table-column>
				<el-table-column align='center'   prop="name" min-width="10%">
					<template slot="header" slot-scope="scope">
						<div @click="clickFn('two')" :class="clickData.two? 'xuanzhongColor':''" style="text-align:center;cursor: pointer;">
							<span  style="color: #cdcfcf;" :class="clickData.two? 'xuanzhongColor':''">曝光量</span>
							<svg viewBox="0 0 1024 1024" focusable="false"  style="vertical-align: middle;"  class="" data-icon="caret-down" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M840.4 300H183.6c-19.7 0-30.7 20.8-18.5 35l328.4 380.8c9.4 10.9 27.5 10.9 37 0L858.9 335c12.2-14.2 1.2-35-18.5-35z"></path></svg>

            </div>
					</template>
					<template slot-scope="scope">
						<span style="color: #e8edee;font-size: 14px;">{{numberTry(scope.row.pv)}}</span>
					</template>
				</el-table-column>
			 </el-table>
			<!-- </div> -->
		</div>



	</div>
</template>

<script>
	import axios from 'axios'
	import qs from 'qs';
	export default {
		name: 'searchDetails',
		data() {
			return {
				icon_down:true,
				icon_up:false,
				searchData:"全部",
				show_xiala:false,
				num:0,
				kw:'',
				clickData:{
					 one:false,
					 two:false,
					 three:false,
					 four:false
				},
				userList:[],
				page:0,
				load:false,
				dataList:[
					{name:'昨天',typeData:false},
					{name:'近7天',typeData:false},
					{name:'近30天',typeData:false},
					{name:'自定义',typeData:false},
				],
				data:{},
				sort:'',
				order:'',
				one:0,
				two:0,
				searchColor:false,
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
		activated(){
			let thisVue = this
			if(this.$route.meta.auth && !this.$store.state.login){
				this.$store.state.loginComponent.getData();
			}
  		},
		//离开前判断前进和后退时间来判断是否保存滚动值
		beforeRouteLeave(to, from, next) {
			this.scrollTop = document.getElementById('searchDetails').scrollTop || document.getElementById('searchDetails').pageYOffset
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
				document.getElementById('searchDetails').scrollTop = document.getElementById('searchDetails').pageYOffset = vm.scrollTop;
			});

		},
		mounted() {
			//this.data = JSON.parse(this.$route.query.data)
			// console.dir(this.data)
			this.nextPage();
		},
		methods: {
			videoFn(value){
				window.open(value.video, '_blank');
				console.log(value)
			},
			// typeClickFn(_item,_inx){
			// 	// //console.log(_item)
			// 	if(this.dataList[_inx].typeData){
			// 		this.dataList[_inx].typeData = false;
			// 		this.wxVideoaccountRealmId = '';
			// 		this.userList = [];
			// 		this.page = 1;
			// 		this.getData()
			// 	}else{
			// 		// for(let i in this.dataList){
			// 		// 	this.dataList[i].typeData = false;
			// 		// }
			// 		this.dataList[_inx].typeData = true;
			// 		this.wxVideoaccountRealmId = _item.wxVideoaccountRealmId
			// 		this.userList = [];
			// 		this.page = 1;
			// 		this.getData()
			// 	}
			// },
			xiaclickFn(num){
				this.$refs.xiahuaxian.style.webkitTransform = "translate3d("+(num)+"px,0px,0)"
			},
			nextPage(){
				this.page++;
				this.getData();
			},

			getData(){
				this.load = true;
				this.$axios.get("/wx-videoaccount-video/wx-videoaccount-video-list?"+qs.stringify({
					wxVideoaccountId:this.$route.query.data,
					kw:this.kw,
					pn:this.page,
					sort:this.sort,
					order:this.order}))
				.then(res =>{
					if(res.data.code == 20){
						this.$store.state.loginComponent.getData();
					}else{
						if(res.data.data.itemList.length !=0){
							for(let i in res.data.data.itemList){
								this.userList.push(res.data.data.itemList[i])
							}
							console.dir(this.userList)
						}
					}
					this.load = false;
				})
				.catch()
			},
			searchFn(){
				// //console.log(this.kw)
				this.searchColor = true;
				this.page = 1;
				this.userList = []
				this.getData()
			},
			clickFn(_value){
				this.clickData={one:false,two:false,three:false,four:false};
				switch(_value){
					case 'one':
					this.two= 0;
					if(this.one%3 == 0){
						this.order = 'desc';
						this.sort = "likeCount";
						this.clickData.one = true;
					}else if(this.one%3 == 1){
						this.order = 'asc';
						this.sort = "likeCount";
						this.clickData.one = true;
					}else{
						this.order = '';
						this.sort = '';
						this.clickData.one = false;
					}
					this.userList = [];
					this.page = 0;
					this.one++;
					this.nextPage()

					break;
					case 'two':
					this.one=0;
					if(this.two%3 == 0){
						this.order = 'desc';
						this.sort = "pv";
						this.clickData.two = true;
					}else if(this.two%3 == 1){
						this.order = 'asc';
						this.sort = "pv";
						this.clickData.two = true;
					}else{
						this.order = '';
						this.sort = '';
						this.clickData.two = false;
					}
					this.userList = [];
					this.page = 0;
					this.two++;
					this.nextPage()
					break;
				}
			}
		},
	}
</script>

<style scoped>


.index{
		color:#fff;
		 font-family:'DINPro' !important;
}
 a {text-decoration:none; color: rgba(255, 255, 255, 1);}
a:link{text-decoration:none; }
a:hover{text-decoration:none; }
a:active{text-decoration:none; }
a:visited{text-decoration:none; }
div,dl,dt,dd,ul,ol,li,h1,h2,h3,h4,h5,h6,pre,form,fieldset,input,textarea,blockquote,p{
	list-style: none;
}
h1,h2,h3,h4,h5,h6,p{
	font-size: inherit;font-weight: normal;
	margin-block-start: 0rem !important;
	margin-block-end: 0rem !important;
}
.search_box{
	width: 532px;
	height: 32px;
	line-height: 30px;
	margin: 16px 0px;
	/* border: 1px solid #6d6d6d; */

}
.search_box_input{
	height: 34px;
	width: 400px;
	position: relative;
	float: left;
}
.search_box_input>img{
	width: 20px;
	position: absolute;
	left: 5px;
	top: 0px;
	bottom: 0px;
	margin: auto 0px;
}
.search_box_input>input{
	padding-left: 30px;
	transition: all .5s;
	height: 34px;
	background-color: transparent;
	border: 1px solid #6d6d6d;
	width: 400px;
	color: #e8edee;
	border-radius: 5px 0 0 5px;
}
.search_box_input>svg{
	position: absolute;
	right: 13px;
	top: 0;
	bottom: 0;
	margin: auto 0px;
	color: #949393;
	cursor: pointer;
}
.search_box_input>svg:hover{
	transition: all .5s;
	color: #e8edee;
}
.search_box>span{
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
.search_box>span:focus{
    color: #fff;
    background-color: #ff9429;
    border-color: #ff9429;
	transition: all .3s cubic-bezier(.645,.045,.355,1);
}
.search_box_input>input[type=search]:focus,.search_box_input>input[type=search]:hover,.search_box_input>input[type=search]:link,search_box_input>input[type=search]:visited{
	outline: none;
	border: 1px solid #ff9429;
	padding-right: 5px;
}
.search_type_span{
	display: inline-block;
	width: 100%;
	/* text-align: center; */
	color: #787a7a;
	font-size: 14px;
	flex-shrink: 0;
}
.search_type ul,.search_renzheng ul,.search_zhishu ul{
	width: 100%;
	margin: 0;
	padding: 0;
}
.search_type ul li,.search_zhishu ul li{
	display: inline-block;
	margin-right: 18px;

}
.search_type ul li span,.search_zhishu ul li span{
	display: inline-block;
	height: 22px;
	line-height: 22px;
	font-size: 12px;
	left: 22px;
	border-radius: 4px;
	padding: 5px;
}

.search_type ul li span:hover,.search_zhishu ul li span:hover{
	cursor: pointer;
	color: #ff9429;
	transition: all .3s cubic-bezier(.78,.14,.15,.86);
	/* background-color: #ff7800; */
}
.typeCilckColor{
	color: #fff;
	background-color: #ff7800;
	transition: all .3s cubic-bezier(.78,.14,.15,.86);
}
.search_renzheng ul li{
	display: inline-block;margin-right: 30px;
	position: relative;
}
.search_renzheng ul li:first-child span,.search_zhishu ul li{
	display: inline-block;
	width: 104px;
	height: 30px;
	line-height: 32px;
	text-align: center;
	color: #cdcfcf;
	border-radius: 4px;
	border: 1px solid #6d6d6d;
}
.search_renzheng ul li:first-child span:hover,.search_zhishu ul li:hover{
	transition: all .2s;
	border-color: #ff7800;
}
.search_renzheng ul li:nth-child(2) span{
	margin-right: 0px;
}
.search_renzheng ul li span{
	margin-right: 5px;
	color: #e8edee;
}
.search_renzheng ul li svg{
	position: absolute;
	top:0;bottom: 0;margin: auto 0px;
	right: -15px;
}
.dataColor{
	color: #6b6d6d!important;
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
    -webkit-font-feature-settings: "tnum","tnum";
    font-feature-settings: "tnum","tnum";
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
.searchList_Title{
	color: #cdcfcf;
	font-weight: 500;
}
.searchList_canshu,.searchList_shuju{
	width: 100%;
	height: 100%;
	color: #cdcfcf;
	font-weight: 500;
	text-align: left;
	min-width: 340px;
}
.searchList_shuju{
	/* height: 100px; */
}
.searchList_canshu ul,.searchList_shuju ul{
	padding: 0;
	margin: 0;
	text-align: right;
}
.searchList_canshu ul li,.searchList_shuju ul li{
	text-align: center;
	display: inline-block;
	width: 18%;
	min-width: 56px;
	max-width: 80px;
	cursor: pointer;
	/* margin-right: 3%; */
}
.searchList_canshu ul li:first-child{
	cursor: auto;
	width: 23%;
	max-width: 140px;
	min-width: 110px;
	cursor: pointer;
}
.searchList_canshu ul li:last-child,.searchList_shuju ul li:last-child{
	width: 18%;
	max-width: 120px;
	min-width: 100px;
}
.searchList_shuju{
	margin: auto 0px;
	position: absolute;
	right: 0;
	top: 40%;
}
.searchList_shuju ul li{
	color: #e8edee;
	font-size: 14px;
	margin: auto 0px;
}
.xuanzhongColor{
	color: #ff7800!important;
	transition: all .3s;
}
.searchList{
	position: relative;
	width: 100%;
}
.searchList_lie{
	padding: 20px 8px 24px 8px;
	border-radius: 6px;
	color: #e8edee;
	font-size: 14px;
	border-bottom:1px solid #404040;
	position: relative;
	height: 112px;
}
.searchList_lie:hover{
	background: #3c3c3e;
	transition: all .3s,height 0s;
	cursor: pointer;
}

.searchList_lie_xinxi{
	width: 100%;
	position: relative;
	min-width: 205px;
	height: 100%;
}
.searchList_lie_xinxi>img{
	width: 60px;
	height: 60px;
	border-radius: 50px;
	display: inline-block;
	position: absolute;
	top: 0;
	bottom: 0;
	margin: auto 0px;
}
.searchList_lie_xinxi video{
	/* background-color: #000000; */
	width: 72px;
	height: 112px;
	float: left;
	/* position: relative; */
	/* top: 0; */
	/* bottom: 0; */
	/* left: 0; */
	margin: auto 0px;
	object-fit: cover;
	border-radius: 4px;
}
.searchList_lie_xinxi_jianjie{
	/* width: auto; */
  /* width: 80%; */
  width: 350px;
	float: left;
	margin-left: 14px;
	height: 100%;
}
.searchList_lie_xinxi_jianjie>h3{
	display: inline-block;
	color: #e8edee;
}
.searchList_lie_xinxi_jianjie>h3:hover{
	text-decoration: none;
	background-color: transparent;
	outline: none;
	transition: color .3s;
	cursor: pointer;
	color: #ff8b1d;
}
.biaoqianClass{
	margin-left: 8px;
	padding: 2px 8px 1px;
	line-height: 16px;
	font-size: 12px;
	color: #cdcfcf;
	border-radius: 11px;
	border: 1px solid rgba(205,207,207,.3);
	background-color: rgba(232,237,238,.1);
	white-space: nowrap;

}
.searchList_lie_xinxi_jianjie>p{
	width: auto;
	color: #8b8b8b;
	margin-top: 70px;
}
.searchList_lie_xinxi_jianjie>div{
  color: rgb(120, 122, 122);
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
      /* margin-bottom: 15px; */
}
/* .searchList_lie_xinxi_jianjie>p:last-child{
	width: 90%;
	height: 42px;
	color: #787a7a;
} */
.searchList_lie_xinxi_jianjie>svg{
	position: absolute;
	margin-top: 3px;
}
.searchList_lie_xinxi_jianjie>span:nth-child(4){
	margin-left: 20px;
}
/* .searchList_lie_xinxi_jianjie>p:nth-child(5){
	padding: 6px 0;
} */
.searchList_Title{
	color: #cdcfcf;
	font-weight: 500;
}
.searchList_canshu,.searchList_shuju{
	width: 100%;
	height: 100%;
	color: #cdcfcf;
	font-weight: 500;
	text-align: left;
	min-width: 340px;
}
.searchList_shuju{
	/* height: 100px; */
}
.searchColor{
	 color: #fff!important;
	 background-color: #ff7800!important;
	 border-color: #ff9429!important;
	transition: all .3s cubic-bezier(.645,.045,.355,1);
}
.searchList_canshu ul,.searchList_shuju ul{
	padding: 0;
	margin: 0;
	text-align: right;
}
.searchList_canshu ul li,.searchList_shuju ul li{
	text-align: center;
	display: inline-block;
	width: 18%;
	min-width: 56px;
	max-width: 80px;
	cursor: pointer;
	/* margin-right: 3%; */
}
.typeCilckColor{
	color: #fff!important;
	background-color: #ff7800;
	transition: all .3s cubic-bezier(.78,.14,.15,.86);
}
/* .searchList_canshu ul li:first-child,.searchList_shuju ul li:first-child{
	cursor: auto;
	width: 23%;
	max-width: 140px;
	min-width: 110px;
} */
.searchList_canshu ul li:last-child,.searchList_shuju ul li:last-child{
	width: 18%;
	max-width: 120px;
	min-width: 100px;
}
.searchList_shuju{
	margin: auto 0px;
	position: absolute;
	right: 0;
	top: 40%;
}
.searchList_shuju ul li{
	color: #e8edee;
	font-size: 14px;
	margin: auto 0px;
}
.xuanzhongColor{
	color: #ff7800!important;
	transition: all .3s;
}
.searchList{
	position: relative;
	width: 100%;
}
>>>.el-table thead tr{
  border-radius: 6px;
}
>>>.el-table th {
    background-color: #3a3a3e;

        color: rgb(232, 237, 238);

		/* margin-top: 60px; */
}
>>>.el-table{
	background-color: transparent;
}
>>>.el-table th.is-leaf {
    border:none;
}
>>>.el-table tr{
	background-color: transparent;
}

>>>.el-table__body tr.hover-row>td{
    background-color: transparent;
}
>>>.el-table td{
    /* padding: 0; */
      padding: 20px 0 24px 0;
	border:none;
  border-bottom: 0.5px solid rgb(109,109,109) !important;
}
>>>.el-table tr td:nth-child(1){
  min-width: 458px;
    /* padding: 0; */
      padding: 20px 0 24px 0;
	border:none;
  border-bottom: 0.5px solid rgb(109,109,109) !important;
}
>>>.el-table__row:hover > td{
	transition: background .3s ease;
		cursor: pointer;
	transition: all .5s;
	background-color: hsla(0,0%,100%,.1)!important;
}
.typeCilckColor{
	color: #fff!important;
	background-color: #ff7800;
	transition: all .3s cubic-bezier(.78,.14,.15,.86);
}
.el-table::before {
    height: 0px;
}
.el-table::before {
    height: 0px;
}
>>>.el-table th {
    background: rgb(58, 58, 62);
        color: rgb(232, 237, 238);
}
</style>
