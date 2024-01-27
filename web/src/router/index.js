import { createRouter, createWebHistory } from 'vue-router'

// Route page configuration
const routes = [
    {
      path: '/',
      name: 'home',
      component: () => import('../pages/HomeView.vue')
    },
    {
      path: '/student',
      name: 'student',
      component: () => import('../pages/StudentView.vue')
    }
]

// instance vue-router and configurations
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router