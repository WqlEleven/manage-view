<template>
    <div class="table">
        <div class="container">  
          <router-link to='/addRole'>
					 <el-button type="primary">新增角色</el-button>
				 </router-link>
				 <div class="gehang"></div>
			<!-- 表格 -->
			 <el-table :data="tableData" border style="width: 100%">
				<el-table-column prop="num" label="序号" width="50" align="center"></el-table-column>
				<el-table-column prop="actoename" label="角色名称" width="150" align="center"></el-table-column>
				<el-table-column prop="actormeg" label="角色描述" width="400" align="center"></el-table-column>
				<el-table-column prop="creattime" label="创建时间" width="180" align="center"></el-table-column>
				<el-table-column label="操作" width="300" align="center">
					<template slot-scope="scope">
						<router-link to='/amend'>
							<el-button type="text" icon="el-icon-edit">修改</el-button>	
						</router-link>&nbsp;&nbsp;
						<el-button type="text" icon="el-icon-delete" class="red">删除</el-button>
					</template>
				</el-table-column>
			 </el-table>
			<!-- 分页 -->
			<div class="pagination">
                <el-pagination background @current-change="handleCurrentChange" layout="prev, pager, next" :total="1000">
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
               formInline: {
								user: '',
								region: ''
							},
				tableData: [{
					num:'1',
					actoename: '系统管理员',
					actormeg:'系统管理员拥有所有权限',
					creattime:'2019-01-29'
					},{
					num:'2',
					actoename: '普通用户',
					actormeg:'普通用户只可以编辑和发布文章',
					creattime:'2019-01-29'
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
   .red{
   	color: #ff0000;
   }
	 .gehang{
		 height:20px;
	 }
</style>
