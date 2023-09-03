import { createI18n } from 'vue-i18n'

import en from '@/locales/en'
import ae from '@/locales/ae'

const i18n = createI18n({
  globalInjection: true,
  locale: import.meta.env.VITE_DEFAULT_LOCALE,
  fallbackLocale: import.meta.env.VITE_FALLBACK_LOCALE,
  legacy: false,
  messages: {
    en: en,
    ae: ae
  }
})

export { i18n }
