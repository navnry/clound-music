<template>
  <div id="app">
    <Tabbar></Tabbar>
    <transition :name="transitionName">
      <keep-alive>
        <router-view v-if="$route.meta.keepAlive"></router-view>
      </keep-alive>
    </transition>
    <transition :name="transitionName">
      <router-view v-if="!$route.meta.keepAlive"></router-view>
    </transition>
  </div>
</template>
<script>
  import Tabbar from '@/components/tabbar'

  export default {
    name: 'home',
    data () {
      return {
        transitionName: ''
      }
    },
    components: {
      Tabbar
    },
    watch: {
      $route (to, from) {
        this.title = to.meta.title
        if (to.meta.index > from.meta.index) {
          this.transitionName = 'left'
        } else {
          this.transitionName = 'right'
        }
      }
    }
  }
</script>
<style lang="less">
  #app {

  }

  .childView {
    position: absolute;
    width: 100%;
    transition: all ease 250ms;
  }

  /*过渡动画*/

  .left-enter {
    transform: translateX(100%)
  }

  /*100%代表在屏幕外*/
  .left-enter-to {
    transform: translateX(0)
  }

  .left-enter-active {
    transition: .3s
  }

  .left-leave {
    transform: translateX(0)
  }

  .left-leave-to {
    transform: translateX(-100%)
  }

  .left-leave-active {
    transition: .3s
  }

  .right-enter {
    transform: translateX(-100%)
  }

  /*-100%代表在屏幕外,屏幕的左边*/
  /* .right-enter-to{transform: translateX(0)}; */
  /* .right-leave{transform: translateX(0)} */
  .right-leave-to {
    transform: translateX(100%)
  }

  /*屏幕的右边*/
  .right-enter-active {
    transition: .3s
  }

  .right-leave-active {
    transition: .3s
  }

</style>
