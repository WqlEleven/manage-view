<template>
    <div class="container">
        <div class="handle-box">
            状态：
            <el-radio v-model="radio" label="1">已发布</el-radio>
        </div>
        <el-table :data="tableData" border style="width: 100%">
            <el-table-column prop="id" label="ID" width="80" align="center"></el-table-column>
            <el-table-column prop="category_name" label="分类" width="100" align="center"></el-table-column>
            <el-table-column prop="title" label="产品推广标题" style="width: 30%" align="center"></el-table-column>
            <el-table-column prop="click" label="转发人数/查看人数" width="150" align="center" :formatter="formatClick"></el-table-column>
            <el-table-column prop="add_time" label="添加时间" width="200" align="center"></el-table-column>
            <el-table-column label="操作" width="200" align="center">
                <template slot-scope="scope">
                    <router-link to='/preview'>
                        <el-button type="text" icon="el-icon-search">查看</el-button>
                    </router-link>
                    <router-link :to="{path:'/ArticleEdit',query:{id:scope.row.id}}">
                        <el-button type="text" icon="el-icon-edit">编辑</el-button>
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
        name: 'manageArticle',
        data() {
            return {
                radio: '1',
                page: 1,
                total: 0,
                per_page: 0,
                tableData: [],
                tag: ''
            }
        },
        created() {
            //this.tag = this.$route.query.tag;
        },
        mounted() {
            this.tag = this.$route.query.tag;
            this.getLableCheck();
        },
        activated() {
            this.tag = this.$route.query.tag;
            this.getLableCheck();
        },
        methods: {
            //获取标签列表
            getLableCheck() {
                this.$axios.post(
                    '/admin/tag_article',
                    this.$qs.stringify({tag: this.tag, page: this.page})
                ).then((res) => {
                    console.log(res);
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
                this.getLableCheck();
            },

            formatClick:function (row, column) {
                return row.share + '/' + row.click;
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
