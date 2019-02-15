<template>
    <div class="container">
        <div class="form-box">
            <el-form ref="form" :model="form" label-width="100px">
                <el-form-item label="名称">
                    <el-input v-model="form.name"></el-input>
                </el-form-item>
                <el-form-item label="代码:">
                    <el-input v-model="form.code"></el-input>
                </el-form-item>
                <el-form-item label="">
                    <el-button type="primary" round @click="editRole()">修改</el-button>
                    <router-link to='/managePower'>
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
                }
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
                this.$axios.post(
                    'admin/authority_edit',
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
            },
            //获取权限信息
            getArtMsg() {
                this.form.id = this.$route.query.id;
                this.$axios.post(
                    'admin/authority_info',
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
</style>