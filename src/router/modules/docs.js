export default [
  {
    path: 'base',
    meta: {
      title: 'page-title.base.docs'
    },
    component: () => import(/* webpackChunkName: "group-docs" */ '@/views/docs/main-view.vue'),
    children: [
      {
        path: 'install',
        meta: {
          title: 'page-title.base.docs'
        },
        component: () => import(/* webpackChunkName: "group-docs" */ '@/views/docs/install-view.vue')
      },
      {
        path: 'modal',
        meta: {
          title: 'page-title.base.modal'
        },
        component: () => import(/* webpackChunkName: "group-docs" */ '@/views/docs/modal-view.vue')
      }
    ]
  }
]
