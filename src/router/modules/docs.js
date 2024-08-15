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
          title: 'nav.start.install',
          prevNext: {
            prev: {
              name: 'nav.main.changelog',
              path: '/changelog'
            },
            next: {
              name: 'nav.start.styles',
              path: '/docs/start/styles'
            }
          }
        },
        component: () => import(/* webpackChunkName: "group-docs-start" */ '@/views/docs/start/install-view.vue')
      },
      {
        path: 'styles',
        meta: {
          title: 'nav.start.styles',
          prevNext: {
            prev: {
              name: 'nav.start.install',
              path: '/docs/start/install'
            },
            next: {
              name: 'nav.start.icons',
              path: '/docs/start/icons'
            }
          }
        },
        component: () => import(/* webpackChunkName: "group-docs-start" */ '@/views/docs/start/styles-view.vue')
      },
      {
        path: 'icons',
        meta: {
          title: 'nav.start.icons',
          prevNext: {
            prev: {
              name: 'nav.start.styles',
              path: '/docs/start/styles'
            },
            next: {
              name: 'nav.baseComponents.modal',
              path: '/docs/base-components/modal'
            }
          }
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
          title: 'nav.baseComponents.modal',
          prevNext: {
            prev: {
              name: 'nav.start.icons',
              path: '/docs/start/icons'
            },
            next: {
              name: 'nav.baseComponents.modal',
              path: '/docs/base-components/modal'
            }
          }
        },
        component: () =>
          import(/* webpackChunkName: "group-docs-base-components" */ '@/views/docs/base-components/modal-view.vue')
      }
    ]
  }
]
