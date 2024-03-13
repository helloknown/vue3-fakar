import { defineStore } from 'pinia'
import { useDark } from '@vueuse/core'
import { darkTheme } from 'naive-ui'
import { breakpointsTailwind, useBreakpoints } from '@vueuse/core'
import type { BuiltInGlobalTheme } from 'naive-ui/es/themes/interface'

const breakpoints = useBreakpoints(breakpointsTailwind)

export const useAppStore = defineStore('app', {
  state: () => ({
    isDark: useDark(),
    isMobile: breakpoints.smaller('sm')
  }),
  getters: {
    naiveTheme(): BuiltInGlobalTheme | undefined {
      return this.isDark ? darkTheme : undefined
    }
  },
  actions: {
    setIsMobile(isMobile: boolean) {
      this.isMobile = isMobile
    },
    toggleDark() {
      this.isDark = !this.isDark
    }
  },
  persist: {
    storage: localStorage
  }
})
