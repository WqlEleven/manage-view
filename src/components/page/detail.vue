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
				  <el-form-item label="录入人员:">
					<el-form-item label="张三"></el-form-item>
				  </el-form-item>
				  <el-form-item label="注册时间:">
					<el-form-item label="2019-01-28"></el-form-item>
				  </el-form-item>
				  <el-form-item label="注册IP:">
					<el-form-item label="192.16.0.269"></el-form-item>
				  </el-form-item>
				  <el-form-item label="最后登录IP:">
				  <el-form-item label="192.16.0.269"></el-form-item>
				  </el-form-item>
				  <el-form-item label="注册IP:">
				  <el-form-item label="2019-01-28    13:26:32" align="center"></el-form-item>
				  </el-form-item>
				  
				  <el-form-item>
					<router-link to='/manageUser'>
						<el-button type="primary" round>返回</el-button>
					</router-link>
				  </el-form-item>
			</el-form>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'detail',
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
        }
    }
</script>