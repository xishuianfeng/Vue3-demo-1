import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import { createWebHashHistory, createRouter } from 'vue-router'
import XiFeng from './components/XiFeng.vue'

const history = createWebHashHistory()
const router = createRouter({
  history,
  routes:[
    {path:'',component:XiFeng}
  ]
})

const app = createApp(App)
app.use(router)
app.mount('#app')
