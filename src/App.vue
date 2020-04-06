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
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
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
*{
	word-break: break-all;
}

img{
  object-fit: cover;
  
}
img[lazy="loading"]{
    object-fit:scale-down!important;
 }
img:not([src]),img[src=""] {opacity: 0;}
img[lazy="error"]{
    object-fit:scale-down!important;
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
</style>