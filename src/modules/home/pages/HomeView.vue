<script setup lang="ts">
import { computed, ref } from 'vue'
import WidgetHeader from '../components/WidgetHeader.vue'
import WidgetDatesSlider from '../components/WidgetDatesSlider.vue'
import WidgetCards from '../components/WidgetCards.vue'
import WidgetCard from '../components/WidgetCard.vue'
import PopUpSure from '@/components/PopUpSure.vue'
import { useToast } from '@/stores/toast'
import { useWidgets } from '@/stores/widgets'
import type { Toast } from '@/modules/home/types/index'
const toast = useToast()
const store = computed(() => useWidgets()).value
let selectedId = ref<Number | null>(null)
let isSure = ref(false)
const join = (id: number) => {
  toast.addToast({
    title: 'Session',
    text: 'Joined'
  } as Toast)
  selectedId.value = null
}
const dismiss = (id: number) => {
  isSure.value = true
}
const save = () => {
  toast.addToast({
    title: 'Session',
    text: 'Dismiss',
    status: 'error'
  } as Toast)
  selectedId.value = null
}
const close = () => {
  isSure.value = false
}
</script>

<template>
  <div
    class="flex flex-col py-20 px-12 flex-start gap-4 rounded-lg border border-opacity-16 border-custom-base-opacity-16 bg-custom-white shadow-xs min-w-[320px]"
  >
    <widget-header></widget-header>
    <widget-dates-slider></widget-dates-slider>
    <widget-cards>
      <widget-card
        v-for="getWidget in store.getWidgets"
        :key="getWidget.id"
        :widget="getWidget"
        v-model:widgetId="selectedId"
        @click.stop="selectedId = getWidget.id"
        @join="join"
        @dismiss="dismiss"
      ></widget-card>
    </widget-cards>
  </div>
  <teleport to="#popup">
    <pop-up-sure v-if="isSure" @save="save" @close="close"></pop-up-sure>
  </teleport>
</template>

<style scoped></style>
