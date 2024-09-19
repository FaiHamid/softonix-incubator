import { createApp } from 'vue'
import App from '@/App.vue'

import 'element-plus/theme-chalk/index.css'
import '@/assets/styles/main.scss'

const app = createApp(App)

app.mount('#app')

export {
  app
}
