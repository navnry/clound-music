<template>
  <div class="login">
    <div class="main">
      <el-input
        placeholder="请输入用户名"
        prefix-icon="el-icon-user"
        v-model="userphone">
      </el-input>
      <el-input
        placeholder="请输入密码"
        v-model="userpassword"
        prefix-icon="el-icon-lock"
        show-password>
      </el-input>
      <el-button @click="login" size="mini">登录</el-button>
      <img :src="userInfo.avatarUrl" alt="">
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Login',
    data () {
      return {
        userphone: '18827908654',
        userpassword: 'qwer1234567',
        userInfo: {}
      }
    },
    created () {
      // /login/status
      this.$axios({
        method: 'get',
        url: 'http://localhost:3000/login/status'
      }).then(res => {
        console.log(res)
      }).catch(err=>{
        console.log(err)
      })
    },
    methods: {
      login () {
        let _this = this
        _this.$axios({
          method: 'post',
          withCredentials: true,
          url: 'http://localhost:3000/login/cellphone',
          params: {
            phone: _this.userphone,
            password: _this.userpassword
          }
        }).then(res => {
          if (res.status === 200) {
            console.log(res.data)
            _this.$store.commit('SET_TOKEN', res.data.account.id)
            _this.userInfo = res.data.profile
            return
          }
        }).catch(err => {

        })
      }
    }
  }
</script>

<style scoped>

</style>
