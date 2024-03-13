// 订单请求
export interface OrderReq {
  // 订单名称
  title: string
  // 订单类型
  orderType: string
  // 购买数量
  buyNum: number
  // 支付方式
  payType: string
  // 订单价格
  orderAmt: number
  // 联系方式
  contact: string
  // 查询密码
  searchPassword: string
  // 产品ID
  productId: number | string
}

// 订单明细
export interface OrderDetail {
  // 订单 ID
  id: number | string
  // 订单编号
  orderNo: string
  // 订单名称
  title: string
  // 订单类型
  orderType: string
  // 购买数量
  buyNum: string
  // 支付方式
  payType: string
  // 支付ID
  payId: number | string
  // 订单价格
  orderAmt: number
  // 联系方式
  contact: string
  // 查询密码
  searchPassword: string
  // 产品ID
  productId: number | string
  // 订单状态
  orderStatus: string
  // 下单时间
  orderDate: string
}

// 付款记录
export interface Payments {
  id: number | string
  orderNo: string
  payId: number
  payTime: string
}

// 支付方式表
export interface PaymentMthd {
  id: number
  payType: string
  payName: string
  icon: string
  sort: number
}
