<template>
  <div>
    <el-dialog class="popScan" title="欢迎登陆" :visible.sync="centerDialogVisible" width="402px" @close="closeLogin()" top="10vh" center>
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
          <span class=""><span class="">微信扫码登陆</span></span>
        </div>
        <div class="scanIntro">打开微信扫一扫，经飞橙服务验证后即可登录/注册</div>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import Router from 'vue-router'
import qs from 'qs';
export default {
  name: 'gene',
  data() {
    return {
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
  computed: {
    // ...mapGetters(['centerDialogVisible'])
    centerDialogVisible: {
      get: function() {
        return this.$store.state.centerDialogVisible;
      },
      set: function(newValue) {
        this.$store.state.centerDialogVisible = newValue;
      }
    }
  },

	activated(){
	},
	deactivated(){

	},
  mounted() {
    // this.getData();

     // console.log(this.imgSrc)
  },
  methods: {
    closeLogin(){
          clearInterval(this.timer);
          this.centerDialogVisible = false;
		  // debugger
					// console.log(this.centerDialogVisible)
    },
    getData(){
      this.$axios
        .get('/user/wx-offiaccount-loginqrcode')
        .then(res => {
          // console.log(res)
             this.imgSrc = 'https://mp.weixin.qq.com/cgi-bin/showqrcode?ticket='+res.data.data.qrcodeTicket
             this.loginTicket=res.data.data.loginTicket
             this.timer = setInterval(this.get, 2000);
        })
        .catch(err => {});
    },
    get() {
            this.$axios
              .post('/user/login-by-ticket',qs.stringify({loginTicket:this.loginTicket}))
              .then(res => {
                // console.log(res)
                if(res.data.code==0){
                    this.$store.state.refresh.loginRefresh()
                    this.centerDialogVisible = false;
						// debugger
						window.clearInterval(this.timer);
										if(this.$router.currentRoute.fullPath == '/index'){
											// this.$router.go(0);
											this.$router.push({path:'/tihuan',query:{urlName:'/index'}});
										}else{
											debugger
											this.$router.push({path:'/tihuan',query:{urlName:'/index'}});
											// let showData = true;
											// localStorage.setItem('showData',showData)
										}
					// console.log(this.$router)
                }else{
                   // this.$message.error(res.data.codeMsg);
                }
              })
              .catch(err => {});
            // console.log(this.value);
          }
  },
   beforeDestroy() {
        clearInterval(this.timer);
      }
};
</script>

<style scoped>
/* 扫码登陆 */
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
