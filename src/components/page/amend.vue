<template>
    <div class="container">
		<div class="form-box">
			<el-form ref="form" :model="form" label-width="100px">		 
			  <el-form-item label="角色名称:">
					<el-input v-model="form.name"></el-input>
			  </el-form-item>     
				 <el-form-item label="角色描述:">
					 <el-input type="textarea" v-model="form.describe"></el-input>
				 </el-form-item>
				 <el-form-item label="角色权限:">
				 	<el-checkbox-group v-model="form.authority">
				 		<el-checkbox v-for="item in authority_list" 
				 		:label="item.id" :key="item.id" name="type">{{item.name}}</el-checkbox>
				 	</el-checkbox-group>
				 </el-form-item>
				 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
				 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
			   <el-button type="primary" round @click="edit()">&nbsp;&nbsp;&nbsp;修&nbsp;&nbsp;改&nbsp;&nbsp;&nbsp;</el-button>&nbsp;&nbsp;&nbsp;
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
									id:'',
									name: '',
									describe: '',
									authority: []
								},
								authority_list: []
            }
        },
				created(){		
					this.getauthority();
					this.getArtMsg();
				},
        methods: {
					//修改
					edit() {
						this.$confirm('此操作将修改角色信息, 是否继续?', '提示', {
							confirmButtonText: '确定',
							cancelButtonText: '取消',
							type: 'warning'
						}).then(() => {
							
// 							this.$message({
// 							type: 'success',
// 							message: '修改成功!'
							// });
						}).catch(() => {
							this.$message({
							type: 'info',
							message: '已取消修改'
							});          
						});
					},
					//动态获取权限列表
					getauthority() {
						this.$axios.post(
							'admin/authority_all'
						).then((res) => {
							if (res.data.code == -1) {
								this.$message.warning('请登录！');
								this.$router.push('/login');
							} else if (res.data.code == 0) {
								// console.log(res)
								this.authority_list = res.data.data.list;
							} else {
								this.$message.warning(res.data.message);
							}
						}).catch((err) => {
							console.log(err)
						})
					},
					//获取角色信息
					getArtMsg(){
								this.form.id = this.$route.query.id;					
								this.$axios.post('admin/role_info',this.$qs.stringify({id:this.form.id}))
								.then((res)=>{				
									if(res.data.code == -1){
										this.$message.warning('请登录！');
										this.$router.push('/login');
									}else if(res.data.code == 0){
										//写逻辑
										console.log(res)
										this.form =  res.data.data.info;
										const arr = res.data.data.info.authority.split(',')
										console.log(arr)
										var str=document.getElementsByName("type");
										// console.log(str)
										var num = [];
										for(var i = 0; i<arr.length; i++){
											for(var j = 0; j<str.length; j++){
												if(arr[i] == str[j].value){
													// console.log(str[j].value)
													num[num.length] = str[j].value
													// console.log(num)
												}
											}
										}
									}
								})
								.catch((err)=>{
									console.log(err)
								})
							}
        }
    }
</script>
<style scoped>
	
	span{
		color: #666;
	}
</style>