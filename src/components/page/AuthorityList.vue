<template>
    <div class="table">
        <div class="container">

            <router-link to='/AuthorityAdd'>
                <el-button type="primary">新增权限</el-button>
            </router-link>
            <div class="gehang"></div>
            <!-- 表格 -->
            <el-table :data="tableData" border style="width: 100%">
                <el-table-column prop="id" label="ID" width="100" align="center"></el-table-column>
                <el-table-column prop="name" label="名称" width="300" align="center"></el-table-column>
                <el-table-column prop="code" label="代码" width="300" align="center"></el-table-column>
                <el-table-column label="操作" style="width: 30%" align="center">
                    <template slot-scope="scope">
                        <router-link :to="{path:'/AuthorityEdit',query:{id:scope.row.id}}">
                            <el-button type="text" icon="el-icon-edit">修改</el-button>
                        </router-link>
                        <el-button type="text" icon="el-icon-delete" class="red" @click="handleDelete(scope.row)">删除
                        </el-button>
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
    </div>
</template>

<script>
    export default {
        name: 'managePower',
        data() {
            return {
                name: '',
                code: '',
                page: 1,
                total: 0,
                per_page: 0,
                tableData: []
            }
        },
        mounted() {
            this.getList();
        },
        activated() {
            this.getList();
        },
        methods: {
            //获取列表
            getList() {
                this.$axios.post(
                    '/admin/authority_list',
                    this.$qs.stringify({page: this.page})
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
                this.getList();
            },

            //删除
            handleDelete(text) {
                // console.log(text.id)
                this.$confirm('是否删除?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    this.$axios.post(
                        '/admin/authority_delete',
                        this.$qs.stringify({id: text.id})
                    ).then((res) => {
                        // console.log(res);
                        if (res.data.code == 0) {
                            this.$message.success(res.data.message);
                            this.getList();
                        } else if (res.data.code == -1) {
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
    .red {
        color: #ff0000;
    }

    .gehang {
        height: 20px;
    }

    .el-button {
        margin-right: 15px;
    }
</style>
