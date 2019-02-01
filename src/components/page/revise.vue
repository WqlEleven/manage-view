<template>
    <div class="container">
		<div class="form-box">
			<el-form ref="form" :model="form" label-width="130px">
				<el-form-item label="姓名:">
					<el-input v-model="form.name"></el-input>
				</el-form-item>
				<el-form-item label="性别:">
					<el-input v-model="form.sex"></el-input>
				</el-form-item>
				<el-form-item label="电话:">
					<el-input v-model="form.tel"></el-input>
				</el-form-item>
				<el-form-item label="角色:">
					<el-select v-model="form.actor" placeholder="请选择">
					<el-option label="用户" value="user"></el-option>
					<el-option label="管理员" value="admin"></el-option>
					</el-select>
				</el-form-item>
				<el-form-item label="修改密码:">
					<el-input v-model="form.pwd"></el-input>
				</el-form-item>
				<el-form-item label="状态:">
					<el-radio-group v-model="form.state">
					  <el-radio label="禁用"></el-radio>
					  <el-radio label="启用"></el-radio>
					</el-radio-group>
				 </el-form-item>
				<el-form-item label="录入人员:">
					<span>王五</span>
				</el-form-item>
				<el-form-item label="注册时间:">
					<span>2019-01-28</span>
				</el-form-item>
				<el-form-item label="注册IP:">
					<span>192.16.0.269</span>
				</el-form-item>
				<el-form-item label="最后登录IP:">
					<span>192.16.0.269</span>
				</el-form-item>
				<el-form-item label="注册IP:">
					<span>2019-01-28    13:26:32</span>
				</el-form-item>
				
				<el-form-item>
					<el-button type="primary" round @click="open2">确认修改</el-button>&nbsp;&nbsp;&nbsp;&nbsp;
					<router-link to='/manageUser'>
						<el-button type="primary" round>&nbsp;返&nbsp;&nbsp;&nbsp;回&nbsp;</el-button>
					</router-link>
				</el-form-item>
			</el-form>
		</div>
	</div>
</template>

<script>
    export default {
        name: 'revise',
        data: function(){
            return {
            	form: {
					name: '',
					sex: '',
					tel: '',
					actor: '',
					pwd:'',
					state:''
            	}
            }
        },
        methods: {
			  open2() {
				this.$confirm('此操作将修改用户信息, 是否继续?', '提示', {
				  confirmButtonText: '确定',
				  cancelButtonText: '取消',
				  type: 'warning'
				}).then(() => {
				  this.$message({
					type: 'success',
					message: '修改成功!'
				  });
				}).catch(() => {
				  this.$message({
					type: 'info',
					message: '已取消修改'
				  });          
				});
        }
    },
	}
</script>
<style scoped>
	span{
		color: #666;
	}
</style>