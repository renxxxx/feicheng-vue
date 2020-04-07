<template>
  <div id="app" class="muti" ref='appRef' v-cloak>
    <keep-alive>
      <router-view />
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App',
  watch:{
  },
  created(){

    if(!this.cookieOn()){
       this.$alert('您的浏览器限制了第三方Cookie, 这将影响您正常登录, 您可以更改浏览器的隐私设置, 解除限制后重试.', '提示', {
          confirmButtonText: '确定',

        });
    }

    debugger
    let thisVue = this
        this.$jquery.ajax({
			  url:'/user/login-refresh',
			  type:'get',
			  async:false,
			  success:function(res){
			    if(res.code == 0){
					  thisVue.$store.state.login=res.data
			    }
			  }
      })

 this.$jquery.ajax({
			  url:'/user/my/wx-videoaccount',
			  type:'get',
			  async:false,
			  success:function(res){
			    if(res.code == 0){
					  thisVue.$store.state.wxVideoaccount=res.data
			    }
			  }
      })

  }
}
</script>


<style scoped>
 @font-face {
    font-family: 'DINPro';
    src: url('./assets/font/DINPro.6ea892b4.ttf');
    font-weight: normal;
    font-style: normal;
  }
  
#app {
  
	-moz-osx-font-smoothing: grayscale;
	height: 100%;
    
}
.muti::-webkit-scrollbar{
	width:4px;
	/* border-radius: 5px; */
}
.muti::-webkit-scrollbar-track{
	background-color:#2b2b2e;
	/* border-radius: 5px; */
}
.muti::-webkit-scrollbar-thumb{
	background-color:#66666d;
	/* border-radius: 5px; */
}
.muti::-webkit-scrollbar-thumb:hover {
	background-color:#66666d;
	/* border-radius: 5px; */
}
.muti::-webkit-scrollbar-thumb:active {
	background-color:#2b2b2e;
	/* border-radius: 5px; */
}

[v-cloak]{
    display: none;
}
</style>


<style>


body{
  margin: 0px;
  padding: 0px;
  position:absolute;
  top:0;
  left:0;
  right:0;
  bottom:0;
}

*{
	word-break: break-all;
}

img{
  object-fit: cover;

}

img[lazy="loading"]{
	object-fit:scale-down!important;
	width:20px;
 }
img:not([src]),img[src=""] {opacity: 0;}
img[lazy="error"]{
	object-fit:scale-down!important;
	width:20px;
 }

::selection {
    color: #fff;
    background: #ff7800;
}
::-webkit-scrollbar{
width:5px;
height:4px;
}
::-webkit-scrollbar-thumb{
border-radius:0;
-webkit-box-shadow:inset 0 0 5px rgba(0,0,0,0.2);
background: rgba(0,0,0,0.2);
}
::-webkit-scrollbar-track{
-webkit-box-shadow:inset 0 0 5px rgba(0,0,0,0.2);
border-radius:0;
background:#e0e0e0;
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

</style>
