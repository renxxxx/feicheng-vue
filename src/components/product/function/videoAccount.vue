<template>
	<div class="videoAccount">
		<div style="text-align: right;height: 60px;line-height: 60px;align-items: center;color: #787a7a;"></div>
		<div class="searchList" v-infinite-scroll="nextPage" :infinite-scroll-disabled="load" infinite-scroll-distance="10">
			<el-table :data="userList"  style="width: 99%"   @row-click="detailsFn">
				<el-table-column   prop="date" label="视频号" min-width="62%">
					<template slot-scope="scope">
				       <div class="searchList_lie_xinxi">
				       	<img :src="scope.row.link2WxVideoaccount.logo" alt="">
				       	<div class="searchList_lie_xinxi_jianjie">
				       		<h3>{{scope.row.link2WxVideoaccount.name}}</h3>
				       		<!-- <svg width="1em" height="1em" viewBox="0 0 16 16" style="color: rgb(24, 144, 255); font-size: 16px;"><g transform="translate(-982 -658)"><circle cx="8" cy="8" r="8" transform="translate(982 658)" fill="#fff"></circle><path d="M72,64a8,8,0,1,0,8,8A8,8,0,0,0,72,64Zm3.455,5.388L71.695,74.6a.568.568,0,0,1-.923,0l-2.227-3.086a.143.143,0,0,1,.116-.227H69.5a.569.569,0,0,1,.463.238l1.271,1.764L74.039,69.4a.571.571,0,0,1,.463-.238h.837A.143.143,0,0,1,75.455,69.388Z" transform="translate(918 594)" fill="currentColor"></path></g></svg> -->
				       		<!-- <span>{{user.name}}</span> -->
				       		<p style="color: #787a7a;display: block;padding: 1px 0px;height: 33px;line-height: 33px;">
				       			视频号:{{scope.row.link2WxVideoaccount.wx}}
				       			<span class="_3wruq4Mm"></span>
				       			<span class="diquColor">&nbsp;{{scope.row.link2WxVideoaccount.area1Name}}·{{scope.row.link2WxVideoaccount.area2Name}}·{{scope.row.link2WxVideoaccount.area3Name}}</span>
				       		</p>
				       		<p class="line-2">简介：{{scope.row.link2WxVideoaccount.brief}}</p>
				       	</div>
				       </div>
				    </template>
			   </el-table-column>
			<!--  <el-table-column prop="name" min-width="10%" v-if="scope.row.link2WxVideoaccount.wxVideoaccountRealmList">
					<template slot="header" slot-scope="scope">
			   			<div @click="clickFn('type')" :class="clickData.type? 'xuanzhongColor':''" style="text-align:center;cursor: pointer;">
			   				<span style="color: #cdcfcf;" :class="clickData.type? 'xuanzhongColor':''">领域</span>
			   			</div>
					</template>
					<template slot-scope="scope" >
			   			<span class="biaoqianClass" v-for="(biaoqian,num) in scope.row.link2WxVideoaccount.wxVideoaccountRealmList" :key="num">{{biaoqian.name}}</span>
					</template>
			   </el-table-column> -->
			   <el-table-column prop="name" min-width="7%">
				   <template slot="header" slot-scope="scope">
						<div @click="clickFn('one')" :class="clickData.one? 'xuanzhongColor':''" style="text-align:center;cursor: pointer;">
							<span style="color: #cdcfcf;" :class="clickData.one? 'xuanzhongColor':''">粉丝数</span>
							<svg viewBox="0 0 1024 1024" focusable="false" class="" data-icon="caret-down" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M840.4 300H183.6c-19.7 0-30.7 20.8-18.5 35l328.4 380.8c9.4 10.9 27.5 10.9 37 0L858.9 335c12.2-14.2 1.2-35-18.5-35z"></path></svg>
						</div>
					</template>
					<template slot-scope="scope">
						<span style="color: #e8edee;font-size: 14px;">{{scope.row.link2WxVideoaccount.fansCount}}</span>			  
					</template>
			   </el-table-column>
				<el-table-column prop="name" min-width="7%">
					<template slot="header" slot-scope="scope">
						<div @click="clickFn('two')" :class="clickData.two? 'xuanzhongColor':''" style="text-align:center;cursor: pointer;">
							<span style="color: #cdcfcf;" :class="clickData.two? 'xuanzhongColor':''" >获赞数</span>
							<svg viewBox="0 0 1024 1024" focusable="false" class="" data-icon="caret-down" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M840.4 300H183.6c-19.7 0-30.7 20.8-18.5 35l328.4 380.8c9.4 10.9 27.5 10.9 37 0L858.9 335c12.2-14.2 1.2-35-18.5-35z"></path></svg>
						</div>
					</template>
					<template slot-scope="scope">
						<span style="color: #e8edee;font-size: 14px;">{{scope.row.link2WxVideoaccount.likeCount}}</span>			 
					</template>
				</el-table-column>
				<el-table-column prop="name" min-width="7%">
					<template slot="header" slot-scope="scope">
						<div @click="clickFn('three')" :class="clickData.three? 'xuanzhongColor':''" style="text-align:center;cursor: pointer;">
							<span style="color: #cdcfcf;" :class="clickData.three? 'xuanzhongColor':''">视频量</span>
							<svg viewBox="0 0 1024 1024" focusable="false" class="" data-icon="caret-down" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M840.4 300H183.6c-19.7 0-30.7 20.8-18.5 35l328.4 380.8c9.4 10.9 27.5 10.9 37 0L858.9 335c12.2-14.2 1.2-35-18.5-35z"></path></svg>
						</div>
					</template>
					<template slot-scope="scope">
						<span style="color: #e8edee;font-size: 14px;">{{scope.row.link2WxVideoaccount.videoCount}}</span>			 
					</template>
				</el-table-column>
				<el-table-column prop="name" min-width="7%">
					<template slot="header" slot-scope="scope">
						<div @click="clickFn('four')" :class="clickData.four? 'xuanzhongColor':''" style="text-align:center;cursor: pointer;">
							<span  style="color: #cdcfcf;" :class="clickData.four? 'xuanzhongColor':''">曝光量</span>
							<svg viewBox="0 0 1024 1024" focusable="false" class="" data-icon="caret-down" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M840.4 300H183.6c-19.7 0-30.7 20.8-18.5 35l328.4 380.8c9.4 10.9 27.5 10.9 37 0L858.9 335c12.2-14.2 1.2-35-18.5-35z"></path></svg>
						</div>
					</template>
					<template slot-scope="scope">
						<span style="color: #e8edee;font-size: 14px;">{{scope.row.link2WxVideoaccount.pv}}</span>			 
					</template>
				</el-table-column>
			 </el-table>
			<!-- </div> -->
		</div>
	</div>
