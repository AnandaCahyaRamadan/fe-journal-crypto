import { createRouter, createWebHistory } from 'vue-router'

import Home from '../pages/HomePage.vue'
import Login from '../pages/LoginPage.vue'
import Register from '../pages/RegisterPage.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
