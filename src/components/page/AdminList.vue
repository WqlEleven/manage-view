<template>
    <div class="table">
        <div class="container">
            <!-- 表单 -->
            <el-form :inline="true" :model="form" class="demo-form-inline">
                <el-form-item label="姓名:">
                    <el-input v-model="form.real_name"></el-input>
                </el-form-item>
                <el-form-item label="手机号:">
                    <el-input v-model="form.mobile	"></el-input>
                </el-form-item>
                <el-form-item label="角色:">
                    <el-select v-model="form.role_id	" placeholder="请选择">
                        <el-option label="系统管理员" value="2"></el-option>
                        <el-option label="普通用户" value="1"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click='getUser()'>搜索</el-button>
                    <!-- <router-link to='/detail'>
                        <el-button type="primary">搜索</el-button>
                    </router-link> -->
                </el-form-item>
            </el-form>

            <router-link to='/AdminAdd'>
                <el-button type="primary">新增用户</el-button>
            </router-link>
            <div class="gehang"></div>
            <!-- 表格 -->
            <el-table :data="tableData" border style="width: 100%">
                <el-table-column prop="id" label="ID" width="50" align="center"></el-table-column>
                <el-table-column prop="name" label="用户名" width="100" align="center"></el-table-column>
                <el-table-column prop="real_name" label="姓名" width="100" align="center"></el-table-column>
                <el-table-column prop="sex" label="性别" width="50" align="center" :formatter="formatSex"></el-table-column>
                <el-table-column prop="role_name" label="角色" width="140" align="center"></el-table-column>
                <el-table-column prop="mobile" label="电话" width="120" align="center"></el-table-column>
                <el-table-column prop="admin_name" label="录入人员" width="100" align="center"></el-table-column>
                <el-table-column prop="status" label="状态" width="100" align="center" :formatter="formatStatus"></el-table-column>
                <el-table-column prop="ip" label="最后登录IP" width="100" align="center"></el-table-column>
                <el-table-column prop="last_time" label="最后登录时间" width="200" align="center"></el-table-column>
                <el-table-column label="操作" style="width: 10%" align="center">
                    <template slot-scope="scope">
                        <router-link :to="{path:'/AdminEdit',query:{id:scope.row.id}}">
                        <el-button type="text" icon="el-icon-edit">修改</el-button>
                        </router-link>
                        <!--
                        <router-link to='/revise'>
                            <el-button type="text" icon="el-icon-edit">修改</el-button>
                        </router-link> -->
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
        name: 'manageUser',
        data() {
            return {
                form: {
                    real_name: '',
                    mobile: '',
                    role_id: ''
                },
                page: 1,
                total: 0,
                per_page: 0,
                tableData: []
            }
        },
        mounted(){
            this.getUser();
        },
        activated() {
            this.getUser();
        },
        methods: {
            //获取用户列表
            getUser() {
                this.$axios.post(
                    'admin/admin_list',
                    this.$qs.stringify({
                        real_name: this.form.real_name,
                        mobile: this.form.mobile,
                        role_id: this.form.role_id,
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
                });
            },

            // 分页
            handleCurrentChange(val) {
                this.page = val;
                this.getUser();
            },

            //性别转换
            formatSex: function (row, column) {
                var sex = '未知';
                if (row.sex == 1) {
                    sex = '男';
                } else if (row.sex == 2) {
                    sex = '女';
                }
                return sex;
            },

            //状态转换
            formatStatus: function (row, column) {
                return row.status == 0 ? '启用' : '禁用';
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
</style>
