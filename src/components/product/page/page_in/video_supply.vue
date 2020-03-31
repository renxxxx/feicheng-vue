<template>
  <div class="video">
    <el-row>
      <div>
        <!-- <span>视频列表</span> -->
        <el-button style="margin: 10px 0;" type="primary" @click="centerDialogVisible = true">上传视频<i class="el-icon-upload el-icon--right" style="display: inline-block;"></i></el-button>
        <!-- <el-button type="primary" @click="centerDialogVisible = true">点击添加视频</el-button> -->
      </div>
      <div>
        <el-table stripe :data="tableData" style="width: 100%">
          <el-table-column type="expand">
            <template slot-scope="props">
              <el-form label-position="left" inline class="demo-table-expand">
                <el-form-item label="视频名称">
                  <span>{{ props.row.name }}</span>
                </el-form-item>
                <el-form-item label="视频封面">
                  <img :src="props.row.cover" style="width: 50px;height: 50px;" alt="" />
                  <!-- <span>{{ props.row.cover }}</span> -->
                </el-form-item>
                <el-form-item label="视频">
                  <!-- <span>{{ props.row.video }}</span> -->
                  <video controls="controls" style="width: 50%;min-width: 200px;max-width: 500px;" :src="props.row.video"></video>
                </el-form-item>
                <el-form-item label="点赞量">
                  <span>{{ props.row.likeCount }}</span>
                </el-form-item>
                <el-form-item label="曝光量">
                  <span>{{ props.row.pv }}</span>
                </el-form-item>
                <el-form-item label="描述">
                  <span>{{ props.row.brief }}</span>
                </el-form-item>
                <!-- <el-form-item label="视频描述">
                    <span>{{ props.row.desc }}</span>
                  </el-form-item> -->
              </el-form>
            </template>
          </el-table-column>
          <el-table-column label="视频名称" prop="name"></el-table-column>
          <el-table-column label="视频封面" align="center">
            <template slot-scope="scope">
              <img :src="scope.row.cover" width="50" height="50" />
            </template>
          </el-table-column>
          <el-table-column label="描述" prop="brief"></el-table-column>
          <el-table-column fixed="right" label="操作" width="120">
            <template slot-scope="scope">
              <el-button @click.native.prevent="deleteRow(scope.$index, tableData)" type="text" size="small">移除</el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </el-row>

    <!-- 上传视频弹窗 -->
    <el-dialog title="视频上传" :visible.sync="centerDialogVisible" width="30%" center>
      <!-- <span>需要注意的是内容是默认不居中的</span> -->
      <div class="videoSupply">
        <ul>
          <li>
            <span>视频名称:</span>
            <el-input placeholder="请输入内容" v-model="name" clearable></el-input>
          </li>
          <li>
            <span>视频封面:</span>
            <div class="avatorUp">
              <el-upload
                class="avatar-uploader"
                action="/upload-file"
                accept="image/*"
                :show-file-list="false"
                :on-success="handleAvatarSuccess"
                :before-upload="beforeAvatarUpload"
              >
                <img v-if="imageUrl" :src="imageUrl" class="avatar" />
                <i v-else class="el-icon-plus avatar-uploader-icon"></i>
              </el-upload>
            </div>
          </li>
          <li>
            <el-upload
              class="upload-demo"
              action="/upload-file"
              :on-preview="handlePreview"
              :on-remove="handleRemove"
              :before-remove="beforeRemove"
              multiple
              :limit="1"
              :on-exceed="handleExceed"
              :file-list="fileList"
              :on-success="uploadVideo"
              accept="video/*"
            >
              <el-button size="small" type="primary" style="margin-top: 15px;">上传视频</el-button>
              <!-- <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div> -->
            </el-upload>
          </li>
          <li>
            <span>点赞量:</span>
            <el-input type='number' placeholder="请输入内容" v-model="likeCount" clearable></el-input>
          </li>
          <li>
            <span>曝光量:</span>
            <el-input type='number' placeholder="请输入内容" v-model="pv" clearable></el-input>
          </li>
          <li>
            <span>视频描述:</span>
            <el-input placeholder="请输入内容" v-model="brief" clearable></el-input>
          </li>
        </ul>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="centerDialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="onSubmit">确 定</el-button>
      </span>
    </el-dialog>
		<login ref="loginRef"></login>


    <!-- <child ref="refChild" hidden>{{tableData}}</child> -->
  </div>
