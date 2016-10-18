import axios from 'axios'

var events = axios.create({
  baseURL: '/api/cobject/v1/events'
});
var schedules = axios.create({
  baseURL: '/api/cobject/v1/schedules'
});

const state = {
  all: []
}

const mutations = {
  SET_EVENTS (state, payload) {
    state.all = payload.data
  },
  ADD_EVENT (state, payload) {
    state.all.push(payload)
  },
  ADD_SCHEDULE (state, payload) {

  }
}

const actions = {
  fetchEvens ({ commit }) {
    return events.get('')
      .then(resp => resp.data)
      .then(events => commit('SET_EVENTS', events))
  },
  saveEvent({ commit }, payload) {
    return events.post('', payload)
      .then(res => res.data)
      .then(event => {
        commit('ADD_EVENT', event)
        return event
      })
  },
  saveSchedule({ commit }, payload) {
    return schedules.post('', payload)
      .then(res => res.data)
      .then(schedule => {
        commit('ADD_SCHEDULE', schedule)
        return schedule
      })
  }
}

const getters = {
  getEvents: state => state.all
}

export default {
  state,
  mutations,
  getters,
  actions
}
