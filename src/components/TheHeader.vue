<script setup lang="ts">
import { ref, onMounted, computed } from 'vue'
import { RouterLink } from 'vue-router'
import { useI18n } from 'vue-i18n'
import IconDarkMode from './icons/IconDarkMode.vue'
import IconGitHub from './icons/IconGitHub.vue'
import { useIndex } from '@/stores/index'
import { useGetImage } from '@/helpers/getImage'
const { t: $t, locale } = useI18n()
const { getImageUrl } = useGetImage()
const store = computed(() => useIndex()).value
const languages = computed(() => store.getLanguages)
let isToogle = ref<Boolean>(false)
let langToggleButton = ref<HTMLButtonElement | null>(null)
const changeLocale = (newLocale: string) => {
  locale.value = newLocale
  localStorage.setItem('lang', newLocale)
}
const toggleTheme = () => {
  const theme: string | null = localStorage.getItem('theme')
  if (theme) {
    document.documentElement.removeAttribute('prefers-color-scheme')
    localStorage.removeItem('theme')
  } else {
    document.documentElement.setAttribute('prefers-color-scheme', 'dark')
    localStorage.setItem('theme', 'dark')
  }
}
onMounted(() => {
  document.addEventListener('click', (event: Event) => {
    if (event) {
      const target = event.target as HTMLElement
      if (target) {
        const isClickInside = langToggleButton.value?.contains(target)
        if (!isClickInside) {
          if (isToogle.value) {
            isToogle.value = false
          }
        }
      }
    }
  })
})
</script>

<template>
  <header
    class="sticky top-0 z-1 flex-none mx-auto w-full bg-custom-white md:backdrop-blur-sm border-b"
  >
    <div class="py-3 px-3 mx-auto w-full md:flex md:justify-between max-w-6xl md:px-5">
      <div class="flex justify-between">
        <RouterLink to="/" class="flex items-center" href="/">
          <span
            class="self-center ml-2 mr-3 text-2xl font-extrabold text-custom-base-900 whitespace-nowrap w-64"
          >
            {{ $t('logoText') }}
          </span>
        </RouterLink>
      </div>
      <nav class="relative flex items-center">
        <div class="flex items-center">
          <div class="flex gap-20 items-center">
            <button
              @click="isToogle = !isToogle"
              type="button"
              ref="langToggleButton"
              class="text-custom-base-900 hover:bg-custom-base-900 hover:text-custom-white focus:outline-none ring-2 ring-gray-100 rounded-lg text-sm p-2.5 inline-flex items-center"
            >
              <span>{{ locale === 'en' ? 'English' : 'Arabic' }}</span>
            </button>
            <ul
              v-if="isToogle"
              @click.stop
              class="absolute z-2 top-full flex flex-col gap-20 py-20 px-16 bg-custom-white rounded-lg ring-2 ring-slate-900/10 shadow-lg overflow-hidden text-sm text-custom-base-900 font-semibold mt-13"
            >
              <li
                v-for="language in languages"
                :key="language.id"
                class="flex gap-10 items-center cursor-pointer"
                @click.stop="changeLocale(language.locale)"
              >
                <img class="w-40 h-7" :src="getImageUrl(language.img)" alt="" /><span>{{
                  language.name
                }}</span>
              </li>
            </ul>
            <button
              type="button"
              class="text-custom-base-900 hover:bg-custom-base-900 hover:text-custom-white focus:outline-none ring-2 ring-gray-100 rounded-lg text-sm p-2.5 inline-flex items-center"
              aria-label="Toggle between Dark and Light mode"
              @click="toggleTheme"
            >
              <icon-dark-mode></icon-dark-mode>
            </button>
            <a
              href="https://github.com/Muhammetmyrat/test-project"
              target="_blank"
              class="inline-block text-custom-base-900 hover:bg-custom-base-900 hover:text-custom-white ring-2 ring-gray-100 rounded-lg text-sm p-2.5"
              aria-label="Github"
            >
              <icon-git-hub></icon-git-hub>
            </a>
          </div>
        </div>
      </nav>
    </div>
  </header>
</template>
