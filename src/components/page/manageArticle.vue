<template>    
        <div class="container">
            <div class="handle-box">
							状态：
							<router-link to='/published'>
								<el-radio v-model="radio" label="1">已发布</el-radio>
							</router-link>
							<router-link to='/draft'>
								<el-radio v-model="radio" label="2">草稿箱</el-radio>
							</router-link>
            </div>
						
						<el-table :data="tableData" border style="width: 100%">
							<el-table-column prop="datatime" label="时间" width="200" align="center"></el-table-column>
							<el-table-column prop="title" label="产品推广标题" style="width: 20%" align="center"></el-table-column>
							<el-table-column prop="person" label="转发人数/查看人数" width="250" align="center"></el-table-column>
							<el-table-column label="操作"  width="200" align="center">
								<template slot-scope="scope">
									<router-link to='/preview'>
										<el-button type="text" icon="el-icon-search">查看</el-button>	
									</router-link>
									<el-button type="text" icon="el-icon-delete" class="red">删除</el-button>
									<router-link to='/editarticle'>
										<el-button type="text" icon="el-icon-edit">编辑</el-button>	
									</router-link>
								</template>
							</el-table-column>
						</el-table>	
           <!-- 分页 -->
            <div class="pagination">
                <el-pagination background @current-change="handleCurrentChange" layout="prev, pager, next" :total="1000">
                </el-pagination>
            </div>
        </div>
</template>

<script>
    export default {
        name: 'manageArticle',
        data() {
            return {
								radio: '',
								tableData: [{
										datatime:'2019/01/28   11:08:00',
										title: '产品推广标题',
										person:'100/650'
										},{
										datatime:'2019/01/28   11:08:00',
										title: '产品推广标题',
										person:'100/650'
										}]
            }
        },
       methods: {
            // 分页导航
            handleCurrentChange(val) {
                this.cur_page = val;
                this.getData();
            } 
				}
    }

</script>

<style scoped>
	.el-radio{
		margin-right: 20px;
	}
	.handle-box{
		margin-bottom: 30px;
	}
  .red{
  color: #ff0000;
  }
	.el-button{
		margin-right: 15px;
	}
</style>
