<template>
    <div class="table">      
        <div class="container">          
           <el-form ref="form" :model="form" label-width="80px">
							<el-form-item label="标题" >
							<el-input v-model="form.title"></el-input>
							</el-form-item>
							<el-form-item label="分类:" disabled>
							<el-form-item label="转载"></el-form-item>
							</el-form-item>
						 <el-form-item label="文章链接:">
							<el-form-item v-model="form.lianjie"></el-form-item>
						 </el-form-item>
							<el-form-item label="正文">
							<el-input type="textarea" v-model="form.article" size='medium'></el-input>
							</el-form-item>
						 <el-form-item label="产品链接:">
							<el-form-item v-model="form.pro"></el-form-item>
						 </el-form-item>
						 <el-form-item>
							 <router-link to="/recyclebin">
								<el-button type="primary" size='medium'>返回</el-button>
							 </router-link>
						</el-form-item>
					</el-form>
        </div>
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
			onSubmit() {
				console.log('submit!');
			  }
        }
    }

</script>

<style>
 
</style>
