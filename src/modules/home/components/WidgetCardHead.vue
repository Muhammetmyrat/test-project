<script setup lang="ts">
import type { PropType } from 'vue'
import type { WidgetHead } from '../types/index'
import { useGetImage } from '@/helpers/getImage'
const props = defineProps({
  widgetHead: { type: Object as PropType<WidgetHead>, default: () => null }
})
const { getImageUrl } = useGetImage()
</script>

<template>
  <div class="flex items-start gap-10 rounded-12">
    <div
      class="w-40 h-40 flex-shrink-0 rounded-12 border border-opacity-10 border-custom-base-600-background bg-custom-white"
    >
      <img
        class="w-full h-full object-contain"
        :src="getImageUrl(props.widgetHead.img)"
        alt="widget-image"
      />
    </div>
    <div class="flex items-start justify-center flex-col flex-1">
      <span class="text-custom-base-900 font-inter font-bold text-16 leading-140">{{
        props.widgetHead.title
      }}</span>
      <span class="text-custom-base-900 text-12 text-normal font-light leading-140">{{
        props.widgetHead.subTitle
      }}</span>
    </div>
  </div>
</template>
