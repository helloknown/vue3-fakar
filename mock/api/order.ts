const orderList = [
  {
    id: '0001',
    orderNo: 'B0001',
    buyNum: 1,
    payType: '支付宝',
    orderAmt: 120,
    contact: '1000@qq.com',
    searchPassword: '123456',
    productId: '1002',
    orderStatus: '已完成',
    orderDate: '2024-02-21 12:23:22'
  },
  {
    id: '0002',
    orderNo: 'B0002',
    buyNum: 1,
    payType: '微信支付',
    orderAmt: 102,
    contact: '123@qq.com',
    searchPassword: '123456',
    productId: '1002',
    orderStatus: '已完成',
    orderDate: '2024-02-21 12:23:22'
  },
  {
    id: '0003',
    orderNo: 'B0003',
    buyNum: 1,
    payType: '支付宝',
    orderAmt: 50,
    contact: '1000@qq.com',
    searchPassword: '123456',
    productId: '1002',
    orderStatus: '已完成',
    orderDate: '2024-02-21 12:23:22'
  },
  {
    id: '0001',
    orderNo: 'B0001',
    buyNum: 4,
    payType: '支付宝',
    orderAmt: 300,
    contact: '1000@qq.com',
    searchPassword: '123456',
    productId: '1002',
    orderStatus: '已完成',
    orderDate: '2024-02-21 12:23:22'
  }
]

const paymentMethodList = [
  {
    id: '1001',
    payType: 'alipay',
    payName: '支付宝',
    icon: 'alipay',
    sort: 1
  },
  {
    id: '1002',
    payType: 'weixin',
    payName: '微信支付',
    icon: 'weipay',
    sort: 2
  },
  {
    id: '1003',
    payType: 'paypal',
    payName: 'Paypal',
    icon: 'paypal',
    sort: 3
  },
  {
    id: '1004',
    payType: 'master',
    payName: 'Master',
    icon: 'master',
    sort: 4
  }
]

export default [
  {
    url: '/api/order/add',
    method: 'POST',
    response: ({ query }) => {
      return {
        code: 200,
        message: '返回成功',
        status: 'ok'
      }
    }
  },
  {
    url: '/api/order/list',
    method: 'GET',
    response: ({ query }) => {
      const orders = orderList.filter(
        (item) =>
          (item.orderNo === query.keywords || item.contact === query.keywords) && item.searchPassword == query.password
      )
      return {
        code: 200,
        message: '返回成功',
        data: orders,
        status: 'ok'
      }
    }
  },
  {
    url: '/api/order/paymthd',
    method: 'GET',
    response: ({ query }) => {
      const payList = [...paymentMethodList].sort((a, b) => a.sort - b.sort)
      return {
        code: 200,
        message: '返回成功',
        data: payList,
        status: 'ok'
      }
    }
  }
]
