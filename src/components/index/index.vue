<template>
  <div id="showPage" >
      <!-- 顶部导航 -->
      <div class="navBarBox">
        <el-header class="navBar">
          <el-row class="indexNav">
            <router-link :to="{path: '/tihuan', query: {path: '/',query:{} }}">
              <el-col :span="6" style="padding: 0;">
                <div class="grid-content bg-purple fclogo">
                  <img
                    v-lazy='logo'
                    alt
                    style="height: 34px;object-fit: cover;margin-top: 16px;object-fit: contain;"
                  />
                </div>
              </el-col>
            </router-link>
            <el-col :span="18">
              <div class="grid-content bg-purple-light tabbarRight">
        	<span v-if='this.$store.state.login' @click='askIfEnter()' class="lf48" >
        	  {{ (!this.$store.state.wxVideoaccount ||   this.$store.state.wxVideoaccount.type==null)?"博主入驻"
        	    :this.$store.state.wxVideoaccount.type==0?"博主入驻"
        	    :this.$store.state.wxVideoaccount.type==1?"个人号"
        	    :this.$store.state.wxVideoaccount.type==2?"达人号"
        	    :this.$store.state.wxVideoaccount.type==3?"企业号"
        	    :"未知" }}
        	  {{(!this.$store.state.wxVideoaccount || this.$store.state.wxVideoaccount.audit==null)?""
        	    :this.$store.state.wxVideoaccount.audit==0?""
        	    :this.$store.state.wxVideoaccount.audit==1?"(审核中)"
        	    :this.$store.state.wxVideoaccount.audit==11?"(已认证)"
        	    :this.$store.state.wxVideoaccount.audit==12?"(认证失败)"
        	    :"未知" }}
        	</span>
                          <router-link v-if='!this.$store.state.login' :to="{ path: '/product/ruzhu' }"><span class="lf48">博主入驻</span></router-link>
                <router-link :to="{ path: '/product/product_douyinSearch' }"><span class="lf48">找视频号</span></router-link>
                <router-link :to="{ path: '/product/product_user' }"><span class="lf48">飞橙商学院</span></router-link>
                <router-link :to="{ path: '/product/product_videoSearch' }"><span class="lf48">素材创意</span></router-link>
                <el-button   v-if="this.$store.state.login? false:true" @click="loginFn" >登录 / 注册</el-button>
                <div v-else class="userToGo">
                  <span><img style="border-radius: 50%;" v-lazy="this.$store.state.login? this.$store.state.login.userLogo:''" alt=""></span>
                  <span>{{this.$store.state.login? this.$store.state.login.userNickname:''}}</span>
                  <router-link :to="{path: '/product/product_user'}"><span class="togo">去使用<i aria-label="icon: right" style="font-size:12px" class="anticon anticon-right"><svg viewBox="64 64 896 896" focusable="false" class="" data-icon="right" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M765.7 486.8L314.9 134.7A7.97 7.97 0 0 0 302 141v77.3c0 4.9 2.3 9.6 6.1 12.6l360 281.1-360 281.1c-3.9 3-6.1 7.7-6.1 12.6V883c0 6.7 7.7 10.4 12.9 6.3l450.8-352.1a31.96 31.96 0 0 0 0-50.4z"></path></svg></i></span>
                  </router-link>
                </div>
              </div>
            </el-col>
          </el-row>
        </el-header>
      </div>

      <!-- 首页大背景 -->
      <el-main>
        <div class="main">
          <div class="homeBack">
            <div class="homeBackIndex"  v-lazy:background-image="{src: require('../../assets/img/homeBack.7ca33676.jpg')}" >
              <div>
                <h1>飞橙全场景AI数据平台<div class="_2L2iRuHT"></div></h1>
                <p>
                  全方位洞察飞橙生态， 发掘热门视频、音乐，爆款商品及优质账号
                  <br />有效助力账号运营变现，品牌策略投放
                </p>
                <div class="homeIntro">
                  <div></div>
                  <div class="homeIntro_div">
                    <span>
                      <span class="ant-breadcrumb-link">CPS</span>
                      <span class="ant-breadcrumb-separator">/</span>
                    </span>
                    <span>
                      <span class="ant-breadcrumb-link">CPC</span>
                      <span class="ant-breadcrumb-separator"></span>
                    </span>
                    <!-- <span>
                      <span class="ant-breadcrumb-link">POI</span>
                      <span class="ant-breadcrumb-separator">/</span>
                    </span>
                    <span>
                      <span class="ant-breadcrumb-link">MCN</span>
                      <span class="ant-breadcrumb-separator">/</span>
                    </span>
                    <span>
                      <span class="ant-breadcrumb-link">CPS</span>
                      <span class="ant-breadcrumb-separator">/</span>
                    </span>-->
                  </div>
                </div>
                <div v-if="!this.$store.state.login"  @click="loginFn">立即使用</div>
                <div v-if="this.$store.state.login" class="userTo"><router-link :to="{ path: '/product/product_user' }">已登录,去使用</router-link></div>
              </div>
            </div>
          </div>
          <div class="downArrayIcon" ref="showPage1">
            <div>
				<div class="_A6ZcKRLC">
					<!-- <span class="_2Z_xHgbs" ref="xiahuaSpan">往下滑动，查看更多</span> -->
					<div class="_3LQTAbds" ref="xiahuaImg">
						<svg width="30" height="12" viewBox="0 0 30 12" style="fill: #fff;opacity:0.7;display:none;">
							
							<path id="\u8DEF\u5F84_1" data-name="\u8DEF\u5F84 1" d="M106.421,277.256a.761.761,0,0,0-.034-1.3,1.578,1.578,0,0,0-1.763.025l-12.775,9.5-12.953-9.465a1.579,1.579,0,0,0-1.765.006.762.762,0,0,0,.008,1.3L90.9,287.387c.021.016.049.02.07.034,0,0,.006.008.011.012h0a1.578,1.578,0,0,0,1.763-.006l13.644-10.151.028-.021Z" transform="translate(-76.769 -275.7)" fill="#fff"></path>
              </svg>
					</div>
				</div>
              <!-- <div>
                <svg width="28" height="28" viewBox="0 0 28 28">
                  <g id="\u7EC4_6058" data-name="\u7EC4 6058" transform="translate(28) rotate(90)">
                    <g id="\u7EC4_6057" data-name="\u7EC4 6057" opacity="0">
                      <g id="\u7EC4_6056" data-name="\u7EC4 6056">
                        <g id="\u7EC4_6055" data-name="\u7EC4 6055">
                          <g id="\u7EC4_6054" data-name="\u7EC4 6054">
                            <g id="\u7EC4_6053" data-name="\u7EC4 6053">
                              <g id="\u7EC4_6052" data-name="\u7EC4 6052">
                                <g id="\u7EC4_6051" data-name="\u7EC4 6051">
                                  <g id="\u7EC4_6050" data-name="\u7EC4 6050">
                                    <g id="\u7EC4_6049" data-name="\u7EC4 6049">
                                      <g id="\u7EC4_6048" data-name="\u7EC4 6048">
                                        <g id="\u7EC4_6047" data-name="\u7EC4 6047">
                                          <path
                                            id="\u8DEF\u5F84_12855"
                                            data-name="\u8DEF\u5F84 12855"
                                            fill="#66666d"
                                            d="M27.263.737V27.263H.737V.737H27.263M28,0H0V28H28V0Z"
                                          />
                                        </g>
                                      </g>
                                    </g>
                                  </g>
                                </g>
                              </g>
                            </g>
                          </g>
                        </g>
                      </g>
                    </g>
                    <g id="\u7EC4_6231" data-name="\u7EC4 6231" transform="translate(0 1.866)">
                      <path
                        id="\u8DEF\u5F84_12856"
                        data-name="\u8DEF\u5F84 12856"
                        fill="#66666d"
                        stroke="#66666d"
                        stroke-width="0.5px"
                        d="M11.566,20.9a.515.515,0,0,1-.4-.169.543.543,0,0,1,0-.789L18.7,12.449,11.17,4.958a.543.543,0,0,1,0-.789.549.549,0,0,1,.792,0l7.925,7.885a.543.543,0,0,1,0,.789l-7.925,7.885A.515.515,0,0,1,11.566,20.9Z"
                        transform="translate(-5.973 0.119)"
                      />
                      <path
                        id="\u8DEF\u5F84_12857"
                        data-name="\u8DEF\u5F84 12857"
                        fill="#66666d"
                        stroke="#66666d"
                        stroke-width="0.5px"
                        d="M11.566,20.9a.515.515,0,0,1-.4-.169.543.543,0,0,1,0-.789L18.7,12.449,11.17,4.958a.543.543,0,0,1,0-.789.549.549,0,0,1,.792,0l7.925,7.885a.543.543,0,0,1,0,.789l-7.925,7.885A.515.515,0,0,1,11.566,20.9Z"
                        transform="translate(1.554 0.119)"
                      />
                    </g>
                  </g>
                </svg>
              </div> -->
            </div>
          </div>
          <div class="oneBox" ref="showPage2">
            <!-- 第一块 -->
            <showPage_one ref="showPage_one"></showPage_one>
            <!-- 第二块 -->
            <showPage_two ref="showPage_two"></showPage_two>
            <!-- 第三块 -->
            <showPage_three ref="showPage_three"></showPage_three>
            <!-- 第四块 -->
            <showPage_four ref="showPage_four"></showPage_four>
            <!-- 第五塊 -->
            <showPage_five ref="showPage_five"></showPage_five>
            <!-- 第六塊 -->
            <showPage_six ref="showPage_six"></showPage_six>
            <!-- 第七塊 -->
            <showPage_seven ref="showPage_seven"></showPage_seven>
            <!-- 第八块 -->
            <showPage_eight ref="showPage_eight"></showPage_eight>
            <!-- 第九块 -->
            <showPage_nine ref="showPage_nine" @loginFn="loginFn" ></showPage_nine>
          </div>
        </div>
      </el-main>
      <!-- <el-footer> -->
      <div class="footer" v-lazy:background-image="{src: require('../../assets/img/footerBack.56fab624.png')}">
        <div class="footer_1">

          <div class="footer_1_3">
            <div class="_GudV7S8W">联系客服</div>
            <div class="_3gZSHcLe">邮箱：{{ getConfig.servantEmail }}</div>
            <div class="_3gZSHcLe">电话：{{ getConfig.servantTel }}（工作日周一至周五9:30-18:00）</div>
          </div>
          <div class="footer_1_4">
            <div>飞橙服务号</div>
            <div>
              <!-- <img src="../../assets/img/cityPic.d155ba3c.png" alt=""> -->
              <div v-viewer="{navbar:false,title:false,toolbar:false}">
                <img v-lazy="getConfig.servantWxQrcode" style="cursor:pointer;" />
					    </div>

            </div>
          </div>
        </div>


        <!-- <div class="footer_2">
          <div class="_1bhE4WcF">{{ servant.icp }}</div>
        </div> -->


      <div class="footer_2">
        <div class="_1bhE4WcF">{{ getConfig.icp }}</div>
      </div>
