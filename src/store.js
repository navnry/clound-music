import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLogin: false,
    user: window.sessionStorage.getItem('user'),
    token: window.sessionStorage.getItem('token'),
  },
  getters: {},
  mutations: {
    GET_USER: (state, data) => {
      state.user = data
      window.sessionStorage.setItem('user', data)
    },
    SET_TOKEN: (state, data) => {
      state.token = data
      window.sessionStorage.setItem('token', data)
    },
  },
  actions: {}
})
