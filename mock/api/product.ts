const category = [
  {
    id: 1,
    name: '分类1',
    sort: 1
  },
  {
    id: 2,
    name: '分类2',
    sort: 2
  },
  {
    id: 3,
    name: '分类3',
    sort: 5
  },
  {
    id: 4,
    name: '分类4',
    sort: 4
  },
  {
    id: 5,
    name: '分类5',
    sort: 3
  }
]

const productList = [
  {
    id: '00001',
    catId: 1,
    name: '深入理解计算机系统（原书第3版）',
    title: 'Product Title',
    image: 'https://img3m7.ddimg.cn/48/0/24106647-1_b_1691123426.jpg',
    desc: 'IT图书领域的传奇图书，畅销全球的ICS核心教材，能让程序员脱胎换骨的书',
    price: 99.99
  },
  {
    id: '00002',
    catId: 1,
    name: '计算机是怎样跑起来的',
    title: 'Product Title',
    image: 'https://img3m5.ddimg.cn/42/7/29242365-1_b_3.jpg',
    desc: '计算机网络概论图解趣味版 网络基础知识书籍 菜鸟程序员入门书籍',
    price: 199.99
  },
  {
    id: '00003',
    catId: 2,
    name: '大话数据结构',
    title: 'Product Title',
    image: 'https://img3m5.ddimg.cn/90/6/29136285-1_l_6.jpg',
    desc: '超级畅销书彩色升华版，百万读者认可的趣味解读“数据结构+算法”，配合动效PPT课件，动态扫除难点。程杰作品，必属精品',
    price: 299.99
  },
  {
    id: '00004',
    catId: 3,
    name: '深入理解计算机系统（原书第3版）',
    title: 'Product Title',
    image: 'https://img3m7.ddimg.cn/48/0/24106647-1_b_1691123426.jpg',
    desc: 'IT图书领域的传奇图书，畅销全球的ICS核心教材，能让程序员脱胎换骨的书',
    price: 399.99
  },
  {
    id: '00005',
    catId: 3,
    name: '计算机是怎样跑起来的',
    title: 'Product Title',
    image: 'https://img3m5.ddimg.cn/42/7/29242365-1_b_3.jpg',
    desc: '计算机网络概论图解趣味版 网络基础知识书籍 菜鸟程序员入门书籍',
    price: 499.99
  },
  {
    id: '00006',
    catId: 3,
    name: '大话数据结构',
    title: 'Product Title',
    image: 'https://img3m5.ddimg.cn/90/6/29136285-1_l_6.jpg',
    desc: '超级畅销书彩色升华版，百万读者认可的趣味解读“数据结构+算法”，配合动效PPT课件，动态扫除难点。程杰作品，必属精品',
    price: 599.99
  },
  {
    id: '00007',
    catId: 4,
    name: '深入理解计算机系统（原书第3版）',
    title: 'Product Title',
    image: 'https://img3m7.ddimg.cn/48/0/24106647-1_b_1691123426.jpg',
    desc: 'IT图书领域的传奇图书，畅销全球的ICS核心教材，能让程序员脱胎换骨的书',
    price: 699.99
  }
]

export default [
  {
    url: '/api/product/cat',
    method: 'GET',
    response: (data = {}) => {
      const sortCategory = [...category].sort((a, b) => a.sort - b.sort)
      return {
        code: 200,
        message: '返回成功',
        data: sortCategory,
        status: 'ok'
      }
    }
  },
  {
    url: '/api/product/list',
    method: 'GET',
    response: ({ query }) => {
      const product = productList.filter((item) => {
        if (query.catId) {
          return item.catId == query.catId
        } else {
          return true
        }
      })
      return {
        code: 200,
        message: '返回成功',
        data: product,
        status: 'ok'
      }
    }
  },
  {
    url: '/api/product/detail',
    method: 'GET',
    response: ({ query }) => {
      const [product] = productList.filter((item) => item.id == query.id)
      return {
        code: 200,
        message: '返回成功',
        data: product,
        status: 'ok'
      }
    }
  }
]
