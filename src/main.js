import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import remConfig from './remConfig'
import './assets/css/base.css'
import iView from 'iview'
import 'iview/dist/styles/iview.css'
import 'swiper/dist/css/swiper.css'
import axios from 'axios'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import Vant from 'vant'
import 'vant/lib/index.css'
import infiniteScroll from 'vue-infinite-scroll'

Vue.use(infiniteScroll)
Vue.use(Vant)
remConfig()
Vue.prototype.$axios = axios
Vue.config.productionTip = false
Vue.use(iView)
Vue.use(ElementUI)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
