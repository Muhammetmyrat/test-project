<script setup lang="ts">
import { RouterLink } from 'vue-router'
import IconDarkMode from './icons/IconDarkMode.vue'
import IconGitHub from './icons/IconGitHub.vue'
</script>

<template>
  <header
    class="sticky top-0 z-1 flex-none mx-auto w-full bg-custom-white md:backdrop-blur-sm border-b"
  >
    <div class="py-3 px-3 mx-auto w-full md:flex md:justify-between max-w-6xl md:px-4">
      <div class="flex justify-between">
        <RouterLink to="/" class="flex items-center" href="/">
          <span
            class="self-center ml-2 mr-3 text-2xl font-extrabold text-custom-base-900 whitespace-nowrap w-64"
          >
            Test project
          </span>
        </RouterLink>
      </div>
      <nav
        class="items-center w-full md:w-auto hidden md:flex text-gray-600 dark:text-slate-200 h-screen md:h-auto"
        aria-label="Main navigation"
        id="menu"
      >
        <div class="md:self-center flex items-center mb-4 md:mb-0 ml-2">
          <div class="hidden gap-4 items-center md:flex">
            <button
              type="button"
              class="text-custom-base-900 hover:bg-custom-base-900 hover:text-custom-white focus:outline-none ring-2 ring-gray-100 rounded-lg text-sm p-2.5 inline-flex items-center"
              aria-label="Toggle between Dark and Light mode"
            >
              <icon-dark-mode></icon-dark-mode>
            </button>
            <a
              href="https://github.com/"
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

<style scoped></style>
