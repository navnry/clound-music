<template>
  <div class="banner">
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="banners in bannersArr" :key="banners.index">
          <img :src="banners.pic" alt="">
          <span :style="{'background-color':banners.titleColor}">{{banners.typeTitle}}</span>
        </div>
      </div>
      <div class="swiper-pagination swiper-pagination-white"></div>
    </div>
  </div>
</template>

<script>
  import Swiper from 'swiper'
  import { androidBanner } from '@/request/api'

  export default {
    name: 'Banner',
    data () {
      return {
        fs: 0,
        bannersArr: []
      }
    },
    mounted () {
      this.fs = parseInt(document.getElementById('html').style.fontSize) / 100
      this._getBanners()
    },
    methods: {
      _getBanners () {
        androidBanner({
          type: 1
        }).then(res => {
          console.log(res.banners)
          this.bannersArr = res.banners
          this.$nextTick(function () {
            this.initSwiper()
          })
        })
      },
      initSwiper () {
        new Swiper('.banner .swiper-container', {
          speed: 600,
          spaceBetween: this.fs * 34,
          loop: true,
          autoplay: {
            delay: 5000,
            disableOnInteraction: false
          },
          pagination: {
            el: '.banner .swiper-pagination'
          }
        })
      }
    }
  }
</script>

<style scoped lang="less">
  .banner {
    margin-top: .2rem;

    .swiper-container {
      padding: 0 .3rem;

      .swiper-pagination-bullets {
        bottom: .1rem;

        .swiper-pagination-bullet {
          width: .1rem;
          height: .1rem;
          border-radius: 0;
        }
      }

      .swiper-wrapper {

        .swiper-slide {
          border-radius: .15rem;
          overflow: hidden;

          img {
            display: block;
          }

          span {
            color: #ffffff;
            line-height: .4rem;
            display: block;
            padding: 0 .1rem;
            position: absolute;
            bottom: 0;
            right: 0;
          }
        }
      }

    }
  }

  .swiper-pagination-bullet {
    width: 0.16rem;
    height: 0.16rem;
    display: inline-block;
    border-radius: 0;
    background: #000;
    opacity: 0.2;
  }
</style>
