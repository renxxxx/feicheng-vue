<template>
  <div class="main">
    <div class="boxMain">
      <div class="index_title">
        <span class="index_span">02</span>
        <div>
          <h3 class="index_h3">
            精准，实时电商数据助你
            <strong>种草带货</strong>
          </h3>
          <div class="index_title_box">
            <div></div>
            <div class="index_line">100+细分品类，曝光、销量、淘客等5大评估指标，KOL带货风向等多维度商品排行，还有商品口碑舆情</div>
          </div>
        </div>
      </div>
      <div class="box_index">
        <div class="box_indexLf transitionlF">
11
        </div>
        <div class="box_indexRt">

        </div>
      </div>
    </div>
  </div>
</template>

<script>
</script>

<style scoped>
  .main{
    width: 100%;
    height: auto;
  }
  .boxMain{
    padding-top: 162px;
  }
  .index_title{
        width: 1200px;
        margin: auto;
        position: relative;
        text-align: right;
  }
  .index_span{
        font-size: 88px;
        font-weight: 700;
        line-height: 169px;
        color: #edeef2;
        position: absolute;
        top: -53px;
        left: 0;
        z-index: 0;
        left: 669px;
  }
  .index_title>div{
    position: relative;
        z-index: 5;
  }
  .index_h3{
      font-size: 31px;
      font-weight: 400;
      line-height: 109px;
      color: #262626;
      text-shadow: 6px 4px 4px hsla(0,0%,85.1%,.4);
      margin-bottom: 0;
  }
  .index_h3 strong{
        font-size: 48px;
        color: #ff7800;
        font-weight: bolder;
        font-family: DINPro Medium,-apple-system,BlinkMacSystemFont,Segoe UI,PingFang SC,Hiragino Sans GB,Microsoft YaHei,Helvetica Neue,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol;
  }
  .index_title_box{
        display: flex;
        align-items: center;
        font-size: 14px;
        line-height: 38px;
        color: #595959;
        opacity: .8;
        margin-top: -28px;
            justify-content: flex-end;
  }
  .index_title_box>div:nth-child(1){
        background: -webkit-gradient(linear,left top,right top,from(hsla(0,0%,74.9%,0)),to(#e1e2e5));
        background: linear-gradient(90deg,hsla(0,0%,74.9%,0),#e1e2e5);
        margin-right: 16px;
        width: 100px;
            height: 1px;
  }
  .index_line{
        display: flex;
        align-items: center;
        font-size: 14px;
        line-height: 38px;
        color: #595959;
        opacity: .8;
        /* margin-top: -28px; */
            text-align: right;
  }
  .box_index{
   width: 1200px;
       margin: auto;
       display: flex;
       align-items: center;
   }
   .transitionlF{
         transition: all 0.5s ease-out, opacity 0.8s ease-out;
         opacity: 1;
         transform: translateX(0px);
   }
   .box_indexLf{

             width: 377px;
             height: 735px;
             background: url(../../assets/img/phone.9548e850.png) 0 0 no-repeat;
             background-size: cover;
             margin-right: -28px;
             z-index: 2;
             -webkit-transform: translateX(-720px);
             transform: translateX(-720px);
             opacity: 0;
             -webkit-backface-visibility: hidden;
             -webkit-perspective: 1000;
             position: relative;
   }
</style>
