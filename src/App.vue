<script setup lang="ts">
import { computed } from 'vue'
import { RouterView } from 'vue-router'
import Default from '@/layouts/DefaultView.vue'
import { useI18n } from 'vue-i18n'
const { locale } = useI18n()
const layout = computed(() => Default)
const theme: string | null = localStorage.getItem('theme')
const lang: string | null = localStorage.getItem('lang')
if (theme) {
  document.documentElement.setAttribute('prefers-color-scheme', 'dark')
} else {
  document.documentElement.removeAttribute('prefers-color-scheme')
}
if (lang) {
  locale.value = lang
} else {
  locale.value = 'en'
}
</script>

<template>
  <component :is="layout">
    <RouterView />
  </component>
</template>
