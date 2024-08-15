// NPM
import * as components from '@ano-vue3/ui/components'
import { createApp } from 'vue'

// Local
import App from './App.vue'

// Create application
const app = createApp(App)

// Register all components globaly
for (const key in components) {
  if (Object.hasOwnProperty.call(components, key)) {
    const element = components[key]
    if (element?.__name) app.component(element.__name, element)
  }
}

// Mount to element
app.mount('#some-app')
