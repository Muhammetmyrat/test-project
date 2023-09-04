<script setup lang="ts">
import { computed } from 'vue'
import { useDatesStore } from '@/stores/dates'
import IconPlus from './icons/IconPlus.vue'
const datesStore = computed(() => useDatesStore()).value
const dayInActive = computed(() => datesStore.dayInActive)
</script>
<template>
  <div
    class="flex h-40 px-12 items-center flex-1 rounded-12 hover:bg-custom-base-500 cursor-pointer"
  >
    <div class="flex items-start justify-center flex-col flex-1">
      <span class="text-custom-base-900 font-inter font-bold text-16 leading-140"
        >Upcoming Sessions</span
      >
      <span class="text-custom-base-900 text-12 text-normal font-light leading-140">{{
        `${dayInActive.weekDay}, ${dayInActive.month}  ${dayInActive.day}, ${dayInActive.year}`
      }}</span>
    </div>
    <icon-plus></icon-plus>
  </div>
</template>

<style scoped></style>
