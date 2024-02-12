import Vue from 'vue'
import VueRouter from 'vue-router'
import MainBoard from '../views/MainBoard.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'main',
    component: MainBoard
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
