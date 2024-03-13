import { createRouter, createWebHistory } from 'vue-router'
import routers from './router.config'

//导入生成的路由数据
const router = createRouter({
  history: createWebHistory(),
  routes: routers
})

export default router
