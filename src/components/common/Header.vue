<template>
  <header
    class="sticky top-0 z-20 w-full flex justify-center flex-col md:flex-row md:items-center gap-3 p-3 lg:px-4 md:h-16 auto-bg2"
  >
    <div class="flex items-center w-full gap-8 lg:w-[1200px]">
      <div class="flex items-center gap-2">
        <h1 class="mr-4 sm:mr-8 h-15 w-[210px] lg:mr-16 sm:h-[52px]">
          <router-link to="/" class="h-15">Fakar</router-link>
        </h1>
      </div>
      <div class="flex items-center gap-2 ml-auto">
        <router-link
          to="/order"
          class="cursor-pointer inline-flex items-center whitespace-nowrap shrink-0 justify-center text-sm transition-colors disabled:pointer-events-none disabled:opacity-50 border border-solid border-#e4e4e7 shadow-sm font-medium hover:bg-#e4e4e7 hover:dark:bg-#222 h-8 px-3 py-2 rounded-full"
        >
          <SvgIcon name="svg-search" size="18px" :color="isDark ? '#fff' : '#111'" />
          <span class="hidden sm:inline">订单查询</span>
        </router-link>
        <div
          @click="toggleDark"
          class="cursor-pointer inline-flex items-center whitespace-nowrap shrink-0 justify-center text-sm transition-colors disabled:pointer-events-none disabled:opacity-50 border border-solid border-#e4e4e7 shadow-sm font-medium hover:bg-#e4e4e7 hover:dark:bg-#222 h-8 px-3 py-2 rounded-full"
        >
          <SvgIcon :name="isDark ? 'svg-moon' : 'svg-sun'" size="20px" :color="isDark ? '#fff' : '#111'" />
        </div>
        <router-link
          to="/login"
          class="cursor-pointer inline-flex items-center whitespace-nowrap shrink-0 justify-center text-sm transition-colors disabled:pointer-events-none disabled:opacity-50 border border-solid border-#e4e4e7 shadow-sm font-medium hover:bg-#e4e4e7 hover:dark:bg-#222 h-8 px-3 py-2 rounded-full"
        >
          <SvgIcon name="svg-user" size="20px" :color="isDark ? '#fff' : '#111'" />
        </router-link>
        <a href="https://github.com/helloknown/vue3-fakar" target="_blank"
          class="cursor-pointer inline-flex items-center whitespace-nowrap shrink-0 justify-center text-sm transition-colors disabled:pointer-events-none disabled:opacity-50 border border-solid border-#e4e4e7 shadow-sm font-medium hover:bg-#e4e4e7 hover:dark:bg-#222 h-8 px-3 py-2 rounded-full"
        >
          <SvgIcon name="svg-github" size="20px" :color="isDark ? '#fff' : '#111'" />
        </a>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { useDark, useToggle } from '@vueuse/core'
import { useAppStore } from '@/store'

const appStore = useAppStore()
const isDark = useDark()
const toggleDark = () => {
  appStore.toggleDark()
  useToggle(isDark)()
}
</script>

<style scoped></style>
