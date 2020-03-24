<template>
	<div class="douyinSearch" >
		<div class="search">
			<el-row style="height: 60px;">
				<div class="search_box">
					<div class="search_box_xiala" @click="showXiaLaFn">
						<div class="search_box_xialaButton">
							<span slot="reference">{{searchData}}</span>	
							<i class="el-icon-arrow-down" v-if="icon_down"></i>
							<i class="el-icon-arrow-up" v-if="icon_up"></i>
						</div>
						<ul v-if="show_xiala">
							<li @click="searchChoesFn('全部')">全部</li>
							<li @click="searchChoesFn('名称')">名称</li>
							<li @click="searchChoesFn('认证')">认证</li>
							<li @click="searchChoesFn('简介')">简介</li>
						</ul>
					</div>
					<div class="search_box_input">
						<input type="search" v-model="kw" placeholder="请输入抖音名称或抖音号">
						<svg v-if="kw" @click="kw =''" viewBox="64 64 896 896" focusable="false" class="" data-icon="close-circle" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M685.4 354.8c0-4.4-3.6-8-8-8l-66 .3L512 465.6l-99.3-118.4-66.1-.3c-4.4 0-8 3.5-8 8 0 1.9.7 3.7 1.9 5.2l130.1 155L340.5 670a8.32 8.32 0 0 0-1.9 5.2c0 4.4 3.6 8 8 8l66.1-.3L512 564.4l99.3 118.4 66 .3c4.4 0 8-3.5 8-8 0-1.9-.7-3.7-1.9-5.2L553.5 515l130.1-155c1.2-1.4 1.8-3.3 1.8-5.2z"></path><path d="M512 65C264.6 65 64 265.6 64 513s200.6 448 448 448 448-200.6 448-448S759.4 65 512 65zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"></path></svg>
					</div>
					<span>搜索</span>
				</div>
			</el-row>
			<el-row style="height: 47px;line-height: 47px;" class="search_type">
				<el-col :xs="5" :sm="4" :md="3" :lg="2" :xl="1">
					<span class="search_type_span">账号类型:</span>
				</el-col>
				<el-col :xs="19" :sm="20" :md="21" :lg="22" :xl="23">
					<ul>
						<li>娱乐</li> <li>才艺</li> <li>萌宠</li> <li>搞笑</li> <li>二次元</li>
						<li>游戏</li> <li>家居</li> <li>美食</li> <li>旅游</li> <li>健康</li>
						<li>企业</li> <li>体育</li> <li>教育</li> <li>科技</li> <li>汽车</li>
						<li>情感</li> <li>时尚</li> <li>文化</li> <li>社会</li> <li>时事</li>
					</ul>
				</el-col>
			</el-row>
			<el-row style="height: 47px;line-height: 47px" class="search_type">
				<el-col :xs="5" :sm="4" :md="3" :lg="2" :xl="1">
					<span class="search_type_span">新增指数:</span>
				</el-col>
				<el-col :xs="19" :sm="20" :md="21" :lg="22" :xl="23">
					<ul>
						<li>0-200</li> <li>200-400</li> <li>400-600</li> <li>600-800</li> <li>800-1000</li>
						<li>>1000</li>
					</ul>
				</el-col>
			</el-row>
			<el-row style="height: 47px;line-height: 47px" class="search_renzheng">
				<el-col :xs="5" :sm="4" :md="3" :lg="2" :xl="1">
					<span class="search_type_span">账号认证</span>
				</el-col>
				<el-col :xs="19" :sm="20" :md="21" :lg="22" :xl="23">
					<ul>
						<li>
							<span>不限</span>
						</li> 
						<li>
							<span>条件</span>
							<svg viewBox="64 64 896 896" focusable="false" class="" data-icon="lock" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M832 464h-68V240c0-70.7-57.3-128-128-128H388c-70.7 0-128 57.3-128 128v224h-68c-17.7 0-32 14.3-32 32v384c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V496c0-17.7-14.3-32-32-32zM332 240c0-30.9 25.1-56 56-56h248c30.9 0 56 25.1 56 56v224H332V240zm460 600H232V536h560v304zM484 701v53c0 4.4 3.6 8 8 8h40c4.4 0 8-3.6 8-8v-53a48.01 48.01 0 1 0-56 0z"></path></svg>
						</li> 
						<li class="dataColor">
							<span class="ant-checkbox ant-checkbox-disabled">
								<input type="checkbox" disabled="" class="ant-checkbox-input" value="contact">
								<span class="ant-checkbox-inner"></span>
							</span>
							<span class="dataColor">有联系方式</span>
							<svg width="14" height="14" viewBox="0 0 14 14" class="_3sse5IOP ant-tooltip-open"><g><path d="M7,14A7,7,0,0,1,2.05,2.05a7,7,0,0,1,9.9,9.9A6.955,6.955,0,0,1,7,14ZM7,.984a6.017,6.017,0,0,0-2.34,11.559,6.016,6.016,0,0,0,6.594-9.8A5.99,5.99,0,0,0,7,.984ZM6.911,11.108a.592.592,0,1,1,.3-.079A.594.594,0,0,1,6.911,11.108Zm.018-2.032-.037,0H6.88a.494.494,0,0,1-.442-.539A3.168,3.168,0,0,1,7.556,6.751c.883-.883.9-1.162.912-1.458a1.269,1.269,0,0,0-.361-.945A1.537,1.537,0,0,0,7,3.874a1.473,1.473,0,0,0-1.469,1.47.492.492,0,0,1-.984,0A2.453,2.453,0,0,1,6.992,2.89H7a2.525,2.525,0,0,1,1.825.78,2.244,2.244,0,0,1,.631,1.675c-.035.634-.23,1.133-1.2,2.1-.492.491-.8.861-.834,1.185A.49.49,0,0,1,6.929,9.077Z" transform="translate(0 0)" fill="currentColor"></path></g></svg>
						</li>
						<li class="dataColor">
							<span class="ant-checkbox ant-checkbox-disabled">
								<input type="checkbox" disabled="" class="ant-checkbox-input" value="contact">
								<span class="ant-checkbox-inner"></span>
							</span>
							<span class="dataColor">有直播信息</span>
							<svg width="14" height="14" viewBox="0 0 14 14" class="_3sse5IOP ant-tooltip-open"><g><path d="M7,14A7,7,0,0,1,2.05,2.05a7,7,0,0,1,9.9,9.9A6.955,6.955,0,0,1,7,14ZM7,.984a6.017,6.017,0,0,0-2.34,11.559,6.016,6.016,0,0,0,6.594-9.8A5.99,5.99,0,0,0,7,.984ZM6.911,11.108a.592.592,0,1,1,.3-.079A.594.594,0,0,1,6.911,11.108Zm.018-2.032-.037,0H6.88a.494.494,0,0,1-.442-.539A3.168,3.168,0,0,1,7.556,6.751c.883-.883.9-1.162.912-1.458a1.269,1.269,0,0,0-.361-.945A1.537,1.537,0,0,0,7,3.874a1.473,1.473,0,0,0-1.469,1.47.492.492,0,0,1-.984,0A2.453,2.453,0,0,1,6.992,2.89H7a2.525,2.525,0,0,1,1.825.78,2.244,2.244,0,0,1,.631,1.675c-.035.634-.23,1.133-1.2,2.1-.492.491-.8.861-.834,1.185A.49.49,0,0,1,6.929,9.077Z" transform="translate(0 0)" fill="currentColor"></path></g></svg>
						</li>
						<li class="dataColor">
							<span class="ant-checkbox ant-checkbox-disabled">
								<input type="checkbox" disabled="" class="ant-checkbox-input" value="contact">
								<span class="ant-checkbox-inner"></span>
							</span>
							<span class="dataColor">加入MCN</span>
						</li>
						<li class="dataColor">
							<span class="ant-checkbox ant-checkbox-disabled">
								<input type="checkbox" disabled="" class="ant-checkbox-input" value="contact">
								<span class="ant-checkbox-inner"></span>
							</span>
							<span class="dataColor">已开通橱窗</span>
						</li>
					</ul>
				</el-col>
			</el-row>
			<el-row style="height: 47px;line-height: 47px" class="search_zhishu">
				<el-col :xs="5" :sm="4" :md="3" :lg="2" :xl="1">
					<span class="search_type_span">新增指数:</span>
				</el-col>
				<el-col :xs="19" :sm="20" :md="21" :lg="22" :xl="23">
					<ul>
						<li>账号资料</li> <li>数据表现</li> <li>粉丝画像</li> <li>关联商品</li>
					</ul>
				</el-col>
			</el-row>
			
		</div>
		<div class="searchList"> 
			<row>
				<el-col :xs="5" :sm="4" :md="3" :lg="2" :xl="1">
				</el-col>
			</row>
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
			show_xiala:false,
			num:0,
			kw:''
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
			this.searchData = _value;
			this.show_xiala = false
		},
		showXiaLaFn(){
			this.num++
			if(this.num%2){
				this.show_xiala = true;
				this.icon_down = false;
				this.icon_up = true
				
			}else{
				this.show_xiala = false;
				this.icon_down = true;
				this.icon_up = false
			}
		},
		xiaoshiFn(){
			this.show_xiala = false;
			this.icon_down = true;
			this.icon_up = false;
			this.num++
		},
		clearKwFn(){
			this.kw = ''
		}
	},
}
</script>