</template>

<script>
import axios from 'axios'
import {mapActions,mapGetters} from 'vuex'
import qs from 'qs';
import login from '../../common/functionPage/login.vue'
export default {
	name: 'videoAccount',
	data () {
		return {
			num:0,
			userList:[],
			page:0,
			load:false,
			wxVideoaccountRealmId:[],
			wxVideoaccountRealmIdNow:'',
			one:0,
			two:0,
			three:0,
			four:0,
			type : 0,
			clickData:{
				type:false,
				 one:false,
				 two:false,
				 three:false,
				 four:false
			},
			sort:'',
			order:'',
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
		login
	},
	beforeCreate(){

	},
	created(){
		
	},
	activated(){
    let thisVue = this
      if(this.$route.meta.auth && !this.$store.state.login){
          this.$store.state.centerDialogVisible = true;
          this.$refs.loginRef.getData();
     }
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
		this.nextPage();
	},
	methods: {
		nextPage(){
			this.page++;
			this.getData();
		},
		getData(){
			this.load = true;
			this.$axios.get("/user/my-user-object/user-object-list?"+qs.stringify({
				get:1,
				link:2,
				pn:this.page,
				ps:5,
				sort:this.sort,
				order:this.order,
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
		detailsFn(value){
			window.open('/#/searchDetails/searchDetails_index?data='+value.wxVideoaccountId, '_blank');
		},
		clickFn(_value){
			this.clickData={one:false,two:false,three:false,four:false};
			switch(_value){
				case 'type':
				this.one = 0;
				this.two=0;
				this.three= 0;
				this.four = 0;
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
				debugger
				this.nextPage()
				
				break;
				case 'two':
				this.type = 0;
				this.one=0;
				this.three= 0;
				this.four = 0;
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
				debugger
				this.nextPage()
				
				break;
				case 'three':
				this.type = 0;
				this.one=0;
				this.two= 0;
				this.four = 0;
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
				debugger
				this.nextPage()
				
				break;
				case 'four':
				this.type = 0;
				this.one=0;
				this.two= 0;
				this.three = 0;
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
				debugger
				this.nextPage()
				
				break;
			}
		},
	},
}
</script>

<style scoped>
.videoAccount{
	width: 100%;
	height: 100%;
	overflow-y: scroll;
}
.videoAccount::-webkit-scrollbar{width:4px;border-radius: 50px;}
.videoAccount::-webkit-scrollbar-track{background-color:#2b2b2e;border-radius: 50px;}
.videoAccount::-webkit-scrollbar-thumb{background-color:#66666d;border-radius: 50px;}
.videoAccount::-webkit-scrollbar-thumb:hover {background-color:#2b2b2e;border-radius: 50px;}
.videoAccount::-webkit-scrollbar-thumb:active {background-color:#2b2b2e;border-radius: 50px;}
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
	margin: 3px ;
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

/* >>>.has-gutter{
	display: none;
} */
>>>.el-table th {
    background-color: #3a3a3e;
	height: 0px;
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
.xuanzhongColor{
	color: #ff7800!important;
	transition: all .3s;
}
</style>
