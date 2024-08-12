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
      // meta: {
      //   middleware: [isAccess, isAuth]
      // },
      component: () => import('@/layouts/default-layout.vue'),
      children: [...main]
    },
    {
      path: '/docs',
      // meta: {
      //   middleware: [isAccess, isAuth]
      // },
      component: () => import('@/layouts/default-layout.vue'),
      children: [...docs]
    },
    // {
    //   path: '/docs',
    //   // meta: {
    //   //   middleware: [isGuest]
    //   // },
    //   component: () => import('@/layouts/docs-layout.vue'),
    //   children: [...docs]
    // },
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
