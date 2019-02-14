<template>
    <div class="table">
        <div class="container">  
          <router-link to='/addRole'>
					 <el-button type="primary">新增角色</el-button>
				 </router-link>
				 <div class="gehang"></div>
			<!-- 表格 -->
			 <el-table :data="tableData" border style="width: 100%">
				<el-table-column prop="id" label="序号" width="50" align="center"></el-table-column>
				<el-table-column prop="name" label="角色名称" width="150" align="center" :formatter="formatRole"></el-table-column>
				<el-table-column prop="describe" label="角色描述" style="width: 20%" align="center"></el-table-column>
				<el-table-column prop="add_time" label="创建时间" width="180" align="center"></el-table-column>
				<el-table-column label="操作" width="200" align="center">
					<template slot-scope="scope">
						<router-link to='/amend'>
							<el-button type="text" icon="el-icon-edit">修改</el-button>	
						</router-link>
						<el-button type="text" icon="el-icon-delete" class="red">删除</el-button>
					</template>
				</el-table-column>
			 </el-table>
			<!-- 分页 -->
			<div class="pagination">
				<el-pagination
						@current-change="handleCurrentChange"
						:current-page="page"
						:page-size="per_page"
						layout="prev, pager, next, jumper"
						:total="total">
				</el-pagination>
			</div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'manageRole',
        data() {
            return {
							page: 1,
							total: 0,
							per_page: 0,
							tableData: []
            }
        },
				created() {
					this.getRole();
				},
        methods: {
					formatRole: function(row, column) {
						return row.name == '1' ? "普通用户" : row.name == '2' ? "系统管理员" :"aa";
					},
					//获取角色列表
					getRole() {
						this.$axios.post(
							'admin/role_list',
							this.$qs.stringify({page:this.page})
						).then((res) => {
							if (res.data.code == -1) {
								this.$message.warning('请登录！');
								this.$router.push('/login');
							} else if (res.data.code == 0) {
								console.log(res)
								this.tableData = res.data.data.list;
								this.total = res.data.data.count;
								this.per_page = res.data.data.per_page;
							} else {
								this.$message.warning(res.data.message);
							}
						}).catch((err) => {
							console.log(err)
						})
					},
					//分页		 
            handleCurrentChange(val) {
            	this.page = val;
            	this.getRole();
            }
        }
    }

</script>

<style scoped>
   .red{
   	color: #ff0000;
   }
	 .gehang{
		 height:20px;
	 }
	 .el-button{
	 	margin-right: 15px;
	 }
</style>
