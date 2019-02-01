<template>
    <div class="container">
		<div class="form-box">
			<el-form ref="form" :model="form" label-width="100px">
				 <el-form-item label="姓名:">
					<span>张三</span>
				 </el-form-item>
				 <el-form-item label="性别:">
					<span>男</span>
				 </el-form-item>
				 <el-form-item label="电话:">
					<span>12312341234</span>
				 </el-form-item>
				 <el-form-item label="角色:">
					<span>用户</span>
				 </el-form-item>
			 
			 
			  <el-form-item label="输入新密码">
				<el-input v-model="form.oldpassword" placeholder="输入新密码"></el-input>
			  </el-form-item>     
			  <el-form-item label="再次输入">
				<el-input v-model="form.newpassword" placeholder="再次输入密码"></el-input>
			  </el-form-item> 
			   <el-button type="primary" round @click="open">确认重置</el-button>&nbsp;&nbsp;&nbsp;
			   <router-link to='/manageUser'>
					<el-button type="info" round>&nbsp;&nbsp;&nbsp;返&nbsp;&nbsp;回&nbsp;&nbsp;&nbsp;</el-button>
				</router-link>
			</el-form>
		</div>
    </div>
</template>

<script>
    export default {
        name: 'reset',
        data: function(){
            return {
				form: {
					name: '',
					sex: '',
					tel: '',
					actor: ''
				}
               }
        },
        methods: {
             open() {
				this.$confirm('此操作将重置用户密码, 是否继续?', '提示', {
				  confirmButtonText: '确定',
				  cancelButtonText: '取消',
				  type: 'warning'
				}).then(() => {
				  this.$message({
					type: 'success',
					message: '重置成功!'
				  });
				}).catch(() => {
				  this.$message({
					type: 'info',
					message: '已取消重置'
				  });          
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