<template>
    <div class="container">
		<div class="form-box">
			<el-form ref="form" :model="form" label-width="100px">		 
			  <el-form-item label="角色名称:">
					<el-input v-model="form.actorname"></el-input>
			  </el-form-item>     
				 <el-form-item label="角色描述:">
					 <el-input type="textarea" v-model="form.actormsg"></el-input>
				 </el-form-item>
				 <el-form-item label="角色权限:">
				 	<el-checkbox-group v-model="form.power">
				 		<el-checkbox label="发表文章" name="type"></el-checkbox>
				 		<el-checkbox label="编辑文章" name="type"></el-checkbox>
				 		<el-checkbox label="标签管理" name="type"></el-checkbox>
				 		<el-checkbox label="回收站管理" name="type"></el-checkbox>
				 		<el-checkbox label="用户管理" name="type"></el-checkbox>
				 		<el-checkbox label="角色管理" name="type"></el-checkbox>
				 	</el-checkbox-group>
				 </el-form-item>
				 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
				 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
			   <el-button type="primary" round @click="add">确认新增</el-button>&nbsp;&nbsp;&nbsp;
			   <router-link to='/manageRole'>
					<el-button type="info" round>&nbsp;&nbsp;&nbsp;返&nbsp;&nbsp;回&nbsp;&nbsp;&nbsp;</el-button>
				</router-link>
			</el-form>
		</div>
    </div>
</template>

<script>
    export default {
        name: 'amend',
        data: function(){
            return {
							form: {
								actorname: '',
								actormsg: '',
								power:[]
							}
            }
        },
        methods: {
					add() {
						this.$message({
							message: '新增完成',
							type: 'success'
						});
					}
        }
    }
</script>
<style scoped>
	
	span{
		color: #666;
	}
</style>