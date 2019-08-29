<template>
  <main>
    <div class="player">
      <audio :src="songsUrl" controls></audio>
    </div>
  </main>
</template>

<script>
  export default {
    name: 'Player',
    data () {
      return {
        songsId: '',
        songsUrl: ''
      }
    },
    mounted () {
      this.songsId = this.$route.query.id
      console.log(this.songsId)
      this.playMusic()
    },
    methods: {
      playMusic () {
        this.$axios({
          method: 'get',
          url: 'http://localhost:3000/song/url',
          params: {
            id: this.songsId
          }
        }).then(res => {
          this.songsUrl =res.data.data[0].url
        })
      }
    }
  }
</script>

<style scoped>

</style>
