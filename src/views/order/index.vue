<template>
  <CommpnPage>
    <n-back-top :right="50" :bottom="80" />
    <main class="auto-bg h-full flex flex-col items-center">
      <div class="auto-bg2 mt-12 m-6 flex-1 rounded-2 lg:w-[1200px] lg:px-0 w-90%">
        <div class="p-5 pt-2 pb-2 text-5 border-b-1px border-b-dashed border-b-#efefef">
          <p>订单查询</p>
        </div>
        <div class="p-4">
          <n-space>
            <n-form ref="formInstRef" :model="model" :rules="rules" inline>
              <n-form-item path="keywords" label="联系方式或订单号">
                <n-input
                  ref="keywordsRef"                  
                  v-model:value="model.keywords"
                  type="text"
                  placeholder="请输入联系方式或订单号"
                  clearable
                />
              </n-form-item>
              <n-form-item path="password" label="查询密码">
                <n-input
                  ref="passwordRef"
                  v-model:value="model.password"
                  type="password"
                  show-password-on="mousedown"
                  placeholder="请输入查询密码"
                  clearable
                />
              </n-form-item>
            </n-form>
            <div class="flex items-center h-full">             
                <n-button type="primary" @click="fetchOrderList()" class="mr-4">查询</n-button>
                <n-button type="error" @click="handleClear()">清除</n-button>
            </div>
          </n-space>
        </div>
      </div>

      <div v-if="isShow" class="auto-bg2 mb-20 flex-1 rounded-2 lg:w-[1200px] lg:px-0 w-90%">
        <div class="p-5 pt-2 pb-2 text-5 border-b-1px border-b-dashed border-b-#efefef">
          <p>订单详情</p>
        </div>
        <div class="p-4">
          <n-card v-for="order in orderList" class="mb-4" v-if="orderList.length > 0">
            <div class="mb-1">
              <label>订单号:</label>
              <span class="ml-1">{{ order.orderNo }}</span>
            </div>
            <div class="mb-1">
              <label>下单金额:</label>
              <span class="ml-1">{{ order.orderAmt }}</span>
            </div>
            <div class="mb-1">
              <label>购买数量:</label>
              <span class="ml-1">{{ order.buyNum }}</span>
            </div>
            <div class="mb-1">
              <label>下单时间:</label>
              <span class="ml-1">{{ order.orderDate }}</span>
            </div>
            <div class="mb-1">
              <label>商品名称:</label>
              <span class="ml-1">{{ order.productId }}</span>
            </div>
            <div class="mb-1">
              <label>支付方式:</label>
              <span class="ml-1">{{ order.payType }}</span>
            </div>
            <div class="mb-1">
              <label>订单状态:</label>
              <span class="ml-1">{{ order.orderStatus }}</span>
            </div>
          </n-card>
          <p v-else="orderList.length == 0">
            <n-result status="404" title="订单未找到" description="不应该啊，没道理">
              <template #footer>
                <n-button @click="handleFocus()">再试一次</n-button>
              </template>
            </n-result>
          </p>
        </div>
      </div>
    </main>
  </CommpnPage>
</template>

<script setup lang="ts">
import { FormInst, InputInst } from 'naive-ui'
import { getOrderList } from '@/api/order'
import { OrderDetail } from '@/api/order/model'

const isShow = ref(false)
const orderList = ref<OrderDetail[]>([])

const formInstRef = ref<FormInst | null>(null)
const keywordsRef = ref<InputInst | null>(null)
const passwordRef = ref<InputInst | null>(null)

const model = ref({
  keywords: '',
  password: ''
})

const rules = ref({
  keywords: {
    required: true,
    message: '不能为空'
  },
  password: {
    required: true,
    message: '不能为空'
  }
})

const handleClear = () => {
  keywordsRef.value?.clear()
  passwordRef.value?.clear()
}

const handleFocus = () => {
  keywordsRef.value?.focus()
}

const fetchOrderList = async () => {
  const errors = await new Promise((resolve) => {
    formInstRef.value?.validate((errors) => {
      resolve(errors)
    })
  })
  if (!errors) {
    isShow.value = true
    orderList.value = await getOrderList({ keywords: model.value.keywords, password: model.value.password })
  }
}
</script>
