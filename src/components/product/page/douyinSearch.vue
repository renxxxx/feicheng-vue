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
						<input type="search" @keydown.enter="searchFn" v-model="kw" placeholder="请输入抖音名称或抖音号">
						<svg v-if="kw" @click="kw =''" viewBox="64 64 896 896" focusable="false" class="" data-icon="close-circle" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M685.4 354.8c0-4.4-3.6-8-8-8l-66 .3L512 465.6l-99.3-118.4-66.1-.3c-4.4 0-8 3.5-8 8 0 1.9.7 3.7 1.9 5.2l130.1 155L340.5 670a8.32 8.32 0 0 0-1.9 5.2c0 4.4 3.6 8 8 8l66.1-.3L512 564.4l99.3 118.4 66 .3c4.4 0 8-3.5 8-8 0-1.9-.7-3.7-1.9-5.2L553.5 515l130.1-155c1.2-1.4 1.8-3.3 1.8-5.2z"></path><path d="M512 65C264.6 65 64 265.6 64 513s200.6 448 448 448 448-200.6 448-448S759.4 65 512 65zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"></path></svg>
					</div>
					<span @click="searchFn">搜索</span>
				</div>
			</el-row>
			<el-row style="line-height: 47px;" class="search_type">
				<el-col :xs="5" :sm="4" :md="3" :lg="2" :xl="1">
					<span class="search_type_span">领域类型:</span>
				</el-col>
				<el-col :xs="19" :sm="20" :md="21" :lg="22" :xl="23">
					<ul>
						<li v-for="(item,inx) in typeList" :key="inx"  @click="typeClickFn(item,inx)">
							<span :class="[item.typeData? 'typeCilckColor':'']">{{item.name}}</span>
						</li>
					</ul>
				</el-col>
			</el-row>
			<!-- <el-row style="line-height: 47px" class="search_type">
				<el-col :xs="5" :sm="4" :md="3" :lg="2" :xl="1">
					<span class="search_type_span">新增指数:</span>
				</el-col>
				<el-col :xs="19" :sm="20" :md="21" :lg="22" :xl="23">
					<ul>
						<li v-for="(data,_inx) in numList" :key="_inx" @click="numClickFn(_inx)">
							<span :class="[data.typeData? 'typeCilckColor':'']">{{data.name}}</span>
						</li>
					</ul>
				</el-col>
			</el-row> -->
			<!-- <el-row style="line-height: 47px" class="search_renzheng">
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
			</el-row> -->
			<!-- <el-row style="line-height: 47px" class="search_zhishu">
				<el-col :xs="5" :sm="4" :md="3" :lg="2" :xl="1">
					<span class="search_type_span">新增指数:</span>
				</el-col>
				<el-col :xs="19" :sm="20" :md="21" :lg="22" :xl="23">
					<ul>
						<li>账号资料</li> <li>数据表现</li> <li>粉丝画像</li> <li>关联商品</li>
					</ul>
				</el-col>
			</el-row> -->
		</div>
		<div class="searchList" v-infinite-scroll="nextPage" :infinite-scroll-disabled="load" infinite-scroll-distance="10"> 
			<el-row style="background: #3a3a3e;color: #e8edee;font-size: 14px;height: 37px; line-height: 37px;padding: 0px 8px;">
				<el-col :xs="13" :sm="13" :md="14" :lg="15" :xl="18">
					<span class="searchList_Title">抖音号</span>
				</el-col>
				<el-col :xs="11" :sm="11" :md="10" :lg="9" :xl="6">
					<div class="searchList_canshu">
						<ul>
							<!-- <li>
								<span>是否开通橱窗</span>
								<svg width="14" height="14" viewBox="0 0 14 14" class="_3fklY6Jp ant-tooltip-open"><g><path d="M7,14A7,7,0,0,1,2.05,2.05a7,7,0,0,1,9.9,9.9A6.955,6.955,0,0,1,7,14ZM7,.984a6.017,6.017,0,0,0-2.34,11.559,6.016,6.016,0,0,0,6.594-9.8A5.99,5.99,0,0,0,7,.984ZM6.911,11.108a.592.592,0,1,1,.3-.079A.594.594,0,0,1,6.911,11.108Zm.018-2.032-.037,0H6.88a.494.494,0,0,1-.442-.539A3.168,3.168,0,0,1,7.556,6.751c.883-.883.9-1.162.912-1.458a1.269,1.269,0,0,0-.361-.945A1.537,1.537,0,0,0,7,3.874a1.473,1.473,0,0,0-1.469,1.47.492.492,0,0,1-.984,0A2.453,2.453,0,0,1,6.992,2.89H7a2.525,2.525,0,0,1,1.825.78,2.244,2.244,0,0,1,.631,1.675c-.035.634-.23,1.133-1.2,2.1-.492.491-.8.861-.834,1.185A.49.49,0,0,1,6.929,9.077Z" transform="translate(0 0)" fill="currentColor"></path></g></svg>
							</li> -->
							<li @click="clickFn('one')" :class="clickData.one? 'xuanzhongColor':''">
								<span>粉丝数</span>
								<svg viewBox="0 0 1024 1024" focusable="false" class="" data-icon="caret-down" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M840.4 300H183.6c-19.7 0-30.7 20.8-18.5 35l328.4 380.8c9.4 10.9 27.5 10.9 37 0L858.9 335c12.2-14.2 1.2-35-18.5-35z"></path></svg>
							</li>
							<li @click="clickFn('two')" :class="clickData.two? 'xuanzhongColor':''">
								<span>获赞数</span>
								<svg viewBox="0 0 1024 1024" focusable="false" class="" data-icon="caret-down" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M840.4 300H183.6c-19.7 0-30.7 20.8-18.5 35l328.4 380.8c9.4 10.9 27.5 10.9 37 0L858.9 335c12.2-14.2 1.2-35-18.5-35z"></path></svg>
							</li>
							<li @click="clickFn('three')" :class="clickData.three? 'xuanzhongColor':''">
								<span>视频量</span>
								<svg viewBox="0 0 1024 1024" focusable="false" class="" data-icon="caret-down" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M840.4 300H183.6c-19.7 0-30.7 20.8-18.5 35l328.4 380.8c9.4 10.9 27.5 10.9 37 0L858.9 335c12.2-14.2 1.2-35-18.5-35z"></path></svg>
							</li>
							<li @click="clickFn('four')" :class="clickData.four? 'xuanzhongColor':''">
								<svg width="14" height="14" viewBox="0 0 14 14" class="_3Uz8XuTJ ant-tooltip-open"><g><path d="M7,14A7,7,0,0,1,2.05,2.05a7,7,0,0,1,9.9,9.9A6.955,6.955,0,0,1,7,14ZM7,.984a6.017,6.017,0,0,0-2.34,11.559,6.016,6.016,0,0,0,6.594-9.8A5.99,5.99,0,0,0,7,.984ZM6.911,11.108a.592.592,0,1,1,.3-.079A.594.594,0,0,1,6.911,11.108Zm.018-2.032-.037,0H6.88a.494.494,0,0,1-.442-.539A3.168,3.168,0,0,1,7.556,6.751c.883-.883.9-1.162.912-1.458a1.269,1.269,0,0,0-.361-.945A1.537,1.537,0,0,0,7,3.874a1.473,1.473,0,0,0-1.469,1.47.492.492,0,0,1-.984,0A2.453,2.453,0,0,1,6.992,2.89H7a2.525,2.525,0,0,1,1.825.78,2.244,2.244,0,0,1,.631,1.675c-.035.634-.23,1.133-1.2,2.1-.492.491-.8.861-.834,1.185A.49.49,0,0,1,6.929,9.077Z" transform="translate(0 0)" fill="currentColor"></path></g></svg>
								<span>曝光量</span>
								<svg viewBox="0 0 1024 1024" focusable="false" class="" data-icon="caret-down" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M840.4 300H183.6c-19.7 0-30.7 20.8-18.5 35l328.4 380.8c9.4 10.9 27.5 10.9 37 0L858.9 335c12.2-14.2 1.2-35-18.5-35z"></path></svg>
							</li>
						</ul>
					</div>
				</el-col>
			</el-row>
			<!-- <div @click="clickNewFn"> -->
			<el-row class="searchList_lie"   v-for="(user,index) in userList" :key="index">
				<router-link target='_blank' :to="{path:'/searchDetails',query:{data:JSON.stringify(user)}}">
					<el-col :xs="13" :sm="13" :md="14" :lg="15" :xl="18">
						<div class="searchList_lie_xinxi">
							<img :src="user.logo" alt="">
							<div class="searchList_lie_xinxi_jianjie">
								<h3>{{user.name}}</h3><span class="biaoqianClass" v-for="(biaoqian,num) in user.wxVideoaccountRealmList">{{biaoqian.name}}</span>
								<!-- <svg width="1em" height="1em" viewBox="0 0 16 16" style="color: rgb(24, 144, 255); font-size: 16px;"><g transform="translate(-982 -658)"><circle cx="8" cy="8" r="8" transform="translate(982 658)" fill="#fff"></circle><path d="M72,64a8,8,0,1,0,8,8A8,8,0,0,0,72,64Zm3.455,5.388L71.695,74.6a.568.568,0,0,1-.923,0l-2.227-3.086a.143.143,0,0,1,.116-.227H69.5a.569.569,0,0,1,.463.238l1.271,1.764L74.039,69.4a.571.571,0,0,1,.463-.238h.837A.143.143,0,0,1,75.455,69.388Z" transform="translate(918 594)" fill="currentColor"></path></g></svg> -->
								<!-- <span>{{user.name}}</span> -->
								<p>
									微信号{{user.wx}}
									<svg width="13" height="14" viewBox="0 0 13 14"><g data-name="2256" fill="#52c41a"><path data-name="10211" d="M1.194 13.899L.407 12.55a6.216 6.216 0 0 0 0-11.1L1.194.078a7.755 7.755 0 0 1 0 13.817z"></path><path data-name="10212" d="M.0010000000000000009 7.003a.8.8 0 1 0 .8-.8.8.8 0 0 0-.801.8z"></path><path data-name="10213" d="M11.380999999999998 7.003a.8.8 0 1 0 .8-.8.8.8 0 0 0-.801.8z"></path><path data-name="10214" d="M11.402999999999999.801a.8.8 0 1 0 .8-.8.8.8 0 0 0-.8.8z"></path><path data-name="10215" d="M11.402999999999999 13.2a.8.8 0 1 0 .8-.8.8.8 0 0 0-.8.8z"></path><path data-name="10216" d="M.0010000000000000009.801a.8.8 0 1 0 .8-.8.8.8 0 0 0-.801.8z"></path><path data-name="10217" d="M.0010000000000000009 13.2a.8.8 0 1 0 .8-.8.8.8 0 0 0-.801.8z"></path><path data-name="10218" d="M11.806 13.899a7.755 7.755 0 0 1 0-13.817l.782 1.372a6.216 6.216 0 0 0 0 11.1z"></path><path data-name="10219" d="M.801 6.202h11.4v1.6H.801z"></path></g></svg>
									<span>{{user.area1Name}}{{user.area2Name}}{{user.area3Name}}</span>
								</p>
								<p class="line-2">{{user.brief}}</p>
							</div>
						</div>
					</el-col>
					<el-col :xs="11" :sm="11" :md="10" :lg="9" :xl="6">
						<div class="searchList_shuju">
							<ul>
								<!-- <li>
									<svg viewBox="64 64 896 896" focusable="false" class="" data-icon="minus" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M872 474H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h720c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8z"></path></svg>
								</li> -->
								<li :class="clickData.one? 'xuanzhongColor':''">
									<span>{{user.fansCount}}</span>
								</li>
								<li :class="clickData.two? 'xuanzhongColor':''">
									<span>{{user.likeCount}}</span>
								</li>
								<li :class="clickData.three? 'xuanzhongColor':''">
									<span>{{user.videoCount}}</span>
								</li>
								<li :class="clickData.four? 'xuanzhongColor':''">
									<span>{{user.pv}}</span>
								</li>
							</ul>
						</div>
					</el-col>
				</router-link>
			</el-row>
			<!-- </div> -->
			
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
			kw:'',
			clickData:{
				 one:false,
				 two:false,
				 three:false,
				 four:false
			},
			typeList:[],
			numList:[
				{name:'0-200',typeData:false},
				{name:'200-400',typeData:false},
				{name:'400-600',typeData:false},
				{name:'600-800',typeData:false},
				{name:'>1000',typeData:false}],
			userList:[],
			page:0,
			load:false,
			wxVideoaccountRealmId:[],
			wxVideoaccountRealmIdNow:'',
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
		this.getDataType();
		this.nextPage();
	},
	methods: {
		nextPage(){
			this.page++;
			this.getData();
		},
		getData(){
			this.load = true;
			this.$axios.get("/user/wx-videoaccount/wx-videoaccount-list?"+qs.stringify({kw:this.kw,wxVideoaccountRealmId:this.wxVideoaccountRealmIdNow,pn:this.page,ps:5}))
			.then(res =>{
				if(res.data.code == 20){
				}else{
					if(res.data.data.itemList.length !=0){
						for(let i in res.data.data.itemList){
							this.userList.push(res.data.data.itemList[i])
						}
					}
				}
				this.load = false;
			})
			.catch()
		},
		getDataType(){
			this.$axios.get("/user/wx-videoaccount/wx-videoaccount-realm-list?")
			.then(res =>{
				if(res.data.code == 20){
				}else{
					if(res.data.data.itemList.length !=0){
						for(let i in res.data.data.itemList){
							this.typeList.push({
								name:res.data.data.itemList[i].name,
								typeData:false,
								wxVideoaccountRealmId:res.data.data.itemList[i].wxVideoaccountRealmId
							})
						}
					}
				}
			})
			.catch()
		},
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
		},
		clickFn(_value){
			this.clickData={one:false,two:false,three:false,four:false};
			switch(_value){
				case 'one':
				this.clickData.one = true;
				break;
				case 'two':
				this.clickData.two = true;
				break;
				case 'three':
				this.clickData.three = true;
				break;
				case 'four':
				this.clickData.four = true;
				break;
			}
		},
		typeClickFn(_item,_inx){
			// console.log(_item)
			if(this.typeList[_inx].typeData){
				this.typeList[_inx].typeData = false;
				// let a= this.wxVideoaccountRealmId.find(m=>m != _item.wxVideoaccountRealmId);
				// this.wxVideoaccountRealmId = a
				this.userList = [];
				this.page = 1;
				this.getData()
			}else{
				this.typeList[_inx].typeData = true;
				// this.wxVideoaccountRealmId.push(_item.wxVideoaccountRealmId)
				this.wxVideoaccountRealmIdNow = _item.wxVideoaccountRealmId
				this.userList = [];
				this.page = 1;
				this.getData()
			}
			// if(this.wxVideoaccountRealmId.length>1){
			// 	this.wxVideoaccountRealmIdNow = this.wxVideoaccountRealmId.join(',')
			// 	console.dir(this.wxVideoaccountRealmIdNow)
			// }else{
			// 	console.dir(this.wxVideoaccountRealmIdNow)
			// 	this.wxVideoaccountRealmIdNow = this.wxVideoaccountRealmId
			// }
		},
		numClickFn(_inx){
			for(let i in this.numList){
				this.numList[i].typeData = false;
			}
			this.numList[_inx].typeData = true
			console.log(_inx)
		},
		searchFn(){
			console.log(this.kw)
			this.page = 1;
			this.userList = []
			this.getData()
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
.search{width: 100%;position: relative;}
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
	white-space: nowrap;
	    text-overflow: ellipsis;
}
.search_box_xiala>ul>li:first-child{
	margin-top: 5px;
}
.search_box_xiala>ul>li:last-child{
	margin-bottom: 5px;
}
.search_box_xiala>ul>li:hover{
	    transition: background .3s ease;
		cursor: pointer;
	transition: all .5s;
	background-color: hsla(0,0%,100%,.1)!important;
}
.search_box_input{
	height: 34px;
	width: 400px;
	position: relative;
	float: left;
}
.search_box_input>input{
	transition: all .5s;
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
	transition: all .5s;
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
	cursor: pointer;
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
	color: #fff!important;
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
.searchList_canshu ul li:first-child,.searchList_shuju ul li:first-child{
	cursor: pointer;
	width: 23%;
	max-width: 140px;
	min-width: 110px;
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
.searchList_lie_xinxi_jianjie{
	display: inline-block;
	margin-left: 75px;
}
.searchList_lie_xinxi_jianjie>h3{
	display: inline-block;
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
.searchList_lie_xinxi_jianjie>p:last-child{
	width: 90%;
	height: 42px;
	color: #787a7a;
}
.searchList_lie_xinxi_jianjie>svg{
	position: absolute;
	margin-top: 3px;
}
.searchList_lie_xinxi_jianjie>span:nth-child(4){
	margin-left: 20px;
}
.searchList_lie_xinxi_jianjie>p:nth-child(5){
	padding: 6px 0;
}
/* @media only screen and (max-width: 1366px) {
    .searchList_canshu ul li:first-child,.searchList_shuju ul li:first-child{
    	display: none;
    }
} */
</style>
