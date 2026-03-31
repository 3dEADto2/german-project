<script setup lang="ts">
const { href, src, alt = '', text = '', imgStyle } = defineProps<{
  href: string;
  src: string;
  alt?: string;
  text?: string;
  imgStyle?: string;
}>();
</script>

<template>
    <div class="relative">
      <img :src="src" :alt="alt" class="size-full" :class="imgStyle" />
      <p v-if="text" class="absolute bottom-0 right-0 bg-white m-1 p-1">{{ text }}</p>
    </div>
</template>
