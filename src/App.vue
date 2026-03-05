<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import NavButton from './components/NavButton.vue'
import { useConfigStore } from './stores/config'
import { usePresentationStore } from './stores/presentation'
import { onMounted, ref } from 'vue'

const { toggleDebug } = useConfigStore()
const { nextStep } = usePresentationStore()

const showNavBar = ref(false);

onMounted(() => {
  window.addEventListener('keypress', (e) => {
    if (e.code === 'Space') {
      nextStep()
    }
    if (e.code === 'KeyM') {
      showNavBar.value = !showNavBar.value;
    }
  })
})
</script>

<template>
  <div class="h-screen flex flex-col overflow-hidden">
    <header class="fixed w-full z-100" :class="{hidden: !showNavBar}">
      <div
        class="group bg-secondary p-2 flex gap-2 justify-between shadow-lg w-full mb-2"
      >
        <nav class="flex gap-2">
          <RouterLink to="/">
            <NavButton>Home</NavButton>
          </RouterLink>
          <RouterLink to="/how-it-works">
            <NavButton>HowItWorks</NavButton>
          </RouterLink>
          <RouterLink to="/problems">
            <NavButton>Problems</NavButton>
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
