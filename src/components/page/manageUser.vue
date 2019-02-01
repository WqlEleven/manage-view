<template>
    <div class="table">
        <div class="container">
			<!-- 表单 -->
             <el-form :inline="true" :model="formInline" class="demo-form-inline">
							<el-form-item label="姓名:">
							<el-input v-model="formInline.user" ></el-input>
							</el-form-item>
							<el-form-item label="手机号:">
							<el-input v-model="formInline.user" ></el-input>
							</el-form-item>
							<el-form-item label="角色:">
							<el-input v-model="formInline.user" ></el-input>
							</el-form-item>
							<el-form-item>
							<router-link to='/detail'>
								<el-button type="primary">搜索</el-button>
							</router-link>
							</el-form-item>
					</el-form> 
				
        <router-link to='/newUser'>
				 <el-button type="primary">新增用户</el-button>
			 </router-link>
			 <div class="gehang"></div>
			<!-- 表格 -->
			 <el-table :data="tableData" border style="width: 100%">
				<el-table-column prop="num" label="序号" width="50" align="center"></el-table-column>
				<el-table-column prop="name" label="姓名" width="100" align="center"></el-table-column>
				<el-table-column prop="sex" label="性别" width="50" align="center"></el-table-column>
				<el-table-column prop="tel" label="电话" width="180" align="center"></el-table-column>
				<el-table-column prop="admin" label="录入人员" width="180" align="center"></el-table-column>
				<el-table-column prop="lastIp" label="最后登录IP" width="150" align="center"></el-table-column>
				<el-table-column prop="lastTime" label="最后登录时间" width="200" align="center"></el-table-column>
				<el-table-column label="操作" style="width: 10%" align="center">
					<template slot-scope="scope">
						<router-link to='/revise'>
							<el-button type="text" icon="el-icon-edit">修改</el-button>	
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
    </div>
</template>

<script>
    export default {
        name: 'manageUser',
        data() {
            return {
               formInline: {
								user: '',
								region: ''
							},
				tableData: [{
					num:'1',
					name: '王小虎',
					sex:'男',
					tel:'18515118888',
					admin:'张三',
					lastIp:'198.108.1.1',
					lastTime:'2019-01-03     09:36:25'
					},{
					num:'2',
					name: '王小虎',
					sex:'男',
					tel:'18515118888',
					admin:'张三',
					lastIp:'198.108.1.1',
					lastTime:'2019-01-03     09:36:25'
					},{
					num:'3',
					name: '王小虎',
					sex:'男',
					tel:'18515118888',
					admin:'张三',
					lastIp:'198.108.1.1',
					lastTime:'2019-01-03     09:36:25'
					},{
					num:'4',
					name: '王小虎',
					sex:'男',
					tel:'18515118888',
					admin:'张三',
					lastIp:'198.108.1.1',
					lastTime:'2019-01-03     09:36:25'
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
