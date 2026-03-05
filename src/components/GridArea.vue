<script setup lang="ts">
import GridTile from '@/components/GridTile.vue'
import { ref } from 'vue'

const { columns, rows, showHelperTiles } = defineProps<{
  columns: number
  rows: number
  showHelperTiles?: boolean
}>()

const showDebugTile = ref(false);

const gridTiles = []
for (let i = 1; i <= columns; i++) {
  for (let j = 1; j <= rows; j++) {
    gridTiles.push({
      topLeft: {
        x: i,
        y: j,
      },
      bottomRight: {
        x: i,
        y: j,
      },
      display: `${i}/${j}`,
    })
  }
}
</script>
<template>
  <div
    :style="{
      display: 'grid',
      'grid-template-columns': `repeat(${columns}, minmax(0, 1fr))`,
      'grid-template-rows': `repeat(${rows}, minmax(0, 1fr))`,
    }"
    class="flex-1"
  >
    <GridTile
      :corner-top-left="{
        x: 1,
        y: 1,
      }"
      :corner-bottom-right="{
        x: 1,
        y: 1,
      }"
      :show-display="showHelperTiles"
    >
      <button class="z-100 relative bg-yellow-500/75 rounded p-1 cursor-pointer" @click="showDebugTile = !showDebugTile">GRID DEBUG</button>
    </GridTile>
    <GridTile
      v-for="gridTile in gridTiles"
      :corner-top-left="{
        x: gridTile.topLeft.x,
        y: gridTile.topLeft.y,
      }"
      :corner-bottom-right="{
        x: gridTile.bottomRight.x,
        y: gridTile.bottomRight.y,
      }"
      :show-display="showDebugTile"
      class="z-10 flex items-center justify-center text-gray-400"
    >
      {{ gridTile.display }}
    </GridTile>
    <slot></slot>
  </div>
</template>
