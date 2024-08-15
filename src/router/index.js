import { createRouter, createWebHistory } from 'vue-router'

// Local
import main from './modules/main'
import docs from './modules/docs'

// Routing
const router = createRouter({
  history: createWebHistory(import.meta.env.VITE_BASE_URL),
  linkExactActiveClass: 'active',
  routes: [
    {
      path: '/',
      component: () => import('@/layouts/default-layout.vue'),
      children: [...main]
    },
    {
      path: '/docs',
      component: () => import('@/layouts/default-layout.vue'),
      children: [...docs]
    },
    {
      path: '/redirect',
      component: () => import('@/views/redirect-view.vue')
    },
    {
      path: '/:pathMatch(.*)*',
      component: () => import('@/views/error-view.vue')
    }
  ]
})

export default router
