import axios from 'axios'

var events = axios.create({
  baseURL: '/api/cobject/v1/events'
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
  }
}

const actions = {
  fetchEvents ({ commit }) {
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
  }
}

const getters = {
}

export default {
  state,
  mutations,
  getters,
  actions
}
