<script setup lang="ts">
import { ref, computed } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { useDatesStore } from '@/stores/dates'
import 'swiper/css/navigation'
import 'swiper/css'
import IconChevronRight from './icons/IconChevronRight.vue'
import IconChevronLeft from './icons/IconChevronLeft.vue'
import type { WidgetWeekDays } from '../types/index'
const datesStore = computed<any>(() => useDatesStore()).value
const dates = computed<WidgetWeekDays>(() => datesStore.getDates)
const dayInActive = computed<WidgetWeekDays>(() => datesStore.dayInActive)

const swiperRef = ref<any>(null)
const prevSlide = () => {
  if (swiperRef.value) {
    swiperRef.value.$el.swiper.slidePrev()
  }
}

const nextSlide = () => {
  if (swiperRef.value) {
    swiperRef.value.$el.swiper.slideNext()
  }
}

const getDayName = (name: string, day: number) => {
  let currentDay: any = new Date().getDate()
  return currentDay === day ? 'Today' : name
}

const updatedayInActive = (date: WidgetWeekDays) => {
  datesStore.setActiveDate(date)
}
console.log(dates)
</script>

<template>
  <div class="xl:w-1280 lg:w-1024 md:w-768 w-320 p-10 mb-16 flex justify-center gap-10">
    <button @click="prevSlide">
      <icon-chevron-right></icon-chevron-right>
    </button>
    <swiper
      ref="swiperRef"
      :slides-per-view="3"
      :space-between="10"
      hashNavigation
      :breakpoints="{
        320: {
          slidesPerView: 3
        },
        768: {
          slidesPerView: 5
        },
        1024: {
          slidesPerView: 7
        }
      }"
    >
      <swiper-slide v-for="(item, index) in dates" :key="index">
        <div
          @click="updatedayInActive(item)"
          :class="[
            'p-8',
            'border-2',
            'border-solid',
            'border-base',
            'hover:border-custom-primary',
            'rounded-xl',
            'flex',
            'flex-col',
            'gap-5',
            { 'border-custom-primaryDate': item.day === dayInActive.day }
          ]"
        >
          <h2
            :class="{ 'text-custom-primary': item.day === dayInActive.day }"
            class="text-sm text-center leading-140"
          >
            {{ getDayName(item.weekDay, item.day) }}
          </h2>
          <div class="mx-5 flex justify-center">
            <span
              :class="{
                'bg-custom-primary text-custom-white': item.day === dayInActive.day
              }"
              class="min-w-34 bg-border rounded-xl px-8 py-6 text-custom-base-700 text-xs text-center"
              >{{ item.day }}</span
            >
          </div>
        </div>
      </swiper-slide>
    </swiper>
    <button @click="nextSlide">
      <icon-chevron-left></icon-chevron-left>
    </button>
  </div>
</template>

<style scoped></style>
../../../stores/dates
