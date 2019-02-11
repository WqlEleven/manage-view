<template>
    <div class="login-wrap">
        <div class="ms-login">
            <div class="ms-title">长寿管家</div>
            <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="0px" class="ms-content">
                <el-form-item prop="username">
                    <el-input v-model="ruleForm.username" placeholder="用户名">
                        <el-button slot="prepend" icon="el-icon-lx-people"></el-button>
                    </el-input>
                </el-form-item>
                <el-form-item prop="password">
                    <el-input type="password" placeholder="密码" v-model="ruleForm.password" @keyup.enter.native="submitForm('ruleForm')">
                        <el-button slot="prepend" icon="el-icon-lx-lock"></el-button>
                    </el-input>
                </el-form-item>
                <div class="login-btn">
                    <el-button type="primary" @click="handleLogin()">登录</el-button>
                </div>
            </el-form>
        </div>
    </div>
</template>

<script>
    export default {
        data: function(){
            return {
                ruleForm: {
                    username: '',
                    password: ''
                },
                rules: {
                    username: [
                        { required: true, message: '请输入用户名', trigger: 'blur' }
                    ],
                    password: [
                        { required: true, message: '请输入密码', trigger: 'blur' }
                    ]
                }
            }
        },
        methods: {	
			handleLogin(){
				this.$axios.post('http://guanjia.applinzi.com/admin/login',this.ruleForm)
				.then(function (res) {
					console.log(res);
				  })
				  .catch(function (err) {
					console.log(err);
				  });
			}		
			
			/*
			 async handleLogin() {
      const res = await this.$http.post("login", this.formdata);
      console.log(res);
      const {
        data: {
          data,
          meta: { msg, status }
        }
      } = res;
      if (status === 200) {
        // 保存token值(将来写其他功能时会用)
        localStorage.setItem("token", data.token);
        //
        // localStorage.getItem('token')
        // 渲染home组件
        this.$router.push({
          name: "home"
        });
      } else {
        this.$message.warning(msg);
      }
    }
			
			*/
// 			axios.get('/user?ID=12345')
//   .then(function (response) {
//     console.log(response);
//   })
//   .catch(function (error) {
//     console.log(error);
//   });
//             submitForm(formName) {
//                 this.$refs[formName].validate((valid) => {
//                     if (valid) {
//                         localStorage.setItem('ms_username',this.ruleForm.username);
//                         this.$router.push('/');
//                     } else {
//                         console.log('error submit!!');
//                         return false;
//                     }
//                 });
//             }
//         }
    }
}
</script>

<style scoped>
    .login-wrap{
        position: relative;
        width:100%;
        height:100%;
        background-image: url(../../assets/img/login-bg.jpg);
        background-size: 100%;
    }
    .ms-title{
        width:100%;
        line-height: 50px;
        text-align: center;
        font-size:20px;
        color: #000;
		font-family: '黑体';
        border-bottom: 1px solid #ddd;
    }
    .ms-login{
        position: absolute;
        left:50%;
        top:50%;
        width:350px;
        margin:-190px 0 0 -175px;
        border-radius: 5px;
        background: rgba(255,255,255, 0.3);
        overflow: hidden;
    }
    .ms-content{
        padding: 30px 30px;
    }
    .login-btn{
        text-align: center;
    }
    .login-btn button{
        width:100%;
        height:36px;
        margin-bottom: 10px;
    }
    .login-tips{
        font-size:12px;
        line-height:30px;
        color:#fff;
    }
</style>