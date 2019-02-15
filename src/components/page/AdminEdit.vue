<template>
    <div class="container">
        <div class="form-box">
            <el-form ref="form" :model="form" label-width="130px">
                <el-form-item label="姓名:">
                    <el-input v-model="form.real_name"></el-input>
                </el-form-item>
                <el-form-item label="性别:">
                    <el-select v-model="form.sex" placeholder="请选择">
                        <el-option label="男" value="1"></el-option>
                        <el-option label="女" value="2"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="电话:">
                    <el-input v-model="form.mobile"></el-input>
                </el-form-item>
                <el-form-item label="角色:">
                    <el-select v-model="form.role_id" placeholder="请选择">
                        <el-option label="普通用户" value="1"></el-option>
                        <el-option label="系统管理员" value="2"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="修改密码:">
                    <el-input v-model="form.password"></el-input>
                </el-form-item>
                <el-form-item label="启用/禁用:">
                    <el-switch v-model="form.status" :on-value="100" :off-value="0"></el-switch>
                </el-form-item>
                <el-form-item label="录入人员:">
                    <span id="person"></span>
                </el-form-item>
                <el-form-item label="注册时间:">
                    <span id="add_time"></span>
                </el-form-item>
                <el-form-item label="最后登录IP:">
                    <span id="ip"></span>
                </el-form-item>
                <el-form-item label="最后登录时间:">
                    <span id="last_time"></span>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" round @click="handleedit()">修改</el-button>
                    <router-link to='/manageUser'>
                        <el-button type="primary" round>返回</el-button>
                    </router-link>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'revise',
        data: function () {
            return {
                form: {
                    id: '',
                    real_name: '',
                    sex: '',
                    mobile: '',
                    role_id: '',
                    password: '',
                    status: ''
                }
            }
        },
        created() {
            //this.form.id = this.$route.query.id;
        },
        mounted() {
            this.form.id = this.$route.query.id;
            this.getUser();
        },
        activated(){
            this.form.id = this.$route.query.id;
            this.getUser();
        },
        methods: {
            //获取用户详细信息
            getUser() {
                //this.form.id = this.$route.query.id;
                this.$axios.post(
                    'admin/admin_info',
                    this.$qs.stringify({id: this.form.id})
                ).then((res) => {
                    // console.log(res);
                    if (res.data.code == -1) {
                        this.$message.warning('请登录！');
                        this.$router.push('/login');
                    } else if (res.data.code == 0) {
                        //写逻辑
                        this.form = res.data.data.info;
                        if (res.data.data.info.status == 1) {
                            this.form.status = true
                        } else if (res.data.data.info.status == 0) {
                            this.form.status = false
                        }
                        this.form.password = ''
                        const last_time = document.getElementById('last_time');
                        last_time.innerText = res.data.data.info.last_time
                        const add_time = document.getElementById('add_time');
                        add_time.innerText = res.data.data.info.add_time
                        const person = document.getElementById('person');
                        person.innerText = res.data.data.info.person
                        const ip = document.getElementById('ip');
                        ip.innerText = res.data.data.info.ip
                    }
                }).catch((err) => {
                    console.log(err);
                });
            },

            //处理修改
            handleedit() {
                this.$confirm('此操作将修改用户信息, 是否继续?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    if (this.form.status == true) {
                        this.form.status = 1
                    } else if (this.form.status == false) {
                        this.form.status = 0
                    }
                    this.$axios.post(
                        'admin/admin_edit',
                        this.$qs.stringify(this.form)
                    ).then((res) => {
                        // console.log(res);
                        if (res.data.code == -1) {
                            this.$message.warning('请登录！');
                            this.$router.push('/login');
                        } else if (res.data.code == 0) {
                            this.$message.success(res.data.message);
                            this.$router.push('/manageUser');
                        } else {
                            //console.log(res.data.message);
                            this.$message.warning(res.data.message);
                        }
                    }).catch((err) => {
                        console.log(err);
                    });
                }).catch(() => {
                    this.$message({
                        type: 'info',
                        message: '已取消删除'
                    });
                });
            },
        },
    }
</script>
<style scoped>
    span {
        color: #666;
    }

    .active {
        display: none;
    }
</style>