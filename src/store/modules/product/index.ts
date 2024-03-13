import { CategoryRes } from '@/api/product/model'
import { getAllCategory } from '@/api/product/index'

export const useCategotyStore = defineStore({
  id: 'category',
  state: () => {
    return {
      info: [] as CategoryRes[]
    }
  },
  getters: {
    getCategory(): CategoryRes[] {
      return this.info
    }
  },
  actions: {
    setCategory(info: CategoryRes[]) {
      this.info = info
    },
    async fetchCategory() {
      const res = await getAllCategory()
      if (res) {
        this.setCategory(res)
      }
      return res !== undefined
    }
  }
})
