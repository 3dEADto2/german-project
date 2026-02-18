<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import NavButton from './components/NavButton.vue'
import { useConfigStore } from './stores/config'
import { usePresentationStore } from './stores/presentation'
import { onMounted } from 'vue'

const { toggleDebug } = useConfigStore()
const { nextStep } = usePresentationStore()

onMounted(() => {
  window.addEventListener('keypress', (e) => {
    if (e.code === 'Space') {
      nextStep()
    }
  })
})
</script>

<template>
  <div class="h-screen flex flex-col overflow-hidden">
    <header>
      <div
        class="group bg-secondary text-[6px] hover:text-2xl h-8 hover:h-16 transition-all duration-500 p-2 flex gap-2 justify-between shadow-lg w-full mb-2"
      >
        <nav class="flex gap-2">
          <RouterLink to="/">
            <NavButton>Home</NavButton>
          </RouterLink>
          <RouterLink to="/how-it-works">
            <NavButton>HowItWorks</NavButton>
          </RouterLink>
        </nav>
        <div class="flex gap-2">
          <NavButton @click="toggleDebug">DEBUG</NavButton>
        </div>
      </div>
    </header>

    <RouterView />
  </div>
</template>