</div>
      <!-- </el-footer> -->
    </div>
</template>

<script>
const showPage_one = ()=>import("@/components/index/showPage_one.vue");
const showPage_two = ()=>import("@/components/index/showPage_two.vue");
const showPage_three = ()=>import("@/components/index/showPage_three.vue");
const showPage_four = ()=>import("@/components/index/showPage_four.vue");
const showPage_five = ()=>import("@/components/index/showPage_five.vue");
const showPage_six = ()=>import("@/components/index/showPage_six.vue");
const showPage_seven = ()=>import("@/components/index/showPage_seven.vue");
const showPage_eight = ()=>import("@/components/index/showPage_eight.vue");
const showPage_nine = ()=>import("@/components/index/showPage_nine.vue");

// import $ from 'jquery'
export default {
  name: "account",
  data() {
    return {
      logo:require('../../assets/img/feicheng1.svg'),
      codeSrc: "",
      servant: [],
      userName:'',
      useravator:'',
      showData:false,
      getConfig:this.$store.state.config,
	  timeout:'',
      // centerDialogVisible: false
    };
  },
    components: {
    showPage_one,
    showPage_two,
    showPage_three,
    showPage_four,
    showPage_five,
    showPage_six,
    showPage_seven,
    showPage_eight,
    showPage_nine
  },
  watch: {
    $route(to, from) {

    }
  },
  directives: {},
  beforeRouteLeave(to, from, next) {
    //debugger;
    let scrollTop = (this.scrollTop = document.getElementById(
      "showPage"
    ).scrollTop);
    this.scrollTop = scrollTop ? scrollTop : 0;
    // //console.log(this.scrollTop);
    if (!to.query.time || !from.query.time || to.query.time < from.query.time) {
      //debugger;
      if (this.$vnode && this.$vnode.data.keepAlive) {
        if (
          this.$vnode.parent &&
          this.$vnode.parent.componentInstance &&
          this.$vnode.parent.componentInstance.cache
        ) {
          if (this.$vnode.componentOptions) {
            var key =
              this.$vnode.key == null
                ? this.$vnode.componentOptions.Ctor.cid +
                  (this.$vnode.componentOptions.tag
                    ? `::${this.$vnode.componentOptions.tag}`
                    : "")
                : this.$vnode.key;
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
  // 进入该页面时，用之前保存的滚动位置赋值
  beforeRouteEnter(to, from, next) {
     //debugger
    next(vm => {
      document.getElementById("showPage").scrollTop = document.getElementById(
        "showPage"
      ).pageYOffset = vm.scrollTop;
    });
    //判断回调页是否与当前前进路由相等，如果相等，删除路径
    let fromRoute = JSON.stringify({
      path: from.path,
      name: from.name,
      query: from.query
    });

  },
  activated() {
	let _this = this
    _this.timeout = setInterval(function(){
		// console.log(_this.$refs.xiahuaImg)
		// $("_3LQTAbds").animate({top:'250px',opacity:'0'});
		// $("_2Z_xHgbs").animate({opacity:'0'});
		// document.getElementById('_2Z_xHgbs').animate({left:'250px'});
		// _this.$refs.xiahuaSpan.style.opacity = 0
		// _this.$refs.xiahuaImg.style.top = '13px'
		// console.log('ss')
		
	},2000)
     if(this.$route.query.forward){
         localStorage.setItem('forward',this.$route.query.forward)
         this.$router.replace({path:'/'})
      }
     var forward = localStorage.getItem('forward')
     localStorage.removeItem('forward')
    if(forward)
        this.$router.push({path:forward})
  },
  mounted() {
  //debugger
    window.addEventListener("scroll", this.scrollToTop, true);

	


    // 跳转回跳页面
  

    this.$axios
      .get("login-refresh")
      .then(res => {
          if(res.data.code == 0)
           this.$store.state.login=res.data.data
      })
      .catch(err => {});


    this.showData = localStorage.getItem("showData");
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
  // watch:{
  //       '$route':'fetchData'
  //   },
  created() {
    var self = this;
    // self.fetchData();
  },
  methods: {
  	  	//询问是否入驻
askIfEnter(){
  if(this.$store.state.wxVideoaccount){
    if(this.$store.state.wxVideoaccount.audit==12){
        this.$confirm(this.$store.state.wxVideoaccount.audit12Message+'，是否重新认证?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(() => {
              this.$router.push({path:'/product/ruzhu'});
           })
    }else{
      this.$router.push({path:'/product/ruzhu'});
    }
  }else{
    this.$router.push({path:'/product/ruzhu'});
  }
    },
    initData() {
      this.showData = true;
      localStorage.setItem("showData", this.showData);
    },
    loginFn() {
      //debugger;
      this.$store.state.loginComponent.getData('/product/product_user');
    },
    scrollToTop() {
         var scrollTop =  window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop


      var height2 = 0;
      var height3 = height2 + this.$refs.showPage_one.$el.scrollHeight;
      var height4 = height3 + this.$refs.showPage_two.$el.scrollHeight;
      var height5 = height4 + this.$refs.showPage_three.$el.scrollHeight;
      var height6 = height5 + this.$refs.showPage_four.$el.scrollHeight;
      var height7 = height6 + this.$refs.showPage_five.$el.scrollHeight;
      var height8 = height7 + this.$refs.showPage_six.$el.scrollHeight;
      var height9 = height8 + this.$refs.showPage_eight.$el.scrollHeight;
      var height10 = height9 + this.$refs.showPage_nine.$el.scrollHeight;
      // console.log(scrollTop, height2, height3, height4,height5,height6,height7,height8,height9,height10);
      if (scrollTop >= height3 / 2) {
        console.log(123)
        document
          .getElementById("one_1")
          .setAttribute("class", "oneBox_mid_line oneBox_mid_line_one_1");
        document
          .getElementById("one_2")
          .setAttribute("class", "oneBox_mid_line oneBox_mid_line_two_1");
        document
          .getElementById("one_3")
          .setAttribute("class", "oneBox_mid_line oneBox_mid_line_three_1");
        document
          .getElementById("one_4")
          .setAttribute("class", "oneBox_mid_line oneBox_mid_line_four_1");
        document
          .getElementById("one_5")
          .setAttribute("class", "oneBox_mid_line oneBox_mid_line_five_1");
      }
      if (scrollTop >= height3 + 400) {
        document
          .getElementById("two_1")
          .setAttribute("class", "box_indexLf transitionlF_2");
        setTimeout(function() {
          document
            .getElementById("two_2")
            .setAttribute("class", "box_indexRt transitionlFTwo_2");
        }, 200);
      }
      if (scrollTop >= height4 + 400) {
        document
          .getElementById("three_1")
          .setAttribute("class", " mainmid_one transitionlF_3");
        setTimeout(function() {
          document
            .getElementById("three_2")
            .setAttribute("class", " mainmid_two transitionlFTwo_3");
        }, 200);
      }
      if (scrollTop >= height5 + 800) {
        document
          .getElementById("four_1")
          .setAttribute("class", " mainbottom_top mainbottom_top_transition_4");
        setTimeout(function() {
          document
            .getElementById("four_2")
            .setAttribute(
              "class",
              " mainbottom_mid mainbottom_mid_transition_4"
            );
        }, 200);
        setTimeout(function() {
          document
            .getElementById("four_3")
            .setAttribute(
              "class",
              " mainbottom_bottom mainbottom_bottom_transition_4"
            );
        }, 400);
      }

      if (scrollTop >= height6 + 800) {
        document
          .getElementById("five_1")
          .setAttribute(
            "class",
            " mainmid_one_top mainmid_one_top_transition_5"
          );
        setTimeout(function() {
          document
            .getElementById("five_2")
            .setAttribute(
              "class",
              " mainmid_one_mid mainmid_one_mid_transition_5"
            );
        }, 200);
      }

      if (scrollTop >= height7 + 600) {
        document
          .getElementById("six_1")
          .setAttribute("class", " mainbottom mainbottom_transition_6");
      }

      if (scrollTop >= height8 + 400) {
        document
          .getElementById("seven_1")
          .setAttribute(
            "class",
            " maindiv_two_top maindiv_two_top_transition_7"
          );
      }
      if (scrollTop >= height8 + 600) {
        document
          .getElementById("seven_2")
          .setAttribute(
            "class",
            " maindiv_two_bottom maindiv_two_bottom_transition_7"
          );
      }
      if (scrollTop >= height8 + 800) {
        document
          .getElementById("seven_3")
          .setAttribute("class", " maindiv_three maindiv_three_transition_7");
      }

      if (scrollTop >= height9 + 600) {
        document
          .getElementById("eight_1")
          .setAttribute("class", " main_bottom main_bottom_transition_8");
      }
      if (scrollTop >= height10 + 500) {
        document
          .getElementById("nine_1")
          .setAttribute("class", " main main_transition_9");
      }
     
    }
  }
};
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
 @font-face {
    font-family: 'DINPro';
    src: url('../../assets/font/DINPro.6ea892b4.ttf');
    font-weight: normal;
    font-style: normal;
  }


a {text-decoration:none; color: rgba(255, 255, 255, 1);}
a:link{text-decoration:none; }
a:hover{text-decoration:none; }
a:active{text-decoration:none; }
a:visited{text-decoration:none; }

  ._2L2iRuHT{
          width: 600px;
    height: 25px;
    background: -webkit-gradient(linear,left top,right top,from(hsla(0,0%,100%,.3)),to(hsla(0,0%,100%,0)));
    background: linear-gradient(90deg,hsla(0,0%,100%,.3),hsla(0,0%,100%,0));
    opacity: .3;
    position: absolute;
    left: 126px;
    bottom: 5px;
    }
.userToGo {
  margin-left: 48px;
  display: inline-block;
}
.userToGo > span:nth-child(1) {
  float: left;
  margin-top: 20px;

  width: 24px;
  height: 24px;
  line-height: 24px;
  font-size: 18px;
  background: transparent;
  display: inline-block;
}
.userToGo > span:nth-child(1) img {
  display: block;
  width: 24px;
  height: 24px;
  -o-object-fit: cover;
  object-fit: cover;
}
.userToGo > span:nth-child(2) {
  margin: 0 8px;
  display: inline-block;
}
.userToGo .togo {
  color: #faad14 !important;
  display: inline-block;
}


#showPage {
   min-width: 850px;
  overflow-y: hidden;
  -moz-osx-font-smoothing: grayscale;
  font-family:'DINPro' !important;
}
#showPage::-webkit-scrollbar {
  width: 4px;
  /* border-radius: 50px; */
}
#showPage::-webkit-scrollbar-track {
  background-color: #e0e0e0;
  /* border-radius: 50px; */
}
#showPage::-webkit-scrollbar-thumb {
  background-color: #b3b3b3;
  /* border-radius: 50px; */
}
#showPage::-webkit-scrollbar-thumb:hover {
  background-color:  #b3b3b3;
  /* border-radius: 50px; */
}
#showPage::-webkit-scrollbar-thumb:active {
  background-color: #b3b3b3;
  /* border-radius: 50px; */
}
#showPage::-webkit-scrollbar-thumb:active {
  background-color: #e0e0e0;
  /* border-radius: 50px; */
}
el-row,
.el-main {
  padding: 0;
}
.showPage {
  width: 100%;
  height: 100%;
}
.navBarBox{
  width: 100%;
  height: 64px;
}
.navBar {
  /* width: 100%;
  height: 64px !important;
  background: #40404d;
  min-width: 1200px;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 999; */
      height: 64px !important;
      position: fixed;
      top: 0;
      width: 100%;
      z-index: 999;
      background: #081132;
      /* left: -8px; */
}
.fclogo {
  line-break: 64px;
  vertical-align: middle;
  /* padding-left: 8px; */
}
.indexNav {
  width: 1200px;
  height: 64px;
  background: #081132;
  margin: 0 auto !important;
  vertical-align: middle;
  line-break: 64px;
}
.indexNav .fclogo > svg {
  margin-top: 13px;
}
.tabbarRight {
  float: right;
}
.tabbarRight span {
  color: #edeef2;
  cursor: pointer;
  font-size: 14px;

  height: 64px;
  line-height: 64px;
}
.tabbarRight .lf48 {
  margin-left: 48px;
}
.tabbarRight span:hover {
  color: #ff7800;
}
.tabbarRight a:first-child span {
  margin-left: 0;
}

