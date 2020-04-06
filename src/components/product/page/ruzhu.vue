<template>
  <div class="ruzhu">
    <div>
      <el-row style="height: 60px;">
        <el-col :xs="10" :sm="10" :md="10" :lg="10" :xl="10"><span class="maintop">博主入驻:</span></el-col>
      </el-row>
    </div>
    <div class="people_detail">
      <el-row>
        <el-col :xs="10" :sm="10" :md="10" :lg="10" :xl="10">
          <ul>
            <li>视频号信息:</li>
            <li>
              <span>视频号名:</span>
              <el-input :disabled='disabled' v-model="name" placeholder="请输入内容" clearable></el-input>
            </li>
            <li>
              <span>手机:</span>
              <el-input :disabled='disabled' type="tel" v-model="phone" placeholder="请输入内容" clearable></el-input>
            </li>
            <li>
              <span>微信号:</span>
              <el-input :disabled='disabled' v-model="wx" placeholder="请输入内容" clearable></el-input>
            </li>
            <li>
              <span>简介:</span>
              <el-input  :disabled='disabled' type="textarea" :rows="2" v-model="brief" placeholder="请输入内容" clearable></el-input>
            </li>
            <li>
              <span>账号类型:</span>
              <el-select :disabled='disabled' v-model="value" @change="typeFn(value)" placeholder="请选择">
                <el-option v-for="item in type" :key="item.value" :label="item.label" :value="item.value"></el-option>
              </el-select>
            </li>

            <li>
              <span>城市:</span>
              <el-cascader  :disabled='disabled' :options="options" v-model="dili" clearable @change="handleChange"></el-cascader>
            </li>
            <li>
              <span>头像:<span @click='lookBigPic()' style="color: #ff7800;cursor: pointer;">点击查看大图</span></span>
              <div class="avatorUp">
                <el-upload  :disabled='disabled'
                  :file-list="dialogImageUrl1"
                  accept="image/*"
                  class="avatar-uploader"
                  action="/upload-file"
                  :show-file-list="false"
                  :on-success="handleAvatarSuccess"
                  :before-upload="beforeAvatarUpload"
                  :on-preview="handlePictureCardPreviewIcon"
                >
                  <img v-if="imageUrl" :src="imageUrl" class="avatar" />
                  <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                </el-upload>
                 <el-dialog :visible.sync="dialogVisibleIcon"><img width="100%" :src="imageUrl" alt="" /></el-dialog>
              </div>
            </li>
          </ul>
        </el-col>
        <el-col :xs="10" :sm="10" :md="10" :lg="10" :xl="10">
          <ul>
            <li style="height: 24px;"></li>
            <li>
              <span>粉丝量:</span>
              <el-input :disabled='disabled' type="number" v-model="fansCount" placeholder="请输入内容" clearable></el-input>
            </li>
            <li>
              <span>视频量:</span>
              <el-input :disabled='disabled' type="number" v-model="videoCount" placeholder="请输入内容" clearable></el-input>
            </li>
            <li>
              <span>点赞量:</span>
              <el-input :disabled='disabled'  type="number" v-model="likeCount" placeholder="请输入内容" clearable></el-input>
            </li>
            <li>
              <span>曝光量:</span>
              <el-input :disabled='disabled' type="number" v-model="pv" placeholder="请输入内容"></el-input>
            </li>
            <li>
              <span>选择领域(可多选):</span>
              <el-checkbox  :disabled='disabled' style="color: #f2f2f2;" :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange">全选</el-checkbox>
              <div style="margin: 15px 0;"></div>
              <el-checkbox-group  :disabled='disabled' v-model="checkedCities" @change="handleCheckedCitiesChange">
                <el-checkbox style="color: #f2f2f2;" v-for="city in cities" :label="city" :key="city.name">{{ city.name }}</el-checkbox>
              </el-checkbox-group>

            </li>
            <li>
              <span>视频号截图:<span @click='lookBigPicNow()' style="color: #ff7800;cursor: pointer;">点击查看大图</span></span>
              <div>
                <el-upload  :disabled='disabled'
                  :file-list="dialogImageUrl2"
                  accept="image/*"
                  class="avatar-uploader"
                  action="/upload-file"
                  :show-file-list="false"
                  :on-success="uploadCover"
                  :before-upload="beforeAvatarUpload"
                >
                  <img v-if="dialogImageUrl" :src="dialogImageUrl" class="avatar" />
                  <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                </el-upload>
               <!-- <el-upload :disabled='disabled'
                  accept="image/*"
                  :file-list="dialogImageUrl2"
                  :limit="1"
                  action="/upload-file"
                  list-type="picture-card"
                  :on-success="uploadCover"
                  :on-exceed="handleExceed"
                  :on-preview="handlePictureCardPreview"
                  :on-remove="handleRemove"
                >
                  <i class="el-icon-plus"></i>
                </el-upload> -->
                <el-dialog :visible.sync="dialogVisible"><img width="100%" :src="dialogImageUrl" alt="" /></el-dialog>
              </div>
            </li>
          </ul>
        </el-col>
      </el-row>
      <video_supply ref="refChild"></video_supply>

      <el-checkbox  v-if='showIf' @change='checkThis' class="userXy" v-model="checked" style="color: #FFFFFF;"></el-checkbox><a :href="getConfig.userProtocol"><span style="color: #FFFFFF;">用户协议与隐私政策</span></a>


      <el-row v-if='showIf'>
        <div class="submit_div"><el-button  type="primary" @click="onSubmit">立即入驻</el-button></div>
      </el-row>
    </div>
    <login ref="loginRef"></login>
  </div>
