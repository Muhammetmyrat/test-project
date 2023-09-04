<script setup lang="ts">
import BaseButton from '@/UI/BaseButton.vue'
const emits = defineEmits(['join', 'dismiss'])
</script>

<template>
  <div class="flex items-start gap-10">
    <base-button primary @click.stop="$emit('join')">Jion</base-button>
    <base-button @click.stop="$emit('dismiss')">Dismiss</base-button>
  </div>
</template>
