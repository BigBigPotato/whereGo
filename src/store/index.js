import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

let city = localStorage.getItem('defaultCity')

export default new Vuex.Store({
	state: {
    city: city ? city : '上海'
  },
  actions: {
    toChangeCity (ctx,city) {
      ctx.commit('toChangeCity',city)
    }
  },
  mutations: {
    toChangeCity (state,city) {
      if(state.city !== city){
        localStorage.setItem('defaultCity',city)
        state.city = city
      }
    }
  }
})