</template>
<script>
import axios from 'axios';
import { mapActions, mapGetters } from 'vuex';
import qs from 'qs';
import area from '../../../assets/area.json';
import login from '../../login.vue';
import video_supply from './page_in/video_supply.vue';
export default {
  name: 'ruzhu',
  data() {
    return {

      checked: true,

      showIf:false,
      disabled:false,
      selectedOptions: [],
      dialogImageUrl1: [],
      dialogImageUrl2: [],
      name: '',
      phone: '',
      wx: '',
      brief: '',
      fansCount: '',
      videoCount: '',
      likeCount: '',
      pv: '',
      imageUrl: '',
      dialogImageUrl: '',
      dialogVisible: false,
      dialogVisibleIcon:false,
      options: [],
      checkAll: false,
      checkedCities: [{logo:"",name:"才艺",wxVideoaccountRealmId:"20200401052556016756178133283511"}],
      cities: [],
      isIndeterminate: false,
      type: [
        {
          value: '0',
          label: '个人号'
        },
        {
          value: '1',
          label: '达人号'
        },
        {
          value: '2',
          label: '企业号'
        }
      ],
      value: '请选择',
      num: '',
      wxVideoaccountRealmIdList: [],
      wxVideoaccountRealmIdListNow: '',
		dili:[],
		// dili:['13','1302','130204'],
      diliNow: {
        shenfen: {
          name: "河北省",
          id: "13"
        },
        city: {
          name: "唐山市",
          id: "1302"
        },
        qu: {
          name: "古冶区",
          id: "130204"
        }
      },
      imageUrlNow: '',
      dialogImageUrlNow: [],
      dialogImageUrlNowlist: [],
      getConfig:this.$store.state.getConfig.config(),
		// diliNow:{}
    };
  },
  computed: {
    centerDialogVisible: {
      get: function() {
        return this.$store.state.centerDialogVisible;
      },
      set: function(newValue) {
        this.$store.state.centerDialogVisible = newValue;
      }
    }
  },

  components: {
    login,
    video_supply
  },
  beforeCreate() {},
  created() {},
  //离开前判断前进和后退时间来判断是否保存滚动值
  // beforeRouteLeave(to, from, next) {
  //   this.scrollTop = document.getElementById('product').scrollTop || document.getElementById('product').pageYOffset;
  //   if (!to.query.time || !from.query.time || to.query.time < from.query.time) {
  //     if (this.$vnode && this.$vnode.data.keepAlive) {
  //       if (this.$vnode.parent && this.$vnode.parent.componentInstance && this.$vnode.parent.componentInstance.cache) {
  //         if (this.$vnode.componentOptions) {
  //           var key =
  //             this.$vnode.key == null ? this.$vnode.componentOptions.Ctor.cid + (this.$vnode.componentOptions.tag ? `::${this.$vnode.componentOptions.tag}` : '') : this.$vnode.key;
  //           var cache = this.$vnode.parent.componentInstance.cache;
  //           var keys = this.$vnode.parent.componentInstance.keys;
  //           if (cache[key]) {
  //             if (keys.length) {
  //               var index = keys.indexOf(key);
  //               if (index > -1) {
  //                 keys.splice(index, 1);
  //               }
  //             }
  //             delete cache[key];
  //           }
  //         }
  //       }
  //     }
  //     this.$destroy();
  //   }
  //   next();
  // },
  //进入该页面时，用之前保存的滚动位置赋值
  // beforeRouteEnter(to, from, next) {
  //   next(vm => {
  //     document.getElementById('product').scrollTop = document.getElementById('product').pageYOffset = vm.scrollTop;
  //   });
  // },
  activated(){
    let thisVue = this
      if(this.$route.meta.auth && !this.$store.state.login){
          this.$store.state.centerDialogVisible = true;
          this.$refs.loginRef.getData();
     }

     if (this.$store.state.wxVideoaccount.type == 0) {
       this.value = '体验版';
     } else if (this.$store.state.wxVideoaccount.type == 1) {
       this.value = '个人号';
     } else if (this.$store.state.wxVideoaccount.type == 2) {
       this.value = '达人号';
     } else if (this.$store.state.wxVideoaccount.type == 3) {
       this.value = '企业号';
     }
      if(!this.$store.state.wxVideoaccount ||   this.$store.state.wxVideoaccount.type==null||this.$store.state.wxVideoaccount.type==0){
        this.disabled=false
        this.showIf=true
      }else if(!this.$store.state.wxVideoaccount || this.$store.state.wxVideoaccount.audit==null||this.$store.state.wxVideoaccount.audit==12){
        this.disabled=false
        this.showIf=true
      }else{
        this.disabled=true
        this.showIf=false
      }

     if(this.$store.state.wxVideoaccount.wxVideoaccountRealmList){
       for (var i in this.$store.state.wxVideoaccount.wxVideoaccountRealmList) {
         this.$store.state.wxVideoaccount.wxVideoaccountRealmList[i].logo = '';
       }
       this.checkedCities = this.$store.state.wxVideoaccount.wxVideoaccountRealmList;
     }
     this.num = this.$store.state.wxVideoaccount.type;
     this.name = this.$store.state.wxVideoaccount.name;
     this.phone = this.$store.state.wxVideoaccount.phone;
     this.wx = this.$store.state.wxVideoaccount.wx;
     this.brief = this.$store.state.wxVideoaccount.brief;
     this.fansCount = this.$store.state.wxVideoaccount.fansCount;
     this.videoCount = this.$store.state.wxVideoaccount.videoCount;
     this.likeCount = this.$store.state.wxVideoaccount.likeCount;
     this.pv = this.$store.state.wxVideoaccount.pv;
      if(this.$store.state.wxVideoaccount.screenshot!=null&&this.$store.state.wxVideoaccount.screenshot!=undefined&&this.$store.state.wxVideoaccount.screenshot!=''){
     this.dialogImageUrl = this.$store.state.wxVideoaccount.screenshot;
     this.dialogImageUrlNow = this.$store.state.wxVideoaccount.screenshot;
     }
     if(this.$store.state.wxVideoaccount.logo!=null&&this.$store.state.wxVideoaccount.logo!=undefined&&this.$store.state.wxVideoaccount.logo!=''){
        this.imageUrl = this.$store.state.wxVideoaccount.logo;
        this.imageUrlNow = this.$store.state.wxVideoaccount.logo;
     }
     this.dili = [this.$store.state.wxVideoaccount.area1Id,this.$store.state.wxVideoaccount.area2Id,this.$store.state.wxVideoaccount.area3Id];
  },
  mounted() {

    this.options = area;
      this.accountRealmIdList();
      if (this.$store.state.wxVideoaccount.type == 0) {
        this.value = '体验版';
      } else if (this.$store.state.wxVideoaccount.type == 1) {
        this.value = '个人号';
      } else if (this.$store.state.wxVideoaccount.type == 2) {
        this.value = '达人号';
      } else if (this.$store.state.wxVideoaccount.type == 3) {
        this.value = '企业号';
      }
       if(!this.$store.state.wxVideoaccount ||   this.$store.state.wxVideoaccount.type==null||this.$store.state.wxVideoaccount.type==0){
         this.disabled=false
       }else if(!this.$store.state.wxVideoaccount || this.$store.state.wxVideoaccount.audit==null||this.$store.state.wxVideoaccount.audit==12){
         this.disabled=false
       }else{
         this.disabled=true
       }


      this.num = this.$store.state.wxVideoaccount.type;
      this.name = this.$store.state.wxVideoaccount.name;
      this.phone = this.$store.state.wxVideoaccount.phone;
      this.wx = this.$store.state.wxVideoaccount.wx;
      this.brief = this.$store.state.wxVideoaccount.brief;
      this.fansCount = this.$store.state.wxVideoaccount.fansCount;
      this.videoCount = this.$store.state.wxVideoaccount.videoCount;
      this.likeCount = this.$store.state.wxVideoaccount.likeCount;
      this.pv = this.$store.state.wxVideoaccount.pv;
       if(this.$store.state.wxVideoaccount.screenshot!=null&&this.$store.state.wxVideoaccount.screenshot!=undefined&&this.$store.state.wxVideoaccount.screenshot!=''){
      this.dialogImageUrl = this.$store.state.wxVideoaccount.screenshot;
      this.dialogImageUrlNow = this.$store.state.wxVideoaccount.screenshot;
      }
      if(this.$store.state.wxVideoaccount.logo!=null&&this.$store.state.wxVideoaccount.logo!=undefined&&this.$store.state.wxVideoaccount.logo!=''){
         this.imageUrl = this.$store.state.wxVideoaccount.logo;
         this.imageUrlNow = this.$store.state.wxVideoaccount.logo;
      }
      this.dili = [this.$store.state.wxVideoaccount.area1Id,this.$store.state.wxVideoaccount.area2Id,this.$store.state.wxVideoaccount.area3Id];
      // this.dili = {
      //   shenfen: {
      //     name: this.getUserInfo.area1Name,
      //     id: this.getUserInfo.area1Id
      //   },
      //   city: {
      //     name: this.getUserInfo.area2Name,
      //     id: this.getUserInfo.area2Id
      //   },
      //   qu: {
      //     name: this.getUserInfo.area3Name,
      //     id: this.getUserInfo.area3Id
      //   }
      // };

      // var didi = {};
      // didi = {
      //   city: { name: this.$store.state.wxVideoaccount.area1Name, id: this.$store.state.wxVideoaccount.area1Id },
      //   qu: { name:this.$store.state.wxVideoaccount.area1Name, id: this.$store.state.wxVideoaccount.area1Id },
      //   shenfen: { name: this.$store.state.wxVideoaccount.area1Name, id: this.$store.state.wxVideoaccount.area1Id }
      // };

      // this.ruleForm.regionServers = [data.region, data.server]

  },
  methods: {
    supplyVideo(name, pv, imageUrlNow , likeCount, brief, video,videoId) {
      this.$axios
        .post(
          '/user/wx-videoaccount-video/create-my-wx-videoaccount-video?',
          qs.stringify({
            name: name,
            pv: pv,
            cover: imageUrlNow,
            likeCount: likeCount,
            brief: brief,
            video: video,
            wxVideoaccountVideoId:videoId
          })
        )
        .then(res => {
          if (res.data.code == 20) {
            if (!this.centerDialogVisible) {
              this.centerDialogVisible = true;
              this.$refs.loginRef.getData();
            }
          } else if (res.data.code == 0) {
            //    			 this.$message.success('入驻申请已提交，请耐心等待审核')
            //    			this.$router.push({path:'/product/product_user'});
          } else {
            this.$message.error(res.data.codeMsg);
          }
        })
        .catch();
    },

    handleExceed(files, fileList) {
      this.$message.warning(`当前限制选择 1 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`);
    },
    handleChange(_value) {
		 // //console.log(_value)
      let name1 = area.find(n => n.value == _value[0]);
      let name2 = name1.children.find(n => n.value == _value[1]);
      let name3 = name2.children.find(n => n.value == _value[2]);
		this.dili = [name1.value,name2.value,name3.value]
      this.diliNow = {
        shenfen: {
          name: name1.label,
          id: name1.value
        },
        city: {
          name: name2.label,
          id: name2.value
        },
        qu: {
          name: name3.label,
          id: name3.value
        }
      };
    },
    onSubmit() {
      if(this.checked===false){
        this.$message.warning('请勾选用户协议与隐私政策！');
      }else{
        this.$confirm('确认提交入驻?', '提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning'
          }).then(() => {
            this.$axios
          .post(
            '/user/wx-videoaccount/apply-audit-my-wx-videoaccount?',
            qs.stringify({
              name: this.name,
              phone: this.phone,
              logo: this.imageUrlNow,
              screenshot: this.dialogImageUrlNow,
              wx: this.wx,
              fansCount: this.fansCount,
              likeCount: this.likeCount,
              videoCount: this.videoCount,
              pv: this.pv,
              brief: this.brief,
              type: this.num,
              area1Id: this.diliNow.shenfen.id,
              area2Id: this.diliNow.city.id,
              area3Id: this.diliNow.qu.id,
              area1Name: this.diliNow.shenfen.name,
              area2Name: this.diliNow.city.name,
              area3Name: this.diliNow.qu.name,
              wxVideoaccountRealmIdList: this.wxVideoaccountRealmIdListNow
            })
          )
          .then(res => {
            if (res.data.code == 20) {
              if (!this.centerDialogVisible) {
                this.centerDialogVisible = true;
                this.$refs.loginRef.getData();
              }
              // this.centerDialogVisible = true;
              // this.$refs.loginRef.getData();
            } else if (res.data.code == 0) {
                  this.$axios
                          .get('/user/my/wx-videoaccount')
                          .then(res => {
                              if(res.data.code ==0)
                                this.$store.state.wxVideoaccount=res.data.data
                          })
        
        
              this.$message.success('入驻申请已提交，请耐心等待审核');
              if (this.$refs.refChild.tableData && this.$refs.refChild.tableData.length > 0) {
                var tableData = this.$refs.refChild.tableData;
        
                for (var i in tableData) {
                  this.supplyVideo(tableData[i].name, tableData[i].pv, tableData[i].cover, tableData[i].likeCount, tableData[i].brief, tableData[i].video,tableData[i].videoId);
                }
                this.$router.push({ path: '/product/product_user' });
              } else {
                this.$message.success('入驻申请已提交，请耐心等待审核');
                this.$router.push({ path: '/product/product_user' });
              }
            } else {
              this.$message.error(res.data.codeMsg);
            }
          })
          .catch();
          }).catch(() => {
        
          });
      }
    


    },
    typeFn(_value) {
      this.num = _value;
    },
    // 获取领域列表
    accountRealmIdList() {
      this.$axios
        .get('/user/wx-videoaccount/wx-videoaccount-realm-list')
        .then(res => {
          if (res.data.code == 20) {
            if (!this.centerDialogVisible) {
              this.centerDialogVisible = true;
              this.$refs.loginRef.getData();
            }
          } else {
            var itemList = res.data.data.itemList;
            var cityOptions = [];
            for (var i in itemList) {
              cityOptions.push(itemList[i]);
            }
            this.cities = cityOptions;
            console.log(this.cities)
          }
        })
        .catch(err => {});
    },

    handleAvatarSuccess(res, file) {
      this.imageUrlNow = res.data.url;
      // //console.log(this.imageUrlNow)
      this.imageUrl = URL.createObjectURL(file.raw);
    },
    uploadCover(res, file) {
      this.dialogImageUrlNow = res.data.url;
      // console.log(this.imageUrlNow)
      this.dialogImageUrl = URL.createObjectURL(file.raw);
    },
    beforeAvatarUpload(file) {
      // const isJPG = file.type === 'image/jpeg';
      const isLt2M = file.size / 1024 / 1024 < 10;
      // if (!isJPG) {
      //   this.$message.error('上传头像图片只能是 JPG/PNG 格式!');
      // }
      if (!isLt2M) {
        this.$message.error('上传头像图片大小不能超过 10MB!');
      }
      return isLt2M; // isJPG && isLt2M;
    },
    handleRemove(file, fileList) {
      //console.log(file, fileList);
    },
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      //console.log(this.dialogImageUrl);
      this.dialogVisible = true;
    },
    lookBigPic() {
      this.dialogVisibleIcon = true;
    },
    lookBigPicNow() {
      this.dialogVisible = true;
    },
    // checkThis(val){
    //   console.log(val)
    //   this.checkVal=val
    //   console.log(this.checked)
    // },
    // 选择领域
    handleCheckAllChange(val) {
      this.checkedCities = val ? this.cities : [];
      this.isIndeterminate = false;
      this.wxVideoaccountRealmIdList = [];
      for (let i in this.checkedCities) {
        this.wxVideoaccountRealmIdList.push(this.checkedCities[i].wxVideoaccountRealmId);
      }
      this.wxVideoaccountRealmIdListNow = this.wxVideoaccountRealmIdList.join(',');
    },
    handleCheckedCitiesChange(value) {
      this.wxVideoaccountRealmIdList = [];
      for (let i in this.checkedCities) {
        this.wxVideoaccountRealmIdList.push(this.checkedCities[i].wxVideoaccountRealmId);
      }
      //console.log(this.checkedCities);
      this.wxVideoaccountRealmIdListNow = this.wxVideoaccountRealmIdList.join(',');
      let checkedCount = value.length;
      this.checkAll = checkedCount === this.cities.length;
      this.isIndeterminate = checkedCount > 0 && checkedCount < this.cities.length;
    }
  }
};
</script>
<style scoped>
  .userXy{
    margin: 40px 10px 20px 40px;
  }
