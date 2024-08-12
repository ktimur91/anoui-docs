export default [
  {
    path: 'start',
    meta: {
      sectionName: 'nav.section.start'
    },
    component: () => import(/* webpackChunkName: "group-docs" */ '@/views/docs/main-view.vue'),
    children: [
      {
        path: 'install',
        meta: {
          title: 'nav.start.install'
        },
        component: () => import(/* webpackChunkName: "group-docs-start" */ '@/views/docs/start/install-view.vue')
      },
      {
        path: 'styles',
        meta: {
          title: 'nav.start.styles'
        },
        component: () => import(/* webpackChunkName: "group-docs-start" */ '@/views/docs/start/install-view.vue')
      },
      {
        path: 'icons',
        meta: {
          title: 'nav.start.icons'
        },
        component: () => import(/* webpackChunkName: "group-docs-start" */ '@/views/docs/start/install-view.vue')
      }
    ]
  },
  {
    path: 'base-components',
    meta: {
      sectionName: 'nav.section.baseComponents'
    },
    component: () => import(/* webpackChunkName: "group-docs" */ '@/views/docs/main-view.vue'),
    children: [
      {
        path: 'modal',
        meta: {
          title: 'nav.baseComponents.modal'
        },
        component: () =>
          import(/* webpackChunkName: "group-docs-base-components" */ '@/views/docs/base-components/modal-view.vue')
      }
    ]
  }
]
