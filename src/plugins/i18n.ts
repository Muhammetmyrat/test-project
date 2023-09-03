import { createI18n } from 'vue-i18n'

import en from '@/locales/english'
import ar from '@/locales/arabic'

const i18n = createI18n({
  locale: 'en',
  globalInjection: true,
  messages: {
    en: en,
    ar: ar
  }
})

export { i18n }
