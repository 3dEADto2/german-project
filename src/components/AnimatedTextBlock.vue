<script setup lang="ts">
import { ref, onMounted } from 'vue'

const {
    text = '',
    transformVal = 0,
    rotate = false,
    scale = 1,
    initDelay = 0,
    appearDelay = 50,
    animDelay = 500
} = defineProps<{
    text?: string;
    transformVal?: number;
    rotate?: boolean;
    scale?: number;
    initDelay?: number;
    appearDelay?: number;
    animDelay?: number;
}>();

const pArray = ref<HTMLElement[] | null>(null);

const getRandomValue = (max: number, negative = true) => {
    const val = Math.floor(Math.random() * (max + 1));
    if (negative && Math.random() < 0.5) return -val;
    return val;
}

onMounted(() => {
  if (!pArray.value) return;

  pArray.value.forEach((pEl, index) => {
    const transX = getRandomValue(transformVal);
    const transY = getRandomValue(transformVal);
    const rotateVal = getRandomValue(rotate ? 360 : 0, false);
    const scaleVal = scale === 1 ? 1 : (Math.random() * scale).toFixed(1);

    pEl.style.transform = `translate(${transX}px, ${transY}px) rotate(${rotateVal}deg) scale(${scaleVal})`;
    pEl.style.opacity = '0';

    setTimeout(() => {
        pEl.style.opacity = '1';

        setTimeout(() => {
            pEl.style.transform = '';
        }, animDelay);
    }, initDelay + appearDelay * index);
  })
});
</script>

<template>
    <div class="flex flex-wrap gap-x-1">
        <p
            class="transition-all ease-in-out duration-500"
            ref="pArray"
            v-for="(textEl, index) in text.split(' ')"
            :key="index"
            v-html="textEl"
        ></p>
    </div>
</template>