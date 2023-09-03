<script setup lang="ts">
import WidgetHeader from '../components/WidgetHeader.vue'
import WidgetDatesSlider from '../components/WidgetDatesSlider.vue'
import WidgetCards from '../components/WidgetCards.vue'
import WidgetCard from '../components/WidgetCard.vue'
</script>

<template>
  <div
    class="flex flex-col py-20 px-12 flex-start gap-4 rounded-lg border border-opacity-16 border-custom-base-opacity-16 bg-custom-white shadow-xs min-w-[320px]"
  >
    <widget-header></widget-header>
    <widget-dates-slider></widget-dates-slider>
    <widget-cards>
      <widget-card></widget-card>
    </widget-cards>
  </div>
</template>

<style scoped></style>
