<script setup lang="ts">
import { ref } from 'vue'
import GridArea from '@/components/GridArea.vue'
import GridTile from '@/components/GridTile.vue'
import CardBlock from '@/components/CardBlock.vue'
import SwitchContainer from '@/components/SwitchContainer.vue'
import { useConfigStore } from '@/stores/config'
import CSSFileLogo from '@/assets/svg/CSSFileLogo.vue'
import HTMLFileLogo from '@/assets/svg/HTMLFileLogo.vue'
import JSFileLogo from '@/assets/svg/JSFileLogo.vue'
import ResetLeft from '@/assets/svg/ResetLeft.vue'
const config = useConfigStore()

const fileStorage = ref<{fileType: 'html' | 'css' | 'js', size: number}[]>([]);
const stateNumber = ref(0);
</script>

<template>
    <GridArea :columns="12" :rows="8" :show-helper-tiles="config.debug">
    <GridTile
      :corner-top-left="{
        x: 3,
        y: 2,
      }"
      :corner-bottom-right="{
        x: 10,
        y: 7,
      }"
      :show-display="true"
    >
      <SwitchContainer ref="switchContainerRef" :duration-time="1000">
        <CardBlock title="Probleme der herkömmliche Fronted Entwicklung">
          <h3>Was für Probleme ergeben sich?</h3>
        </CardBlock>
        <CardBlock title="Unübersichtlichkeit & Wiederverwendbarkeit">
          <template v-slot:top>
            <div class="size-full flex justify-around items-center">
                <div class="relative size-24">
                  <HTMLFileLogo class="size-full"></HTMLFileLogo>
                  <div class="absolute top-0 left-0 size-full flex flex-wrap">
                    <button @click="fileStorage.push({fileType: 'html', size: 96})" class="h-[50%] w-full cursor-pointer"></button>
                    <button @click="fileStorage.push({fileType: 'html', size: 192})" class="h-[50%] w-full cursor-pointer"></button>
                  </div>
                </div>
                <div class="relative size-24">
                  <CSSFileLogo class="size-full"></CSSFileLogo>
                  <div class="absolute top-0 left-0 size-full flex flex-wrap">
                    <button @click="fileStorage.push({fileType: 'css', size: 96})" class="h-[50%] w-full cursor-pointer"></button>
                    <button @click="fileStorage.push({fileType: 'css', size: 192})" class="h-[50%] w-full cursor-pointer"></button>
                  </div>
                </div><div class="relative size-24">
                  <JSFileLogo class="size-full"></JSFileLogo>
                  <div class="absolute top-0 left-0 size-full flex flex-wrap">
                    <button @click="fileStorage.push({fileType: 'js', size: 96})" class="h-[50%] w-full cursor-pointer"></button>
                    <button @click="fileStorage.push({fileType: 'js', size: 192})" class="h-[50%] w-full cursor-pointer"></button>
                  </div>
                </div>
                <button @click="fileStorage = []" class="active:-rotate-180 transition-all duration-100">
                  <ResetLeft class="size-8 cursor-pointer"></ResetLeft>
                </button>
            </div>
          </template>
          <template v-slot:bottom>
            <div class="size-full pl-10 pt-10 flex flex-wrap content-start gap-2">
              <div v-for="fileObject in fileStorage" :style="{height: `${fileObject.size}px`, width: `${fileObject.size}px`}">
                <HTMLFileLogo v-if="fileObject.fileType === 'html'" class="size-full"></HTMLFileLogo>
                <CSSFileLogo v-if="fileObject.fileType === 'css'" class="size-full"></CSSFileLogo>
                <JSFileLogo v-if="fileObject.fileType === 'js'" class="size-full"></JSFileLogo>
              </div>
            </div>
          </template>
        </CardBlock>
        <CardBlock title="State Management">
          <template v-slot:top>
            <div class="size-full flex justify-around items-center">
              <div>
                <button @click="stateNumber++">PLUS</button>
                <button @click="stateNumber--">MINUS</button>
              </div>
              <div>{{ stateNumber }}</div>
            </div>
          </template>
        </CardBlock>
      </SwitchContainer>
    </GridTile>
  </GridArea>
</template>