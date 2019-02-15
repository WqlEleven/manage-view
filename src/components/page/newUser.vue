<template>
    <div class="container">
        <div class="form-box">
            <el-form ref="form" :model="form" label-width="100px">
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
                    <el-input v-model="form.mobile	"></el-input>
                </el-form-item>
                <el-form-item label="角色">
                    <el-select v-model="form.role_id" placeholder="请选择">
                        <el-option label="系统管理员" value="2"></el-option>
                        <el-option label="普通用户" value="1"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="用户名:">
                    <el-input v-model="form.name	"></el-input>
                </el-form-item>
                <el-form-item label="密码:">
                    <el-input v-model="form.password"></el-input>
                </el-form-item>
                <el-form-item label="">
                    <el-button type="primary" round @click="finish()">完成</el-button>
                    <router-link to='/manageUser'>
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
                }
            }
        },
        methods: {
            //新增用户
            finish() {
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
                        this.$router.push('/manageUser');
                    } else {
                        //console.log(res.data.message);
                        this.$message.warning(res.data.message);
                    }
                }).catch((res) => {
                    console.log(res);
                });
            }
        }
    }
</script>
<style scoped>
    span {
        color: #666;
    }
</style>