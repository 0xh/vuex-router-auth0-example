import axios from 'axios'

const state = {
  userInfo: null
}

const mutations = {
  LOGIN (state, data) {
    state.userInfo = data
  },
  LOGOUT (state) {
    state.userInfo = null
  }
}

const actions = {
  logout ({ commit }) {
    delete localStorage.token
    axios.defaults.headers.common[ 'x-stamplay-jwt' ] = undefined
    delete axios.defaults.headers.common[ 'x-stamplay-jwt' ]
    commit('LOGOUT')
  },
  login ({ commit }, token) {
    localStorage.token = token
    axios.defaults.headers.common[ 'x-stamplay-jwt' ] = token
    return axios
      .get('/api/user/v1/getstatus')
      .then(resp => {
        commit('LOGIN', resp.data.user)
        return resp.data.user
      })
  }
}

const getters = {
  isAuthenticated: state => {
    return !!state.userInfo
  }
}

export default {
  state,
  mutations,
  getters,
  actions
}