.tabbarRight button {
  /* margin-left: 48px; */
  background: #ff7800;
  border: 0;
  color: #fff;
  width: 99px;
  height: 32px;
  margin: 16px 0 16px 48px;
  padding: 0;
}
.el-main {
  width: 100% !important;
  min-width: 1300px;
  overflow: hidden;
  background: #fff;
}
.main {
  min-width: 1300px;
  overflow: hidden;
  background: #fff;
}
.homeBack {
  /* width: 100% !important;
  min-width: 1300px !important;
  height: 100vh;
  min-height: 650px;
  background: #fff;
  background: #40404d;
  position: relative;
  padding: 0; */
  height: 100vh;
  min-height: 650px;
  padding-top: 1px;
  background: #081132;
  position: relative;
}
.homeBackIndex {
  height: 650px;
  background:  0 -123px no-repeat;

  background-size: cover;
  position: absolute;
  width: 100%;
  left: 0;
  top: 50%;
  -webkit-transform: translateY(-50%);
  transform: translateY(-50%);
  height: 100vh;
  min-height: 650px;
  padding-top: 1px;
}
.homeBackIndex > div {
  width: 1200px;
  margin: auto;
  box-sizing: border-box;
  padding-top: 60px;
}
.homeBackIndex > div h1 {
  font-size: 56px;
  font-weight: 600;
  text-align: left;
  margin-bottom: 32px !important;
  position: relative;
  color: #fff;
  
  /* font-family: DINPro Medium, -apple-system, BlinkMacSystemFont, Segoe UI,
    PingFang SC, Hiragino Sans GB, Microsoft YaHei, Helvetica Neue, Helvetica,
    Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol; */
}
.homeBackIndex > div p {
  font-size: 18px;
  line-height: 36px;
  color: #e8edee;
  margin-bottom: 56px !important;
}
.homeBackIndex > div .homeIntro {
  position: relative;
  margin-bottom: 136px !important;
}
.homeBackIndex > div .homeIntro div:nth-child(1) {
  width: 340px;
  height: 40px;
  line-height: 40px;
  color: #fff !important;
  padding-left: 5px;
  background: -webkit-gradient(
    linear,
    left top,
    right top,
    from(hsla(0, 0%, 100%, 0.3)),
    to(hsla(0, 0%, 100%, 0))
  );
  background: linear-gradient(
    90deg,
    hsla(0, 0%, 100%, 0.3),
    hsla(0, 0%, 100%, 0)
  );
  opacity: 0.3;
}
.homeBackIndex > div .homeIntro div:nth-child(2) {
  position: absolute;
  left: 10px;
  top: 9.5px;
  font-size: 16px;
}
.homeBackIndex > div > div:last-child {
  color: #fff;
  display: inline-flex;
  padding: 0 16px;
  height: 48px;
  line-height: 48px;
  background: #fe2c55;
  opacity: 1;
  border-radius: 4px;
  font-size: 20px;
  text-align: center;
  cursor: pointer;
  -webkit-transition: all 0.15s linear;
  transition: all 0.15s linear;
}
.homeBackIndex > div > .userTo {
  background: #ff7800 !important;
}

