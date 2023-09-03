<script setup lang="ts">
const props = defineProps({
  disabled: { type: Boolean, default: false },
  primary: { type: Boolean, default: false }
})
</script>

<template>
  <button
    class="flex py-12 px-16 justify-center items-center gap-10 rounded-10 text-14 text-normal font-medium leading-130"
    :class="{
      'bg-custom-primary': props.primary,
      'text-[#E9EAF2]': props.primary,
      'text-custom-black': !props.primary
    }"
    :disabled="props.disabled"
  >
    <slot></slot>
  </button>
</template>
