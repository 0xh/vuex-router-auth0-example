import axios from 'axios'

var schedules = axios.create({
  baseURL: '/api/cobject/v1/schedules'
});

const state = {
  all: []
}

const mutations = {
  SET_SCHEDULES (state, payload) {
    state.all = payload.data
  },
  ADD_SCHEDULE (state, payload) {
    state.all.push(payload)
  }
}

const actions = {
  fetchSchedules ({ commit }) {
    return schedules.get('')
      .then(resp => resp.data)
      .then(events => commit('SET_EVENTS', events))
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

}

export default {
  state,
  mutations,
  getters,
  actions
}
