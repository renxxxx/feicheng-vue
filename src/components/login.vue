<template>
  <div>
    <el-dialog class="popScan" title="欢迎登录" :visible.sync="$store.state.centerDialogVisible" width="402px" @close="closeLogin()" top="10vh" center>
      <div class="popIndex" style="height: 418px">
        <div class="code">
          <img v-if="imgSrc" :src="imgSrc" alt="" />
          <p v-else>二维码已过期,请 <span @click="getData()"> 刷新二维码</span></p>
        </div>
        <p class="scanNow scanNowFirst">
          打开
          <span>微信 App</span>
        </p>
        <p class="scanNow">点击页面右上角打开扫一扫</p>
        <div class="codelogin" role="separator">
          <span class=""><span class="">微信扫码登录</span></span>
        </div>
        <div class="scanIntro">打开微信扫一扫，经飞橙服务验证后即可登录/注册</div>
      </div>
    </el-dialog>
  </div>
</template>

<script>
// import Router from 'vue-router'
import qs from 'qs';
export default {
  name: 'gene',
  data() {
    return {
      last:'',
      imgSrc:'',
      loginTicket:'',
      value:1,
      timer:'',
      closeData:{
          data:{},
          value:''
         },
      // imgSrc:'https://mp.weixin.qq.com/cgi-bin/showqrcode?ticket=gQFj7zwAAAAAAAAAAS5odHRwOi8vd2VpeGluLnFxLmNvbS9xLzAyT3BfNjAya0ljbTMxbmpOVWh1Y1MAAgTDY3heAwQQDgAA'
    };
  },
  // computed: {
  //   // ...mapGetters(['centerDialogVisible'])
  //   centerDialogVisible: {
  //     get: function() {
  //       return this.$store.state.centerDialogVisible;
  //     },
  //     set: function(newValue) {
  //       this.$store.state.centerDialogVisible = newValue;
  //     }
  //   }
  // },
created(){
  //debugger
  // console.log('created')
},
	activated(){
		 //debugger;
    // console.log('activated')
	},
	deactivated(){
     //debugger;
    // console.log('deactivated')
	},
  mounted() {
    //debugger
    // console.log('mounted')
     
  },
	// watch:{
	// 	centerDialogVisible: function (curVal,oldVal) {
  //           if(this.centerDialogVisible){
  //               this.getData()
  //            }
	// 	}
	// },
  methods: {
    closeLogin(){
          clearInterval(this.timer);
          this.$store.state.centerDialogVisible = false;
    },
    getData(last){
      debugger
        this.$store.state.centerDialogVisible = true;
       this.last=last;
       let thisVue =this
       if(!this.cookieOn()){
       this.$alert('您的浏览器限制了第三方Cookie, 这将影响您正常登录, 您可以更改浏览器的隐私设置, 解除限制后重试.', '提示', {
          confirmButtonText: '确定',
          
        });
    }
    
      this.$axios
        .get('wx-offiaccount-loginqrcode')
        .then(res => {

              thisVue.loginTicket=res.data.data.loginTicket
             thisVue.imgSrc = 'https://mp.weixin.qq.com/cgi-bin/showqrcode?ticket='+res.data.data.qrcodeTicket
             clearInterval(thisVue.timer);
             thisVue.timer = setInterval(this.get, 2000);

        })
        .catch(err => {});
    },
    get() {
      debugger
      let thisVue = this;
            thisVue.$axios
              .post('login-by-ticket',qs.stringify({loginTicket:thisVue.loginTicket}))
              .then(res => {
                if(res.data.code==0){
                   thisVue.$axios
                        .get('my/wx-videoaccount')
                        .then(res => {
                           if(res.data.code ==0)
                              thisVue.$store.state.wxVideoaccount=res.data.data
                        })     
                    thisVue.$axios
                        .get('login-refresh')
                        .then(res => {
                          if(res.data.code ==0){
                            thisVue.$store.state.login=res.data.data
                            thisVue.$store.state.centerDialogVisible = false;
                            clearInterval(thisVue.timer);
							console.log(thisVue.last)
                              if (thisVue.last) {
                                thisVue.$router.push({path:thisVue.last});
                              }else{
                                thisVue.$router.push({path:'/tihuan',query:{path:thisVue.$router.currentRoute.path,query:thisVue.$router.currentRoute.query}});
                              }
                            }
                        })
                }else{
                }
              })
              .catch(err => {});
          }
  },
   beforeDestroy() {
        clearInterval(this.timer);
      }
};
</script>

<style scoped>
/* 扫码登录 */
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
  color: #ababab;
  font-size: 12px;
}

/* 重写 */
.el-dialog__header {
  padding-top: 32px;
}
.el-dialog__body {
  padding: 0 !important;
}
</style>
