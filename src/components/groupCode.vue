<template>
  <div>
    
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import Router from 'vue-router';
import qs from 'qs';
export default {
  name: 'gene',
  data() {
    return {
      codeDialogVisible: false,
      imgSrc: '',
      getConfig: this.$store.state.getConfig.config()
    };
  }
};
</script>

<style>
.dialogThis {
  background: #55555a !important;
  color: #fff !important;
  width: 520px !important;
  height: 329 !important;
  border-radius: 4px;
}
.dialogThis > div:nth-child(1) {
  padding: 16px 24px !important;
  margin: 0;
  color: #fff;
  font-weight: 500;
  font-size: 16px;
  line-height: 22px;
  word-wrap: break-word;
  border-bottom: 1px solid #6d6d6d;
}
.dialogThis > div:nth-child(1) span {
  color: #ffffff !important;
  font-size: 16px;
}
.dialogThis > div:nth-child(1) button i {
  color: #ffffff;
}
.dialogThis > div:nth-child(2) {
  border-bottom: 1px solid #6d6d6d;
}
.dialogThis > div:nth-child(3) > span > button {
  width: 64px;
  height: 32px;
  background: none;
  border: 1px solid #6d6d6d;
  margin-top: 10px;
  line-height: 32px;
  padding: 0;
}

.dialogThis > div:nth-child(3) > span > button:hover {
  color: #ff9429;
  /* background-color: #2b2b2e; */
  border-color: #ff9429;
}

.avatarBox {
  width: 120px;
  height: 120px;
  margin: 24px 192px 16px;
  padding: 8px;
  background: #ffffff;
}
.avatarBox img {
  width: 120px;
  height: 120px;
}
.span {
  width: 100%;
  text-align: center;
  font-size: 14px;
  display: block;
  margin-top: 10px;
  color: #ffffff;
  margin-bottom: 24px;
}
</style>
