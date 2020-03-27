<template>
  <div class="ruzhu">

    <div>
      <el-row style="height: 60px;">
        <el-col :xs="10" :sm="10" :md="10" :lg="10" :xl="10"><span class="maintop">博主入驻:</span></el-col>
      </el-row>
    </div>
    <div class="people_detail">
      <el-row>
        <el-col :xs="12" :sm="12" :md="12" :lg="12" :xl="12">
          <ul>
            <li>基本信息:</li>
            <li><span>姓名:</span>
              <el-input v-model="name" placeholder="请输入内容" clearable ></el-input></li>
            <li>
              <span>电话:</span>
              <el-input type="tel" v-model="phone" placeholder="请输入内容" clearable></el-input>
            </li>
            <li>
              <span>微信号:</span>
              <el-input v-model="wx" placeholder="请输入内容" clearable></el-input>
            </li>
            <li>
              <span>简介:</span>
              <el-input  type="textarea" :rows="2" v-model="brief" placeholder="请输入内容" clearable></el-input>
            </li>
            <li>
              <span>账号类型:</span>
             <el-select v-model="value" @change="typeFn(value)"  placeholder="请选择">
                <el-option
                  v-for="item in type"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
						>
                </el-option>
              </el-select>
            </li>
            <li>
              <span>城市:</span>
              <el-cascader :options="options" clearable @change="handleChange"></el-cascader>
            </li>
            <li>
              <span>头像:</span>
              <div class="avatorUp">
                <el-upload
                  class="avatar-uploader"
                  action="/upload-file"
                  :show-file-list="false"
                  :on-success="handleAvatarSuccess"
                  :before-upload="beforeAvatarUpload">
                  <img v-if="imageUrl" :src="imageUrl" class="avatar">
                  <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                </el-upload>

              </div>
            </li>
          </ul>
        </el-col>
        <el-col :xs="12" :sm="12" :md="12" :lg="12" :xl="12">
          <ul>
            <li>视频号信息:</li>
            <li>
              <span>粉丝量:(单位/万)</span>
              <el-input v-model="fansCount" placeholder="请输入内容" clearable></el-input>
            </li>
            <li>
              <span>视频量:(单位/万)</span>
              <el-input v-model="videoCount" placeholder="请输入内容" clearable></el-input>
            </li>
            <li>
              <span>点赞量:(单位/万)</span>
              <el-input v-model="likeCount" placeholder="请输入内容" clearable></el-input>
            </li>
            <li>
              <span>曝光量:(单位/万)</span>
              <el-input v-model="pv" placeholder="请输入内容"></el-input>
            </li>
            <li>
              <span>选择领域(可多选):</span>
              <el-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange">全选</el-checkbox>
                <div style="margin: 15px 0;"></div>
                <el-checkbox-group v-model="checkedCities" @change="handleCheckedCitiesChange">
                  <el-checkbox v-for="city in cities" :label="city" :key="city.name">{{city.name}}</el-checkbox>
                </el-checkbox-group>
            </li>
            <li>
              <span>视频号截图:</span>
              <div>
                <el-upload  action="/upload-file" list-type="picture-card" :on-success="uploadCover" :on-preview="handlePictureCardPreview" :on-remove="handleRemove">
                  <i class="el-icon-plus"></i>
                </el-upload>
                <el-dialog :visible.sync="dialogVisible"><img width="100%" :src="dialogImageUrl" alt="" /></el-dialog>
              </div>
            </li>
          </ul>
        </el-col>
      </el-row>
      <video_supply></video_supply>
      <el-row><div class="submit_div"><el-button type="primary" @click="onSubmit">立即入驻</el-button></div></el-row>
    </div>
  </div>
</template>

<script>
  // const cityOptions = ['上海', '北京', '广州', '深圳'];
