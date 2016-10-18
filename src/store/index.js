import Vuex from 'vuex'
import Vue from 'vue'
import auth from './auth'
import events from './events'
import schedules from './schedules'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    auth,
    events,
    schedules
  },
  strict: true
})
