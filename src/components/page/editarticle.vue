<template>
    <div>
        <div class="container">
            <el-form :model="form" :rules="rules" ref="form" label-width="80px">
                <el-form-item prop="title" label="标题">
                    <el-input v-model="form.title"></el-input>
                </el-form-item>
                <el-form-item prop="category_id" label="分类">
                    <el-select v-model="form.category_id" placeholder="请选择">
                        <el-option label="原创" value="2"></el-option>
                        <el-option label="转载" value="3"></el-option>
                        <el-option label="用户投稿" value="4"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item prop="tag" label="标签">
                    <el-input v-model="form.tag"></el-input>
                </el-form-item>
                <el-form-item prop="picture" label="头图">
                    <el-upload
                            class="picture-uploader"
                            action="http://guanjia.applinzi.com/admin/upload_image"
                            :show-file-list="false"
                            :on-success="handlePictureSuccess"
                            :before-upload="beforePictureUpload"
					>
                        <img v-if="pictureUrl" :src="pictureUrl" class="picture">
                        <i v-else class="el-icon-plus picture-uploader-icon"></i>
                    </el-upload>
                </el-form-item>
                <el-form-item prop="content" label="内容">
                    <!-- 富文本编辑器 -->
                    <quill-editor ref="myTextEditor" v-model="form.content" :options="editorOption"></quill-editor>
                </el-form-item>
                <el-form-item label="">
                    <el-row>
                        <router-link to='/preview'>
                            <el-button type="primary" @click="onSubmit('preview')" icon="el-icon-view" round>预览
                            </el-button>
                        </router-link> &nbsp;
                        <el-button type="primary" @click="onSubmit('publish')" icon="el-icon-check" round>发布</el-button>
                        <el-button type="primary" @click="onSubmit('draft')" icon="el-icon-back" round>存入草稿箱</el-button>
                        <el-button type="danger" @click="handleDelete()" icon="el-icon-delete" round>删除</el-button>
                    </el-row>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<script>
    import 'quill/dist/quill.core.css';
    import 'quill/dist/quill.snow.css';
    import 'quill/dist/quill.bubble.css';
    import {quillEditor} from 'vue-quill-editor';

    export default {
        name: 'editor',
        data: function () {
            return {
                form: {
					type:'',
					id:'',
                    title: '',
                    picture: '',
                    content: '',
					category_id:''
                },
                rules: {
                    title: [
                        {required: true, message: '请输入标题', trigger: 'blur'}
                    ],
                    category_id: [
                        {required: true, message: '请选择分类', trigger: 'blur'}
                    ],
                    picture: [
                        {required: true, message: '请上传头图', trigger: 'blur'}
                    ],
                    content: [
                        {required: true, message: '请输入内容', trigger: 'blur'}
                    ],
                },
                editorOption: {
                    placeholder: '在这里输入文章正文！'
                },
                pictureUrl: '',
            }
        },
        components: {
            quillEditor
        },
		created(){			
			this.getArtMsg();
		},
        methods: {
			//获取文章信息
			getArtMsg(){
						this.form.id = this.$route.query.id;					
						this.$axios.post('admin/article_info',this.$qs.stringify({id:this.form.id}))
						.then((res)=>{				
							if(res.data.code == -1){
								this.$message.warning('请登录！');
								this.$router.push('/login');
							}else if(res.data.code == 0){
								//写逻辑
								this.form.id =  res.data.data.info.id;
								this.form.title = res.data.data.info.title;
								this.form.category_id = res.data.data.info.category_id;
								this.form.tag = res.data.data.info.tag;
								this.pictureUrl = 'http://guanjia-uploads.stor.sinaapp.com/image/' + res.data.data.info.picture;
								this.form.picture = res.data.data.info.picture;
								this.form.content = res.data.data.info.content;	
							}
						})
						.catch((err)=>{
							console.log(err)
						})
					},
            handlePictureSuccess(res, file) {
                if (res.code == 0) {
                    this.form.picture = res.data.file;
                    this.pictureUrl = 'http://guanjia-uploads.stor.sinaapp.com/image/' + res.data.file;
                }
            },
            beforePictureUpload(file) {
                const isJPG = file.type === 'image/jpeg';
                const isLt2M = file.size / 1024 / 1024 < 2;

                if (!isJPG) {
                    this.$message.error('上传图片只能是 JPG 格式!');
                }
                if (!isLt2M) {
                    this.$message.error('上传图片大小不能超过 2MB!');
                }
                return isJPG && isLt2M;
            },
            onEditorChange({editor, html, text}) {
                this.form.content = html;
            },
            onSubmit(type) {
                this.$refs['form'].validate((valid) => {
					if (valid) {
						this.form.type = type;
						this.$axios.post(
							'admin/article_edit',
							this.$qs.stringify(this.form),
						).then((res) => {
							//console.log(res);
							if (res.data.code == -1) {
								this.$message.warning('请登录！');
								this.$router.push('/login');
							} else if (res.data.code == 0) {
								console.log(res);
								this.$message.success(res.data.message);
								this.$router.push('/manageArticle');
							} else {
								//console.log(res.data.message);
								this.$message.warning(res.data.message);
							}
						}).catch((res) => {
							console.log(res);
						});
					} else {
						console.log('error submit!!');
						return false;
					}				 					
                });
            },
			//删除
			handleDelete(text){
				// console.log(this.form.id)
				this.$confirm('此操作将永久删除该文章, 是否继续?', '提示', {
					confirmButtonText: '确定',
					cancelButtonText: '取消',
					type: 'warning'
				}).then(() => {
					this.$axios.post('admin/article_delete',this.$qs.stringify({id:this.form.id}))
					.then((res)=>{
						// console.log(res)
						if(res.data.code === 0){
							this.$message.success(res.data.message);
							this.$router.push('/')
						}
					})
					.catch((err)=>{
						console.log(err)
					})
				}).catch(() => {
					this.$message.info('已取消删除');
				});
			}
        }
    }
</script>
<style scoped>
    .picture-uploader .el-upload {
        border: 1px dashed #d9d9d9;
        border-radius: 6px;
        cursor: pointer;
        position: relative;
        overflow: hidden;
    }

    .picture-uploader .el-upload:hover {
        border-color: #409EFF;
    }

    .picture-uploader-icon {
        font-size: 28px;
        color: #8c939d;
        width: 178px;
        height: 178px;
        line-height: 178px;
        text-align: center;
    }

    .picture {
        width: 357px;
        height: 178px;
        display: block;
    } 
</style>