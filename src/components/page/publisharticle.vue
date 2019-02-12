<template>   
  <div class="container">
		  <el-form ref="form" :model="form" label-width="40px">
			  <el-form-item label="标题">
				<el-input v-model="form.title"></el-input>
			  </el-form-item>
		  </el-form>	 
			<el-form :inline="true" :model="formInline" class="demo-form-inline">
					<el-form-item label="分类">
						<el-select v-model="formInline.region" placeholder="请选择">
							<el-option label="原创" value="yuanchuang"></el-option>
							<el-option label="转载" value="zhuanzai"></el-option>
							<el-option label="用户投稿" value="tougao"></el-option>
						</el-select>
					</el-form-item>
					<el-form-item label="标签">
						<el-input v-model="formInline.user"></el-input>
					</el-form-item>		  
			</el-form>
				
			<el-form :inline="true" :model="formInline" class="demo-form-inline">
						<el-form-item label="头图"></el-form-item>
						<el-upload
							class="upload-demo"
							drag
							action="https://jsonplaceholder.typicode.com/posts/"
							multiple>
							<i class="el-icon-upload"></i>
							<div class="el-upload__text">
								将文件拖到此处，或<em>点击上传</em>
								<div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
							</div>					
						</el-upload>
			</el-form>
			
			
			
					<!-- 富文本编辑器 -->
			 <quill-editor ref="myTextEditor" v-model="content" :options="editorOption"></quill-editor> 
			<br />
					<el-row>
						<router-link to='/preview'>
							<el-button type="primary" icon="el-icon-view" round>预览</el-button>
						</router-link>	&nbsp;					
						<el-button type="primary" icon="el-icon-check" round>发布</el-button>
						<el-button type="primary" icon="el-icon-back" round>存入草稿箱</el-button>
						<el-button type="primary" icon="el-icon-delete" round>删除</el-button>
					</el-row>
  </div>
</template>

<script>
    import 'quill/dist/quill.core.css';
    import 'quill/dist/quill.snow.css';
    import 'quill/dist/quill.bubble.css';
    import { quillEditor } from 'vue-quill-editor';
    export default {
        name: 'editarticle',
        data: function(){
            return {
				 form: {
				  title: ''
				 },
                content: '',
                editorOption: {
                    placeholder: '在这里输入文章正文！'
                },
								formInline: {
									user: '',
									region: ''
								}					
						}
        },
        components: {
            quillEditor
        },
        methods: {  
        }
    }
</script>
<style scoped>
    .editor-btn{
        margin-top: 20px;
    }
</style>