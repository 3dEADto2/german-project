<script setup lang="ts">
import { ref, onMounted } from 'vue'
import CurtainContainer from '@/components/CurtainContainer.vue'


const clip = ref(0)
const curtainContainer = ref<InstanceType<typeof CurtainContainer>>()
</script>

<template>
  <div class="size-full flex justify-center items-center">
    <div class="relative size-96">
      <div class="absolute left-0 top-0 size-full bg-yellow-300">Element1</div>
      <div class="absolute left-0 top-0 size-full bg-red-300 card-to-animate">Element2</div>
    </div>
  </div>
</template>

<style lang="css" scoped>
.card-to-animate {
  animation: card-animation 1s ease-in-out forwards;
}

@keyframes card-animation {
  50% {
    transform: translate(-30%, -110%) rotate(-25deg);
  }
  100% {
    transform: translate(0);
    z-index: -1;
  }
}
</style>
