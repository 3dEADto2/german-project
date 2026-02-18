<script setup lang="ts">
import GridTile from '@/components/GridTile.vue'
const { columns, rows, showHelperTiles } = defineProps<{
  columns: number
  rows: number
  showHelperTiles?: boolean
}>()

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
      v-for="gridTile in gridTiles"
      :corner-top-left="{
        x: gridTile.topLeft.x,
        y: gridTile.topLeft.y,
      }"
      :corner-bottom-right="{
        x: gridTile.bottomRight.x,
        y: gridTile.bottomRight.y,
      }"
      :show-display="showHelperTiles"
      class="z-10 flex items-center justify-center text-gray-400"
    >
      {{ gridTile.display }}
    </GridTile>
    <slot></slot>
  </div>
</template>
