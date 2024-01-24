import { createRouter, createWebHistory } from 'vue-router'

// Route page configuration
const routes = [
    {
      path: '/',
      name: 'home',
      component: () => import('../pages/HomeView.vue')
    },
    {
      path: '/aluno',
      name: 'aluno',
      component: () => import('../pages/AlunoView.vue')
    }
]

// instance vue-router and configurations
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router