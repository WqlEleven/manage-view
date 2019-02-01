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
				<el-table-column prop="p_datatime" label="时间" width="200" align="center"></el-table-column>
				<el-table-column prop="p_title" label="产品推广标题" width="400" align="center"></el-table-column>
				<el-table-column prop="readperson" label="阅读人数/分享数量" width="250" align="center"></el-table-column>
				<el-table-column label="操作" style="width: 5%" align="center">
					<template slot-scope="scope">
						<router-link to='/preview'>
							<el-button type="text" icon="el-icon-search">查看</el-button>	
						</router-link>
						<el-button type="text" icon="el-icon-delete" class="red">删除</el-button>
					</template>
				</el-table-column>
			</el-table>	
    </div>
</template>

<script>
    export default {
        name: 'published',
        data() {
            return {
				radio: '1',
				tableData: [{
						p_datatime:'2019/01/28   11:08:00',
						p_title: '产品推广标题',
						readperson:'100/650'
						},{
						p_datatime:'2019/01/28   11:08:00',
						p_title: '产品推广标题',
						readperson:'100/650'
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
 .handle-box{
 	margin-bottom: 30px;
 }
 .red{
 color: #ff0000;
 }
 .el-radio{
 	margin-right: 20px;
 }
 .el-button{
 	margin-right: 15px;
 }
</style>
