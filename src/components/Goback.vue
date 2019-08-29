<template>
  <div class="goback">
    <i class="iconfont icon-fanhui" @click="_goback()"></i>
    <i class="iconfont icon-sandian"></i>
  </div>
</template>

<script>
  export default {
    name: 'Goback',
    methods: {
      _goback () {
        this.$router.go(-1)
      }
    }
  }
</script>

<style scoped lang="less">
  .goback {
    width: 100%;
    height: 1rem;
    background-color: rgba(0, 0, 0, 0);
    position: fixed;
    top: 0;
    left: 0;
    z-index: 7;
    padding: 0 .2rem;
    display: flex;
    justify-content: space-between;

    i {
      color: #ffffff;
      font-size: .4rem;
      line-height: 1rem;
    }
  }
</style>
