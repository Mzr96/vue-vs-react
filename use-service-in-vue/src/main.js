import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import ApiService from './core/services/ApiService'
const app = createApp(App)
ApiService.init(app)
app.mount('#app')
