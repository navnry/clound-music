import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  scrollBehavior (to, from, savePosition) { // 在点击浏览器的“前进/后退”，或者切换导航的时候触发。
    if (to.hash) { //先判断目标路由有没有hash值
      return { selector: to.hash }
    }
  },
  routes: [
    {
      path: '/',
      redirect: '/found',
    },
    {
      path: '/mine',
      name: 'mine',
      component: () => import('./views/Mine.vue'),
      meta: {
        index: 0,
        keepAlive: true
      }
    },
    {
      path: '/found',
      name: 'found',
      component: () => import('./views/Found.vue'),
      meta: {
        index: 1,
        keepAlive: true
      }
    },
    {
      path: '/village',
      name: 'village',
      component: () => import('./views/Village.vue'),
      meta: {
        index: 2,
        keepAlive: true
      }
    },
    {
      path: '/video',
      name: 'video',
      component: () => import('./views/Video.vue'),
      meta: {
        index: 3,
        keepAlive: true
      }
    },
    {
      path: '/search',
      name: 'search',
      component: () => import('./views/Search.vue'),
      meta: {
        index: 4,
        keepAlive: true
      }
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('./views/Login.vue'),
      meta: {
        index: 5
      }
    },
    {
      path: '/recommondList',
      name: 'recommondList',
      component: () => import('./views/recommondList.vue'),
      meta: {
        index: 6
      }
    },
    {
      path: '/player',
      name: 'player',
      component: () => import('./components/Player.vue'),
      meta: {
        index: 7
      }
    },
    {
      path: '/videoplayer',
      name: 'videoplayer',
      component: () => import('./views/Videoplayer.vue'),
      meta: {
        index: 6
      }
    },
    {
      path: '/commentList',
      name: 'commentList',
      component: () => import('./views/CommentList.vue'),
      meta: {
        index: 8
      }
    }
  ]
})
