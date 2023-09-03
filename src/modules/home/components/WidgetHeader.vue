<script setup lang="ts">
import IconPlus from './icons/IconPlus.vue'
</script>
<template>
  <div class="flex h-40 px-12 items-center flex-1 rounded-12">
    <div class="flex items-start justify-center flex-col flex-1">
      <span class="text-custom-base-900 font-inter font-bold text-16 leading-140"
        >Upcoming Sessions</span
      >
      <span>Saturday, June 25, 2022</span>
    </div>
    <div class="cursor-pointer">
      <icon-plus></icon-plus>
    </div>
  </div>
</template>

<style scoped></style>
