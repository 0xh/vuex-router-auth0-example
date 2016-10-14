import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import dashboard from './components/Dashboard'
import login from './components/Login'

Vue.use(VueRouter)

const routes = [
  { path: '/dashboard', component: dashboard },
  { path: '/login', component: login }
]
const router = new VueRouter({
  routes
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
