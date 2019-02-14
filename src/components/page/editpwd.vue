<template>
    <div class="container">		
		<el-form ref="form" :model="form" label-width="100px">		 
			<el-form-item label="旧密码:">
				<el-input v-model="form.oldpwd"></el-input>
			</el-form-item>
				<el-form-item label="新密码:">
					<el-input v-model="form.newpwd"></el-input>
				</el-form-item>
				<el-form-item label="确认新密码:">
					<el-input v-model="form.nextnewpwd"></el-input>
				</el-form-item>
				
			   <el-button type="primary" round @click="edit()">确认修改</el-button>&nbsp;&nbsp;&nbsp;
			   <router-link to='/manageArticle'>
					<el-button type="info" round>&nbsp;&nbsp;&nbsp;返&nbsp;&nbsp;回&nbsp;&nbsp;&nbsp;</el-button>
				</router-link>
		</el-form>
    </div>
</template>

<script>
    export default {
        name: 'editpwd',
        data: function(){
            return {
				form: {
					oldpwd: '',
					newpwd: '',
					nextnewpwd:''
				}
            }
        },
        methods: {
// 				edit() {
// 					this.$confirm('此操作将修改角色信息, 是否继续?', '提示', {
// 						confirmButtonText: '确定',
// 						cancelButtonText: '取消',
// 						type: 'warning'
// 					}).then(() => {
// 						this.$message({
// 						type: 'success',
// 						message: '修改成功!'
// 						});
// 					}).catch(() => {
// 						this.$message({
// 						type: 'info',
// 						message: '已取消修改'
// 						});          
// 					});
// 					}
        }   
	}
</script>
<style scoped>
</style>