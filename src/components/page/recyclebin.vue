<template>    
        <div class="container">
          <el-table :data="tableData" border style="width: 100%">
						<el-table-column prop="a_num" label="序号" width="100" align="center"></el-table-column>
          	<el-table-column prop="classify" label="分类" width="200" align="center"></el-table-column>
          	<el-table-column prop="a_title" label="文章标题" style="width: 20%" align="center"></el-table-column>
          	<el-table-column prop="creat_time" label="创建时间" width="250" align="center"></el-table-column>
          	<el-table-column label="操作"  width="200" align="center">
          		<template slot-scope="scope">
          			<router-link to='/recyclebinCheck'>
          				<el-button type="text" icon="el-icon-search">查看</el-button>	
          			</router-link>
          			<router-link to="/editarticle">
          			<el-button type="text" icon="el-icon-edit">编辑</el-button>
          			</router-link>
          		</template>
          	</el-table-column>
          </el-table>	 
					
            <div class="pagination">
                <el-pagination background @current-change="handleCurrentChange" layout="prev, pager, next" :total="1000">
                </el-pagination>
            </div>
        </div>
       

</template>

<script>
    export default {
        name: 'recyclebin',
        data() {
            return {
               tableData: [{
               		a_num:'1',
               		classify: '转载',
               		a_title:'文章1',
									creat_time:'2019-01-27'
               		},{
               		a_num:'2',
               		classify: '原创',
               		a_title:'文章1',
									creat_time:'2019-01-27'
               		},{
               		a_num:'3',
               		classify: '转载',
               		a_title:'文章1',
									creat_time:'2019-01-27'
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
    .el-button{
    	margin-right: 15px;
    }
</style>
