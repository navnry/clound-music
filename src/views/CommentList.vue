<template>
  <main>
    <div class="infinite-list-wrapper" style="overflow:auto">
      <ul
        class="list"
        v-infinite-scroll="load"
        infinite-scroll-disabled="disabled">
        <li v-for="comment in commentData" class="list-item"> {{comment.content}}</li>
      </ul>
      <p v-if="loading">加载中...</p>
      <p v-if="noMore">没有更多了</p>
    </div>
  </main>
</template>

<script>
  import { commentList } from '@/request/api'

  export default {
    name: 'CommentList',
    data () {
      return {
        commentId: this.$route.query.id,
        commentData: '',
        loading: false,
        offset: 1
      }
    },
    mounted () {
      this._getComment()
    },
    computed: {
      noMore () {
        return this.offset >= 20
      },
      disabled () {
        return this.loading || this.noMore
      }
    },
    methods: {
      _getComment () {
        commentList({
          id: this.commentId,
          offset: this.offset,
          limit: 5
        }).then(res => {
          this.commentData = this.commentData.concat(res.comments)
        })
      },
      load () {
        this.loading = true
        setTimeout(() => {
          this.offset+=1
          this._getComment()
          this.loading = false
        }, 2000)
      }
    }
  }
</script>

<style scoped>

</style>
