<template>
  <svg aria-hidden="true" class="svg-icon-spin" :class="calsses">
    <use :xlink:href="symbolId" :fill="color" />
  </svg>
</template>

<script lang="ts" setup>
const props = defineProps({
  prefix: {
    type: String,
    default: 'icon'
  },
  name: {
    type: String,
    required: true
  },
  color: {
    type: String,
    default: '#333'
  },
  size: {
    type: String,
    default: '24px'
  }
})
const symbolId = computed(() => `#${props.prefix}-${props.name}`)
const calsses = computed(() => {
  return {
    [`sdms-size-specific`]: props.size
  }
})
const fontSize = reactive({ specific: props.size })
</script>
<style lang="less" scoped>
.svg-icon-spin {
  width: v-bind('fontSize.specific');
  height: v-bind('fontSize.specific');
  fill: v-bind(color);
  vertical-align: middle;
  color: v-bind(color);
  &.sdms-size-specific {
    font-size: v-bind('fontSize.specific');
    height: v-bind('fontSize.specific');
  }
}
</style>
