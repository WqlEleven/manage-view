<template>
    <div class="container">
        <el-form ref="form" :model="form" label-width="100px">
            <el-form-item label="旧密码:">
                <el-input type="password" v-model="form.oldpwd"></el-input>
            </el-form-item>
            <el-form-item label="新密码:">
                <el-input type="password" v-model="form.newpwd"></el-input>
            </el-form-item>
            <el-form-item label="确认新密码:">
                <el-input type="password" v-model="form.pwd"></el-input>
            </el-form-item>
            <el-form-item label="">
                <el-button type="primary" round @click="editpwd()">确认修改</el-button>
                <router-link class="back" to='/ArticleList'>
                    <el-button type="info" round>返回</el-button>
                </router-link>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
    export default {
        name: 'EditPassword.vue',
        data: function () {
            return {
                form: {
                    oldpwd: '',
                    newpwd: '',
                    pwd: ''
                }
            }
        },
        methods: {
            //修改密码
            editpwd() {
                this.$confirm('此操作将修改密码, 是否继续?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    if (this.form.newpwd == this.form.pwd) {
                        //发送请求
                        this.$axios.post(
                            'admin/password',
                            this.$qs.stringify({old_password: this.form.oldpwd, password: this.form.newpwd})
                        ).then((res) => {
                            // console.log(res);
                            if (res.data.code == -1) {
                                this.$message.warning('请登录！');
                                this.$router.push('/login');
                            } else if (res.data.code == 0) {
                                this.$message.success(res.data.message);
                                this.$router.push('/login')
                            } else {
                                this.$message.warning(res.data.message);
                            }
                        }).catch((err) => {
                            console.log(err);
                        });
                    } else {
                        this.$message.warning('请重新确认新密码！')
                    }
                }).catch(() => {
                    this.$message({
                        type: 'info',
                        message: '已取消修改'
                    });
                });
            }
        }
    }
</script>
<style scoped>
    .back {
        margin-left: 10px;
    }
</style>