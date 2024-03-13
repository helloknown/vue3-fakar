import type { RouteRecordRaw } from 'vue-router'

const constantRoutes: RouteRecordRaw[] = [
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login/index.vue'),
    meta: { title: '登录' }
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('@/views/login/register.vue'),
    meta: { title: '注册' }
  },
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/home/index.vue'),
    meta: {
      title: '首页'
    }
  },
  {
    path: '/product/:id',
    name: 'Product',
    component: () => import('@/views/product/index.vue'),
    meta: {
      title: '商品详情'
    }
  },
  {
    path: '/order',
    name: 'OrderDetail',
    component: () => import('@/views/order/index.vue'),
    meta: {
      title: '订单详情'
    }
  }
  // ...accessRoutes,
]

export default constantRoutes
