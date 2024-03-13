import { createPinia } from 'pinia'
import { useAppStore } from './modules/app'
import { useCategotyStore } from './modules/product'

import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)

export { useAppStore, useCategotyStore }
export default pinia
