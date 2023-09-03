import { defineStore } from 'pinia'
import type { WidgetWeekDays } from '../modules/home/types/index'

export const useDatesStore = defineStore({
  id: 'dates',
  state: () => ({
    dayInActive: {
      day: 0,
      weekDay: '',
      month: '',
      year: 0,
      date: ''
    } as WidgetWeekDays
  }),
  getters: {
    getDates(): WidgetWeekDays[] {
      const today: Date = new Date()
      const weekDays: string[] = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
      const months: string[] = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December'
      ]
      const newDateList = [] as WidgetWeekDays[]
      for (let i = 0; i < 7; i++) {
        const date: Date = new Date(today)
        date.setDate(today.getDate() + i)
        const dayOfWeek = weekDays[date.getDay()]
        const currentMonth = months[date.getMonth()]
        const dateString = {
          weekDay: dayOfWeek,
          day: date.getDate(),
          month: currentMonth,
          year: date.getFullYear(),
          date: date
        }
        newDateList.push(dateString)
      }
      Object.keys(this.dayInActive).forEach((key) => (this.dayInActive[key] = newDateList[0][key]))
      return newDateList
    },
    getDayInActive(): WidgetWeekDays {
      return this.dayInActive
    }
  },
  actions: {
    setActiveDate(data: WidgetWeekDays) {
      Object.keys(data).forEach((key) => (this.dayInActive[key] = data[key]))
    }
  }
})
