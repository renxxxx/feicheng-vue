<template>
	<div class="videoAccount">
		<div class="searchList" v-infinite-scroll="nextPage" :infinite-scroll-disabled="load" infinite-scroll-distance="10">
			<el-table :data="userList"  style="width: 99%" @row-click="detailsFn">
				<el-table-column   prop="date" min-width="62%">
					<template slot-scope="scope">
				       <div class="searchList_lie_xinxi">
				       	<img :src="scope.row.logo" alt="">
				       	<div class="searchList_lie_xinxi_jianjie">
				       		<h3>{{scope.row.name}}</h3>
				       		<p style="color: #787a7a;display: block;padding: 1px 0px;height: 33px;line-height: 33px;">
				       			视频号:{{scope.row.wx}}
				       			<span class="_3wruq4Mm"></span>
				       			<span class="diquColor">&nbsp;{{scope.row.area1Name}}·{{scope.row.area2Name}}·{{scope.row.area3Name}}</span>
				       		</p>
				       		<p class="line-2">简介：{{scope.row.brief}}</p>
				       	</div>
				       </div>
				    </template>
			   </el-table-column>
			   <el-table-column prop="name" min-width="10%">
					<template slot-scope="scope">
			   			<span class="biaoqianClass" v-for="(biaoqian,num) in scope.row.wxVideoaccountRealmList" :key="num">{{biaoqian.name}}</span>
					</template>
			   </el-table-column>
			   <el-table-column prop="name" min-width="7%">
					<template slot-scope="scope">
						<span style="color: #e8edee;font-size: 14px;">{{scope.row.fansCount}}</span>			   
					</template>
			   </el-table-column>
				<el-table-column prop="name" min-width="7%">
					<template slot-scope="scope">
						<span style="color: #e8edee;font-size: 14px;">{{scope.row.likeCount}}</span>			   
					</template>
				</el-table-column>
				<el-table-column prop="name" min-width="7%">
					<template slot-scope="scope">
						<span style="color: #e8edee;font-size: 14px;">{{scope.row.videoCount}}</span>			   
					</template>
				</el-table-column>
				<el-table-column prop="name" min-width="7%">
					<template slot-scope="scope">
						<span style="color: #e8edee;font-size: 14px;">{{scope.row.pv}}</span>			   
					</template>
				</el-table-column>
			 </el-table>
			</div>
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
			this.$axios.get("/user/wx-videoaccount/wx-videoaccount-list?"+qs.stringify({
				wxVideoaccountRealmId:this.wxVideoaccountRealmIdNow,
				pn:this.page,
				ps:5,
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
		}
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

>>>.has-gutter{
	display: none;
}
>>>.el-table th {
    background-color: transparent;
	height: 0px;
        color: rgb(232, 237, 238);
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
</style>