</template>

<script>
import axios from 'axios';
import { mapActions, mapGetters } from 'vuex';
import qs from 'qs';
import login from '../../../common/functionPage/login.vue'
export default {
  data() {
    return {
      name: '',
      likeCount: '',
      pv: '',
      brief: '',
      imageUrl: '',
      video: '',
      videolist: [],
      fileList: [
        // { name: 'food.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100' },
        // { name: 'food2.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100' }
      ],
      centerDialogVisible: false,
      tableData: []
    };
  },
	components: {
	  login
	},
  methods: {
    // 视频上传
    uploadVideo(response, file, fileList) {
      this.video = response.data.url;
      console.log(this.video);
    },
    deleteRow(index, rows) {
      rows.splice(index, 1);
    },
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePreview(file) {
      console.log(file);
    },
    handleExceed(files, fileList) {
      this.$message.warning(`当前限制选择 1 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`);
    },
    beforeRemove(file, fileList) {
      return this.$confirm(`确定移除 ${file.name}？`);
    },
    handleAvatarSuccess(res, file) {
      this.imageUrlNow = res.data.url;
      // console.log( URL.createObjectURL(file.raw))
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
    // 提交视频
    onSubmit() {
     this.centerDialogVisible = false;
     this.tableData.push({ name: this.name, cover: this.imageUrlNow, video: this.video, likeCount: this.likeCount, pv: this.pv, brief: this.brief });
     this.name=''
     this.pv=''
     this.imageUrl=''
     this.video= ''
     // this.imageUrlNow=''
     this.likeCount=''
     this.brief=''
     // this.video=''
     this.videolist=[]
     this.fileList=[]
     console.log(this.tableData)
    //   this.$axios
    //     .post(
    //       '/user/wx-videoaccount-video/create-my-wx-videoaccount-video?',
    //       qs.stringify({
    //         name: this.name,
    //         pv: this.pv,
    //         cover: this.imageUrlNow,
    //         likeCount: this.likeCount,
    //         brief: this.brief,
    //         video: this.video
    //       })
    //     )
    //     .then(res => {
				// if(res.data.code == 20){
				// 	this.centerDialogVisible = true;
				// 	this.$refs.loginRef.getData();
				// }else 	if(res.data.code == 0){
				// 	this.centerDialogVisible = false;
				// 	this.tableData.push({ name: this.name, cover: this.imageUrlNow, video: this.video, likeCount: this.likeCount, pv: this.pv, brief: this.brief });
				// 	this.name=''
				// 	this.pv=''
				// 	this.imageUrlNow=''
				// 	this.likeCount=''
				// 	this.brief=''
				// 	this.video=''
    //       this.videolist=[]
    //       this.fileList=[]
				// }else{
    //       this.$message.error(res.data.codeMsg);
    //     }
        // })
        // .catch();
    }
  }
};
</script>

<style scoped>
.video {
  width: 90%;
  /* margin: 0 auto; */
  /* float: left; */
  margin-left: 40px;
}
.demo-table-expand {
  font-size: 0;
}
.demo-table-expand label {
  width: 90px;
  color: #99a9bf;
}
.demo-table-expand .el-form-item {
  margin-right: 0;
  margin-bottom: 0;
  width: 50%;
}

/* 视频封面 */
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
  width: 80px;
  height: 80px;
  line-height: 80px;
  text-align: center;
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  background: #fff !important;
}
.avatar {
  width: 80px;
  height: 80px;
  display: block;
}

.videoSupply ul li span {
  line-height: 30px;
  font-size: 14px;
  margin-top: 10px;
  margin-bottom: 10px;
  display: block;
}
</style>
