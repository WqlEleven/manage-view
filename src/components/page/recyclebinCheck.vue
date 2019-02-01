<template>   
        <div class="container">          
           <el-form ref="form" :model="form" label-width="80px">
							<el-form-item label="标题" >
							<el-input v-model="form.title"></el-input>
							</el-form-item>
							<el-form-item label="分类:" disabled>
							<span>转载</span>
							</el-form-item>
						 <el-form-item label="文章链接:">
							<span>http://pay.changshouclub.com/changshou/loginController.do?login</span>
						 </el-form-item>
							<el-form-item label="正文">
							<el-input type="textarea" v-model="form.article" size='medium'></el-input>
							</el-form-item>
						 <el-form-item label="产品链接:">
							<span>http://pay.changshouclub.com/changshou/loginController.do?login</span>
						 </el-form-item>
						 <el-form-item>
							 <router-link to="/recyclebin">
								<el-button type="primary" size='medium'>返回</el-button>
							 </router-link>
						</el-form-item>
					</el-form>
        </div>
</template>

<script>
    export default {
        name: 'recyclebinCheck',
        data() {
            return {
				 form: {
				  name: '',
				  region: '',
				  date1: '',
				  date2: '',
				  delivery: false,
				  type: [],
				  resource: '',
				  desc: ''
				}
            }
        },
        computed: {
            
        },
        methods: {
			
        }
    }

</script>

<style>
 
</style>
