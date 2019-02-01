<template>
        <div class="container">
			<el-table :data="tableData" border style="width: 100%">
				<el-table-column prop="num" label="序号" width="200" align="center"></el-table-column>
				<el-table-column prop="lable" label="标签" style="width: 20%" align="center"></el-table-column>
				<el-table-column prop="a_num" label="篇数" width="250" align="center"></el-table-column>
				<el-table-column label="操作"  width="200" align="center">
					<template slot-scope="scope">
						<router-link to='/lablecheck'>
							<el-button type="text" icon="el-icon-search">查看</el-button>	
						</router-link>
					</template>
				</el-table-column>
			</el-table>	
           <!-- <el-table :data="data" border class="table" ref="multipleTable" @selection-change="handleSelectionChange">
                <el-table-column prop="date" label="序号" sortable width="150" align="center">
                </el-table-column>
                <el-table-column prop="name" label="标签" width="120" align="center">
                </el-table-column>
                <el-table-column prop="num" label="篇数" :formatter="formatter" align="center">
                </el-table-column>
                <el-table-column label="操作" width="180" align="center">
                    <template slot-scope="scope">
						<router-link to="/lablecheck">
							<el-button type="text" icon="el-icon-search">查看</el-button>
						</router-link>
                    </template>
                </el-table-column>
            </el-table>
            -->
			<div class="pagination">
                <el-pagination background @current-change="handleCurrentChange" layout="prev, pager, next" :total="1000">
                </el-pagination>
            </div>
        </div>

</template>

<script>
    export default {
        name: 'manageLable',
        data() {
            return {
				tableData: [{
						num:'1',
						lable: '标签1',
						a_num:'100'
						},{
						num:'1',
						lable: '标签1',
						a_num:'100'
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
