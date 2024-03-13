<template>
  <router-link
    :to="'/product/' + product.id"
    class="product-card flex-col rounded-1 block relative aspect-preview group border border-gray-200 shadow hover:shadow-lg overflow-hidden transition-all sm:w-[200px] lg:w-[220px] cursor-pointer"
  >
    <img :src="product.image" class="w-full h-[200px] object-cover" />
    <div class="pl-3 pr-3 pt-2 flex-col">
      <n-ellipsis :line-clamp="2">
        <p class="text-sm">{{ product.desc }}</p>
      </n-ellipsis>
      <p class="text-lg font-semibold text-red-600 pt-2 pb-2">¥ {{ product.price }}</p>
    </div>
  </router-link>
</template>

<script setup lang="ts">
import { Product } from '@/api/product/model'

defineProps<{ product: Product }>()
</script>

<style scoped></style>
