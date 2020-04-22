<template>
  <div id="app" class="muti" ref='appRef' v-cloak>
    <keep-alive>
      <router-view />
    </keep-alive>
	<div class="contact" @click="contactFn">
		<span>联系<br>
		我们</span>
	</div>
	<el-dialog class="popScan" title="联系客服" :visible.sync="showContact" width="402px" @close="closeLogin()" top="10vh" center>
	  <div class="popIndex" style="height: 418px">
	    <div class="code">
	      <img  :src="this.$store.state.getConfig.config().personalWxQrcode" alt="" />
	    </div>
	    <p class="scanNow scanNowFirst">
	      打开
	      <span>微信 App</span>
	    </p>
	    <p class="scanNow">点击页面右上角打开扫一扫</p>
	    <div class="codelogin" role="separator">
	      <span class=""><span class="">微信扫码联系</span></span>
	    </div>
	    <div class="scanIntro">联系电话：{{this.$store.state.getConfig.config().servantTel}}</div>
	  </div>
	</el-dialog>
    <login ref="loginRef"></login>
    <loading ref="loadingRef"></loading>
  </div>
</template>

<script>
import login from '@/components/login.vue'
import loading from '@/components/loading.vue'
export default {
  name: 'App',
  data() {
    return {
		showContact:false
    };
  }, 
		metaInfo(){
      let thisVue = this
     let config =  thisVue.$store.state.getConfig.config()
			return{
				title:  config.seoTitle, // set a title
				meta:[   // set meta
					{                
						name: 'keyWords',
						content: config.seoKeywords
					},
					{
						name: 'description',
						content: config.seoDescription
					},
				],
			}
		},
  components: {
    login,loading
  },
  watch:{
  },

  mounted(){
    this.$store.state.loginComponent = this.$refs.loginRef
    this.$store.state.loadingComponent = this.$refs.loadingRef
	// console.log(this.$store.state.getConfig.config())
	// var objs = document.getElementsByTagName("meta");
	// console.log(objs)
	// 	for(var i=0;i<objs.length;i++){
	// 		// console.log(objs[i].content)
	// 		if(objs[i].name == 'keywords'){
				
	// 			objs[i].content = 'new keywords';
	// 			console.log(objs[i].content )
	// 		}
	// 	}
  },
  created(){
    if(!this.cookieOn()){
       this.$alert('您的浏览器限制了第三方Cookie, 这将影响您正常登录, 您可以更改浏览器的隐私设置, 解除限制后重试.', '提示', {
          confirmButtonText: '确定',

        });
    }
	
	this.$jquery.ajax({
				  url:'/my/wx-videoaccount',
				  type:'get',
				  async:false,
				  success:function(res){
				    if(res.code == 0){
						  thisVue.$store.state.wxVideoaccount=res.data
				    }
				  }
	     })
    //debugger
    let thisVue = this
        this.$jquery.ajax({
			  url:'/login-refresh',
			  type:'get',
			  async:false,
			  success:function(res){
			    if(res.code == 0){
					  thisVue.$store.state.login=res.data
			    }
			  }
      })

 this.$jquery.ajax({
			  url:'/my/wx-videoaccount',
			  type:'get',
			  async:false,
			  success:function(res){
			    if(res.code == 0){
					  thisVue.$store.state.wxVideoaccount=res.data
			    }
			  }
      })

  },
  methods: {
	  contactFn(){
		  this.showContact = true
	  },
	  closeLogin(){
		  this.showContact = false
	  }
  }
}
</script>


<style scoped>
#app {
	height: 100%;
	position: relative;
}

[v-cloak]{
    display: none;
}
.contact{
	width: 70px;
	height: 70px;
	box-sizing: border-box;
	text-align: center;
	position: fixed;
	top: 50%;
	right: 0;
	background-color: #2f2f31;
	z-index: 999;
	border-radius: 8px;
	color: #cdcfcf;
	cursor: pointer;
	transition: all .2s;
}
.contact:hover{
	color: #FFFFFF;
}
.contact>span{
	display: block;
	margin-top: 14px;
	
}
.popIndex {
  text-align: center;
}
.popIndex .code {
  width: 322px;
  height: 230px;
  margin: 0 auto;
}
.popIndex .code > img {
  width: 230px;
  height: 230px;
  display: block;
  vertical-align: middle;
  border-style: none;
  margin: 0 auto;
}
.code p{
  font-size: 16px;
  line-height: 230px;
}
.code p span{
  color: #ff7800;
  cursor: pointer;
}
.scanNow {
  font-size: 14px;
  line-height: 22px;
  margin: 0;
}
.scanNowFirst {
  margin-top: 10px !important;
}
.codelogin {
  display: table;
  margin: 16px 0;
  color: #fff;
  font-weight: 500;
  font-size: 16px;
  white-space: nowrap;
  text-align: center;
  background: transparent;
  clear: both;
  width: 100%;
  min-width: 100%;
  height: 1px;
  margin-top: 26px !important;
}
.codelogin:before {
  position: relative;
  top: 50%;
  display: table-cell;
  width: 50%;
  border-top: 1px solid #6d6d6d;
  -webkit-transform: translateY(50%);
  -ms-transform: translateY(50%);
  transform: translateY(50%);
  content: '';
}
.codelogin:after {
  position: relative;
  top: 50%;
  display: table-cell;
  width: 50%;
  border-top: 1px solid #6d6d6d;
  -webkit-transform: translateY(50%);
  -ms-transform: translateY(50%);
  transform: translateY(50%);
  content: '';
}
.codelogin > span {
  display: inline-block;
  padding: 0 24px;
}

.codelogin > span > span {
  font-size: 14px;
  color: #5a7a9a;
  text-align: center;
  /* cursor: pointer; */
}
.scanIntro {
  padding: 12px 0 0;
  font-size: 16px;
}

/* 重写 */
.el-dialog__header {
  padding-top: 32px;
}
.el-dialog__body {
  padding: 0 !important;
}



</style>



<style>
/* img:not([src]),img[src=""] {opacity: 0;} */
img[lazy="loading"]{
 }
 
img[lazy="error"]{
 }


*{
	word-break: break-all;
}

body{
  margin: 0px;
  padding: 0px;
  position:absolute;
  top:0;
  left:0;
  right:0;
  bottom:0;
}
img{
  object-fit: cover;
}

::-webkit-scrollbar{
	width:4px;
	/* border-radius: 5px; */
}
::-webkit-scrollbar-track{
	background-color:#2b2b2e;
	/* border-radius: 5px; */
}
::-webkit-scrollbar-thumb{
	background-color:#66666d;
	/* border-radius: 5px; */
}
::-webkit-scrollbar-thumb:hover {
	background-color:#66666d;
	/* border-radius: 5px; */
}
::-webkit-scrollbar-thumb:active {
	background-color:#2b2b2e;
	/* border-radius: 5px; */
}

::selection {
    color: #fff;
    background: #ff7800;
}


.line-1{
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
  word-break: break-all;
  word-wrap: break-word;
}
.line-2{
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  word-break: break-all;
  word-wrap: break-word;
}
.line-3{
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  word-break: break-all;
  word-wrap: break-word;
}
.line-4{
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
  word-break: break-all;
  word-wrap: break-word;
}

</style>