.homeIntro_div {
  /* font-family: DINPro Medium, -apple-system, BlinkMacSystemFont, Segoe UI,
    PingFang SC, Hiragino Sans GB, Microsoft YaHei, Helvetica Neue, Helvetica,
    Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol !important; */
}
.homeIntro .homeIntro_div > span {
  color: #ffffff;
  font-family: inherit;
}
.homeIntro .homeIntro_div > span span:nth-child(2) {
  margin: 0 8px;
  color: #cdcfcf;
}
.downArrayIcon {
  height: 25px;
  width: 1200px;
  margin: -2px auto auto;
}
.downArrayIcon > div {
  width: 0;
  height: 0;
  border-right: 20px solid transparent;
  border-left: 20px solid transparent;
  border-top: 25px solid #081132;
  position: relative;
  margin-left: 20px;
}
.downArrayIcon > div > div {
  position: absolute;
  top: -55px;
  left: 50%;
  -webkit-transform: translate(-50%);
  transform: translate(-50%);
  cursor: pointer;
  -webkit-animation: _2NRMCHUL 1s linear infinite;
  animation: _2NRMCHUL 1s linear infinite;
}
.oneBox {
  width: 100%;
  height: auto;
  background: #fff;
  padding-top: 108px;
  position: relative;
}

