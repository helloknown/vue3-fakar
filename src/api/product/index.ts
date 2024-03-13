import { get } from '@/utils/http'
import { CategoryRes, Product } from './model'

enum URL {
  cat = '/product/cat',
  productList = '/product/list',
  productDetail = '/product/detail'
}

const getAllCategory = async () => get<CategoryRes[]>({ url: URL.cat })
const getProductList = async (params?: { catId?: number }) => get<Product[]>({ url: URL.productList, params })
const getProductDetail = async (params: { id: number | string }) => get<Product>({ url: URL.productDetail, params })

export { getAllCategory, getProductList, getProductDetail }
