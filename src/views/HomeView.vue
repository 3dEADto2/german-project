<script setup lang="ts">
import { ref, useTemplateRef } from 'vue'
import GridArea from '@/components/GridArea.vue'
import GridTile from '@/components/GridTile.vue'
import SwitchContainer from '@/components/SwitchContainer.vue'
import CodeBlock from '@/components/CodeBlock.vue'

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
      <SwitchContainer class="size-full bg-blue-400" ref="switchContainerRef">
        <div>TEST1</div>
        <CodeBlock :code="'cosnt a = 1;'" class="size-full"></CodeBlock>
        <div>TEST3</div>
      </SwitchContainer>
    </GridTile>
  </GridArea>
</template>
