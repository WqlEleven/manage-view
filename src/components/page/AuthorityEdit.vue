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
                    <el-button type="primary" round @click="editRole()">修改</el-button>
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
                    id: '',
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
        created() {
            //this.form.id = this.$route.query.id;
        },
        mounted() {
            this.form.id = this.$route.query.id;
            this.getArtMsg();
        },
        activated() {
            this.form.id = this.$route.query.id;
            this.getArtMsg();
        },
        methods: {
            //修改
            editRole() {
                this.$refs['form'].validate((valid) => {
                    if (valid) {
                        this.$axios.post(
                            '/admin/authority_edit',
                            this.$qs.stringify(this.form),
                        ).then((res) => {
                            //console.log(res);
                            if (res.data.code == -1) {
                                this.$message.warning('请登录！');
                                this.$router.push('/login');
                            } else if (res.data.code == 0) {
                                this.$message.success(res.data.message);
                                this.$router.push('/AuthorityList')
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
            },
            //获取权限信息
            getArtMsg() {
                this.form.id = this.$route.query.id;
                this.$axios.post(
                    '/admin/authority_info',
                    this.$qs.stringify({id: this.form.id})
                ).then((res) => {
                    // console.log(res);
                    if (res.data.code == -1) {
                        this.$message.warning('请登录！');
                        this.$router.push('/login');
                    } else if (res.data.code == 0) {
                        this.form = res.data.data.info;
                    }
                }).catch((err) => {
                    console.log(err);
                });
            },
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