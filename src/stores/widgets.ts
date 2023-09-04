import { defineStore } from 'pinia'
import { useI18n } from 'vue-i18n'
import type { Widget } from '../modules/home/types/index'
export const useWidgets = defineStore({
  id: 'widgets',
  state: () => ({}),
  getters: {
    getWidgets(): Widget[] {
      const { t: $t, locale } = useI18n()
      return [
        {
          id: 1,
          img: 'image2.png',
          title: $t('title1'),
          subTitle: $t('subTitle1'),
          sessionTimeFrom: locale === 'en' ? `11:00 ${$t('am')}` : `${$t('am')} 11:00`,
          sessionTimeTo: locale === 'en' ? `11:30 ${$t('am')}` : `${$t('am')} 11:30`
        },
        {
          id: 2,
          img: 'image3.png',
          title: $t('title2'),
          subTitle: $t('subTitle2'),
          sessionTimeFrom: '01:00 PM',
          sessionTimeTo: '02:00 PM'
        },
        {
          id: 3,
          img: 'image1.png',
          title: $t('title3'),
          subTitle: $t('subTitle3'),
          sessionTimeFrom: '01:00 PM',
          sessionTimeTo: '02:00 PM'
        },
        {
          id: 4,
          img: 'image1.png',
          title: $t('title4'),
          subTitle: $t('subTitle4'),
          sessionTimeFrom: '01:00 PM',
          sessionTimeTo: '02:00 PM'
        },
        {
          id: 5,
          img: 'image2.png',
          title: $t('title1'),
          subTitle: $t('subTitle1'),
          sessionTimeFrom: '8:00 AM',
          sessionTimeTo: '10:30 AM'
        },
        {
          id: 6,
          img: 'image3.png',
          title: $t('title2'),
          subTitle: $t('subTitle2'),
          sessionTimeFrom: '05:00 PM',
          sessionTimeTo: '07:00 PM'
        },
        {
          id: 7,
          img: 'image1.png',
          title: $t('title3'),
          subTitle: $t('subTitle3'),
          sessionTimeFrom: '13:00 PM',
          sessionTimeTo: '14:30 PM'
        },
        {
          id: 8,
          img: 'image1.png',
          title: $t('title4'),
          subTitle: $t('subTitle4'),
          sessionTimeFrom: '18:00 PM',
          sessionTimeTo: '20:00 PM'
        }
      ]
    }
  }
})
