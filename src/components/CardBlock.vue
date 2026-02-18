<script setup lang="ts">
import PaperClip from '@/assets/svg/PaperClip.vue'

const { title } = defineProps<{
  title: string
}>()
</script>

<template>
  <div
    class="size-full relative shadow-2xl p-1 bg-highlight1 bg-[url(./../assets/images/HorizontalLines.png)]"
  >
    <h2
      class="absolute -top-8 left-5 bg-highlight1 font-bold py-1 px-10"
      style="clip-path: polygon(10% 0, 84% 0, 100% 100%, 0% 100%)"
    >
      {{ title }}
    </h2>
    <slot></slot>
  </div>
</template>
