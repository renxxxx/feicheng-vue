<template>
  <div id="app" ref='appRef'>
    <!-- <keep-alive> -->
    <router-view />

    <!-- </keep-alive> -->
  </div>
</template>

<script>
export default {
  name: 'App',
  watch:{
  },
}
</script>

<style>
img[lazy="loading"]{
    object-fit:scale-down!important;
 }
img[lazy="error"]{
    object-fit:scale-down!important;
 }
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
	height: 100%;
	width: 100%;
  padding: 0;
  margin: 0;
}

</style>
