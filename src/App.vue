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
#app {
	height: 100%;
}

[v-cloak]{
    display: none;
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
