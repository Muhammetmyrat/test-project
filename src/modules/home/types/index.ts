export interface WidgetWeekDays {
  weekDay: string
  month: string
  year: number
  day: number
  [key: string]: any
}
export interface Widget {
  id: number
  img: string
  title: string
  subTitle: string
  sessionTimeFrom: string
  sessionTimeTo: string
}
export interface WidgetHead {
  img: string
  title: string
  subTitle: string
}
export interface WidgetBody {
  sessionTimeFrom: string
  sessionTimeTo: string
}
