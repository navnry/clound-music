<template>
  <div class="video">
    <ul class="video-list" v-infinite-scroll="load" style="overflow:auto">
      <li v-for="item in videoList" class="video-list-item">{{ item }}</li>
    </ul>
    <p v-if="loading">加载中...</p>
    <p v-if="noMore">没有更多了</p>
  </div>
</template>
<script>
  export default {
    name: '',
    components: {},
    data () {
      return {
        videoList: [],
        page: 1,
        loading:false,
        noMore:false
      }
    },
    mounted () {
      this._getAllMV()
    },
    methods: {
      _getAllMV () {
        this.$axios({
          method: 'get',
          url: 'http://localhost:3000/top/mv',
          params: {
            limit: 6,
            page: this.page
          }
        }).then(res => {
          this.videoList = res.data.data
        })
      },
      load () {
        console.log(1)
      }
    }
  }
</script>
<style lang="less">
</style>
