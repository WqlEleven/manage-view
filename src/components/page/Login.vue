<template>
    <div class="login-wrap">
        <div class="ms-login">
            <div class="ms-title">长寿管家 - 后台管理系统</div>
            <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="0px" class="ms-content">
                <el-form-item prop="username">
                    <el-input v-model="ruleForm.username" placeholder="请输入用户名">
                        <el-button slot="prepend" icon="el-icon-lx-people"></el-button>
                    </el-input>
                </el-form-item>
                <el-form-item prop="password">
                    <el-input type="password" placeholder="请输入密码" v-model="ruleForm.password"
                              @keyup.enter.native="submitForm('ruleForm')">
                        <el-button slot="prepend" icon="el-icon-lx-lock"></el-button>
                    </el-input>
                </el-form-item>
                <div class="login-btn">
                    <el-button type="primary" @click="submitForm('ruleForm')">登录</el-button>
                </div>

            </el-form>
        </div>
    </div>
</template>

<script>
    export default {
        data: function () {
            return {
                ruleForm: {
                    username: '',
                    password: ''
                },
                rules: {
                    username: [
                        {required: true, message: '请输入用户名', trigger: 'blur'}
                    ],
                    password: [
                        {required: true, message: '请输入密码', trigger: 'blur'}
                    ]
                }
            }
        },
        //页面加载调用获取cookie值
        mounted() {
            this.getCookie();
        },
        methods: {
            submitForm(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        this.$axios.post(
                            'admin/login',
                            this.$qs.stringify(this.ruleForm)
                        ).then((res) => {
                            //console.log(res);
                            if (res.data.code == 0) {
                                localStorage.setItem('ms_username', this.ruleForm.username);
                                //保存用户名和密码到cookie
                                this.setCookie(this.ruleForm.username, this.ruleForm.password, 7);
                                this.$message.success(res.data.message);
                                //跳转
                                this.$router.push('/');
                            } else {
                                console.log(res.data.message);
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
            //设置cookie
            setCookie(c_name, c_pwd, exdays) {
                var exdate = new Date(); //获取时间
                exdate.setTime(exdate.getTime() + 24 * 60 * 60 * 1000 * exdays); //保存的天数
                //字符串拼接cookie
                window.document.cookie = "userName" + "=" + c_name + ";path=/;expires=" + exdate.toGMTString();
                window.document.cookie = "userPwd" + "=" + c_pwd + ";path=/;expires=" + exdate.toGMTString();
            },
            //读取cookie
            getCookie: function () {
                if (document.cookie.length > 0) {
                    var arr = document.cookie.split('; '); //这里显示的格式需要切割一下自己可输出看下
                    for (var i = 0; i < arr.length; i++) {
                        var arr2 = arr[i].split('='); //再次切割
                        //判断查找相对应的值
                        if (arr2[0] == 'userName') {
                            this.ruleForm.username = arr2[1]; //保存到保存数据的地方
                        } else if (arr2[0] == 'userPwd') {
                            this.ruleForm.password = arr2[1];
                        }
                    }
                }
            },
        }
    }
</script>

<style scoped>
    .login-wrap {
        position: relative;
        width: 100%;
        height: 100%;
        background-image: url(../../assets/img/login-bg.jpg);
        background-size: 100%;
    }

    .ms-title {
        width: 100%;
        line-height: 50px;
        text-align: center;
        font-size: 20px;
        color: #000;
        border-bottom: 1px solid #ddd;
    }

    .ms-login {
        position: absolute;
        left: 50%;
        top: 50%;
        width: 350px;
        margin: -190px 0 0 -175px;
        border-radius: 5px;
        background: rgba(255, 255, 255, 0.3);
        overflow: hidden;
    }

    .ms-content {
        padding: 30px 30px;
    }

    .login-btn {
        text-align: center;
    }

    .login-btn button {
        width: 100%;
        height: 36px;
        margin-bottom: 10px;
    }

    .login-tips {
        font-size: 12px;
        line-height: 30px;
        color: #fff;
    }
</style>