import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import HowItWorksView from '@/views/HowItWorksView.vue'
import ProblemsView from '@/views/ProblemsView.vue'
import BibliographyView from '@/views/BibliographyView.vue'
import ListOfIllustrationsView from '@/views/ListOfIllustrationsView.vue'
import CoverPageView from '@/views/CoverPageView.vue'
import ConclusionView from '@/views/ConclusionView.vue'
import ThanksForAttention from '@/views/ThanksForAttention.vue'

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
    },
    {
      path: '/bibliography',
      name: 'bibliography',
      component: BibliographyView,
    },
    {
      path: '/list-of-illustrations',
      name: 'list-of-illustrations',
      component: ListOfIllustrationsView,
    },
    {
      path: '/cover-page',
      name: 'cover-page',
      component: CoverPageView
    },
    {
      path: '/conclusion',
      name: 'conclusion',
      component: ConclusionView
    },
    {
      path: '/thanks-for-attention',
      name: 'thanks-for-attention',
      component: ThanksForAttention
    }
  ],
})

export default router
