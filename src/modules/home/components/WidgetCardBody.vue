<script setup lang="ts">
import type { PropType } from 'vue'
import type { WidgetBody } from '../types/index'
const props = defineProps({
  widgetBody: { type: Object as PropType<WidgetBody>, default: () => null }
})
</script>

<template>
  <div
    class="relative flex gap-10 text-custom-base-700 text-center text-16 text-normal font-light leading-140"
  >
    <span>→</span
    ><span>{{ props.widgetBody.sessionTimeFrom }} to {{ props.widgetBody.sessionTimeTo }} </span>
  </div>
  <div class="w-151 h-1 bg-custom-after"></div>
</template>
