<template>
    <div class="container">
        <el-form ref="form" :model="form" :rules="rules" label-width="100px">
            <el-form-item prop="oldpwd" label="旧密码:">
                <el-input type="password" v-model="form.oldpwd"></el-input>
            </el-form-item>
            <el-form-item prop="newpwd" label="新密码:">
                <el-input type="password" v-model="form.newpwd"></el-input>
            </el-form-item>
            <el-form-item prop="pwd" label="确认新密码:">
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
        name: 'EditPassword',
        data: function () {
            return {
                form: {
                    oldpwd: '',
                    newpwd: '',
                    pwd: ''
                },
                rules: {
                    oldpwd: [{
                        required: true,
                        message: '请输入旧密码',
                        trigger: 'blur'
                    }],
                    newpwd: [{
                        required: true,
                        message: '请输入新密码',
                        trigger: 'blur'
                    }],
                    pwd: [{
                        required: true,
                        message: '请输入确认新密码',
                        trigger: 'blur'
                    }],
                },
            }
        },
        methods: {
            //修改密码
            editpwd() {
                this.$refs['form'].validate((valid) => {
                    if (valid) {
                        this.$confirm('此操作将修改密码, 是否继续?', '提示', {
                            confirmButtonText: '确定',
                            cancelButtonText: '取消',
                            type: 'warning'
                        }).then(() => {
                            if (this.form.newpwd == this.form.pwd) {
                                //发送请求
                                this.$axios.post(
                                    '/admin/password',
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
                    } else {
                        console.log('error submit!!');
                        return false;
                    }
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