import axios from 'axios';
import { mapActions, mapGetters } from 'vuex';
import qs from 'qs';
import area from '../../../assets/area.json';
import video_supply from './page_in/video_supply.vue';
export default {
  name: 'ruzhu',
  data() {
    return {
      name:'',
      phone:'',
      wx:'',
      brief:'',
      fansCount:'',
      videoCount:'',
      likeCount:'',
      pv:'',
      imageUrl: '',
      dialogImageUrl: '',
      dialogVisible: false,
      options: [],
       checkAll: false,
       checkedCities: [],
       cities: [],
       isIndeterminate: false,
       type: [ {
                value: '0',
                label: '个人号'
              }, {
                value: '1',
                label: '达人号'
              }, {
                value: '2',
                label: '企业号'
              }],
			value:'默认',
			num:0,
			wxVideoaccountRealmIdList:[],
			wxVideoaccountRealmIdListNow:'',
			dili:{
				shenfen:{
					name:'',
					id:''
				},
				city:{
					name:'',
					id:''
				},
				qu:{
					name:'',
					id:''
				}
			},
			imageUrlNow:'',
			dialogImageUrlNow:[],
			dialogImageUrlNowlist:[]
    };
  },
  computed: {},
  components: {
    video_supply,
  },
  beforeCreate() {},
  created() {},
  //离开前判断前进和后退时间来判断是否保存滚动值
  beforeRouteLeave(to, from, next) {
    this.scrollTop = document.getElementById('productPage').scrollTop || document.getElementById('productPage').pageYOffset;
    if (!to.query.time || !from.query.time || to.query.time < from.query.time) {
      if (this.$vnode && this.$vnode.data.keepAlive) {
        if (this.$vnode.parent && this.$vnode.parent.componentInstance && this.$vnode.parent.componentInstance.cache) {
          if (this.$vnode.componentOptions) {
            var key =
              this.$vnode.key == null ? this.$vnode.componentOptions.Ctor.cid + (this.$vnode.componentOptions.tag ? `::${this.$vnode.componentOptions.tag}` : '') : this.$vnode.key;
            var cache = this.$vnode.parent.componentInstance.cache;
            var keys = this.$vnode.parent.componentInstance.keys;
            if (cache[key]) {
              if (keys.length) {
                var index = keys.indexOf(key);
                if (index > -1) {
                  keys.splice(index, 1);
                }
              }
              delete cache[key];
            }
          }
        }
      }
      this.$destroy();
    }
    next();
  },
  //进入该页面时，用之前保存的滚动位置赋值
  beforeRouteEnter(to, from, next) {
    next(vm => {
      document.getElementById('productPage').scrollTop = document.getElementById('productPage').pageYOffset = vm.scrollTop;
    });
  },
  mounted() {
    // console.log(area)
    this.options = area;
    console.log(this.options);
     this.accountRealmIdList()
  },
  methods: {
	  handleChange(_value){
		  let name1 = area.find(n=>n.value == _value[0])
		  let name2 = name1.children.find(n=>n.value == _value[1])
		  let name3 = name2.children.find(n=>n.value == _value[2])
		  this.dili = {
			  shenfen:{
			  	name:name1.label,
			  	id:name1.value
			  },
			  city:{
			  	name:name2.label,
			  	id:name2.value
			  },
			  qu:{
			  	name:name3.label,
			  	id:name3.value
			  }
		  }
		  console.log(this.dili)
	  },
		onSubmit(){
			this.$axios.post("/user/wx-videoaccount/apply-audit-my-wx-videoaccount?",qs.stringify({
				name:this.name,
				phone:this.phone,
				logo:this.imageUrlNow,
				screenshot:this.dialogImageUrlNow,
				wx:this.wx,
				fansCount:this.fansCount,
				likeCount:this.likeCount,
				videoCount:this.videoCount,
				pv:this.pv,
				brief:this.brief,
				type:this.num,
				area1Id:this.dili.shenfen.id,
				area2Id:this.dili.city.id,
				area3Id:this.dili.qu.id,
				area1Name:this.dili.shenfen.name,
				area2Name:this.dili.city.name,
				area3Name:this.dili.qu.name,
				wxVideoaccountRealmIdList:this.wxVideoaccountRealmIdListNow
			}))
			.then(res =>{
				
			})
			.catch()
		},
		typeFn(_value){
			this.num = _value
			// console.log(this.num)
		},
    // 获取领域列表
    accountRealmIdList(){
      this.$axios
        .get('/user/wx-videoaccount/wx-videoaccount-realm-list')
        .then(res => {
          console.log(res.data.data.itemList)
          var itemList=res.data.data.itemList
          var cityOptions=[]
          for(var i in itemList){
            cityOptions.push(itemList[i])
          }
          console.log(cityOptions)
          this.cities=cityOptions
        })
        .catch(err => {});
    },

    handleAvatarSuccess(res, file) {
		 this.imageUrlNow = res.data.url
		 // console.log(this.imageUrlNow)
      this.imageUrl = URL.createObjectURL(file.raw);
		
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
      console.log(file, fileList);
    },
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
		 console.log(this.dialogImageUrl)
      this.dialogVisible = true;
    },
	 uploadCover(response, file, fileList){
		 // dialogImageUrlNow
		 this.dialogImageUrlNowlist.push(response.data.url);
		 this.dialogImageUrlNow = this.dialogImageUrlNowlist.join(",");
		 console.log(this.dialogImageUrlNow)
	 },
    // 选择领域
          handleCheckAllChange(val) {
				 console.log(val)
            this.checkedCities = val ? this.cities : [];
            this.isIndeterminate = false;
				this.wxVideoaccountRealmIdList = [];
				for(let i in this.checkedCities){
					this.wxVideoaccountRealmIdList.push(this.checkedCities[i].wxVideoaccountRealmId)
				}
				this.wxVideoaccountRealmIdListNow = this.wxVideoaccountRealmIdList.join(",");
          },
          handleCheckedCitiesChange(value) {
				 this.wxVideoaccountRealmIdList = []
				 for(let i in this.checkedCities){
				 	this.wxVideoaccountRealmIdList.push(this.checkedCities[i].wxVideoaccountRealmId)
				 }
				 this.wxVideoaccountRealmIdListNow = this.wxVideoaccountRealmIdList.join(",");
				 console.log(this.wxVideoaccountRealmIdList)
            let checkedCount = value.length;
            this.checkAll = checkedCount === this.cities.length;
            this.isIndeterminate = checkedCount > 0 && checkedCount < this.cities.length;
          },
  }
};
</script>

<style scoped>
.ruzhu {
  background: #3a3a3e;
  height: auto;
  min-width: 1000px;
  width: 100%;
  height: auto;
  padding-bottom: 50px;
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
.avatar{
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
    border-color: #409EFF;
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
ul>li{
  font-size: 16px;
   color: #8c939d;
}
  ul>li>span{
    font-size: 14px;
    line-height: 60px;
    color: #fff;
    /* margin-bottom: 50px; */
    display: inline-block;
  }
  ul>li>div{
    display: block;
  }

  .submit_div{
    width: 100%;
    text-align: center;
    line-height: 130px;
    margin-bottom: 70px;
  }
</style>
