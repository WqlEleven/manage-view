<template>
    <div class="table">
        <div class="container">
			<!-- 表单 -->
         <el-form :inline="true" :model="formInline" class="demo-form-inline">
							<el-form-item label="姓名:">
							<el-input v-model="formInline.user" ></el-input>
							</el-form-item>
							<el-form-item label="活动区域:">
								<el-select v-model="formInline.region" placeholder="请选择角色">
									<el-option label="系统管理员" value="admin"></el-option>
									<el-option label="业务员" value="salesman"></el-option>
								</el-select>
							</el-form-item>
							<el-form-item label="登录时间">
								<el-col :span="11">
									<el-date-picker type="date"  v-model="formInline.date1" style="width: 100%;"></el-date-picker>
								</el-col>
								<el-col class="line" :span="2">&nbsp;-</el-col>
								<el-col :span="11">
									<el-time-picker type="fixed-time"  v-model="formInline.date2" style="width: 100%;"></el-time-picker>
								</el-col>
							</el-form-item>
							
							
							<el-form-item>
								<router-link to='/detail'>
									<el-button type="primary">搜索</el-button>
								</router-link>
							</el-form-item>
					</el-form> 
				
       <!-- 按钮 -->
				 <el-button type="primary">新增用户</el-button>
				 <el-button type="primary">&nbsp;&nbsp;下&nbsp;&nbsp;载&nbsp;&nbsp;</el-button>
			 <div class="gehang"></div>
			<!-- 表格 -->
			 <el-table :data="tableData" border style="width: 100%">
				<el-table-column prop="num" label="序号" width="50" align="center"></el-table-column>
				<el-table-column prop="logintime" label="登陆时间" width="150" align="center"></el-table-column>
				<el-table-column prop="actor" label="角色" width="150" align="center"></el-table-column>
				<el-table-column prop="name" label="姓名" width="180" align="center"></el-table-column>
				
				<el-table-column label="操作" width="300" align="center">
					<template slot-scope="scope">
						<router-link to='/revise'>
							<el-button type="text" icon="el-icon-search">查看</el-button>	
						</router-link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
						
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
        name: 'manageUser',
        data() {
            return {
               formInline: {
								user: '',
								region: ''
							},
				tableData: [{
					num:'1',
					logintime: '2019-01-29',
					actor:'系统管理员',
					name:'张三'					
					},{
					num:'2',
					logintime: '2019-01-29',
					actor:'系统管理员',
					name:'张三'					
					},{
					num:'3',
					logintime: '2019-01-29',
					actor:'系统管理员',
					name:'张三'					
					},{
					num:'4',
					logintime: '2019-01-29',
					actor:'系统管理员',
					name:'张三'					
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
