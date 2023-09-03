<script setup lang="ts">
import { computed } from 'vue'
import { RouterView } from 'vue-router'
import Default from '@/layouts/DefaultView.vue'
const layout = computed(() => Default)
const theme: string | null = localStorage.getItem('theme')
if (theme) {
  document.documentElement.setAttribute('prefers-color-scheme', 'dark')
} else {
  document.documentElement.removeAttribute('prefers-color-scheme')
}
</script>

<template>
  <component :is="layout">
    <RouterView />
  </component>
</template>
