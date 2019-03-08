<template>
    <div class="container">
        <!-- 表单 -->
        <el-form :inline="true" :model="form" class="demo-form-inline">
            <el-form-item label="关键字:">
                <el-input v-model="form.keywords"></el-input>
            </el-form-item>
            <el-form-item label="分类:">
                <el-select v-model="form.category_id" placeholder="请选择">
                    <el-option label="原创" value="2"></el-option>
                    <el-option label="转载" value="3"></el-option>
                    <el-option label="用户投稿" value="4"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="getArticle()">搜索</el-button>
            </el-form-item>
        </el-form>
        <!-- 状态 -->
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
            <el-table-column prop="click" label="转发人数/查看人数" width="150" align="center" :formatter="formatClick"></el-table-column>
            <el-table-column prop="add_time" label="添加时间" width="200" align="center"></el-table-column>
            <el-table-column label="操作" width="200" align="center">
                <template slot-scope="scope">
                    <router-link :to="{path:'/preview',query:{id:scope.row.id}}">
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
        name: 'manage',
        data() {
            return {
                form: {
                    keywords: '',
                    category_id: ''
                },
                radio: '',
                page: 1,
                total: 0,
                per_page: 0,
                tableData: []
            }
        },
        mounted() {
            this.getArticle();
        },
        activated() {
            this.getArticle();
        },
        methods: {
            //获取文章列表
            getArticle() {
                this.$axios.post(
                    '/admin/article_list',
                    this.$qs.stringify({
                        keywords: this.form.keywords,
                        category_id: this.form.category_id,
                        page: this.page
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
                })
            },

            // 分页
            handleCurrentChange(val) {
                this.page = val;
                this.getArticle();
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
