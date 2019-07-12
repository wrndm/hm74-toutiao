<template>
<div class="login-container">
   <el-card class="login-box">
       <img src="../../assets/images/logo_index.png" alt="">
       <!-- 表单 -->
       <el-form ref="loginForm" status-icon='true' :model='loginForm' :rules='loginRules'>
           <el-form-item prop='mobile'>
               <el-input v-model="loginForm.mobile" placeholder="请输入手机号"></el-input>
           </el-form-item>
            <el-form-item prop='code'>
               <el-input v-model="loginForm.code" placeholder="请输入验证码" style="width:220px"></el-input>
               <el-button style="float:right">请输入验证码</el-button>
           </el-form-item>
            <el-form-item>
               <el-checkbox :value="true" style="padding-left:33px">我已阅读并同意用户协议和隐私条款</el-checkbox>
           </el-form-item>
               <el-form-item>
               <el-button style="width:100%" type="primary" @click='login()'>登录</el-button>
             </el-form-item>
       </el-form>
   </el-card>
    </div>
</template>

<script>

export default {
  data () {
    // 校验手机号
    const checkMobile = (rule, value, callback) => {
      // 校验逻辑 把value拿出来去进行手机号的格式校验
      if (/^1[3-9]\d{9}$/.test(value)) {
        callback()
      } else {
        callback(new Error('手机号错误'))
      }
    }
    return {
      // 表单数据
      loginForm: {
        moblie: '15534116019',
        code: '246810'

      },
      //   表单验证规则对象
      loginRules: {
        //   校验手机号
        mobile: [
          { required: true, message: '请输入手机号', trigger: 'blur' },
          { validator: checkMobile, trigger: 'blur' }
        ],
        // 校验验证码
        code: [
          { required: true, message: '请输入验证码', trigger: 'blur' },
          { len: 6, message: '请输入6位数字', trigger: 'blur' }
        ]
      }

    }
  },
  methods: {
    login () {
      //   对整个表单进行校验
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          // 提交登录请求   axios是基于primise封装的，post（）返回值是一个promise对象
          this.$http.post(
            'http://ttapi.research.itcast.cn/mp/v1_0/authorizations',
            this.loginForm
          ).then(res => {
            //   res是响应对象 包含后台返回的数据res.data
            // console.log(res.data)
            // 1：跳转到首页
            // TODO 2：保存用户的信息，用来判断登录状态
          // sessionStorage BOM对象，全局对象作用是保存数据，是有有效期的，当你关闭浏览器就失效
          // sessionStorage.setItem(key,value) value必须是字符串 设置数据/存储数据
          // sessionStorage.getItem(key)获取数据
          // sessionStorage.removeItem(key)删除数据
          // sessionStorage.clear()清空所有数据
            window.sessionStorage.setItem('hm74', JSON.stringify(res.data.data))
            this.$router.push('/')
          })
            .catch(() => {
              // 提示
              this.$message.error('手机号或验证码错误')
            })
        }
      })
    }
  }
}
</script>

<style scoped lang='less'>
.login-container {
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    // cover 铺平容器 多余的剪裁 contain 在容器内完全显示图片
    // 背景图定位/背景尺寸
    background:url(../../assets/images/login_bg.jpg)no-repeat center /cover;
    .login-box {
        width: 400px;
        height: 330px;
        position: absolute;
        left: 50%;
        top:50%;
        transform: translate(-50%,-50%);
        img {
            display: block;
            width: 200px;
            margin: 10px auto;
        }
    }
}
</style>