<style scoped>
.douyinSearch{
	width: 100%;
	height: 100%;
	overflow-y: scroll;
}
.douyinSearch::-webkit-scrollbar{width:4px;border-radius: 50px;}
.douyinSearch::-webkit-scrollbar-track{background-color:#2b2b2e;border-radius: 50px;}
.douyinSearch::-webkit-scrollbar-thumb{background-color:#66666d;border-radius: 50px;}
.douyinSearch::-webkit-scrollbar-thumb:hover {background-color:#2b2b2e;border-radius: 50px;}
.douyinSearch::-webkit-scrollbar-thumb:active {background-color:#2b2b2e;border-radius: 50px;}
.search_box{
	width: 532px;
	height: 32px;
	line-height: 32px;
	margin: 16px 0px;
	/* border: 1px solid #6d6d6d; */
	
}
.search_box_xiala{
	width: 67px;
	text-align: center;
	border-right: 1px solid #6d6d6d;
	background-color: #363636;
	position: relative;
	float: left;
	border: 1px solid #6d6d6d;
	border-right: none;
}
.search_box_xiala>ul{
	position: absolute;
	top: 20px;
	left: 0;
	background-color: #5a5a5a;
	color: #e8edee;
	width: 100%;
	padding: 0px;
	border-radius: 4px;
	box-shadow: 0 2px 8px rgba(0,0,0,.15);
	z-index: 9;
}
.search_box_xiala>ul>li{
	height: 40px;
	line-height: 40px;
	text-align: center;
}
.search_box_xiala>ul>li:first-child{
	margin-top: 5px;
}
.search_box_xiala>ul>li:last-child{
	margin-bottom: 5px;
}
.search_box_xiala>ul>li:hover{
	background-color: hsla(0,0%,100%,.1)!important;
}
.search_box_input{
	height: 34px;
	width: 400px;
	position: relative;
	float: left;
}
.search_box_input>input{
	height: 34px;
	background-color: transparent;
	border: 1px solid #6d6d6d;
	width: 400px;
	color: #e8edee;
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
	color: #e8edee;
}
.search_box>span{
	height: 34px;
	width: 64px;
	color: #fff;
	font-size: 14px;
	font-weight: 700;
	text-align: center;
	float: left;
	background-color: #ff7800;
	border-radius: 0px 4px 4px 0px;
}
.search_box>span:focus, .search_box>span:hover{
    color: #fff;
    background-color: #ff9429;
    border-color: #ff9429;
}
.search_box_input>input[type=search]:focus,.search_box_input>input[type=search]:hover,.search_box_input>input[type=search]:link,search_box_input>input[type=search]:visited{
	outline: none;
	border: 1px solid #ff9429;
	padding-right: 5px;
}
.search_box_input>input[type=search]::-webkit-search-cancel-button{
	-webkit-appearance: none; 
	/* position: relative; 
	height: 10px;
	width: 10px;
	line-height: 10px;
	text-align: center;
	background : url("../../../assets/img/detele.png") no-repeat center;
	background-size: 7px 7px;
	border:1px solid #999999;
	border-radius: 100%; */
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
	display: inline-block;margin-right: 18px;
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


</style>
