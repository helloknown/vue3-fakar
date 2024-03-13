/**
 * 按需加载，自动引入依赖
 */

import AutoImport from 'unplugin-auto-import/vite'

export const createAutoImportPlugin = () => {
  return AutoImport({
    imports: [
      'vue',
      'vue-router',
      'pinia',
      {
        'naive-ui': ['useDialog', 'useMessage', 'useNotification', 'useLoadingBar']
      }
    ],
    dts: 'types/auto-imports.d.ts'
  })
}
