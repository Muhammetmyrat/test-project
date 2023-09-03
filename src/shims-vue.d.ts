declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<Record<string, unknown>, Record<string, unknown>, unknown>
  export default component
}

declare module 'vue-i18n' {
  import { createI18n, useI18n } from 'vue-i18n'
  export { createI18n, useI18n }
}