/* 底部 */
.footer {
  background: 0 0 no-repeat;
  background-size: 100% 200px;
}
.footer_1 {
  width: 1200px;
  height: 200px;
  display: flex;
  padding-top: 32px;
  margin: 0 auto;
  box-sizing: border-box;
}
.footer_1_1,
.footer_1_2,
.footer_1_3,
.footer_1_4 {
  margin-right: 64px;
  position: relative;
  color: #ffffff;
}
.footer_1_3 {
  flex-grow: 1;
}
.footer_1_1 > div:nth-child(1),
.footer_1_2 > div:nth-child(1) {
  font-size: 16px;
  color: #ffffff;
  margin-bottom: 32px;
}
.footer_1_1 > div:nth-child(2),
.footer_1_2 > div:nth-child(2) {
  margin-bottom: 15px;
}
.footer_1_1 > div,
.footer_1_2 > div a {
  color: #ffffff;
}
.footer_1_3 > div:nth-child(1) {
  font-size: 16px;
  color: #fff;
  margin-bottom: 32px;
}
.footer_1_3 > div:nth-child(2),
.footer_1_3 > div:nth-child(3) {
  margin-bottom: 15px;
}
.footer_1_4 {
  position: relative;
}
.footer_1_4 > div:nth-child(1) {
  font-size: 14px;
  color: #fff;
  text-align: center;
}
.footer_1_4 > div:nth-child(2) {
  width: 100px;
  height: 100px;
  margin-top: 8px;
}
.footer_1_4 img {
  width: 100px;
  height: 100px;
}
.footer_2 {
  background: #353540;
}
.footer_2 > div {
  height: 53px;
  line-height: 53px;
  color: #787a7a;
  font-size: 16px;
  width: 1200px;
  margin: auto;
}


._2Z_xHgbs {
    display: block;
        position: absolute;
        top: -92px;
        white-space: nowrap;
        left: -56px;
        /* color: #b4b7c1; */
		color: #fff;
		 
        -webkit-animation: _PPny0_k8 1.4s linear infinite;
        animation: _PPny0_k8 1.4s linear infinite;
}
/*@-webkit-keyframes _PPny0_k8 
 {
from {opacity: 0;}
to {opacity: .7;}
} */
._3LQTAbds {
   position: absolute;
       top: -46px;
       left: 50%;
       -webkit-transform: translate(-50%);
       transform: translate(-50%);
       cursor: pointer;
       -webkit-animation: _2NRMCHUL 1.4s linear infinite;
       animation: _2NRMCHUL 1.4s linear infinite;
}
/*@-webkit-keyframes _2NRMCHUL 
 {
	from {
	    -webkit-transform: translate(-50%,-20px);
	    transform: translate(-50%,-20px);
		top: -57px;
	    opacity: 1;
	}
	to {
	    -webkit-transform: translate(-50%);
	    transform: translate(-50%);
		top: 13px;
	    opacity: 0;
	}
} */
</style>
