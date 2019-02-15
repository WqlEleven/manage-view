<template>
    <div class="container">
        <div class="form-box">
            <el-form ref="form" :model="form" label-width="100px">
                <el-form-item label="角色名称">
                    <el-input v-model="form.name"></el-input>
                </el-form-item>
                <el-form-item label="角色描述:">
                    <el-input type="textarea" v-model="form.describe"></el-input>
                </el-form-item>
                <el-form-item label="角色权限:">
                    <el-checkbox-group v-model="form.authority">
                        <el-checkbox v-for="item in authority_list" :label="item.id" name="type">{{item.name}}</el-checkbox>
                    </el-checkbox-group>
                </el-form-item>
                <el-button type="primary" round @click="addRole()">&nbsp;&nbsp;&nbsp;新&nbsp;&nbsp;增&nbsp;&nbsp;&nbsp;
                </el-button>&nbsp;&nbsp;&nbsp;
                <router-link to='/manageRole'>
                    <el-button type="info" round>&nbsp;&nbsp;&nbsp;返&nbsp;&nbsp;回&nbsp;&nbsp;&nbsp;</el-button>
                </router-link>
            </el-form>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'amend',
        data: function () {
            return {
                page: 1,
                form: {
                    name: '',
                    describe: '',
                    authority: []
                },
                authority_list: []
            }
        },
        created() {
            this.getauthority();
        },
        methods: {
            //动态获取权限列表
            getauthority() {
                this.$axios.post(
                    'admin/authority_all'
                ).then((res) => {
                    if (res.data.code == -1) {
                        this.$message.warning('请登录！');
                        this.$router.push('/login');
                    } else if (res.data.code == 0) {
                        //console.log(res)
                        this.authority_list = res.data.data.list;
                    } else {
                        this.$message.warning(res.data.message);
                    }
                }).catch((err) => {
                    console.log(err)
                })
            },
            //新增角色
            addRole() {
                this.$axios.post(
                    'admin/role_add',
                    this.$qs.stringify(this.form)
                ).then((res) => {
                    if (res.data.code == -1) {
                        this.$message.warning('请登录！');
                        this.$router.push('/login');
                    } else if (res.data.code == 0) {
                        console.log(res)
                        // this.tableData = res.data.data.list;
                    } else {
                        this.$message.warning(res.data.message);
                    }
                }).catch((err) => {
                    console.log(err)
                })
            }
        }
    }
</script>
<style scoped>
    span {
        color: #666;
    }
</style>