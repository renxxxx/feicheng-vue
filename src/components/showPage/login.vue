<template>
  <div>
    <el-dialog  class="popScan"   title="欢迎登陆" :visible.sync="centerDialogVisible" width="402px" top="10vh" center>
         <div class="popIndex" style="height: 430px">
           <div class="code">
             <img src="https://mp.weixin.qq.com/cgi-bin/showqrcode?ticket=gQFj7zwAAAAAAAAAAS5odHRwOi8vd2VpeGluLnFxLmNvbS9xLzAyT3BfNjAya0ljbTMxbmpOVWh1Y1MAAgTDY3heAwQQDgAA" alt="">
           </div>
           <span>需要注意的是内容是默认不居中的</span>
           <span slot="footer" class="dialog-footer">
             <el-button @click="centerDialogVisible = false">取 消</el-button>
             <el-button type="primary" @click="centerDialogVisible = false">确 定</el-button>
           </span>
         </div>
       </el-dialog>
  </div>
</template>

<script>
import {mapActions,mapGetters} from 'vuex'
export default {
  name: 'gene',
  data() {
    return {};
  },
  computed:{
    // ...mapGetters(['centerDialogVisible'])
    centerDialogVisible:{
      get: function() {
        return this.$store.state.centerDialogVisible
      },
      set: function (newValue) {
        this.$store.state.centerDialogVisible = newValue;
      },
    }
  },
  methods: {

  }
};
</script>

<style>
</style>
