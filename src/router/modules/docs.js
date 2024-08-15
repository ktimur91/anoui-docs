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
              name: 'nav.baseComponents.alert',
              path: '/docs/base-components/alert'
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
        path: 'alert',
        meta: {
          title: 'nav.baseComponents.alert',
          prevNext: {
            prev: {
              name: 'nav.start.icons',
              path: '/docs/start/icons'
            },
            next: {
              name: 'nav.baseComponents.dropdown',
              path: '/docs/base-components/dropdown'
            }
          }
        },
        component: () =>
          import(
            /* webpackChunkName: "group-docs-base-components" */ '@/views/docs/base-components/alert/alert-view.vue'
          )
      },
      {
        path: 'dropdown',
        meta: {
          title: 'nav.baseComponents.dropdown',
          prevNext: {
            prev: {
              name: 'nav.baseComponents.alert',
              path: '/docs/base-components/alert'
            },
            next: {
              name: 'nav.baseComponents.icon',
              path: '/docs/base-components/icon'
            }
          }
        },
        component: () =>
          import(/* webpackChunkName: "group-docs-base-components" */ '@/views/docs/base-components/modal-view.vue')
      },
      {
        path: 'icon',
        meta: {
          title: 'nav.baseComponents.icon',
          prevNext: {
            prev: {
              name: 'nav.baseComponents.dropdown',
              path: '/docs/base-components/dropdown'
            },
            next: {
              name: 'nav.baseComponents.modal',
              path: '/docs/base-components/modal'
            }
          }
        },
        component: () =>
          import(/* webpackChunkName: "group-docs-base-components" */ '@/views/docs/base-components/modal-view.vue')
      },
      {
        path: 'modal',
        meta: {
          title: 'nav.baseComponents.modal',
          prevNext: {
            prev: {
              name: 'nav.baseComponents.icon',
              path: '/docs/base-components/icon'
            },
            next: {
              name: 'nav.baseComponents.toast',
              path: '/docs/base-components/toast'
            }
          }
        },
        component: () =>
          import(/* webpackChunkName: "group-docs-base-components" */ '@/views/docs/base-components/modal-view.vue')
      },
      {
        path: 'toast',
        meta: {
          title: 'nav.baseComponents.toast',
          prevNext: {
            prev: {
              name: 'nav.baseComponents.modal',
              path: '/docs/base-components/modal'
            },
            next: {
              name: 'nav.formComponents.input',
              path: '/docs/form-components/input'
            }
          }
        },
        component: () =>
          import(/* webpackChunkName: "group-docs-base-components" */ '@/views/docs/base-components/modal-view.vue')
      }
    ]
  },
  {
    path: 'form-components',
    meta: {
      sectionName: 'nav.section.formComponents'
    },
    component: () => import(/* webpackChunkName: "group-docs" */ '@/views/docs/main-view.vue'),
    children: [
      {
        path: 'input',
        meta: {
          title: 'nav.formComponents.input',
          prevNext: {
            prev: {
              name: 'nav.baseComponents.toast',
              path: '/docs/base-components/toast'
            },
            next: {
              name: 'nav.formComponents.textarea',
              path: '/docs/form-components/textarea'
            }
          }
        },
        component: () =>
          import(/* webpackChunkName: "group-docs-form-components" */ '@/views/docs/base-components/modal-view.vue')
      },
      {
        path: 'textarea',
        meta: {
          title: 'nav.formComponents.textarea',
          prevNext: {
            prev: {
              name: 'nav.formComponents.input',
              path: '/docs/form-components/input'
            },
            next: {
              name: 'nav.formComponents.select',
              path: '/docs/form-components/select'
            }
          }
        },
        component: () =>
          import(/* webpackChunkName: "group-docs-form-components" */ '@/views/docs/base-components/modal-view.vue')
      },
      {
        path: 'select',
        meta: {
          title: 'nav.formComponents.select',
          prevNext: {
            prev: {
              name: 'nav.formComponents.textarea',
              path: '/docs/form-components/textarea'
            },
            next: {
              name: 'nav.formComponents.autocomplete',
              path: '/docs/form-components/autocomplete'
            }
          }
        },
        component: () =>
          import(/* webpackChunkName: "group-docs-form-components" */ '@/views/docs/base-components/modal-view.vue')
      },
      {
        path: 'autocomplete',
        meta: {
          title: 'nav.formComponents.autocomplete',
          prevNext: {
            prev: {
              name: 'nav.formComponents.select',
              path: '/docs/form-components/select'
            },
            next: {
              name: 'nav.formComponents.checkbox',
              path: '/docs/form-components/checkbox'
            }
          }
        },
        component: () =>
          import(/* webpackChunkName: "group-docs-form-components" */ '@/views/docs/base-components/modal-view.vue')
      },
      {
        path: 'checkbox',
        meta: {
          title: 'nav.formComponents.checkbox',
          prevNext: {
            prev: {
              name: 'nav.formComponents.autocomplete',
              path: '/docs/form-components/autocomplete'
            },
            next: {
              name: 'nav.formComponents.radio',
              path: '/docs/form-components/radio'
            }
          }
        },
        component: () =>
          import(/* webpackChunkName: "group-docs-form-components" */ '@/views/docs/base-components/modal-view.vue')
      },
      {
        path: 'radio',
        meta: {
          title: 'nav.formComponents.radio',
          prevNext: {
            prev: {
              name: 'nav.formComponents.checkbox',
              path: '/docs/form-components/checkbox'
            }
          }
        },
        component: () =>
          import(/* webpackChunkName: "group-docs-form-components" */ '@/views/docs/base-components/modal-view.vue')
      }
    ]
  }
]
