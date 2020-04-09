<template>
    <div class="loading" v-show="show">
		  <img style="width:40px" src="../assets/img/loading.png" />
	  </div>
</template>
 
<script>
export default {
  name: 'loading' ,
  data(){
    return {
          show:false,
    }
  },
  methods:{
    open(){
      debugger
        this.show=true;
    },
    close(){
      debugger
        this.show=false;
    },
  }
}
</script>
 
<style scoped>
.loading {
  width:100%;
  position: absolute;
  top:50px;
  z-index: 10000;
  text-align: center;
}
</style>