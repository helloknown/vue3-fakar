import { defineConfig, loadEnv } from 'vite'
import path from 'path'
import { createVitePlugins } from './config/vite/plugins'
import { createViteProxy } from './config/vite/proxy'

// https://vitejs.dev/config/
export default defineConfig(({ mode, command }) => {
  const viteEnv = loadEnv(mode, process.cwd()) as ViteEnv
  const { VITE_PORT, VITE_PUBLIC_PATH, VITE_USE_PROXY, VITE_PROXY_TYPE } = viteEnv
  return {
    // 部署生产环境和开发环境下的URL。
    // 默认情况下，vite 会假设你的应用是被部署在一个域名的根路径上
    // 例如，如果你的应用被部署在 https://www.test.abc/admin/，则设置 baseUrl 为 /admin/。
    base: VITE_PUBLIC_PATH === 'production' ? '/' : '/',
    plugins: createVitePlugins(viteEnv, command === 'build'),
    resolve: {
      alias: {
        // 设置路径
        '~': path.resolve(__dirname, './'),
        // 设置别名
        '@': path.resolve(__dirname, './src')
      },
      extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', '.vue']
    },
    // vite 相关配置
    server: {
      port: VITE_PORT,
      host: true,
      open: false,
      proxy: createViteProxy(VITE_USE_PROXY, VITE_PROXY_TYPE as ProxyType)
    },
    css: {}
  }
})
