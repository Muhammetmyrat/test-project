import { defineStore } from 'pinia'
export interface langs {
  id: number
  img: string
  name: string
  locale: string
}
export const useIndex = defineStore({
  id: 'index',
  state: () => ({
    languages: [
      {
        id: 0,
        img: 'Flag-United-States-of-America.webp',
        name: 'English',
        locale: 'en'
      },
      {
        id: 1,
        img: 'Flag-Saudi-Arabia.webp',
        name: 'Arabic',
        locale: 'ae'
      }
    ] as langs[]
  }),
  getters: {
    getLanguages(): langs[] {
      return this.languages
    }
  }
})
