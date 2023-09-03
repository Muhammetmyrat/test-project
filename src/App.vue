<script setup lang="ts">
import { computed } from 'vue'
import { RouterView } from 'vue-router'
import Default from '@/layouts/DefaultView.vue'
const layout = computed(() => Default)
</script>

<template>
  <component :is="layout">
    <RouterView />
  </component>
</template>
