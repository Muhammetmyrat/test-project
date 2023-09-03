<script setup lang="ts">
import TheHeader from '@/components/TheHeader.vue'
</script>

<template>
  <the-header></the-header>
  <main class="w-full min-h-calc-65 overflow-x-hidden flex justify-center items-center">
    <router-view />
  </main>
</template>
