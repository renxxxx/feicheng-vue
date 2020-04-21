<template>
	<div class="douyinSearch" style="margin-top:24px;">
		<div class="search">
			<el-row style="height: 60px;line-height: 60px;">
				<div class="search_box">
					<!-- <div class="search_box_xiala" @click="showXiaLaFn">
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
					</div> -->
					<div class="search_box_input">
						<img src="../../assets/img/search.png" alt="">
						<input @click="searchColor=true" type="search" @keydown.enter="searchFn" v-model="kw" placeholder="请输入关键字">
						<svg v-if="kw" @click="kw =''" viewBox="64 64 896 896" focusable="false" class="" data-icon="close-circle" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M685.4 354.8c0-4.4-3.6-8-8-8l-66 .3L512 465.6l-99.3-118.4-66.1-.3c-4.4 0-8 3.5-8 8 0 1.9.7 3.7 1.9 5.2l130.1 155L340.5 670a8.32 8.32 0 0 0-1.9 5.2c0 4.4 3.6 8 8 8l66.1-.3L512 564.4l99.3 118.4 66 .3c4.4 0 8-3.5 8-8 0-1.9-.7-3.7-1.9-5.2L553.5 515l130.1-155c1.2-1.4 1.8-3.3 1.8-5.2z"></path><path d="M512 65C264.6 65 64 265.6 64 513s200.6 448 448 448 448-200.6 448-448S759.4 65 512 65zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"></path></svg>
					</div>
					<span @click="searchFn" :class="searchColor? 'searchColor':''">搜 索</span>
				</div>
				<div v-if='show_jieguo[0]||show_jieguo[1]' class="ant-col" style="line-height: 60px;padding-left: 16px; padding-right: 16px; float: left;">
					<span class="_3EYKFwfn">{{searchNum}}</span>
					<span>条结果</span>
				</div>
				<div class="_1OxA1GcO" style="line-height: 60px;" v-if='show_jieguo[0]||show_jieguo[1]' @click="inDataFn">
					<i aria-label="图标: sync" class="anticon anticon-sync">
						<svg viewBox="64 64 896 896" focusable="false" class="" data-icon="sync" width="1em" height="1em" fill="currentColor" aria-hidden="true">
							<path d="M168 504.2c1-43.7 10-86.1 26.9-126 17.3-41 42.1-77.7 73.7-109.4S337 212.3 378 195c42.4-17.9 87.4-27 133.9-27s91.5 9.1 133.8 27A341.5 341.5 0 0 1 755 268.8c9.9 9.9 19.2 20.4 27.8 31.4l-60.2 47a8 8 0 0 0 3 14.1l175.7 43c5 1.2 9.9-2.6 9.9-7.7l.8-180.9c0-6.7-7.7-10.5-12.9-6.3l-56.4 44.1C765.8 155.1 646.2 92 511.8 92 282.7 92 96.3 275.6 92 503.8a8 8 0 0 0 8 8.2h60c4.4 0 7.9-3.5 8-7.8zm756 7.8h-60c-4.4 0-7.9 3.5-8 7.8-1 43.7-10 86.1-26.9 126-17.3 41-42.1 77.8-73.7 109.4A342.45 342.45 0 0 1 512.1 856a342.24 342.24 0 0 1-243.2-100.8c-9.9-9.9-19.2-20.4-27.8-31.4l60.2-47a8 8 0 0 0-3-14.1l-175.7-43c-5-1.2-9.9 2.6-9.9 7.7l-.7 181c0 6.7 7.7 10.5 12.9 6.3l56.4-44.1C258.2 868.9 377.8 932 512.2 932c229.2 0 415.5-183.7 419.8-411.8a8 8 0 0 0-8-8.2z">
							</path>
						</svg>
					</i>
					<span>重置筛选条件</span>
				</div>
			</el-row>
			<el-row style="line-height: 47px;" class="search_type">
				<!-- <el-col :xs="5" :sm="4" :md="3" :lg="2" :xl="1"> -->
					<span class="search_type_span">领域:</span>
				<!-- </el-col> -->
				<!-- <el-col :xs="19" :sm="20" :md="21" :lg="22" :xl="23"> -->
					<ul>
						<li v-for="(item,inx) in typeList" :key="inx"  @click="typeClickFn(item,inx)">
							<span :class="[item.typeData? 'typeCilckColor':'']">{{item.name}}</span>
						</li>
					</ul>
				<!-- </el-col> -->
			</el-row>
			<el-row style="line-height: 47px;" class="search_type">
					<span class="search_type_span">账号类型:</span>
					<ul>
						<li v-for="(item,inx) in dataList" :key="inx"  @click="renzhengClickFn(item,inx)">
							<div class="ant-col" style="padding-left: 16px">
								<div class="_1CbZWulL">
									<div class="_3jSKX6Bn" :class="[item.typeData? 'butttonClass':'']">
										<div class="_o0SOfc8d" :class="[item.typeData? 'butttonClass':'']">{{item.name}}</div>
									</div>
								</div>
							</div>
							<!-- <span :class="[item.typeData? 'typeCilckColor':'']">{{item.name}}</span> -->
						</li>
					</ul>
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


		<div class="searchList" v-infinite-scroll="nextPage" :infinite-scroll-disabled="load" infinite-scroll-distance="10" >
			<el-table :data="userList"  style="width: 99%"   @row-click="detailsFn">
				<el-table-column  prop="date" label="视频号" min-width="60%">
					<template slot-scope="scope">
				       <div class="searchList_lie_xinxi">
				       	<img v-lazy="scope.row.logo" alt="">
				       	<div class="searchList_lie_xinxi_jianjie">
				       		<h3>{{scope.row.name}}<span v-if='scope.row.type==1'>个人号</span><span v-if='scope.row.type==2'>达人号</span><span v-if='scope.row.type==3'>企业号</span></h3>
				       		<!-- <svg width="1em" height="1em" viewBox="0 0 16 16" style="color: rgb(24, 144, 255); font-size: 16px;"><g transform="translate(-982 -658)"><circle cx="8" cy="8" r="8" transform="translate(982 658)" fill="#fff"></circle><path d="M72,64a8,8,0,1,0,8,8A8,8,0,0,0,72,64Zm3.455,5.388L71.695,74.6a.568.568,0,0,1-.923,0l-2.227-3.086a.143.143,0,0,1,.116-.227H69.5a.569.569,0,0,1,.463.238l1.271,1.764L74.039,69.4a.571.571,0,0,1,.463-.238h.837A.143.143,0,0,1,75.455,69.388Z" transform="translate(918 594)" fill="currentColor"></path></g></svg> -->
				       		<!-- <span>{{user.name}}</span> -->
				       		<p style="color: #787a7a;display: block;padding: 1px 0px;height: 33px;line-height: 33px;">
				       			<!-- 视频号:{{scope.row.wx}} -->
				       			<!-- <span class="_3wruq4Mm"></span> -->
				       			<span class="diquColor"><span>{{scope.row.area1Name}}</span><span v-if='scope.row.area2Name'>·{{scope.row.area2Name}}</span><span v-if='scope.row.area3Name'>·{{scope.row.area3Name}}</span></span>
				       		</p>
				       		<div class="line-2" >{{scope.row.brief?`简介：${scope.row.brief}`:scope.row.brief}}</div>
				       	</div>
				       </div>
				    </template>
			   </el-table-column>
			   <el-table-column align='center'  prop="name" min-width="13%" >
					<template slot="header" slot-scope="scope" style="text-align: center;">
			   			<div @click="clickFn('type')" :class="clickData.type? 'xuanzhongColor':''" style="text-align:center;cursor: pointer;width: 100%;height: 100%;">
			   				<span style="color: #cdcfcf;text-align: center;" :class="clickData.type? 'xuanzhongColor':''">领域</span>
			   			</div>
					</template>
					<template slot-scope="scope" >
			   			<span class="biaoqianClass"  style="text-align: center !important;"  v-for="(biaoqian,num) in scope.row.wxVideoaccountRealmList">{{biaoqian.name}}</span>
					</template>
			   </el-table-column>
			   <el-table-column align='center'   prop="name" min-width="10%" style="text-align: center;">
				   <template slot="header" slot-scope="scope" >
						<div @click="clickFn('one')" :class="clickData.one? 'xuanzhongColor':''" style="text-align:center;cursor: pointer;">
							<span style="color: #cdcfcf;text-align: center;" :class="clickData.one? 'xuanzhongColor':''">粉丝数</span>
							<svg viewBox="0 0 1024 1024" focusable="false" class="" style="vertical-align: middle;" data-icon="caret-down" width="1em" height="1em" fill="currentColor" aria-hidden="false"><path d="M840.4 300H183.6c-19.7 0-30.7 20.8-18.5 35l328.4 380.8c9.4 10.9 27.5 10.9 37 0L858.9 335c12.2-14.2 1.2-35-18.5-35z"></path></svg>
						<!-- <svg viewBox="0 0 1024 1024" focusable="false"  style="vertical-align: middle;"  class="" data-icon="caret-up" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M840.4 300H183.6c-19.7 0-30.7 20.8-18.5 35l328.4 380.8c9.4 10.9 27.5 10.9 37 0L858.9 335c12.2-14.2 1.2-35-18.5-35z"></path></svg> -->

            </div>
					</template>
					<template slot-scope="scope">
						<span style="color: #e8edee;font-size: 14px;text-align: center !important;">{{numberTry(scope.row.fansCount)}}</span>
					</template>
			   </el-table-column>
				<el-table-column align='center'   prop="name" min-width="10%">
					<template slot="header" slot-scope="scope">
						<div @click="clickFn('two')" :class="clickData.two? 'xuanzhongColor':''" style="text-align:center;cursor: pointer;">
							<span style="color: #cdcfcf;text-align: center;" :class="clickData.two? 'xuanzhongColor':''" >获赞数</span>
							<svg viewBox="0 0 1024 1024" focusable="false"  style="vertical-align: middle;"  class="" data-icon="caret-down" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M840.4 300H183.6c-19.7 0-30.7 20.8-18.5 35l328.4 380.8c9.4 10.9 27.5 10.9 37 0L858.9 335c12.2-14.2 1.2-35-18.5-35z"></path></svg>
						</div>
					</template>
					<template slot-scope="scope">
						<span style="color: #e8edee;font-size: 14px;">{{numberTry(scope.row.likeCount)}}</span>
					</template>
				</el-table-column>
				<el-table-column align='center'   prop="name" min-width="10%">
					<template slot="header" slot-scope="scope">
						<div @click="clickFn('three')" :class="clickData.three? 'xuanzhongColor':''" style="text-align:center;cursor: pointer;">
							<span style="color: #cdcfcf;text-align: center;" :class="clickData.three? 'xuanzhongColor':''">视频量</span>
							<svg viewBox="0 0 1024 1024" focusable="false"  style="vertical-align: middle;"  class="" data-icon="caret-down" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M840.4 300H183.6c-19.7 0-30.7 20.8-18.5 35l328.4 380.8c9.4 10.9 27.5 10.9 37 0L858.9 335c12.2-14.2 1.2-35-18.5-35z"></path></svg>
						</div>
					</template>
					<template slot-scope="scope">
						<span style="color: #e8edee;font-size: 14px;">{{numberTry(scope.row.videoCount)}}</span>
					</template>
				</el-table-column>
				<el-table-column align='center'   prop="name" min-width="10%">
					<template slot="header" slot-scope="scope">
						<div @click="clickFn('four')" :class="clickData.four? 'xuanzhongColor':''" style="text-align:center;cursor: pointer;">
							<span  style="color: #cdcfcf;text-align: center;" :class="clickData.four? 'xuanzhongColor':''">曝光量</span>
							<svg viewBox="0 0 1024 1024" focusable="false"  style="vertical-align: middle;"  class="" data-icon="caret-down" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M840.4 300H183.6c-19.7 0-30.7 20.8-18.5 35l328.4 380.8c9.4 10.9 27.5 10.9 37 0L858.9 335c12.2-14.2 1.2-35-18.5-35z"></path></svg>
						</div>
					</template>
					<template slot-scope="scope">
						<span style="color: #e8edee;font-size: 14px;text-align: center;">{{numberTry(scope.row.pv)}}</span>
					</template>
				</el-table-column>
				<el-table-column align='center'   prop="name" min-width="10%">
					<template slot="header" slot-scope="scope">
						<div @click="clickFn('five')" :class="clickData.five? 'xuanzhongColor':''" style="text-align:center;cursor: pointer;">
							<span  style="color: #cdcfcf;text-align: center;" :class="clickData.five? 'xuanzhongColor':''">飞橙指数</span>
							<svg viewBox="0 0 1024 1024" focusable="false"  style="vertical-align: middle;"  class="" data-icon="caret-down" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M840.4 300H183.6c-19.7 0-30.7 20.8-18.5 35l328.4 380.8c9.4 10.9 27.5 10.9 37 0L858.9 335c12.2-14.2 1.2-35-18.5-35z"></path></svg>
						</div> 
					</template>
					<template slot-scope="scope">
						<span style="color: #e8edee;font-size: 14px;text-align: center;">{{numberTry(scope.row.indexNum)}}</span>
					</template>
				</el-table-column>
			 </el-table>
			<!-- </div> -->

		</div>
	</div>
