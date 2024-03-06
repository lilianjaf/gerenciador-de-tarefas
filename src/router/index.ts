import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/logar',
      name: 'logar',
      component: () => import('../views/LogarView.vue')
    },
    {
      path: '/tarefa',
      name: 'tarefa',
      component: () => import('../views/TarefaView.vue')
    }
  ]
})

export default router
