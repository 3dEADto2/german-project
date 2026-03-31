<script setup lang="ts">
import { ref } from 'vue'
import GridArea from '@/components/GridArea.vue'
import GridTile from '@/components/GridTile.vue'
import CardBlock from '@/components/CardBlock.vue'
import SwitchContainer from '@/components/SwitchContainer.vue'
import ImageWithRef from '@/components/ImageWithRef.vue'
import { useConfigStore } from '@/stores/config'
import CSSFileLogo from '@/assets/svg/CSSFileLogo.vue'
import HTMLFileLogo from '@/assets/svg/HTMLFileLogo.vue'
import JSFileLogo from '@/assets/svg/JSFileLogo.vue'
import ResetLeft from '@/assets/svg/ResetLeft.vue'
import Plus from '@/assets/svg/Plus.vue'
import Minus from '@/assets/svg/Minus.vue'
import AnimatedTextBlock from '@/components/AnimatedTextBlock.vue'
const config = useConfigStore()

const fileStorage = ref<{fileType: 'html' | 'css' | 'js', size: number}[]>([]);
const stateNumber = ref(0);
const currentIndex = ref(0);

const switchContainerDuration = 1000;

const whatProblemsAreThereTexts = [
  '&#9679; Unübersichtlichkeit & Wiederverwendbarkeit',
  '&#9679; Erweiterbarkeit',
  '&#9679; Server Side Rendering & Client Side/Single Page Rendering',
  '&#9679; State Management',
  '&#9679; Browser Kompatibilität',
  '&#9679; Teamarbeit',
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
        <CardBlock title="Probleme der herkömmliche Fronted Entwicklung & Moderne Lösungen">
          <h3>Was für Probleme ergeben sich?</h3>
          <p class="opacity-0"> SPACE </p>
          <template v-if="currentIndex === 0">
            <AnimatedTextBlock
              v-for="(text, index) in whatProblemsAreThereTexts"
              :key="index"
              :text="text"
              :transformVal="100"
              :scale="2"
              :initDelay="switchContainerDuration - 200"
            ></AnimatedTextBlock>
          </template>
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
        <CardBlock title="Erweiterbarkeit">
          <template v-if="currentIndex === 2">
            <AnimatedTextBlock
              text="Frameworks wie Angular, React, Vue und Svelte haben klare Strukturen und große Communities"
              :transformVal="100"
              :scale="2"
              :initDelay="switchContainerDuration - 200"
            ></AnimatedTextBlock>
            <AnimatedTextBlock
              text="was zur Folge hat das es eine Vielzahl an Plugins, Erweiterungen und Libraries gibt. Mit diesen"
              :transformVal="100"
              :scale="2"
              :initDelay="switchContainerDuration - 200"
            ></AnimatedTextBlock>
            <AnimatedTextBlock
              text="kann ein Projekt schnell und einfach erweitert werden ohne immer wieder das Rad neu erfinden zu müssen."
              :transformVal="100"
              :scale="2"
              :initDelay="switchContainerDuration - 200"
            ></AnimatedTextBlock>
          </template>
          <template v-slot:bottom>
            <div class="size-full flex justify-center items-center">
              <ImageWithRef
                class="size-full" 
                href="https://www.glorywebs.com/blog/vue-component-libraries-frameworks"
                src="/src/assets/images/VuePopularLibaries.png"
                alt="vue-popular-libraries"
                text="Abb. 12"
              ></ImageWithRef>
            </div>
          </template>
        </CardBlock>
        <CardBlock
          title="Server Side Rendering & Client Side/Single Page Rendering"
          extraText="vgl. Nielsen (o.D.)"
        >
          <template v-if="currentIndex === 3">
            <AnimatedTextBlock
              text="Frameworks wie React, Vue, Angular erhalten vom Server ein HTML Template"
              :transformVal="100"
              :scale="2"
              :initDelay="switchContainerDuration - 200"
            ></AnimatedTextBlock>
            <AnimatedTextBlock
              text="und die erforderlichen Daten. Sie bauen die Seite dann im Browser auf"
              :transformVal="100"
              :scale="2"
              :initDelay="switchContainerDuration - 200"
            ></AnimatedTextBlock>
            <AnimatedTextBlock
              text="und können diese auch direkt updaten ohne zusätzliche HTTP Requests."
              :transformVal="100"
              :scale="2"
              :initDelay="switchContainerDuration - 200"
            ></AnimatedTextBlock>
          </template>
          <template v-slot:bottom>
            <div class="size-full flex justify-center items-center">
              <ImageWithRef
                class="size-full" 
                href="https://www.arocom.de/en/technical-terms/web-development/browser-compatibility"
                src="/src/assets/images/EXAMPLEServerSideRendering.png"
                alt="browser-compatibility-example"
                text="Abb. 9"
              ></ImageWithRef>
            </div>
          </template>
        </CardBlock>
        <CardBlock
          title="State Management"
          extraText="vgl. Jérémy (2023) & Perini, A (2025)"
        >
          <template v-slot:top>
            <div class="size-full flex justify-around items-center text-xl font-semibold">
              <div class="flex gap-4">
                <button class="cursor-pointer active:scale-110 size-12" @click="stateNumber++">
                  <Plus class="size-full"></Plus>
                </button>
                <button class="cursor-pointer active:scale-110 size-12" @click="stateNumber--">
                  <Minus class="size-full"></Minus>
                </button>
              </div>
              <div>State Nummer: {{ stateNumber }}</div>
              <div>State Ergebnis: 0</div>
            </div>
          </template>
          <template v-slot:bottom>
            <div class="size-full flex justify-center items-center">
              <img class="size-full" src="./../assets/images/EXAMPLEStateManagement.png" alt="state-management-example" />
            </div>
          </template>
        </CardBlock>
        <CardBlock
          title="State Management"
          extraText="vgl. Jérémy (2023) & Perini, A (2025)"
        >
          <template v-slot:top>
            <div class="size-full flex justify-around items-center text-xl font-semibold">
              <div class="flex gap-4">
                <button class="cursor-pointer active:scale-110 size-12" @click="stateNumber++">
                  <Plus class="size-full"></Plus>
                </button>
                <button class="cursor-pointer active:scale-110 size-12" @click="stateNumber--">
                  <Minus class="size-full"></Minus>
                </button>
              </div>
              <div>State Nummer: {{ stateNumber }}</div>
              <div>State Ergebnis: {{ stateNumber * 2}}</div>
            </div>
          </template>
          <template v-slot:bottom>
            <div class="size-full flex justify-center items-center">
              <img class="size-full" src="./../assets/images/ExampleSolvedStateManagement.png" alt="state-management-example" />
            </div>
          </template>
        </CardBlock>
        <CardBlock
          title="State Management"
          extraText="vgl. Sanity (2024)"
        >
          <template v-if="currentIndex === 6">
            <AnimatedTextBlock
              text="Es gibt verschiedene Ansätze State Management und das rendern effizient zu gestalten."
              :transformVal="100"
              :scale="2"
              :initDelay="switchContainerDuration - 200"
            ></AnimatedTextBlock>
            <AnimatedTextBlock
              text="Vue und React nutzen mit unter einen virtuellen DOM, welcher Vorteile wie effizienteres updaten,"
              :transformVal="100"
              :scale="2"
              :initDelay="switchContainerDuration - 200"
            ></AnimatedTextBlock>
            <AnimatedTextBlock
              text="bessere Performance und eine einfachere API bietet um den State zu managen."
              :transformVal="100"
              :scale="2"
              :initDelay="switchContainerDuration - 200"
            ></AnimatedTextBlock>
          </template>
          <template v-slot:bottom>
            <div class="size-full flex justify-center items-center">
              <ImageWithRef
                class="size-full"
                href="https://www.sanity.io/glossary/virtual-dom"
                src="/src/assets/images/EXAMPLEVirtualDom.png"
                alt="virtual-dom-example"
                text="Abb. 6"
              ></ImageWithRef>
            </div>
          </template>
        </CardBlock>
        <CardBlock
          title="Browser Kompatibilität"
          extraText="vgl. arocom (o.D.) & Wikipedia (o.D.)"
        >
          <template v-if="currentIndex === 7">
            <AnimatedTextBlock
              text="Frameworks wie React, Vue, Angular scannen den Code"
              :transformVal="100"
              :scale="2"
              :initDelay="switchContainerDuration - 200"
            ></AnimatedTextBlock>
            <AnimatedTextBlock
              text="und bundeln notwendige Polyfills welche fehlende"
              :transformVal="100"
              :scale="2"
              :initDelay="switchContainerDuration - 200"
            ></AnimatedTextBlock>
            <AnimatedTextBlock
              text="Funktionen in älteren Browsern bereitstellen."
              :transformVal="100"
              :scale="2"
              :initDelay="switchContainerDuration - 200"
            ></AnimatedTextBlock>
          </template>
          <template v-slot:top>
            <a href="https://en.wikipedia.org/wiki/Polyfill_(programming)" target="_blank" class="size-full block"></a>
          </template>
          <template v-slot:bottom>
            <div class="size-full flex justify-center items-center">
              <ImageWithRef
                class="size-full" 
                href="https://www.arocom.de/en/technical-terms/web-development/browser-compatibility"
                src="/src/assets/images/JSBrowserCompatible.png"
                alt="browser-compatibility-example"
                text="Abb. 7"
              ></ImageWithRef>
            </div>
          </template>
        </CardBlock>
        <CardBlock title="Teamarbeit">
          <template v-if="currentIndex === 8">
            <AnimatedTextBlock
              text="Frameworks geben eine klare Struktur vor, wie häufig genutzte Elemente und Funktionen aufzubauen sind."
              :transformVal="100"
              :scale="2"
              :initDelay="switchContainerDuration - 200"
            ></AnimatedTextBlock>
            <AnimatedTextBlock
              text="Das erleichtert die Teamarbeit und ermöglicht es, auch neuen Teammitgliedern sich schnell in der Codebase"
              :transformVal="100"
              :scale="2"
              :initDelay="switchContainerDuration - 200"
            ></AnimatedTextBlock>
            <AnimatedTextBlock
              text="zurechtzufinden wenn sie bereits erfahrung mit dem genutzten Framework haben."
              :transformVal="100"
              :scale="2"
              :initDelay="switchContainerDuration - 200"
            ></AnimatedTextBlock>
          </template>
          <template v-slot:bottom>
            <div class="size-full flex justify-center items-center">
              <ImageWithRef
                class="size-full"
                href="https://angular.dev/style-guide"
                src="/src/assets/images/ExampleStandardized.png"
                alt="example-standardized"
                text="Abb. 8"
              ></ImageWithRef>
            </div>
          </template>
        </CardBlock>
      </SwitchContainer>
    </GridTile>
  </GridArea>
</template>