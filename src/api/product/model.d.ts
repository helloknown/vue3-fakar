export interface CategoryRes {
  id: number
  name: string
  sort: number
}

export interface Product {
  id: number | string
  name: string
  catId: number
  title: string
  desc: string
  image: string
  price: number
}
