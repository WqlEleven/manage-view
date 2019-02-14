<template>    
        <div class="container">
          <el-table :data="tableData" border style="width: 100%">
						<el-table-column prop="id" label="序号" width="100" align="center"></el-table-column>
          	<el-table-column prop="category_name" label="分类" width="200" align="center"></el-table-column>
          	<el-table-column prop="title" label="文章标题" style="width: 20%" align="center"></el-table-column>
          	<el-table-column prop="add_time" label="创建时间" width="250" align="center"></el-table-column>
          	<el-table-column label="操作"  width="200" align="center">
          		<template slot-scope="scope">
          			<router-link to='/recyclebinCheck'>
          				<el-button type="text" icon="el-icon-search">查看</el-button>	
          			</router-link>
								<el-button type="text" icon="el-icon-edit" @click='goedit(scope.row)'>编辑</el-button>
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
</template>

<script>
    export default {
        name: 'recyclebin',
        data() {
            return {
							page: 1,
							total: 0,
							per_page: 0,
               tableData: []
            }
        },
				created() {
					this.getArticle();
				},
        methods: {
					//去编辑页
					goedit(art) {
						this.$router.push({
							path:'/editarticleback',
							query:{
								id : art.id
						}});
					},
           // 分页
           handleCurrentChange(val) {
           	this.page = val;
           	console.log(`当前页: ${val}`);
           	console.log(this.page)
           	this.getArticle();
           },
					 //获取文章列表
					 getArticle() {
					 	this.$axios.post(
					 		'admin/article_recycle',
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
					 }
				}
    }

</script>

<style scoped>
    .el-button{
    	margin-right: 15px;
    }
</style>
