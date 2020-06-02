<template>
    <div class="login_page">
        <div class="login_box">
            <div class="login_title">室内导航系统后台管理</div>
            <el-form :model="UserInfo" class="login_content">
                <el-form-item prop="username">
                    <el-input v-model="UserInfo.username" type="text" placeholder="请输入用户名">
                        <el-button slot="prepend"></el-button>
                    </el-input>
                </el-form-item>
                <el-form-item prop="password">
                    <el-input v-model="UserInfo.password" type="password" placeholder="请输入密码"  @keyup.enter.native="submitForm()">
                        <el-button slot="prepend"></el-button>
                    </el-input>
                </el-form-item>
                <div class="login_button">
                     <el-button type="primary" @click="submitForm()">登录</el-button>
                </div>
                <p class="login_tips">Tips : </p>
            </el-form>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Login',
    data () {
        return {
            UserInfo: {username: '', password: ''},
            responseResult: []
        }
    },
    methods: {
        login () {
            this.$axios
                .post('/login', {
                    username: this.UserInfo.username,
                    password: this.UserInfo.password
                })
                .then(successResponse => {
                    this.responseResult = JSON.stringify(successResponse.data)
                    console.log('xxxxxx', successResponse.data)
                    if (successResponse.data.code === 200) {
                        this.$router.replace({path: '/index'})
                    }
                })
                .catch(failResponse => {})
        }
    }
}
</script>

<style>
.login_page{
    background-image:url("../../assets/background/login_back.jpg");
    background-size:100% 100%;
    height: 100%;
    width: 100%;
    position: relative;
}
.login_box{
    position: absolute;
    left: 50%;
    top: 50%;
    width: 350px;
    margin: 130px 0 0 175px;
    border-radius: 5px;
    background: rgba(255, 255, 255, 0.3);
}
.login_title{
    width: 100%;
    line-height: 50px;
    text-align: center;
    font-size: 20px;
    color: #fff;
    border-bottom: 1px solid #ddd;
}
.login_content{
     padding: 30px 30px;
}
.login_button{
    text-align: center;
}
.login_button button{
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
