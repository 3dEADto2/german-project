<script setup lang="ts">
defineProps<{
  cornerTopLeft: {
    x: number
    y: number
  }
  cornerBottomRight: {
    x: number
    y: number
  }
  showDisplay: boolean
}>()
</script>

<template>
  <div
    :style="{
      gridColumnStart: cornerTopLeft.x,
      gridColumnEnd: cornerBottomRight.x + 1,
      gridRowStart: cornerTopLeft.y,
      gridRowEnd: cornerBottomRight.y + 1,
    }"
    class="size-full"
    v-if="showDisplay"
  >
    <slot></slot>
  </div>
</template>
