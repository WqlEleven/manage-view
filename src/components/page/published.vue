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
            <el-table-column prop="category_name" label="分类" width="100" align="center"></el-table-column>
            <el-table-column prop="title" label="产品推广标题" style="width: 30%" align="center"></el-table-column>
            <el-table-column prop="click" label="阅读人数/分享数量" width="150" align="center"></el-table-column>
            <el-table-column prop="add_time" label="添加时间" width="200" align="center"></el-table-column>
            <el-table-column label="操作" width="200" align="center">
                <template slot-scope="scope">
                    <router-link to='/preview'>
                        <el-button type="text" icon="el-icon-search">查看</el-button>
                    </router-link>
                    <el-button type="text" icon="el-icon-delete" class="red" @click='handleDelete(scope.row)'>删除
                    </el-button>
                </template>
            </el-table-column>
        </el-table>
        <!-- 分页 -->
        <div class="pagination">
            <el-pagination @current-change="handleCurrentChange" :current-page="page" :page-size="per_page"
                           layout="prev, pager, next, jumper"
                           :total="total">
            </el-pagination>

        </div>
    </div>
</template>

<script>
    export default {
        name: 'published',
        data() {
            return {
                radio: '1',
                is_publish: 1,
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
            // 获取文章列表
            getArticle() {
                this.$axios.post(
                    '/admin/article_list',
                    this.$qs.stringify({
                        page: this.page,
                        is_publish: this.is_publish
                    })
                ).then((res) => {
                    // console.log(res);
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
                    console.log(err);
                });
            },

            // 分页
            handleCurrentChange(val) {
                this.page = val;
                console.log(`当前页: ${val}`);
                console.log(this.page)
                this.getArticle();
            },

            //删除
            handleDelete(article) {
                // console.log(test)
                this.$confirm('此操作将永久删除该文章, 是否继续?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    this.$axios.post(
                        '/admin/article_delete',
                        this.$qs.stringify({id: article.id})
                    ).then((res) => {
                        // console.log(res);
                        if (res.data.code === 0) {
                            this.$message.success(res.data.message);
                            this.getArticle()
                        } else if (res.data.code === -1) {
                            this.$message.warning('请登录！');
                            this.$router.push('/login');
                        }
                    }).catch((err) => {
                        console.log(err);
                    });
                }).catch(() => {
                    this.$message.info('已取消删除');
                });
            },
        }
    }
</script>

<style scoped>
    .handle-box {
        margin-bottom: 30px;
    }

    .red {
        color: #ff0000;
    }

    .el-radio {
        margin-right: 20px;
    }

    .el-button {
        margin-right: 15px;
    }
</style>
