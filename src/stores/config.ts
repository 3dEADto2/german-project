import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useConfigStore = defineStore('config', () => {
  const debug = ref(false)
  function toggleDebug() {
    debug.value = !debug.value
  }

  return { debug, toggleDebug }
})
