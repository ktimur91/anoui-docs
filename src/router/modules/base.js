export default [
  {
    path: '',
    meta: {
      title: 'page-title.base.main'
    },
    component: () => import(/* webpackChunkName: "group-base" */ '@/views/base/main-view.vue')
  },
  {
    path: 'changelog',
    meta: {
      title: 'page-title.base.main'
    },
    component: () => import(/* webpackChunkName: "group-base" */ '@/views/base/main-view.vue')
  }
]
