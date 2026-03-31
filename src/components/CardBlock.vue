<script setup lang="ts">
import PaperClip from '@/assets/svg/PaperClip.vue'
import PaperBackground from './PaperBackground.vue';
import PinnedCard from './PinnedCard.vue';
import GridArea from './GridArea.vue';
import GridTile from '@/components/GridTile.vue'

const { title, debug, extraText } = defineProps<{
  title: string,
  debug?: boolean,
  extraText?: string
}>()
</script>

<template>
  <div class="relative size-full">
    <GridArea :columns="12" :rows="8" :show-helper-tiles="debug" class="size-full">
      <GridTile
        :corner-top-left="{
          x: 1,
          y: 1,
        }"
        :corner-bottom-right="{
          x: 12,
          y: 8,
        }"
        :show-display="true"
      >
        <PaperBackground class="size-full">
          <slot></slot>
        </PaperBackground>
      </GridTile>
      <GridTile
        :corner-top-left="{
          x: 1,
          y: 1,
        }"
        :corner-bottom-right="{
          x: 10,
          y: 2,
        }"
        :show-display="true"
        class="z-1 p-1"
      >
        <slot name="top"></slot>
      </GridTile>
      <GridTile
        :corner-top-left="{
          x: 1,
          y: 3,
        }"
        :corner-bottom-right="{
          x: 12,
          y: 8,
        }"
        :show-display="true"
        class="z-1 p-1"
      >
        <slot name="bottom"></slot>
      </GridTile>
      <GridTile
        :corner-top-left="{
          x: 10,
          y: 1,
        }"
        :corner-bottom-right="{
          x: 12,
          y: 2,
        }"
        :show-display="true"
        class="z-2"
      >
        <div class="relative size-full">
          <PinnedCard class="size-full absolute -right-10 -top-10" :content="title"></PinnedCard>
        </div>
      </GridTile>
    </GridArea>
    <div v-if="extraText" class="absolute -bottom-5 left-0 w-full flex justify-end text-xs">{{ extraText }}</div>
  </div>
</template>
