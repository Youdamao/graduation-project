import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import router from 'router'
import 'router/index.css'


createApp(App).mount('#app')
App.use(ElementPlus)
App.use(router)