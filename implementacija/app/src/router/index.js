import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    alias: '/login',
    name: 'Home',
    component: Login
  },
  {
    path: '/kupac',
    name: 'Kupac',
    component: () => import('../views/Kupac.vue')
  },
  {
    path: '/prodavac',
    name: 'Prodavac',
    component: () => import('../views/Prodavac.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
