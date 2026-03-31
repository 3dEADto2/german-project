<script setup lang="ts">
const { clickAction } = defineProps<{
  clickAction?: () => void
}>()
</script>

<template>
  <button
    class="cursor-pointer bg-linen h-full pr-2 pl-2 rounded-sm hover:brightness-95"
    @click="clickAction && clickAction()"
  >
    <slot></slot>
  </button>
</template>
