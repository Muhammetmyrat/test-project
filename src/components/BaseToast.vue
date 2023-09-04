<script setup>
import { useToast } from '@/stores/toast'
const toast = useToast()
</script>
<template>
  <div
    id="toast"
    class="toast fixed right-20 top-[80px] z-50 transition-all duration-300 flex flex-col gap-20"
  >
    <template v-for="toastItem of toast.getToasts" :key="toastItem.id">
      <div class="toast__box">
        <div
          :class="[
            'bg-[#5cf14f4d]',
            {
              'bg-yellow-100': toastItem.status === 'warning',
              'border-red-500 bg-[#f05353]': toastItem.status === 'error'
            }
          ]"
          class="flex min-w-[320px] max-w-[400px] p-15 flex-col items-start gap-10 rounded-lg border-2"
        >
          <div class="flex gap-10 flex-col">
            <div class="text-black font-semibold">
              {{ toastItem.title }}
            </div>
            <div class="text-black text-sm">{{ toastItem.text }}</div>
          </div>
        </div>
      </div>
    </template>
  </div>
</template>
