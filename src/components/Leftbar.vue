<template>
  <div class="left-bar">
    <div class="user">
      <div class="user-img">
        <el-avatar :size="50" :src="circleUrl"></el-avatar>
      </div>
      <div class="user-nickname">
        <span>{{usernickname}}</span>
      </div>
    </div>
    <div class="setting">

    </div>
  </div>
</template>

<script>
  export default {
    name: 'Leftbar',
    data () {
      return {
        circleUrl: 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png',
        usernickname: '点击登录'
      }
    }
  }
</script>

<style scoped lang="less">
  .left-bar {
    padding: 0 .2rem;

    .user {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-wrap: wrap;
      padding: .4rem;
      border-bottom: 1px solid #cccccc;

      .user-img {
        width: 100%;
        text-align: center;
      }
    }
  }
</style>
