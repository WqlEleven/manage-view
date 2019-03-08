<template>
    <div class="container">
        <div class="form-box">
            <el-form ref="form" :model="form" :rules="rules" label-width="100px">
                <el-form-item prop="name" label="名称">
                    <el-input v-model="form.name"></el-input>
                </el-form-item>
                <el-form-item prop="code" label="代码:">
                    <el-input v-model="form.code"></el-input>
                </el-form-item>
                <el-form-item label="">
                    <el-button type="primary" round @click="addRole()">新增</el-button>
                    <router-link class="back" to='/AuthorityList'>
                        <el-button type="info" round>返回</el-button>
                    </router-link>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'amend',
        data: function () {
            return {
                form: {
                    name: '',
                    code: ''
                },
                rules: {
                    name: [{
                        required: true,
                        message: '请输入名称',
                        trigger: 'blur'
                    }],
                    code: [{
                        required: true,
                        message: '请输入代码',
                        trigger: 'blur'
                    }],
                },
            }
        },
        methods: {
            addRole() {
                this.$refs['form'].validate((valid) => {
                    if (valid) {
                        this.$axios.post(
                            '/admin/authority_add',
                            this.$qs.stringify(this.form)
                        ).then((res) => {
                            // console.log(res);
                            if (res.data.code == -1) {
                                this.$message.warning('请登录！');
                                this.$router.push('/login');
                            } else if (res.data.code == 0) {
                                this.$router.push('/AuthorityList')
                                // this.tableData = res.data.data.list;
                            } else {
                                this.$message.warning(res.data.message);
                            }
                        }).catch((err) => {
                            console.log(err);
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