.ruzhu {
  background: #3a3a3e;
  height: auto;
  min-width: 500px;
  width: 100%;
  height: auto;
  padding-bottom: 100px;
}
.maintop {
  height: 60px;
  line-height: 60px;
  padding-left: 16px;
  font-size: 20px;
  color: #787a7a;
  /* font-weight: bolder; */
}

/* 头像上传 */
/* .avatorUp {
  width: 100px;
  height: 100px;
  background: #fff;
} */
.avatar {
  object-fit: contain;
  background: #e5e5e5;
}
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  background: #fff !important;
}
.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 148px;
  height: 148px;
  line-height: 148px;
  text-align: center;
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  background: #fff !important;
}
.avatar {
  width: 148px;
  height: 148px;
  display: block;
}

ul > li {
  font-size: 16px;
  color: #8c939d;
}
ul > li > span {
  font-size: 14px;
  line-height: 60px;
  color: #fff;
  /* margin-bottom: 50px; */
  display: inline-block;
}
ul > li > div {
  display: block;
}

.submit_div {
  width: 100%;
  /* text-align: center; */
  line-height: 65px;
  margin-bottom: 70px;
  padding-left: 40px;
  text-align: left;
}
.el-input {
  width: 50%;
}
.el-textarea {
  width: 50%;
}
.el-select {
  width: 50%;
}
.el-cascader {
  width: 50%;
}
</style>
