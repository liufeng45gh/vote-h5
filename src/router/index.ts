import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'
import moduleA from './modules/moduleA'

const routes: Array<RouteRecordRaw> = [...moduleA]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
