import { defineStore } from 'pinia'
export interface Langs {
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
        id: 1,
        img: 'Flag-United-States-of-America.webp',
        name: 'English',
        locale: 'en'
      },
      {
        id: 2,
        img: 'Flag-Saudi-Arabia.webp',
        name: 'Arabic',
        locale: 'ae'
      }
    ] as Langs[]
  }),
  getters: {
    getLanguages(): Langs[] {
      return this.languages
    }
  }
})
