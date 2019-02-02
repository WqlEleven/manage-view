<template>
    <div class="container">
		<div class="form-box">
			<el-form ref="form" :model="form" label-width="100px">		 
			  <el-form-item label="姓名:">
					<el-input v-model="form.name"></el-input>
			  </el-form-item>     
			  <el-form-item label="性别:">
					<el-input v-model="form.sex"></el-input>
			  </el-form-item> 
				<el-form-item label="电话:">
					<el-input v-model="form.tel"></el-input>
				</el-form-item> 
				<!-- <el-form-item label="角色:">
					<el-input v-model="form.actor"></el-input>
				</el-form-item> --> 
				<el-form-item label="角色">
					<el-select v-model="form.actor" placeholder="请选择">
						<el-option label="系统管理员" value="admin"></el-option>
						<el-option label="普通用户" value="user"></el-option>
					</el-select>
				</el-form-item>
				<el-form-item label="录入人员:">
					<el-input v-model="form.admin" ></el-input>
				</el-form-item>
				 <el-form-item label="注册IP:">
				 	<el-input v-model="form.ip"></el-input>
				 </el-form-item> 
			   <el-button type="primary" round @click="finish">&nbsp;&nbsp;&nbsp;完&nbsp;&nbsp;成&nbsp;&nbsp;&nbsp;</el-button>&nbsp;&nbsp;&nbsp;
			   <router-link to='/manageUser'>
					<el-button type="info" round>&nbsp;&nbsp;&nbsp;返&nbsp;&nbsp;回&nbsp;&nbsp;&nbsp;</el-button>
				</router-link>
			</el-form>
		</div>
    </div>
</template>

<script>
    export default {
        name: 'newuser',
        data: function(){
            return {
							form: {
								name: '',
								sex: '',
								tel: '',
								actor: '',
								admin:'',
								ip:''
							}
            }
        },
        methods: {
					finish() {
						this.$alert('新增用户完成？', '提示', {
							confirmButtonText: '确定',
							callback: action => {
								this.$message({
									type: 'info',
									message: `新增用户已完成`
								});
							}
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