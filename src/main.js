import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import dashboard from './components/Dashboard'
import login from './components/LoginCallback'
import store from './store'

Vue.use(VueRouter)

// FROM:
//  - https://github.com/vuejs/vue-router/blob/c4f9836aa9676e2574f98ecb7bc76f7d2f628c63/examples/auth-flow/app.js
//  - http://stackoverflow.com/questions/39940665/passing-vuex-module-state-into-vue-router-during-beforeeach
function requireAuth (to, from, next) {
  if (!store.getters.isAuthenticated) {
    window.location.href = '/auth/v1/auth0/connect'
  } else {
    next()
  }
}

const routes = [
  {
    path: '/dashboard',
    component: dashboard,
    beforeEnter: requireAuth
  },
  {
    path: '/login/callback',
    component: login
    /*redirect (router) {
      debugger
      store.dispatch('login', router.query.jwt).then( (resp) => {
        debugger
        return '/dashboard'
      })
    }*/
  }
]
const router = new VueRouter({
  routes,
  mode: 'history',
  base: __dirname
})

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
