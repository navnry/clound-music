<template>
  <div class="recommond-list">
    <Goback></Goback>
    <div class="recommond-list-top">
      <div class="recommond-list-top-bg" :style="{backgroundImage: 'url(' + listData.coverImgUrl  + ')'}"></div>
      <div class="recommond-list-top-content">
        <div class="recommond-list-coverimg">
          <img :src="listData.coverImgUrl" alt="">
        </div>
        <div class="recommond-list-covertxt">
          <h2>{{listData.name}}</h2>
          <div class="creator">
            <img class="creator-userimg" v-if="listData.creator" :src="listData.creator.avatarUrl" alt="">
            <span class="creator-username" v-if="listData.creator">{{listData.creator.nickname}} ></span>
          </div>
          <span>{{listData.description}}</span>
        </div>
        <div>
        </div>
      </div>
      <div class="recommond-list-top-share">
        <div @click="toCommentList(listData.id)">
          <i class="iconfont icon-pinglun"></i>
          <span> {{listData.commentCount}}</span>
        </div>
        <div>
          <i class="iconfont icon-share"></i>
          <span>{{listData.shareCount}}</span>
        </div>
        <div>
          <i class="iconfont icon-xiazai"></i>
          <span>下载</span>
        </div>
        <div>
          <i class="iconfont icon-xuanze"></i>
          <span>多选</span>
        </div>
      </div>
    </div>
    <div>
      <div class="recommond-list-item">
        <ul>
          <li v-for="(songs,index) in songList" @click="goToPlay(songs.id)">
            <div class="recommond-list-item-index">
              {{index+1}}
            </div>
            <div class="recommond-list-item-info">
              <p>{{songs.name}}</p>
              <span>{{songs.ar[0].name}} - {{songs.al.name}}</span>
            </div>
            <div class="recommond-list-item-mv">
              <i class="iconfont icon-MV_you_" v-if="songs.mv!==0"></i>
            </div>
            <div class="recommond-list-item-index">
              <i class="iconfont icon-sandian"></i>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>

</template>

<script>
  import Goback from '@/components/Goback'
  import { playListDetail, songDetail } from '@/request/api'

  export default {
    name: 'recommondList',
    components: { Goback },
    data () {
      return {
        listId: '',
        listData: {},
        songList: []
      }
    },
    created () {
      this.listId = this.$route.query.id
      this.getDetail()
    },
    methods: {
      getDetail () {
        //获取歌单信息
        playListDetail({
          id: this.listId
        }).then(res => {
          console.log(res.playlist)
          this.listData = res.playlist
          console.log(res.playlist)
          let ids = []
          for (let i in res.playlist.tracks) {
            ids[i] = (res.playlist.tracks)[i].id
          }
          this.$nextTick(function () {
            this.getList(ids.toString())
          })

        }).catch(err => {

        })
      },

      //获取歌单的歌曲列表
      getList (ids) {
        songDetail({
          ids: ids
        }).then(res => {
          if (res.code == 200) {
            this.songList = res.songs
          }
        })
      },
      // 跳转播放
      goToPlay (id) {
        this.$router.push(`/player?id=${id}`)
      },
      toCommentList(id){
        this.$router.push(`/commentList?id=${id}`)
      }
    }
  }
</script>

<style scoped lang="less">
  .recommond-list {
    position: fixed;
    width: 100%;
    height: 100%;
    background-color: #ffffff;
    top: 0;
    overflow: auto;

    .recommond-list-top {
      height: 4.7rem;
      position: relative;
      overflow: hidden;
      padding: 1rem .2rem 0 .2rem;


      .recommond-list-top-content {
        position: relative;
        z-index: 2;
        height: 2.2rem;
        display: flex;
        margin-bottom: .1rem;

        .recommond-list-coverimg {
          width: 2.2rem;

          img {
            border-radius: .1rem;
          }
        }

        .recommond-list-covertxt {
          flex: 1;
          margin-left: .3rem;
          display: flex;
          flex-wrap: wrap;
          align-content: space-between;

          h2 {
            width: 100%;
            font-weight: normal;
            font-size: .3rem;
            line-height: normal;
            color: #fefefe;
          }

          .creator {
            display: flex;
            align-items: center;

            .creator-userimg {
              width: .6rem;
              height: .6rem;
              border-radius: 50%;
              margin-right: .2rem;
            }

            .creator-username {
              font-size: .22rem;
              color: hsla(0, 0%, 100%, .7);
            }
          }

          span {
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 2;
            font-size: .2rem;
            color: #fefefe;
          }
        }
      }

      .recommond-list-top-bg, .recommond-list-top-bg::after {
        position: absolute;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
        z-index: 1;
      }

      .recommond-list-top-bg {
        background-repeat: no-repeat;
        background-size: cover;
        background-position: 50%;
        -webkit-filter: blur(20px);
        filter: blur(20px);
        -webkit-transform: scale(1.5);
        -ms-transform: scale(1.5);
        transform: scale(1.5);
      }

      .recommond-list-top-bg::after {
        content: "";
        background-color: rgba(0, 0, 0, .25);
      }

      /*::after {*/
      /*content: "";*/
      /*background-color: rgba(0, 0, 0, .25);*/
      /*position: absolute;*/
      /*left: 0;*/
      /*top: 0;*/
      /*right: 0;*/
      /*bottom: 0;*/
      /*z-index: 1;*/
      /*}*/

      .recommond-list-top-share {
        height: 1rem;
        display: flex;
        align-items: center;
        padding: .1rem 0;
        position: relative;
        z-index: 2;

        div {
          width: 25%;
          text-align: center;
          /*line-height: .9rem;*/
          display: flex;
          flex-wrap: wrap;
          text-align: center;
          font-size: 0;
          justify-content: center;
          align-items: center;
          color: #fefefe;

          i {
            font-size: .42rem;
            line-height: .42rem;
          }

          span {
            display: block;
            width: 100%;
            font-size: .2rem;
          }
        }
      }
    }

    .recommond-list-item {
      border-radius: .5rem .5rem 0 0;
      background-color: #fff;
      position: relative;
      top: -.4rem;
      padding-top: .3rem;
      z-index: 2;
      /*box-shadow: 0 0 0 1px hsla(0, 0%, 100%, .3) inset, 0 .5em 1em rgba(0, 0, 0, 0.6);*/

      ul {
        li {
          display: flex;
          height: 1rem;

          .recommond-list-item-index {
            width: 1rem;
            height: 1rem;
            line-height: 1rem;
            text-align: center;
          }

          .recommond-list-item-img {
            img {
              width: .8rem;
              height: .8rem;
              margin-right: .4rem;
            }
          }

          .recommond-list-item-mv {
            width: 1rem;
            height: 1rem;
            line-height: 1rem;
            text-align: right;

            i {
              font-size: .4rem;
            }
          }

          .recommond-list-item-info {
            flex: 1;
            overflow: hidden;
            padding-right: .2rem;

            p {
              font-size: .26rem;
              line-height: .5rem;
            }

            span {
              font-size: .2rem;
              display: block;
              overflow: hidden;
              white-space: nowrap;
              text-overflow: ellipsis;
              vertical-align: bottom;
            }
          }
        }
      }
    }
  }
</style>
