<template>
  <CommpnPage>
    <main class="auto-bg h-full flex flex-col items-center pb-8">
      <div class="auto-bg2 m-12 flex-1 rounded-2 lg:w-[1200px] lg:px-0 w-90%">
        <div class="p-5 pt-2 pb-2 text-5 border-b-1px border-b-dashed border-b-#efefef">
          <p>商品详情</p>
        </div>
        <div class="p-5 grid md:grid-cols-2 sm:grid-rows-2 md:grid-rows-1 gap-10">
          <div class="p-4">
            <n-image
              width="280"
              :src="product.image"
            />
            <p class="mt-4 text-4">{{ product.desc }}</p>
          </div>
          <div class="pl-4 pr-4 border-l border-gray-200">
            <h1>{{ product.name }}</h1>
            <div class="flex items-baseline mb-4">
              <label class="mr-4 w-20">商品单价: </label>
              <span className="text-lg font-semibold mr-1 text-red-500">¥{{ product.price }}</span>
            </div>
            <div class="flex items-baseline mb-4">
              <label class="mr-4 w-20">发货方式: </label>
              <n-tag type="success" size="small" round>自动发货</n-tag>
            </div>
            <div class="flex items-baseline mb-4">
              <label class="mr-4 w-20">联系方式: </label>
              <n-input
                type="text"
                size="small"
                placeholder="手机号或邮箱"
                v-model:value="order.contact"
                :style="{ width: '50%' }"
                clearable
              />
            </div>
            <div class="flex items-baseline mb-4">
              <label class="mr-4 w-20">查询密码: </label>
              <n-input
                type="password"
                size="small"
                show-password-on="mousedown"
                v-model:value="order.searchPassword"
                placeholder="密码"
                :style="{ width: '50%' }"
                :maxlength="24"
              />
            </div>
            <div class="flex items-baseline mb-4">
              <label class="mr-4 w-20">购买数量: </label>
              <n-input-number
                size="small"
                placeholder="数量"
                v-model:value="buyNum"
                min="1"
                :style="{ width: '50%' }"
              />
            </div>
            <div class="flex items-baseline mb-4">
              <label class="mr-4 w-20">人机验证: </label>
              <n-input type="text" size="small" placeholder="验证码" :style="{ width: '50%' }" clearable />
            </div>
            <div class="flex items-baseline mb-4">
              <label class="mr-4 w-20">订单金额: </label>
              <span className="text-lg font-semibold mr-1 text-red-500">¥{{ buyNum * product.price }}</span>
            </div>
            <div class="flex-col items-baseline mb-4">
              <div class="mr-10 mb-4 w-20 text-lg font-semibold">支付方式</div>
              <div class="flex flex-wrap items-center">
                <div
                  v-for="payment in paymthdList"
                  :key="payment.id"
                  @click="creadeOrder()"
                  class="border border-solid border-#eee hover:border-cyan p-1 mr-4 mb-4 cursor-pointer shadow"
                >
                  <SvgIcon class="cursor-pointer" :name="`svg-${payment.icon}`" size="28px" />{{ payment.payName }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </CommpnPage>
</template>

<script setup lang="ts">
import { Product } from '@/api/product/model'
import { OrderReq, PaymentMthd } from '@/api/order/model'
import { getProductDetail } from '@/api/product'
import { getPayMethod } from '@/api/order'

const router = useRouter()
console.log(router.currentRoute.value.params)
const productId = ref<string>(router.currentRoute.value.params.id as string)
const buyNum = ref(1)

const product = ref<Product>({
  id: '',
  name: '',
  catId: 0,
  title: '',
  desc: '',
  image: '',
  price: 0
})
const paymthdList = ref<PaymentMthd[]>()

const order = ref<OrderReq>({
  title: '',
  buyNum: buyNum.value,
  payType: '1',
  orderAmt: 0,
  contact: '',
  searchPassword: '',
  productId: productId.value,
  orderType: ''
})

const fetchProductDetail = async () => {
  product.value = await getProductDetail({ id: productId.value })
}

const fetchPaymentMthd = async () => {
  paymthdList.value = await getPayMethod()
}

const creadeOrder = () => {
  console.log('支付开始')
}

onMounted(() => {
  fetchProductDetail()
  fetchPaymentMthd()
})
</script>
