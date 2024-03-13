import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import piniaStore from './store'
import { setupNaiveDiscreteApi } from '@/utils/globalMessage'

// style
import '@/styles/index.less'
import '@/styles/reset.less'
import 'uno.css'

// 注册SVG图标
import 'virtual:svg-icons-register'

const app = createApp(App)
app.use(router)
app.use(piniaStore)
setupNaiveDiscreteApi()

app.mount('#app')
