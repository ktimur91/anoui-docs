// Styles
// import '@ano-vue3/ui/styles'
import 'tippy.js/dist/tippy.css'
import './assets/scss/core/styles.scss'

// Base
import { createApp } from 'vue'
import { createPinia } from 'pinia'

// NPM
import i18n from './i18n'
import VueTippy from 'vue-tippy'
import { addIconPacks } from '@ano-vue3/ui/plugins'

// Local
import App from './App.vue'
import router from './router'

// Icons
// import outline from './assets/sprites/outline.svg'
// import solid from './assets/sprites/solid.svg'
import fileTypes from './assets/sprites/fileTypes.svg'
import mdi from './assets/sprites/mdi.svg'
import bi from './assets/sprites/bi.svg'

// Config
addIconPacks({ fileTypes, mdi, bi })

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(i18n)
app.use(VueTippy, {
  directive: 'tippy',
  component: 'tippy',
  componentSingleton: 'tippy-singleton',
  defaultProps: {
    placement: 'top',
    allowHTML: true
  }
})

app.mount('#app')
