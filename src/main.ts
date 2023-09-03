import './assets/css/main.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { i18n } from '@/plugins/i18n'
import App from './App.vue'
import router from './router'
import './modules'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(i18n)
app.mount('#app')
