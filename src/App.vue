<script setup lang="ts">
import { RouterLink, RouterView, useRouter } from 'vue-router'
import NavButton from './components/NavButton.vue'
import { useConfigStore } from './stores/config'
import { onMounted, ref } from 'vue'
import Modal from './components/Modal.vue'

const { toggleDebug } = useConfigStore()

const showNavBar = ref(false);

const router = useRouter();

const routeOrder = [
  'home',
  'cover-page',
  'how-it-works',
  'problems',
  'conclusion',
  'thanks-for-attention',
  'bibliography',
  'list-of-illustrations'
]

const getRouteName = (direction: 'next' | 'prev') => {
  const currentRouteName = router.currentRoute.value.name as string;
  const currentIndex = routeOrder.findIndex(name => name === currentRouteName);
  if (currentIndex === -1) return routeOrder[0];

  const targetIndex = direction === 'next' ?
    currentIndex + 1 > routeOrder.length - 1 ? 0 : currentIndex + 1
    : currentIndex - 1 < 0 ? routeOrder.length - 1 : currentIndex - 1;

  return routeOrder[targetIndex];
}

onMounted(() => {
  window.addEventListener('keypress', (e) => {
    if (e.code === 'KeyM') {
      showNavBar.value = !showNavBar.value;
    }
  })
})
</script>

<template>
  <div class="h-screen flex flex-col overflow-hidden">
    <header class="fixed w-full z-100">
      <div
        class="flex justify-between p-1 opacity-0 hover:opacity-100"
        :class="{hidden: showNavBar}"
      >
        <button @click="router.push({ name: getRouteName('prev')})" class="active:scale-97 cursor-pointer">
          <img class="size-12" src="./assets/svg/left-arrow-button-icon.svg" />
        </button>
        <button @click="router.push({ name: getRouteName('next')})" class="active:scale-97 cursor-pointer">
          <img class="size-12" src="./assets/svg/right-arrow-button-icon.svg" />
        </button>
      </div>
      <div
        class="group bg-secondary p-2 flex gap-2 justify-between shadow-lg w-full mb-2"
        :class="{hidden: !showNavBar}"
      >
        <nav class="flex gap-2">
          <RouterLink to="/">
            <NavButton>Home</NavButton>
          </RouterLink>
          <RouterLink to="/cover-page">
            <NavButton>Deckblatt</NavButton>
          </RouterLink>
          <RouterLink to="/how-it-works">
            <NavButton>WieFunktionierts</NavButton>
          </RouterLink>
          <RouterLink to="/problems">
            <NavButton>Probleme</NavButton>
          </RouterLink>
          <RouterLink to="/conclusion">
            <NavButton>Fazit</NavButton>
          </RouterLink>
          <RouterLink to="/thanks-for-attention">
            <NavButton>Schluss</NavButton>
          </RouterLink>
          <RouterLink to="/bibliography">
            <NavButton>Literaturverzeichnis</NavButton>
          </RouterLink>
          <RouterLink to="/list-of-illustrations">
            <NavButton>Abbilungsverzeichnis</NavButton>
          </RouterLink>
        </nav>
        <div class="flex gap-2">
          <NavButton @click="toggleDebug">DEBUG</NavButton>
        </div>
      </div>
    </header>

    <RouterView />
  </div>
  <Modal></Modal>
</template>
