import Vuex from 'vuex'
import Vue from 'vue'
import auth from './auth'
import events from './events'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    auth,
    events
  },
  strict: true
})
