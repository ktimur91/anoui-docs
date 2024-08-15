export default [
  {
    path: '',
    meta: {
      title: 'nav.main.home'
    },
    component: () => import(/* webpackChunkName: "group-base" */ '@/views/base/main-view.vue')
  },
  {
    path: 'changelog',
    meta: {
      title: 'nav.main.changelog'
    },
    component: () => import(/* webpackChunkName: "group-base" */ '@/views/base/main-view.vue')
  }
]
