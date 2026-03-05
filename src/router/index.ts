import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import HowItWorksView from '@/views/HowItWorksView.vue'
import ProblemsView from '@/views/ProblemsView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/how-it-works',
      name: 'how-it-works',
      component: HowItWorksView,
    },
    {
      path: '/problems',
      name: 'problems',
      component: ProblemsView,
    }
  ],
})

export default router
