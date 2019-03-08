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
                    <!--el-input v-model="form.tag"></el-input-->
                    <el-tag
                            :key="tag"
                            v-for="tag in dynamicTags"
                            closable
                            :disable-transitions="false"
                            @close="handleClose(tag)">
                        {{tag}}
                    </el-tag>
                    <el-input
                            class="input-new-tag"
                            v-if="inputVisible"
                            v-model="inputValue"
                            ref="saveTagInput"
                            size="small"
                            @keyup.enter.native="handleInputConfirm"
                            @blur="handleInputConfirm"
                    >
                    </el-input>
                    <el-button v-else class="button-new-tag" size="small" @click="showInput">+ 添加标签</el-button>
                </el-form-item>
                <el-form-item prop="picture" label="头图">
                    <el-upload
                            class="picture-uploader"
                            :action="uploadUrl"
                            :show-file-list="false"
                            :on-success="handlePictureSuccess"
                            :before-upload="beforePictureUpload">
                        <img v-if="pictureUrl" :src="pictureUrl" class="picture">
                        <i v-else class="el-icon-plus picture-uploader-icon"></i>
                    </el-upload>
                </el-form-item>
                <el-form-item label="导语" prop="intro">
                    <el-input id="markText" type="textarea" prop="intro" v-model="form.intro"
                              placeholder='字数不超过500字'></el-input>
                </el-form-item>
                <el-form-item prop="content" label="内容">
                    <!-- 富文本编辑器 -->
                    <quill-editor ref="myQuillEditor" v-model="form.content" :options="editorOption"></quill-editor>
                </el-form-item>
                <el-form-item label="">
                    <el-row>
                        <router-link to='/preview'>
                            <el-button type="primary" @click="onSubmit('preview')" icon="el-icon-view" round>预览</el-button>
                        </router-link> &nbsp;
                        <el-button type="primary" @click="onSubmit('publish')" icon="el-icon-check" round>发布</el-button>
                        <el-button type="primary" @click="onSubmit('draft')" icon="el-icon-back" round>存入草稿箱</el-button>
                        <el-button type="danger" @click="onReset()" icon="el-icon-delete" round>清空</el-button>
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
    import {quillEditor, Quill} from 'vue-quill-editor';
    import {container, ImageExtend, QuillWatch} from 'quill-image-extend-module';

    Quill.register('modules/ImageExtend', ImageExtend);

    export default {
        name: 'editor',
        data: function () {
            return {
                form: {
                    title: '',
                    picture: '',
                    content: '',
                },
                rules: {
                    title: [{
                        required: true,
                        message: '请输入标题',
                        trigger: 'blur'
                    }],
                    category_id: [{
                        required: true,
                        message: '请选择分类',
                        trigger: 'blur'
                    }],
                    intro: [{
                        required: true,
                        message: '请输入导语',
                        trigger: 'blur'
                    }],
                },
                editorOption: {
                    placeholder: '在这里输入文章正文！',
                    modules: {
                        ImageExtend: {
                            loading: true,
                            name: 'file',
                            action: this.BASE_URL + '/admin/upload_editor',
                            response: (res) => {
                                return res.data.file
                            }
                        },
                        toolbar: {
                            container: container,
                            handlers: {
                                'image': function () {
                                    QuillWatch.emit(this.quill.id)
                                }
                            }
                        }
                    }
                },
                uploadUrl: this.BASE_URL + '/admin/upload_image',
                pictureUrl: '',
                dynamicTags: [],
                inputVisible: false,
                inputValue: ''
            }
        },
        components: {
            quillEditor
        },
        computed: {
            editor() {
                return this.$refs.myQuillEditor.quill;
            }
        },
        methods: {
            //处理输入事件
            handlekeyup() {
                console.log(1)
                const text = document.getElementById('markText').value;
                //中文字数统计
                const str = (text.replace(/\w/g, "")).length;
                //非汉字的个数
                const abcnum = text.length - str;
                const total = str + abcnum;
                if (total > 500) {
                    // this.$message.warning('导语部分超出500字!');
                    // console.log(1111)
                    this.over = 1;
                } else {
                    this.over = 0;
                }
            },
            handleClose(tag) {
                this.dynamicTags.splice(this.dynamicTags.indexOf(tag), 1);
            },

            showInput() {
                this.inputVisible = true;
                this.$nextTick(_ => {
                    this.$refs.saveTagInput.$refs.input.focus();
                });
            },

            handleInputConfirm() {
                let inputValue = this.inputValue;
                if (inputValue) {
                    if (this.dynamicTags.indexOf(inputValue) == -1) {
                        this.dynamicTags.push(inputValue);
                    }
                }
                this.inputVisible = false;
                this.inputValue = '';
            },
            handlePictureSuccess(res, file) {
                // console.log(res)
                if (res.code == 0) {
                    //this.form.picture = URL.createObjectURL(file.raw);
                    this.form.picture = res.data.file;
                    this.pictureUrl = this.IMAGE_URL + '/image/' + res.data.file;
                }
            },
            beforePictureUpload(file) {
                const isJPG = file.type === 'image/jpeg' || file.type === 'image/png';
                const isLt2M = file.size / 1024 / 1024 < 2;
                if (!isJPG) {
                    this.$message.error('上传图片只能是 JPG, PNG 格式!');
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
                        this.handlekeyup()
                        if (this.over == 0) {
                            //console.log(this.form.content);
                            this.form.type = type;
                            this.form.tags = this.dynamicTags.join(',');
                            this.$axios.post(
                                '/admin/article_add',
                                this.$qs.stringify(this.form),
                                //{headers: {'Content-Type': 'application/x-www-form-urlencoded'}}
                            ).then((res) => {
                                //console.log(res);
                                if (res.data.code == -1) {
                                    this.$message.warning('请登录！');
                                    this.$router.push('/login');
                                } else if (res.data.code == 0) {
                                    this.$message.success(res.data.message);
                                    this.$router.push('/ArticleList');
                                } else {
                                    //console.log(res.data.message);
                                    this.$message.warning(res.data.message);
                                }
                            }).catch((res) => {
                                console.log(res);
                            });
                        } else if (this.over == 1) {
                            this.$message.warning('导语部分自出超过500字！');
                        }
                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
            },
            onReset() {
                this.$refs['form'].resetFields();
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

    .el-upload--text img {
        width: 100%;
        height: 100%;
        display: block;
    }

    .el-tag + .el-tag {
        margin-left: 10px;
    }

    .button-new-tag {
        margin-left: 10px;
        height: 32px;
        line-height: 30px;
        padding-top: 0;
        padding-bottom: 0;
    }

    .input-new-tag {
        width: 90px;
        margin-left: 10px;
        vertical-align: bottom;
    }
</style>
