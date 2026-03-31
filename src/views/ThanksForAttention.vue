<script setup lang="ts">
import { onMounted, ref } from 'vue'
import GridArea from '@/components/GridArea.vue'
import GridTile from '@/components/GridTile.vue'

const divEl1 = ref<HTMLDivElement | null>(null);
const divEl2 = ref<HTMLDivElement | null>(null);
const divEl3 = ref<HTMLDivElement | null>(null);
const divEl4 = ref<HTMLDivElement | null>(null);

onMounted(() => {
    setTimeout(() => {
        if (!divEl1.value) return;
        divEl1.value.classList.remove('-translate-y-50');
        divEl1.value.classList.remove('opacity-0');

        setTimeout(() => {
            if (!divEl2.value) return;
            divEl2.value.classList.remove('-translate-y-50');
            divEl2.value.classList.remove('opacity-0');

            setTimeout(() => {
                if (!divEl1.value) return;
                divEl1.value.classList.add('translate-y-15');
                divEl1.value.classList.add('rotate-3');
            }, 300)

            setTimeout(() => {
                if (!divEl3.value) return;
                divEl3.value.classList.remove('-translate-y-50');
                divEl3.value.classList.remove('opacity-0');

                setTimeout(() => {
                    if (!divEl1.value || !divEl2.value) return;
                    divEl1.value.classList.remove('translate-y-15')
                    divEl1.value.classList.remove('rotate-3')
                    divEl1.value.classList.add('translate-y-30')
                    divEl1.value.classList.add('-rotate-3')

                    divEl2.value.classList.add('translate-y-15');
                    divEl2.value.classList.add('rotate-3');
                }, 300)

                setTimeout(() => {
                    if (!divEl4.value) return;
                    divEl4.value.classList.remove('-translate-y-50');
                    divEl4.value.classList.remove('opacity-0');
                    divEl4.value.classList.add('-translate-y-25');

                    setTimeout(() => {
                        if (!divEl1.value || !divEl2.value || !divEl3.value) return;
                        divEl1.value.classList.remove('translate-y-30')
                        divEl1.value.classList.remove('-rotate-3')
                        divEl1.value.classList.add('translate-y-50')

                        divEl2.value.classList.remove('translate-y-15')
                        divEl2.value.classList.remove('rotate-3')
                        divEl2.value.classList.add('translate-y-32')

                        divEl3.value.classList.add('translate-y-14')
                    }, 300)
                }, 1500)
            }, 1500)
        }, 1500)
    }, 500)
});
</script>

<template>
    <GridArea :columns="12" :rows="8">
    <GridTile
      :corner-top-left="{
        x: 2,
        y: 2,
      }"
      :corner-bottom-right="{
        x: 11,
        y: 7,
      }"
      :show-display="true"
    >
    <div class="relative flex flex-col justify-center size-full text-7xl font-bold text-center">
        <div class="absolute w-full transition-all duration-1000 -translate-y-50 opacity-0" ref="divEl1">Aufmersamkeit!</div>
        <div class="absolute w-full transition-all duration-1000 -translate-y-50 opacity-0" ref="divEl2">Ihre/eure</div>
        <div class="absolute w-full transition-all duration-1000 -translate-y-50 opacity-0" ref="divEl3">Vielen Dank für</div>
        <div class="absolute w-full transition-all duration-1000 -translate-y-50 opacity-0 flex justify-center animate-bounce" ref="divEl4">
            <img class="size-60" src="./../assets/images/emoji-tongue-icon.svg">
        </div>
    </div>
    </GridTile>
  </GridArea>
</template>