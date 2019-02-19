<template>
    <div class="container">
        <div class="form-box">
            <el-form ref="form" :model="form" :rules="rules" label-width="100px">
                <el-form-item prop="real_name" label="姓名:">
                    <el-input v-model="form.real_name"></el-input>
                </el-form-item>
                <el-form-item prop="sex" label="性别:">
                    <el-select v-model="form.sex" placeholder="请选择">
                        <el-option label="男" value="1"></el-option>
                        <el-option label="女" value="2"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item prop="mobile" label="电话:">
                    <el-input v-model="form.mobile	"></el-input>
                </el-form-item>
                <el-form-item prop="role_id" label="角色">
                    <el-select v-model="form.role_id" placeholder="请选择">
                        <el-option label="系统管理员" value="2"></el-option>
                        <el-option label="普通用户" value="1"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item prop="name" label="用户名:">
                    <el-input v-model="form.name"></el-input>
                </el-form-item>
                <el-form-item prop="password" label="密码:">
                    <el-input type="password" v-model="form.password"></el-input>
                </el-form-item>
                <el-form-item label="">
                    <el-button type="primary" round @click="finish()">完成</el-button>
                    <router-link class="back" to='/AdminList'>
                        <el-button type="info" round>返回</el-button>
                    </router-link>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'newuser',
        data: function () {
            return {
                form: {
                    real_name: '',
                    mobile: '',
                    name: '',
                    sex: '',
                    role_id: '',
                    password: ''
                },
                rules: {
                    real_name: [{
                        required: true,
                        message: '请输入姓名',
                        trigger: 'blur'
                    }],
                    mobile: [{
                        required: true,
                        message: '请输入密码',
                        trigger: 'blur'
                    }],
                    name: [{
                        required: true,
                        message: '请输入用户名',
                        trigger: 'blur'
                    }],
                    sex: [{
                        required: true,
                        message: '请输入导语',
                        trigger: 'blur'
                    }],
                    role_id: [{
                        required: true,
                        message: '请选择角色',
                        trigger: 'blur'
                    }],
                    password: [{
                        required: true,
                        message: '请输入密码',
                        trigger: 'blur'
                    }],
                },
            }
        },
        methods: {
            //新增用户
            finish() {
                this.$refs['form'].validate((valid) => {
                    if (valid) {
                        this.$axios.post(
                            'admin/admin_add',
                            this.$qs.stringify(this.form)
                        ).then((res) => {
                            //console.log(res);
                            if (res.data.code == -1) {
                                this.$message.warning('请登录！');
                                this.$router.push('/login');
                            } else if (res.data.code == 0) {
                                this.$message.success(res.data.message);
                                this.$router.push('/AdminList');
                            } else {
                                //console.log(res.data.message);
                                this.$message.warning(res.data.message);
                            }
                        }).catch((res) => {
                            console.log(res);
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
    span {
        color: #666;
    }

    .back {
        margin-left: 10px;
    }
</style>