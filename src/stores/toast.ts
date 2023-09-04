import { defineStore } from 'pinia'
import type { Toast } from '../modules/home/types/index'
export const useToast = defineStore({
  id: 'toast',
  state: () => ({
    toasts: [] as Toast[]
  }),
  getters: {
    getToasts: (state) => state.toasts
  },
  actions: {
    addToast({ text, title, status = 'success' }: Toast) {
      const id: any = new Date().getTime()
      this.toasts.push({
        id,
        status,
        text,
        title
      })
      setTimeout(() => {
        this.toasts = this.toasts.filter((item) => item.id !== id)
      }, 2000)
    }
  }
})
