<script setup lang="ts">
import { ref, computed } from 'vue'
import type { PropType } from 'vue'
import WidgetCardHead from './WidgetCardHead.vue'
import WidgetCardBody from './WidgetCardBody.vue'
import WidgetCardActions from './WidgetCardActions.vue'
import type { Widget, WidgetHead, WidgetBody } from '../types/index'
const props = defineProps({
  widget: { type: Object as PropType<Widget>, default: () => null }
})
let isActive = ref<Boolean>(true)
const widgetHead = computed<WidgetHead>(() => ({
  img: props.widget.img,
  title: props.widget.title,
  subTitle: props.widget.subTitle
}))
const widgetBody = computed<WidgetBody>(() => ({
  sessionTimeFrom: props.widget.sessionTimeFrom,
  sessionTimeTo: props.widget.sessionTimeTo
}))
</script>

<template>
  <div
    class="flex flex-col p-10 items-start gap-10 rounded-10 border-custom-base-opacity-24 shadow-custom"
    :class="{ 'bg-custom-base-500': isActive, border: !isActive }"
  >
    <widget-card-head :widgetHead="widgetHead"></widget-card-head>
    <widget-card-body :widgetBody="widgetBody"></widget-card-body>
    <widget-card-actions></widget-card-actions>
  </div>
</template>
