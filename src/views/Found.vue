<template>
  <div class="found">
    <Banner></Banner>
    <div class="found-tabs">
      <div class="main">
        <router-link to="/mine">
          <i class="iconfont icon-meirituijian"></i>
          <span>每日推荐</span>
        </router-link>
        <router-link to="/mine">
          <i class="iconfont icon-gedan"></i>
          <span>歌单</span>
        </router-link>
        <router-link to="/mine">
          <i class="iconfont icon-paihangbang"></i>
          <span>排行榜</span>
        </router-link>
        <router-link to="/mine">
          <i class="iconfont icon-player_diantai_"></i>
          <span>电台</span>
        </router-link>
        <router-link to="/mine">
          <i class="iconfont icon-xuanfukuangzhibo"></i>
          <span>直播</span>
        </router-link>
      </div>
    </div>
    <div class="list">
      <div class="main">
        <div class="list-name">
          <span>推荐歌单</span>
        </div>
        <div class="list-wrap">
          <div class="list-item" v-for="item in recmonSongList" :key="item.id" @click="toRecommondList(item.id)">
            <div class="list-item-pic">
              <img :src="item.picUrl" alt="">
              <span>{{parseInt((item.playCount)/10000)}}万</span>
            </div>
            <div class="list-item-txt">
              <p>{{item.name}}</p>
            </div>
          </div>
        </div>
        <div class="list-name">
          <span>新碟</span>
        </div>
        <div class="list-wrap">
          <div class="list-item" v-for="item in albumSheetList" :key="item.id" @click="albumSheetList(item.id)">
            <div class="list-item-pic">
              <img :src="item.picUrl" alt="">
              <span>{{parseInt((item.playCount)/10000)}}万</span>
            </div>
            <div class="list-item-txt">
              <p>{{item.name}}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import Banner from '@/components/Banner'
  import { recommondSheet, albumSheet } from '@/request/api'

  export default {
    name: 'found',
    components: {
      Banner
    },
    data () {
      return {
        recmonSongList: [],
        albumSheetList: []
      }
    },
    mounted () {
      this.getRecmonSongList()
      this.getAlbumSheet()
    },
    methods: {
      getRecmonSongList () {
        recommondSheet({
          limit: 6
        }).then(res => {
          this.recmonSongList = res.result
        })
      },
      toRecommondList (id) {
        this.$router.push(`/recommondList?id=${id}`)
      },

      getAlbumSheet () {
        albumSheet({
          limit: 3
        }).then(res => {
          console.log(res)
          console.log(res.albums)
          this.albumSheetList=res.albums
        })
      }
    }
  }
</script>
<style lang="less">
  .list {
    padding-top: .2rem;

    .list-name {
      span {
        font-size: .26rem;
      }
    }

    .list-wrap {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      padding-top: .2rem;

      .list-item {
        width: 2.22rem;
        margin-bottom: .2rem;

        .list-item-pic {
          position: relative;

          img {
            display: block;
          }

          span {
            color: #ffffff;
            font-size: .2rem;
            letter-spacing: .02rem;
            position: absolute;
            right: .05rem;
            top: .05rem;
          }
        }

        .list-item-txt {
          p {
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 2;
            overflow: hidden;
            font-size: .22rem;
            color: #999;
          }
        }
      }
    }

  }

  .found-tabs {
    padding: .2rem 0;
    border-bottom: 1px solid #eee;

    .main {
      display: flex;
      justify-content: space-between;

      a {
        display: block;
        width: 20%;
        text-align: center;
        color: #555;
        font-size: 0;
        line-height: 1;

        i {
          font-size: .8rem;
        }

        span {
          display: block;
          font-size: .2rem;
        }
      }
    }
  }
</style>
