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
			<el-table-column prop="id" label="ID" width="80" align="center"></el-table-column>
			<el-table-column prop="title" label="产品推广标题" style="width: 30%" align="center"></el-table-column>
            <el-table-column prop="click" label="转发人数/查看人数" width="150" align="center"></el-table-column>
            <el-table-column prop="add_time" label="添加时间" width="200" align="center"></el-table-column>         
            <el-table-column label="操作" width="200" align="center">
                <template slot-scope="scope">
                    <router-link to='/preview'>
                        <el-button type="text" icon="el-icon-search">查看</el-button>
                    </router-link>

                    <!-- <router-link to='/editarticle'>
                         <el-button type="text" icon="el-icon-edit">编辑</el-button>
                     </router-link> -->
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
        <!-- <div class="pagination">
             <el-pagination background @current-change="handleCurrentChange"
             layout="prev, pager, next" :total="1000">
             </el-pagination>
         </div> -->
    </div>
</template>

<script>
    export default {
        name: 'manage',

        data() {
            return {
                radio: '',
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
                    'admin/article_list',
                    this.$qs.stringify({page:this.page})
                ).then((res) => {
                    if (res.data.code == -1) {
                        this.$message.warning('请登录！');
                        this.$router.push('/login');
                    } else if (res.data.code == 0) {
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
    .el-radio {
        margin-right: 20px;
    }

    .handle-box {
        margin-bottom: 30px;
    }

    .red {
        color: #ff0000;
    }

    .el-button {
        margin-right: 15px;
    }
</style>
