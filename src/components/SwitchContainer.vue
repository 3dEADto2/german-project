<script setup lang="ts">
import LeftArrow from '@/assets/svg/LeftArrow.vue'
import RightArrow from '@/assets/svg/RightArrow.vue'
import { useSlots, computed, ref } from 'vue'
import type { Ref } from 'vue'

defineOptions({
  inheritAttrs: false,
})

const emit = defineEmits<{
  (e: 'emitIndex', index: number): void
}>();

const { durationTime } = defineProps<{
  durationTime?: number
}>()

interface SwitchElement {
  status: Ref<'shown' | 'hidden' | 'next' | 'previous'>
  element: any
}

const slots = useSlots()

const slotElements = computed(() => {
  const elements = slots.default?.() || []
  return elements.map((element, index) => {
    return {
      status: ref(index === 0 ? 'shown' : 'hidden'),
      element: element,
    } as SwitchElement
  })
})

let rotateElStatusActive = false
const rotateElStatus = (direction?: 'reverse') => {
  if (slotElements === undefined || slotElements.value.length < 2 || rotateElStatusActive) return
  rotateElStatusActive = true
  const lastIndex = slotElements.value.length - 1

  const shownIndex = slotElements.value.findIndex((el) => el.status.value === 'shown')
  let nextIndex = 0
  if (direction !== 'reverse') {
    nextIndex = shownIndex !== lastIndex ? shownIndex + 1 : 0
  } else {
    nextIndex = shownIndex - 1 >= 0 ? shownIndex - 1 : lastIndex
  }

  const nextElement = slotElements.value[nextIndex]
  if (nextElement === undefined) return
  nextElement.status.value = 'next'
  setTimeout(() => {
    if (nextElement === undefined) return
    nextElement.status.value = 'shown'
    emit('emitIndex', nextIndex);
  }, 1)

  const shownElement = slotElements.value[shownIndex]
  if (shownElement === undefined) return
  shownElement.status.value = 'previous'
  setTimeout(() => {
    if (shownElement === undefined) return
    shownElement.status.value = 'hidden'
    rotateElStatusActive = false
  }, durationTime || 500)
}

defineExpose({
  rotateElStatus,
})
</script>

<template>
  <div class="relative size-full" v-bind="$attrs">
    <div
      v-for="(element, index) in slotElements"
      :key="index"
      class="absolute size-full top-0"
      :class="{
        hidden: element.status.value === 'hidden',
        'card-to-animate': element.status.value === 'previous',
      }"
      :style="{
        'animation-duration': `${(durationTime || 500) / 1000}s`
      }"
    >
      <component :is="element.element"></component>
    </div>
    <div class="absolute h-full -left-12 flex items-center">
      <button class="cursor-pointer opacity-25 hover:opacity-75">
        <LeftArrow @click="rotateElStatus('reverse')" class="w-10"></LeftArrow>
      </button>
    </div>
    <div class="absolute h-full -right-12 flex items-center">
      <button class="cursor-pointer opacity-25 hover:opacity-75">
        <RightArrow @click="rotateElStatus()" class="w-10"></RightArrow>
      </button>
    </div>
  </div>
</template>

<style lang="css" scoped>
.card-to-animate {
  animation: card-animation ease-in-out forwards;
}

@keyframes card-animation {
  0% {
    z-index: 4;
  }
  50% {
    z-index: 4;
    transform: translate(-30%, -110%) rotate(-25deg);
  }
  51% {
    z-index: -1;
  }
  100% {
    z-index: -1;
    transform: translate(0);
  }
}
</style>

<!-- <div
      v-for="(element, index) in slotElements"
      :key="index"
      class="absolute size-full top-0 transition-all"
      :class="{
        'opacity-0': element.status.value === 'next' || element.status.value === 'previous',
        hidden: element.status.value === 'hidden',
        'left-0': element.status.value === 'shown',
        'left-full': element.status.value === 'previous',
        '-left-full': element.status.value === 'next',
      }"
      :style="{
        '--tw-duration': `${durationTime || 500}ms`,
        'transition-duration': `${durationTime || 500}ms`,
      }"
    > -->