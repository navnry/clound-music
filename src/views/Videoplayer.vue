<template>
  <main>
    <div class="videoplayer">
      <video :src="mvData[1080]" controls></video>
    </div>
  </main>
</template>

<script>
  export default {
    name: 'Videoplayer',
    data () {
      return {
        mvId: '',
        mvData: ''
      }
    },
    mounted () {
      this.mvId = this.$route.query.id
      this.getMv()
    },
    methods: {
      getMv () {
        this.$axios({
          method: 'get',
          url: 'http://localhost:3000/mv/detail',
          params: {
            mvid: this.mvId
          }
        }).then(res => {
          this.mvData = res.data.data.brs
          let result = JSON.stringify(res.data.data.brs)
          console.log(JSON.parse(result))
        }).catch(err => {

        })
      }
    }
  }
</script>

<style scoped>
  video {
    width: 100%;
    height: auto;
  }
</style>
