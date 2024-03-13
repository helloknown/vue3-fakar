<template>
  <CommpnPage>
    <main class="auto-bg h-full flex flex-col items-center">
      <div class="auto-bg2 m-12 flex-1 rounded-2 lg:w-[1200px] lg:px-0 w-90%">
        <div class="p-5 pt-2 pb-2 text-5 border-b-1px border-b-dashed border-b-#efefef">
          <p>公告</p>
        </div>
        <div class="p-5">
          <p>
            本店铺程序是完全开源项目，作为学习开发商城为目的，请不要在没有运营资质情况下搭建运营以及二次开发，万不可触犯法律底线。
          </p>
          <p>本页面仅供开源程序演示为目的，不提供任何实际功能进行操作。</p>
        </div>
      </div>

      <div class="auto-bg2 mb-20 flex-1 rounded-2 lg:w-[1200px] lg:px-0 w-90%">
        <div class="p-5 pt-2 pb-2 text-5 border-b-1px border-b-dashed border-b-#efefef">
          <p>商品</p>
        </div>
        <div class="pt-5 pl-6 pr-5">
          <n-space>
            <n-button
              strong
              secondary
              round
              @click="selectCategory()"
              :type="selected == undefined ? 'primary' : 'default'"
            >
              全部
            </n-button>
            <n-button
              strong
              secondary
              round
              v-for="item in category"
              :key="item.id"
              @click="selectCategory(item.id)"
              :type="item.id === selected ? 'primary' : 'default'"
            >
              {{ item.name }}
            </n-button>
          </n-space>
        </div>
        <div class="m-4">
          <n-grid cols="1 600:2 1000:4">
            <n-grid-item class="mt-2 mb-2 f-c-c" v-for="product in productList">
              <ProductCard :product="product" />
            </n-grid-item>
          </n-grid>
        </div>
      </div>
    </main>
  </CommpnPage>
</template>

<script setup lang="ts">
import { Product } from '@/api/product/model'
import { getProductList } from '@/api/product'
import { useCategotyStore } from '@/store/modules/product'

const store = useCategotyStore()

onMounted(() => {
  store.fetchCategory()
  getAllProduct()
})
const category = computed(() => store.getCategory)

let productList = ref<Product[]>([])

const selected = ref()
const selectCategory = async (id?: number) => {
  console.log('点击了按钮，id为：' + id)
  if (id != selected.value) {
    selected.value = id
    productList.value = await getProductList({ catId: id })
  }
}

const getAllProduct = async () => {
  productList.value = await getProductList()
}
</script>
