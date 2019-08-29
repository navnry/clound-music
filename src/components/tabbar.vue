<template>
  <div id="tabbar">
    <van-popup
      v-model="leftShow"
      position="left"
      :style="{ height: '100%' ,width:'60%',background:'#fff'}"
    >
      <Leftbar></Leftbar>
    </van-popup>
    <div id="nemu">
      <Icon type="ios-options-outline" @click="showLeft"/>
    </div>
    <div id="nav">
      <router-link to="/mine">我的</router-link>
      <router-link to="/found">发现</router-link>
      <router-link to="/village">云村</router-link>
      <router-link to="/video">视频</router-link>
    </div>
    <div id="search">
      <router-link to="/search">
        <Icon type="ios-search"/>
      </router-link>
    </div>
  </div>
</template>

<script>
  import Leftbar from '@/components/Leftbar'

  export default {
    data () {
      return {
        leftShow: false
      }
    },
    components:{
      Leftbar
    },
    methods: {
      showLeft () {
        this.leftShow = true
      }
    }
  }
</script>
<style lang="less">
  #tabbar {
    background-color: #ffffff;
    padding: 0 .3rem;
    display: flex;
    justify-content: space-between;

    #nemu {
      /*margin-right: .9rem;*/

      i {
        font-size: .4rem;
        color: #000;
        line-height: 1rem;
      }
    }

    #nav {
      display: flex;

      a {
        font-size: .28rem;
        color: #999999;
        line-height: 1rem;
        display: block;
        padding: 0 .25rem;

        &.router-link-exact-active {
          color: #444444;
          font-size: .3rem;
          transition: font-size linear 50ms;
        }
      }
    }

    #search {
      i {
        font-size: .4rem;
        color: #666;
        line-height: 1rem;
      }
    }
  }
</style>
