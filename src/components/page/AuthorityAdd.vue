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
                    <el-button type="primary" round @click="addRole()">新增</el-button>
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
                    name: '',
                    code: ''
                }
            }
        },
        methods: {
            addRole() {
                this.$axios.post(
                    'admin/authority_add',
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
            }
        }
    }
</script>
<style scoped>
    span {
        color: #666;
    }
</style>