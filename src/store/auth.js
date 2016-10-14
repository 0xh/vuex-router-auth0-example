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

const getters = {
  isAuthenticated: state => {
    return state.auth
  }
}

export default {
  state,
  mutations,
  getters
}
