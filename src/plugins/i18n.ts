import { createI18n } from 'vue-i18n'

import en from '@/locales/english'
import ar from '@/locales/arabic'

const i18n = createI18n({
  globalInjection: true,
  locale: import.meta.env.VITE_DEFAULT_LOCALE,
  fallbackLocale: import.meta.env.VITE_FALLBACK_LOCALE,
  legacy: false,
  messages: {
    en: en,
    ar: ar
  }
})

export { i18n }