</template>

<script>
import axios from 'axios'
import h5p from '../../../build/h5p.js'
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
			show_jieguo:[false,false],
			num:0,
			kw:'',
			clickData:{
				type:false,
				 one:false,
				 two:false,
				 three:false,
				 four:false,
				 five:false,
			},
			typeList:[],
			dataList:[
				{name:'个人号',value:'1',typeData:false},
				{name:'达人号',value:'2',typeData:false},
				{name:'企业号',value:'3',typeData:false},],
			dataType:'',
			userList:[],
			searchNum:0,
			page:0,
			load:false,
			wxVideoaccountRealmId:[],
			wxVideoaccountRealmIdNow:'',
			sort:'',
			order:'',
			one:0,
			two:0,
			three:0,
			four:0,
			five:0,
			type : 0,
			searchColor:false,
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
	activated(){
		//debugger
    	let thisVue = this
      if(this.$route.meta.auth && !this.$store.state.login){
          this.$store.state.loginComponent.getData();
     }
	 if(this.$route.query.value){
		this.page = 0;
		this.kw = this.$route.query.value;
		this.userList = []
	 }
	 // this.nextPage();
	 // this.getDataType();
  },
	//离开前判断前进和后退时间来判断是否保存滚动值
  beforeRouteLeave(to, from, next) {
	this.scrollTop =document.getElementById('product').scrollTop ||document.getElementById('product').pageYOffset
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
	 document.getElementById('product').scrollTop=document.getElementById('product').pageYOffset=vm.scrollTop;
	});

  },
	mounted(){
		if(this.$route.query.value){
				this.page = 0;
				this.kw = this.$route.query.value;
				this.userList = []
		}else{
      this.nextPage();
      this.getDataType();
    }


	},
	methods: {
		inDataFn(){
			Object.assign(this.$data, this.$options.data());
			this.getDataType()
		},
		nextPage(){
			this.page++;
			this.getData();
		},
		getData(){
			this.load = true;
			this.$axios.get("/wx-videoaccount/wx-videoaccount-list?"+qs.stringify({
				kw:this.kw,
				wxVideoaccountRealmId:this.wxVideoaccountRealmIdNow,
				type:this.dataType,
				sort:this.sort,
				order:this.order,
				pn:this.page,
			}))
			.then(res =>{
				if(res.data.code == 0){
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
		getNum(){
			this.$axios.get("/wx-videoaccount/wx-videoaccount-list-sum?"+qs.stringify({
				kw:this.kw,
				type:this.dataType,
				wxVideoaccountRealmId:this.wxVideoaccountRealmIdNow,
			}))
			.then(res =>{
				if(res.data.code == 0){
				  this.searchNum = res.data.data.rowCount
				}
			})
			.catch()
		},
		getDataType(){
			this.$axios.get("/wx-videoaccount/wx-videoaccount-realm-list?")
			.then(res =>{
				if(res.data.code == 20){
					this.$store.state.loginComponent.getData();
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
				case 'type':
				this.one = 0;
				this.two=0;
				this.three= 0;
				this.four = 0;
				this.five = 0;
				if(this.type%2){
					this.clickData.type = false;
				}else{
					this.clickData.type = true;
				}
				this.type++;
				break;
				case 'one':
				this.type = 0;
				this.two=0;
				this.three= 0;
				this.four = 0;
				this.five = 0;
				if(this.one%3 == 0){
					this.order = 'desc';
					this.sort = "fansCount";
					this.clickData.one = true;
				}else if(this.one%3 == 1){
					this.order = 'asc';
					this.sort = "fansCount";
					this.clickData.one = true;
				}else{
					this.order = '';
					this.sort = '';
					this.clickData.one = false;
				}
				this.userList = [];
				this.page = 0;
				this.one++;
				//debugger
				this.nextPage()

				break;
				case 'two':
				this.type = 0;
				this.one=0;
				this.three= 0;
				this.four = 0;
				this.five = 0;
				if(this.two%3 == 0){
					this.order = 'desc';
					this.sort = "likeCount";
					this.clickData.two = true;
				}else if(this.two%3 == 1){
					this.order = 'asc';
					this.sort = "likeCount";
					this.clickData.two = true;
				}else{
					this.order = '';
					this.sort = '';
					this.clickData.two = false;
				}
				this.userList = [];
				this.page = 0;
				this.two++;
				//debugger
				this.nextPage()

				break;
				case 'three':
				this.type = 0;
				this.one=0;
				this.two= 0;
				this.four = 0;
				this.five = 0;
				if(this.three%3 == 0){
					this.order = 'desc';
					this.sort = "videoCount";
					this.clickData.three = true;
				}else if(this.three%3 == 1){
					this.order = 'asc';
					this.sort = "videoCount";
					this.clickData.three = true;
				}else{
					this.order = '';
					this.sort = '';
					this.clickData.three = false;
				}
				this.userList = [];
				this.page = 0;
				this.three++;
				//debugger
				this.nextPage()

				break;
				case 'four':
				this.type = 0;
				this.one=0;
				this.two= 0;
				this.three = 0;
				this.five = 0;
				if(this.four%3 == 0){
					this.order = 'desc';
					this.sort = "pv";
					this.clickData.four = true;
				}else if(this.four%3 == 1){
					this.order = 'asc';
					this.sort = "pv";
					this.clickData.four = true;
				}else{
					this.order = '';
					this.sort = '';
					this.clickData.four = false;
				}
				this.userList = [];
				this.page = 0;
				this.four++;
				//debugger
				this.nextPage()
				break;
				case 'five':
				this.type = 0;
				this.one=0;
				this.two= 0;
				this.three = 0;
				this.four = 0
				if(this.five%3 == 0){
					this.order = 'desc';
					this.sort = "pv";
					this.clickData.five = true;
				}else if(this.five%3 == 1){
					this.order = 'asc';
					this.sort = "pv";
					this.clickData.five = true;
				}else{
					this.order = '';
					this.sort = '';
					this.clickData.five = false;
				}
				this.userList = [];
				this.page = 0;
				this.five++;
				//debugger
				this.nextPage()
				
				break;
			}
		},
		renzhengClickFn(_item,_inx){
			if(this.dataList[_inx].typeData){
				this.dataList[_inx].typeData = false;
				this.dataType = '';
				this.userList = [];
				this.show_jieguo[1] = false;
				this.page = 0;
				this.nextPage()
			}else{
				for(let i in this.dataList){
					this.dataList[i].typeData = false;
				}
				this.dataType = _item.value;
				this.dataList[_inx].typeData = true;
				this.show_jieguo[1] = true;
				this.userList = [];
				this.page = 0;
				this.getNum();
				this.nextPage()
			}
		},
		typeClickFn(_item,_inx){
			// //console.log(_item)
			if(this.typeList[_inx].typeData){

				this.typeList[_inx].typeData = false;
				this.wxVideoaccountRealmIdNow = '';
				// let a= this.wxVideoaccountRealmId.find(m=>m != _item.wxVideoaccountRealmId);
				// this.wxVideoaccountRealmId = a
				this.userList = [];
				this.show_jieguo[0] = false;
				this.page = 0;
				this.nextPage()
			}else{
				for(let i in this.typeList){
					this.typeList[i].typeData = false;
				}
				//console.dir(this.typeList)
				this.typeList[_inx].typeData = true;
				// this.wxVideoaccountRealmId.push(_item.wxVideoaccountRealmId)
				this.wxVideoaccountRealmIdNow = _item.wxVideoaccountRealmId;
				this.show_jieguo[0] = true;
				this.userList = [];
				this.page = 0;
				this.getNum();
				this.nextPage()
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
			//console.log(_inx)
		},
		searchFn(){
			this.searchColor = true;
			//console.log(this.kw)
			this.page = 1;
			this.userList = []
			this.getData()
		},
		detailsFn(value){
			window.open('/#/searchDetails/searchDetails_index?data='+value.wxVideoaccountId, '_blank');
		},
	},
}
</script>

<style scoped>

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

.douyinSearch{
	width: 100%;
	height: 100%;
	overflow-y: scroll;
	overflow: hidden;
}
.douyinSearch::-webkit-scrollbar{width:4px;border-radius: 50px;}
.douyinSearch::-webkit-scrollbar-track{background-color:#2b2b2e;border-radius: 50px;}
.douyinSearch::-webkit-scrollbar-thumb{background-color:#66666d;border-radius: 50px;}
.douyinSearch::-webkit-scrollbar-thumb:hover {background-color:#2b2b2e;border-radius: 50px;}
.douyinSearch::-webkit-scrollbar-thumb:active {background-color:#2b2b2e;border-radius: 50px;}
.search{width: 100%;position: relative;}
.search_type{
	min-width: 660px;
}
.search_box{
	/* width: 532px; */
	height: 32px;
	line-height: 30px;
	margin: 13px 0px;
	float: left;
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
/* .search_box_xiala>ul>li:hover{
	    transition: background .3s ease;
		cursor: pointer;
	transition: all .5s;
	background-color: hsla(0,0%,100%,.1)!important;
} */
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
.searchColor{
	 color: #fff!important;
	 background-color: #ff7800!important;
	 border-color: #ff9429!important;
	transition: all .3s cubic-bezier(.645,.045,.355,1);
}
.search_box>span:focus{
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

}
.search_type_span{
	display: inline;
	width: 100%;
	/* text-align: center; */
	color: #787a7a;
	font-size: 14px;
	flex-shrink: 0;
}
.search_type ul{
	display: inline;
	padding: 0px;
}
.search_renzheng ul,.search_zhishu ul{
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
	font-size: 14px;
	left: 22px;
	border-radius: 4px;
	padding: 5px;
	color: #cdcfcf;
}

.search_type ul li span:hover,.search_zhishu ul li span:hover{
	cursor: pointer;
	color: #ff7800;
	transition: all .3s cubic-bezier(.78,.14,.15,.86);
	/* background-color: #ff7800; */
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

>>>.el-table th {
    background: rgb(58, 58, 62);
        color: rgb(232, 237, 238);
}
.searchList_type{
	text-align: center;
	display: inline-block;
	width: 18%;
	min-width: 56px;
	max-width: 80px;
	cursor: pointer;
	/* margin-right: 3%; */
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
	cursor: pointer;
	width: 23%;
	max-width: 140px;
	min-width: 110px;
	float: left;
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
.searchList_shuju ul li:first-child{
	cursor: pointer;
	width: 23%;
	max-width: 140px;
	min-width: 110px;
	text-align: center;
	    display: inline-block;
	/* float: left; */
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
	margin: auto 5px;
	margin-left: 5px;
	border: 2px solid #fff;
}
.searchList_lie_xinxi_jianjie{
	padding: 20px 8px 8px 8px;
	display: inline-block;
	margin-left: 75px;
}
.searchList_lie_xinxi_jianjie>h3{
	display: inline-block;
	color: #e8edee;
	font-size: 16px;
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
	/* margin-left: 8px; */
	padding: 2px 8px 1px;
	line-height: 16px;
	font-size: 12px;
	color: #cdcfcf;
	border-radius: 11px;
	border: 1px solid rgba(205,207,207,.3);
	background-color: rgba(232,237,238,.1);
	white-space: nowrap;
	float: left;

	/* margin: 3px; */
}
.searchList_lie_xinxi_jianjie>div{
  color: rgb(120, 122, 122);
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
      margin-bottom: 15px;
}

.searchList_lie_xinxi_jianjie>svg{
	position: absolute;
	margin-top: 3px;
}
.searchList_lie_xinxi_jianjie>span:nth-child(4){
	/* margin-left: 20px; */
}
.searchList_lie_xinxi_jianjie>p:nth-child(5){
	padding: 6px 0;
}
.diquColor{
	color:#cdcfcf;
	display: inline-block;
}
.diquColor::before{
	position: absolute;
	color: #707070;
}
._3wruq4Mm {
	margin: 0 8px;
   width: 1px;
   height: 12px;
	line-height: 12px;
   background-color: #707070;
	display: inline-block;

}


._1OxA1GcO {
    color: #fe2c55;
    cursor: pointer;
	/* display: inline-block; */
	/* float: right; */
	/* margin: 16px 0px; */
}
._1OxA1GcO:hover {
    color: #fe3e65;
}
.ant-layout, .ant-layout * {
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
}
.ant-layout, .ant-layout * {
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
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
.anticon svg {
    display: inline-block;
}
svg:not(:root) {
    overflow: hidden;
}
._3EYKFwfn {
    color: #ff7800;
}
.searchList_lie_xinxi_jianjie>h3 span{
    margin-left: 8px;
    line-height: 16px;
    font-size: 12px;
    color: rgb(205, 207, 207);
    background-color: rgba(232, 237, 238, 0.1);
    white-space: nowrap;
    padding: 2px 8px 1px;
    border-radius: 11px;
    border-width: 1px;
    border-style: solid;
    border-color: rgba(205, 207, 207, 0.3);
    -o-border-image: initial;
    border-image: initial;
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
    border:none;
    padding: 0;
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
.ant-layout * {
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
}
._3jSKX6Bn {
    cursor: pointer;
}
._o0SOfc8d {
    text-align: center;
    color: #cdcfcf;
    border-radius: 4px;
    border: 1px solid #6d6d6d;
    width: 104px;
    line-height: 32px;
    /* height: 32px; */
    box-sizing: border-box;
    -webkit-transition: all .2s;
    transition: all .2s;
}
._o0SOfc8d:hover {
    background-color: #ff7800;
        border-color: #ff7800;
	border-radius: 4px;
	color:#FFF;
}
.butttonClass{
	background-color: #ff7800;
	    border-color: #ff7800;
	border-radius: 4px;
	color:#FFF;
}
/* @media only screen and (max-width: 1366px) {
    .searchList_canshu ul li:first-child,.searchList_shuju ul li:first-child{
    	display: none;
    }
} */
</style>
