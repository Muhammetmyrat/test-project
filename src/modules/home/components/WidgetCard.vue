<script setup lang="ts">
import { ref } from 'vue'
import WidgetCardHead from './WidgetCardHead.vue'
import WidgetCardBody from './WidgetCardBody.vue'
import WidgetCardActions from './WidgetCardActions.vue'
let isActive = ref<Boolean>(true)
</script>

<template>
  <div
    class="flex flex-col p-10 items-start gap-10 rounded-10 border-custom-base-opacity-24 shadow-custom"
    :class="{ 'bg-custom-base-500': isActive, border: !isActive }"
  >
    <widget-card-head></widget-card-head>
    <widget-card-body></widget-card-body>
    <widget-card-actions></widget-card-actions>
  </div>
</template>
