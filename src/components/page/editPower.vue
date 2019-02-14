<template>
    <div class="container">
		<div class="form-box">
			<el-form ref="form" :model="form" label-width="100px">	
				 <el-form-item  label="名称">
					<el-input v-model="form.name"></el-input>
				 </el-form-item>          
				 <el-form-item label="代码:">
				 	<el-input v-model="form.code"></el-input>
				 </el-form-item>
				 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
				 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
			   <el-button type="primary" round @click="editRole()">&nbsp;&nbsp;&nbsp;修&nbsp;&nbsp;改&nbsp;&nbsp;&nbsp;</el-button>&nbsp;&nbsp;&nbsp;
			   <router-link to='/managePower'>
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
								code: ''
							}
            }
        },
		created(){			
			this.getArtMsg();
		},
        methods: {
			//修改
			editRole(){				
				this.$axios.post(
					'admin/authority_edit',
					this.$qs.stringify(this.form),
				).then((res) => {
					//console.log(res);
					if (res.data.code == -1) {
						this.$message.warning('请登录！');
						this.$router.push('/login');
					} else if (res.data.code == 0) {
						console.log(res);
						this.$message.success(res.data.message);
						this.$router.push('/managePower')
					} else {
						//console.log(res.data.message);
						this.$message.warning(res.data.message);
					}
				}).catch((res) => {
					console.log(res);
				});
			},
			//获取权限信息
			getArtMsg(){
						this.form.id = this.$route.query.id;					
						this.$axios.post('admin/authority_info',this.$qs.stringify({id:this.form.id}))
						.then((res)=>{				
							if(res.data.code == -1){
								this.$message.warning('请登录！');
								this.$router.push('/login');
							}else if(res.data.code == 0){
								//写逻辑
								console.log(res)
								this.form =  res.data.data.info;
							}
						})
						.catch((err)=>{
							console.log(err)
						})
					},
        }
    }
</script>
<style scoped>
	
	span{
		color: #666;
	}
</style>