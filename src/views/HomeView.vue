<script setup lang="ts">
import { ref, useTemplateRef } from 'vue'
import GridArea from '@/components/GridArea.vue'
import GridTile from '@/components/GridTile.vue'
import SwitchContainer from '@/components/SwitchContainer.vue'
import CodeBlock from '@/components/CodeBlock.vue'
import PaperBackground from '@/components/PaperBackground.vue'
import PinnedCard from '@/components/PinnedCard.vue'

const debug = ref<boolean>(false)

const switchContainerRef = useTemplateRef('switchContainerRef')
</script>

<template>
  <button @click="debug = !debug">PRESSME</button>
  <button @click="switchContainerRef?.rotateElStatus()">ROTATE</button>
  <GridArea :columns="12" :rows="8" :show-helper-tiles="debug">
    <GridTile
      :corner-top-left="{
        x: 6,
        y: 2,
      }"
      :corner-bottom-right="{
        x: 8,
        y: 7,
      }"
      :show-display="true"
      class="bg-red-500"
    >
      <PaperBackground class="size-full">
        <h3>Test</h3>
        <p>Hello</p>
        <p>Hello2</p>
      </PaperBackground>
    </GridTile>
  </GridArea>
</template>
