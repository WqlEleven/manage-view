<template>
    <div class="container">
        <el-table :data="tableData" border style="width: 100%">
            <el-table-column prop="id" label="ID" width="200" align="center"></el-table-column>
            <el-table-column prop="name" label="标签" style="width: 20%" align="center"></el-table-column>
            <el-table-column prop="num" label="篇数" width="250" align="center"></el-table-column>
            <el-table-column label="操作" width="200" align="center">
                <template slot-scope="scope">
                    <router-link :to="{path:'/TagArticle',query:{tag:scope.row.name}}">
                        <el-button type="text" icon="el-icon-search">查看</el-button>
                    </router-link>
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

</template>

<script>
    export default {
        name: 'manageLable',
        data() {
            return {
                page: 1,
                total: 0,
                per_page: 0,
                tableData: []
            }
        },
        mounted(){
            this.getLable();
        },
        activated() {
            this.getLable();
        },
        methods: {
            //获取标签列表
            getLable() {
                this.$axios.post(
                    '/admin/tag_list',
                    this.$qs.stringify({page: this.page})
                ).then((res) => {
                    // console.log(res)
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
                this.getLable();
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
