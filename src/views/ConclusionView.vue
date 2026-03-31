<script setup lang="ts">
import { ref } from 'vue'
import GridArea from '@/components/GridArea.vue'
import GridTile from '@/components/GridTile.vue'
import CardBlock from '@/components/CardBlock.vue'
import SwitchContainer from '@/components/SwitchContainer.vue'
import ImageWithRef from '@/components/ImageWithRef.vue'
import { useConfigStore } from '@/stores/config'
import AnimatedTextBlock from '@/components/AnimatedTextBlock.vue'
import { useModalStore } from './../stores/modal'
import stackOverflowPopularFrameworksImage from '@/assets/images/StackOverflow2025PopularFrameworks.png'
import reactTotalUsageImage from '@/assets/images/ReactTotalUsage.png'

const config = useConfigStore()
const { deploy } = useModalStore();

const currentIndex = ref(0);

const switchContainerDuration = 1000;

const whyDevsShouldUseFrameworksTexts = [
  '&#9679; Weniger Boilerplate, schnellere und automatisierte Setups',
  '&#9679; Einfachere und schneller Entwicklung von Anwendungen',
  '&#9679; Bessere Wartbarkeit und Skalierbarkeit von Projekten',
  '&#9679; Einfache Erweiterbarkeit durch Plugins, Add-Ons und Libraries',
  '&#9679; Browser-Kompatibilität',
  '&#9679; Performance-Optimierungen',
  '&#9679; Client-Side-Rendering',
  '&#9679; State Management'
]
</script>

<template>
    <GridArea :columns="12" :rows="8" :show-helper-tiles="config.debug">
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
      <SwitchContainer @emit-index="(index) => currentIndex = index" ref="switchContainerRef" :duration-time="switchContainerDuration">
        <CardBlock
          title="Aktuelle Lage & Zukunft"
          extraText="vgl. Pitaliya (o.D.)"
        >
          <template v-if="currentIndex === 0">
            <AnimatedTextBlock
              text="Statistik (23,678 Entwickler) zu den genutzten Frameworks von Entwicklern weltweit"
              :transformVal="100"
              :scale="2"
              :initDelay="switchContainerDuration - 200"
            ></AnimatedTextBlock>
            <AnimatedTextBlock
              text="im Rahemen des StackOverflow Developer Survey 2025."
              :transformVal="100"
              :scale="2"
              :initDelay="switchContainerDuration - 200"
            ></AnimatedTextBlock>
          </template>
          <template v-slot:bottom>
            <button @click="deploy({
                comp: ImageWithRef,
                props: {
                    class: 'size-full',
                    href: 'https://survey.stackoverflow.co/2025/technology#most-popular-technologies-webframe-webframe',
                    src: stackOverflowPopularFrameworksImage,
                    alt: 'chart-popular-web-framworks',
                    text: 'Abb. 10'
                }
            })" class="size-full cursor-pointer">
                <ImageWithRef
                    class="size-full" 
                    href="https://survey.stackoverflow.co/2025/technology#most-popular-technologies-webframe-webframe"
                    :src="stackOverflowPopularFrameworksImage"
                    alt="chart-popular-web-framworks"
                    text="Abb. 10"
                ></ImageWithRef>
            </button>
          </template>
        </CardBlock>
        <CardBlock
          title="Aktuelle Lage & Zukunft"
          extraText="vgl. Pitaliya (o.D.)"
        >
          <template v-if="currentIndex === 1">
            <AnimatedTextBlock
              text="Statistik der Webseiten weltweit, welche React nutzen."
              :transformVal="100"
              :scale="2"
              :initDelay="switchContainerDuration - 200"
            ></AnimatedTextBlock>
          </template>
          <template v-slot:bottom>
            <button @click="deploy({
                comp: ImageWithRef,
                props: {
                    class: 'size-full',
                    href: 'https://trends.builtwith.com/javascript/React',
                    src: reactTotalUsageImage,
                    alt: 'react-total-usage',
                    text: 'Abb. 11'
                }
            })" class="size-full cursor-pointer">
                <ImageWithRef
                    class="size-full" 
                    href="https://trends.builtwith.com/javascript/React"
                    :src="reactTotalUsageImage"
                    alt="react-total-usage"
                    text="Abb. 11"
                ></ImageWithRef>
            </button>
          </template>
        </CardBlock>
        <CardBlock title="Aktuelle Lage & Zukunft">
          <h3>Wieso sollten Entwickler Frameworks nutzen?</h3>
          <p class="opacity-0"> SPACE </p>
          <template v-if="currentIndex === 2">
            <AnimatedTextBlock
              v-for="(text, index) in whyDevsShouldUseFrameworksTexts"
              :key="index"
              :text="text"
              :transformVal="100"
              :scale="2"
              :initDelay="switchContainerDuration - 200"
            ></AnimatedTextBlock>
          </template>
        </CardBlock>
      </SwitchContainer>
    </GridTile>
  </GridArea>
</template>