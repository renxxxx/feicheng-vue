<template>
  <div class="showPage_eight" style="width: 100%;">
    <div class="main" v-lazy:background-image="{src: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAACOkAAAL/CAMAAAAOOvE7AAAAYFBMV…euW2J2xc7OLt9u0yDn8NMBAJQOAIDSAQBQOgAASgcA4J/7G2tLq9PBXnp+AAAAAElFTkSuQmCC'}">
      <div>
        <div class="main_top">
          <strong>用户反馈</strong>
          <div class="main_top_two"></div>
          <div class="main_top_three">
            <div class="_2esJSl7h _14EDiPqF"></div>
            <div class="_1b8gYiVe">FEEDBACK</div>
            <div class="_2esJSl7h"></div>
          </div>
        </div>
        <div id="eight_1" class="main_bottom main_bottom_transition">
              <div class="carousel">
                <el-carousel trigger="click" height="484px"  :interval="5000" arrow="never">
                      <el-carousel-item v-for="(item,inx) in list" :key="inx">
                         <!-- v-for="item in 1" :key="item" -->
                        <!-- <h3 class="small">{{ item }}</h3> -->
                        <div class="boxItem boxOne" v-for="(items,inx_be) in item.rows" :key="inx_be">
                            <img v-lazy="items.cover" alt="">
                            <div class="boxItem_div">
                              <strong>{{items.title}}</strong>
                              <span>{{items.name}}</span>
                              <div class="_3UBU2LVd line-3">{{items.content}}</div>
                            </div>
                        </div>

                      </el-carousel-item>
                    </el-carousel>
              </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default{
    name: "carousel",
    data() {
      return {
    	list:[
            {
             inde:1,rows:[
               {'cover':require('../../assets/img/down5.png'),'title':'古麦嘉禾MCN负责人','name':'阿金',"content":'飞橙利用大数据追踪短视频实时爆点，紧跟平台热点及素材，实时监测视频数据，帮助内容精、准、快产出、调整，助力粉丝增长与优化变现。'},
               {'cover':require('../../assets/img/down6.png'),'title':'papitube策略制作人','name':'刘忱',"content":'热点聚合帮助创作者快速把握平台内容动向；投稿监控帮助孵化迅速进行复盘迭代内容创作。'},
               {'cover':require('../../assets/img/down7.png'),'title':'洋葱视频运营负责人','name':'远东',"content":'在飞橙，不仅可以快速了解每日热门趋势，更有专业的数据 指导内容创作，功能涵盖热点、BGM、电商等多个方面，是 内容创作者必备的辅助好帮手。'},
               {'cover':require('../../assets/img/down8.png'),'title':'震惊文化合伙人','name':'马海彦',"content":'热门视频和热门BGM比较实用，可以帮助创作者随时了解热门内容以及选择合适的背景音乐，提升创作效率，也避免侵权'}
             ]
            },
            {
              inde:2,rows:[
               {'cover':require('../../assets/img/down9.png'),'title':'大禹网络副总裁','name':'陈一龙',"content":'新榜有长时间的数据统计的经验和积累，单设机构板块，对MCN机构的学习和调研更有参考性。运营报表支持快速导出，垂直领域的排行榜功能对短视频MCN很实用。'},
               {'cover':require('../../assets/img/down10.png'),'title':'新动传媒运营负责人','name':'李大琢',"content":'在飞橙种草带货里面，有kol带货风向，和带货视频，可以按照销量看，有助于我们掌握最火的商品，方便我们借鉴视频素材，选择商品以及创作视频。私有数据管理，风向洞察，助力dou+投放等功能都很实用。'},
               {'cover':require('../../assets/img/down11.png'),'title':'门牙视频运营总监','name':'柳琳',"content":'1、对于运营者或MCN机构来说，飞橙填补了此类大数据网址“实时性”的空缺，15分钟的更新时间，为奋战在追踪热点前线的短视频从业者提供了合理科学的大数据支持。2、飞橙还实现了多维数据监控。区别于其他数据网址只对视频创作者进行分类，飞橙将其细分成：热门视频内容、热门BGM、热门话题、热门评论等，内容更加垂直，也更方便短视频从业者从各个维度掌握视频号实时热点。'},
               {'cover':require('../../assets/img/down12.png'),'title':'樊登读书新媒体总监','name':'董十一',"content":'1:最值得推荐的点：全面收录各种素材，从视频、BGM、话题挑战赛到神评论、魔法道具。海量创意素材可以极大满足创作需求，没有创作灵感的时候，总可以在这里找到制作视频的灵感。2:对mcn来说，最实用的功能莫过于私有数据管理和多账户协同。mcn的账户多，数据量大。以前从企业号拉数据报表需要小伙伴一个一个的填，很耗费精力和时间。通过飞橙的私有数据管理，可以随时随地导出运营报表，原本每天早上填写各个账户的视频数据需要30分钟到40分钟，现在后台一键下载就可以了，而且还可以多账户协同管理。对于一些有爆款潜质的视频可以分钟级检测发布的视频，通过数据决定要不要投dou+。帮助mcn快速实现数据化运营。'}
             ]
            }
          ]

      };
    },
  }
