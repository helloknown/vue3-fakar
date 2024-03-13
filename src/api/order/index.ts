import { get, post } from '@/utils/http'
import { OrderDetail, OrderReq, PaymentMthd } from './model'

enum URL {
  order = '/order/add',
  orderList = '/order/list',
  payMethod = '/order/paymthd'
}

const getOrderList = async (params: { keywords: string; password: string }) =>
  get<OrderDetail[]>({ url: URL.orderList, params })
const getPayMethod = async () => get<PaymentMthd[]>({ url: URL.payMethod })
const createOrder = async () => post<OrderReq>({ url: URL.order })

export { createOrder, getPayMethod, getOrderList }
