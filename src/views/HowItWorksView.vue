<script setup lang="ts">
import { ref, useTemplateRef, watch } from 'vue'
import GridArea from '@/components/GridArea.vue'
import GridTile from '@/components/GridTile.vue'
import { useConfigStore } from '@/stores/config'
import { usePresentationStore } from '@/stores/presentation'
import SwitchContainer from '@/components/SwitchContainer.vue'
import CardBlock from '@/components/CardBlock.vue'
import CSSHouse from '@/assets/svg/CSSHouse.vue'
import HTMLHouse from '@/assets/svg/HTMLHouse.vue'
import JavascriptHouse from '@/assets/svg/JavascriptHouse.vue'
import AnimatedTextBlock from '@/components/AnimatedTextBlock.vue'
import ImageWithRef from '@/components/ImageWithRef.vue'


const config = useConfigStore()
const presentation = usePresentationStore()

const switchContainerRef = useTemplateRef('switchContainerRef')

const counter = ref(0)
const currentIndex = ref(0);

const switchContainerDuration = 1000;

watch(
  () => presentation.currentStep,
  (newStep, oldStep) => {
    switch (newStep?.name) {
      case 'explain_html':
        switchContainerRef?.value?.rotateElStatus()
        break
      case 'explain_css':
        switchContainerRef?.value?.rotateElStatus()
        break
      case 'explain_js':
        switchContainerRef?.value?.rotateElStatus()
        break
    }
  },
)
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
        <CardBlock title="Herkömmliche Fronted Entwicklung">
          <h3>Wie funktioniert das webbasierte Frontend?</h3>
          <p class="opacity-0"> SPACE </p>
          <template v-if="currentIndex === 0">
            <AnimatedTextBlock
              text="&#9679; Was ist HTML?"
              :transformVal="100"
              :scale="2"
              :initDelay="switchContainerDuration - 200"
            ></AnimatedTextBlock>
            <AnimatedTextBlock 
              text="&#9679; Was ist CSS?"
              :transformVal="100"
              :scale="2"
              :initDelay="switchContainerDuration - 200"
            ></AnimatedTextBlock>
            <AnimatedTextBlock
              text="&#9679; Was ist Javascript?"
              :transformVal="100"
              :scale="2"
              :initDelay="switchContainerDuration - 200"
            ></AnimatedTextBlock>
            <AnimatedTextBlock
              text="&#9679; Was ist der DOM?"
              :transformVal="100"
              :scale="2"
              :initDelay="switchContainerDuration - 200"
            ></AnimatedTextBlock>
          </template>
        </CardBlock>
        <CardBlock
          title="Was ist HTML?"
          :debug="config.debug"
        >
          <template v-slot:top>
            <div class="size-full flex justify-between gap-2">
              <HTMLHouse></HTMLHouse>
              <div class="bg-white/75 p-1 flex-1">
                <h2>Ich bin eine Überschrift</h2>
                <p>Ich bin ein Text</p>
                <button>Ich bin ein Knopf</button>
                <p>Zähler: <span id="howitworks-showcase-counter">0</span></p>
              </div>
            </div>
          </template>
          <template v-slot:bottom>
            <img class="size-full" src="./../assets/images/ExampleHTML.png" alt="html-example-code" />
          </template>
        </CardBlock>
        <CardBlock
          title="Was ist CSS?"
          :debug="config.debug"
        >
          <template v-slot:top>
            <div class="size-full flex justify-between gap-2">
              <CSSHouse></CSSHouse>
              <div class="bg-white/75 p-1 flex-1 howitworks-showcase-comic">
                <h2 class="howitworks-showcase-h2">Ich bin eine Überschrift</h2>
                <p class="howitworks-showcase-p">Ich bin ein blauer Text</p>
                <div class="flex items-center gap-2">
                  <button class="howitworks-showcase-btn">Ich bin ein Knopf</button>
                  <p>Zähler: <span id="howitworks-showcase-counter">0</span></p>
                </div>
              </div>
            </div>
          </template>
          <template v-slot:bottom>
            <img class="size-full" src="./../assets/images/ExampleCSS.png" alt="css-example-code" />
          </template>
        </CardBlock>
        <CardBlock
          title="Was ist Javascript?"
          :debug="config.debug"
        >
          <template v-slot:top>
            <div class="size-full flex justify-between gap-2">
              <JavascriptHouse class="h-full"></JavascriptHouse>
              <div class="bg-white/75 p-1 flex-1 howitworks-showcase-comic">
                <h2 class="howitworks-showcase-h2">Ich bin eine Überschrift</h2>
                <p class="howitworks-showcase-p">Ich bin ein blauer Text</p>
                <div class="flex items-center gap-2">
                  <button
                    class="howitworks-showcase-btn"
                    id="howitworks-showcase-btn"
                    @click="counter++"
                  >
                    Ich bin ein Knopf
                  </button>
                  <p>Zähler: <span id="howitworks-showcase-counter">{{ counter }}</span></p>
                </div>
              </div>
            </div>
          </template>
          <template v-slot:bottom>
            <img class="size-full" src="./../assets/images/ExampleJS.png" alt="javascript-example-code" />
          </template>
        </CardBlock>
        <CardBlock
          title="Was ist der DOM?"
          extraText="vgl. Wikipedia"
          :debug="config.debug"
        >
          <template v-if="currentIndex === 4">
            <AnimatedTextBlock
              text="Beim DOM (Document Object Model) handelt sich um eine Repräsentation der Webseite in Objektform."
              :transformVal="100"
              :scale="2"
              :initDelay="switchContainerDuration - 200"
            ></AnimatedTextBlock>
            <AnimatedTextBlock
              text="Der DOM ist Programmiersprachen unabhängig aber in der Frontend Entwicklung wird in der Regel"
              :transformVal="100"
              :scale="2"
              :initDelay="switchContainerDuration - 200"
            ></AnimatedTextBlock>
            <AnimatedTextBlock
              text="mit Javascript der DOM manipuliert und damit auch die Webseite selbst."
              :transformVal="100"
              :scale="2"
              :initDelay="switchContainerDuration - 200"
            ></AnimatedTextBlock>
          </template>
          <template v-slot:bottom>
            <div class="size-full flex justify-center items-center">
              <ImageWithRef
                class="size-full"
                href="https://de.wikipedia.org/wiki/Document_Object_Model"
                src="/src/assets/images/dom-tree.png"
                alt="dom-tree"
                text="Abb. 5"
              ></ImageWithRef>
            </div>
          </template>
        </CardBlock>
      </SwitchContainer>
    </GridTile>
  </GridArea>
</template>

<style scoped>
.howitworks-showcase-comic {
  font-family: 'Comic Sans MS', 'Comic Sans', cursive;
}

.howitworks-showcase-h2 {
  font-size: 24px;
  font-weight: bold;
}

.howitworks-showcase-p {
  color: blue;
}

.howitworks-showcase-btn {
  border: 2px solid #000000;
  padding: 2px;
  cursor: pointer;
}
</style>