</script>

<style scoped>

/* 首页轮播图重写 */
.showPage_eight .el-carousel__button{
    width: 6px !important;
    height: 6px !important;

       padding: 0;
       color: transparent;
       font-size: 0;
       background: #2b2b2b;
       border: 0;
       border-radius: 3px;
       outline: none;
       cursor: pointer;
       opacity: .3;
       -webkit-transition: all .5s;
       transition: all .5s;
  }
.showPage_eight .el-carousel__indicator.is-active button{
      width: 32px !important;
      height: 6px !important;
      border-radius: 3px !important;
      background: #ff7800 !important;
    }
.el-carousel__indicators{
   bottom: 0 !important;
  }
  
 /*  .el-carousel__item h3 {
      color: #475669;
      font-size: 14px;
      opacity: 0.75;
      line-height: 150px;
      margin: 0;
    } */
.boxItem img{
  /* margin-left:60px ;
  margin-top: 60px; */
  float: left;
}
.boxItem_div{
      width: 422px;
      display: inline-block;
      margin-left: 10px
}
.boxItem_div strong{
      font-size: 16px;
      color: #595959;
      text-shadow: 0 0 6px hsla(0,0%,92.2%,.6);
      margin-right: 33px;
      position: relative;
}
.boxItem_div strong:after{
  content: "";
      width: 1px;
      height: 12px;
      background: #bfbfbf;
      position: absolute;
      right: -16px;
      top: 5px;
}
.boxItem_div span{
      font-size: 16px;
      text-shadow: 0 0 6px hsla(0,0%,92.2%,.6);
          color: #595959;
}
.boxItem_div>div{
  line-height: 30px;
      color: #8c8c8c;
      margin-top: 24px;
}

.showPage_eight .el-carousel-item{
  width: 1240px;
      outline: none;
          justify-content: space-between;
}
 .showPage_eight .boxItem{
       width: 580px;
       height: 190px;
       background: #fff;
       box-shadow: 0 3px 12px rgba(38,38,38,.1);
       border-radius: 4px;
       display: flex;
       padding: 32px 30px 32px 32px;
       margin-bottom: 32px;
       box-sizing: border-box;
       display: inline-block;
       ustify-content: space-between;
 }
.showPage_eight .boxItem:nth-child(2n){
  float: right;
  margin-right: 20px;
}
.showPage_eight .boxItem:nth-child(2n+1){
  float: left;
  margin-left: 20px;
  }



.showPage_eight .main {
  background:  0 0
    no-repeat;
  background-size: cover;
  background-color: #fafafe;
  padding-bottom: 131px;
  position: relative;
  z-index: 10;
}
.showPage_eight .main > div {
  box-sizing: border-box;
}
.showPage_eight .main_top{
      padding-top: 65px;
      text-align: center;
}
.showPage_eight .main_top strong{
      font-size: 40px;
      line-height: 95px;
      color: #595959;
      text-shadow: 6px 4px 4px hsla(0,0%,85.1%,.4);
}
.showPage_eight .main_top_two{
      width: 144px;
      height: 9px;
      background: -webkit-gradient(linear,left top,right top,from(rgba(255,120,0,0)),color-stop(50%,#ff7800),to(rgba(255,120,0,0)));
      background: linear-gradient(90deg,rgba(255,120,0,0),#ff7800 50%,rgba(255,120,0,0));
      border-radius: 3px;
      margin: -28px auto auto;
}
.showPage_eight .main_top_three{
      display: flex;
      align-items: center;
      justify-content: center;
      margin-top: 10px;
}
.showPage_eight .main_top_three>div:nth-child(1){

          -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}
.showPage_eight .main_top_three>div:nth-child(2){
      margin: 0 12px;
      color: #d9d9d9;
      letter-spacing: 10px;
      font-size: 14px;
}
.showPage_eight .main_top_three>div:nth-child(1),.main_top_three>div:nth-child(3){
  width: 100px;
  height: 1px;
  background: -webkit-gradient(linear,left top,right top,from(#e1e2e5),to(rgba(225,226,229,0)));
  background: linear-gradient(90deg,#e1e2e5,rgba(225,226,229,0));
}
 .main_bottom{
     width: 1240px;
     margin: 44px auto auto;
     opacity: 0;
 }
 .showPage_eight .main_bottom_transition_8{
   transition: all 0.3s ease-out, opacity 0.4s ease-out; 

       transform: translateY(0px);
       opacity: 1;
 }
 .showPage_eight .carousel{
       margin: 0;
       padding: 0;
       color: #e8edee;
       font-size: 14px;
       font-variant: tabular-nums;
       line-height: 1.5;
       list-style: none;
       -webkit-font-feature-settings: "tnum","tnum";
       font-feature-settings: "tnum","tnum";
       box-sizing: border-box;
 }

</style>
