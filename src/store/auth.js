import axios from 'axios'

const state = {
  auth: null
}

const mutations = {
  LOGIN (state, data) {
    state.auth = data.auth
    console.log('Action auth LOGIN')
  },
  LOGOUT (state) {
    console.log('Action auth LOGOUT')
    state.auth = null
  }
}

const actions = {
  logout ({ commit }) {
    delete localStorage.token
    axios.defaults.headers.post[ 'x-stamplay-jwt' ] = undefined
    delete axios.defaults.headers.post[ 'x-stamplay-jwt' ]
    commit('LOGOUT')
  },
  login ({ commit }, token) {
    debugger
    localStorage.token = token
    axios.defaults.headers.post[ 'x-stamplay-jwt' ] = token
    return axios.get('/api/user/v1/getstatus').then(resp => {
      debugger
      commit('LOGIN', token)
    })
  }

}

const getters = {
  isAuthenticated: state => {
    return state.auth
  }
}

export default {
  state,
  mutations,
  getters,
  actions
}
