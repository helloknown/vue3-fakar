<script setup lang="ts">
import { useAppStore } from '@/store'

const appStore = useAppStore()

watch(
  () => appStore.isDark,
  (newValue) => {
    if (newValue) document.documentElement.classList.add('dark')
    else document.documentElement.classList.remove('dark')
  },
  {
    immediate: true
  }
)

// function handleWindowResize() {
// 	appStore.setIsMobile(document.body.offsetWidth <= 640)
// }
// onMounted(() => {
//   handleWindowResize()
//   window.addEventListener('resize', handleWindowResize)
// })
// onBeforeUnmount(() => {
//   window.removeEventListener('resize', handleWindowResize)
// })
</script>

<template>
  <n-config-provider wh-full :theme="appStore.naiveTheme">
    <slot />
  </n-config-provider>
</template>
