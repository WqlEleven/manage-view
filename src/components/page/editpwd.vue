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
					<el-input v-model="form.pwd"></el-input>
				</el-form-item>			
			   <el-button type="primary" round @click="editpwd()">确认修改</el-button>&nbsp;&nbsp;&nbsp;
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
					pwd:''
				}
            }
        },
        methods: {
					//修改密码
				editpwd() {
					this.$confirm('此操作将修改密码, 是否继续?', '提示', {
						confirmButtonText: '确定',
						cancelButtonText: '取消',
						type: 'warning'
					}).then(() => {
						if(this.form.newpwd == this.form.pwd){
							//发送请求
							this.$axios.post('admin/password',
															this.$qs.stringify({old_password:this.form.oldpwd,password:this.form.newpwd}))
							.then((res)=>{
								console.log(res)
								if(res.data.code === 4){
									this.$message.warning(res.data.message);
								}else if(res.data.code === 0){
								this.$message.success(res.data.message);
								this.$router.push('/login')
								}
							})
							.catch((err)=>{
								console.log(err)
							})
						}else{
							this.$message.warning('请重新确认新密码！')
						}
					}).catch(() => {
						this.$message({
						type: 'info',
						message: '已取消修改'
						});          
					});
					}
        }   
	}
</script>
<style scoped>
</style>