<template>
  <div class="video">

    <el-row>
      <div>
        <span>视频列表</span>
        <el-button type="text" @click="centerDialogVisible = true">点击添加视频</el-button>


      </div>
      <div>
         <el-table stripe
            :data="tableData"
            style="width: 100%">
            <el-table-column type="expand">
              <template slot-scope="props">
                <el-form label-position="left" inline class="demo-table-expand">
                  <el-form-item label="视频名称">
                    <span>{{ props.row.name }}</span>
                  </el-form-item>
                  <el-form-item label="视频封面">
                    <img :src="props.row.cover" style="width: 50px;height: 50px;" alt="">
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
            <el-table-column
              label="视频名称"
              prop="name">
            </el-table-column>
            <el-table-column
              label="视频封面"
              align="center" >
                            <template scope="scope">
                                  <img :src="scope.row.cover" width="50" height="50"/>
                              </template>
            </el-table-column>
            <el-table-column
              label="描述"
              prop="brief">
            </el-table-column>
            <el-table-column
                  fixed="right"
                  label="操作"
                  width="120">
                  <template slot-scope="scope">
                    <el-button
                      @click.native.prevent="deleteRow(scope.$index, tableData)"
                      type="text"
                      size="small">
                      移除
                    </el-button>
                  </template>
            </el-table-column>
          </el-table>
      </div>
    </el-row>


    <!-- 上传视频弹窗 -->
    <el-dialog
      title="视频上传"
      :visible.sync="centerDialogVisible"
      width="30%"
      center >
      <!-- <span>需要注意的是内容是默认不居中的</span> -->
      <div>
        <ul>
          <li>
            <span>视频名称:</span>
            <el-input
              placeholder="请输入内容"
              v-model="input"
              clearable>
            </el-input>
          </li>
          <li>
            <span>视频封面:</span>
            <div class="avatorUp">
              <el-upload
                class="avatar-uploader"
                action="https://jsonplaceholder.typicode.com/posts/"
                :show-file-list="false"
                :on-success="handleAvatarSuccess"
                :before-upload="beforeAvatarUpload">
                <img v-if="imageUrl" :src="imageUrl" class="avatar">
                <i v-else class="el-icon-plus avatar-uploader-icon"></i>
              </el-upload>

            </div>
          </li>
          <li>
            <el-upload
              class="upload-demo"
              action="https://jsonplaceholder.typicode.com/posts/"
              :on-preview="handlePreview"
              :on-remove="handleRemove"
              :before-remove="beforeRemove"
              multiple
              :limit="3"
              :on-exceed="handleExceed"
              :file-list="fileList">
              <el-button size="small" type="primary">点击上传</el-button>
              <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
            </el-upload>
          </li>
          <li>
            <span>点赞量:</span>
            <el-input
              placeholder="请输入内容"
              v-model="input"
              clearable>
            </el-input>
          </li>
          <li>
            <span>曝光量:</span>
            <el-input
              placeholder="请输入内容"
              v-model="input"
              clearable>
            </el-input>
          </li>
          <li>
            <span>视频描述:</span>
            <el-input
              placeholder="请输入内容"
              v-model="input"
              clearable>
            </el-input>
          </li>
        </ul>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="centerDialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="centerDialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
  export default {
      data() {
        return {
          fileList: [{name: 'food.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}, {name: 'food2.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}],
          centerDialogVisible: false,
          tableData: [{
            name: '好滋好味鸡蛋仔1',
            cover: require('../../../../../build/logo.png'),
            video: 'http://feed.resrc.svideo.sogoucdn.com/videodown/110002/507/a50b7ea2e30f9b2811f001a7e7bef02f.mp4',
            likeCount: '上海市普陀区真北路',
            pv: '王小虎夫妻店',
            brief: '10333'
          }, {
            name: '好滋好味鸡蛋仔2',
            cover: require('../../../../../build/logo.png'),
            video: 'http://feed.resrc.svideo.sogoucdn.com/videodown/110002/507/a50b7ea2e30f9b2811f001a7e7bef02f.mp4',
            likeCount: '上海市普陀区真北路',
            pv: '王小虎夫妻店',
            brief: '10333'
          }, {
            name: '好滋好味鸡蛋仔3',
            cover: require('../../../../../build/logo.png'),
             video: 'http://feed.resrc.svideo.sogoucdn.com/videodown/110002/507/a50b7ea2e30f9b2811f001a7e7bef02f.mp4',
            likeCount: '上海市普陀区真北路',
            pv: '王小虎夫妻店',
            brief: '10333'
          }, {
            name: '好滋好味鸡蛋仔4',
            cover: require('../../../../../build/logo.png'),
             video: 'http://feed.resrc.svideo.sogoucdn.com/videodown/110002/507/a50b7ea2e30f9b2811f001a7e7bef02f.mp4',
            likeCount: '上海市普陀区真北路',
            pv: '王小虎夫妻店',
            brief: '王小虎夫妻店王小虎夫妻店王小虎夫妻店王小虎夫妻店王小虎夫妻店王小虎夫妻店王小虎夫妻店王小虎夫妻店王小虎夫妻店王小虎夫妻店王小虎夫妻店王小虎夫妻店王小虎夫妻店王小虎夫妻店王小虎夫妻店王小虎夫妻店王小虎夫妻店王小虎夫妻店王小虎夫妻店王小虎夫妻店'
          }]
        }
      },
      methods:{
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
                      this.$message.warning(`当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`);
                    },
                    beforeRemove(file, fileList) {
                      return this.$confirm(`确定移除 ${ file.name }？`);
                    },
      }

    }
</script>

<style scoped>
  .video{
    width: 90%;
    margin: 0 auto;
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
</style>
