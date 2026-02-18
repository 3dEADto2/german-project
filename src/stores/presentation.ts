import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

type Step = 'start' | 'explain_html' | 'explain_css' | 'explain_js'
interface Steps {
  step: number
  name: Step
}

const steps = [
  { step: 0, name: 'start' },
  { step: 1, name: 'explain_html' },
  { step: 2, name: 'explain_css' },
  { step: 3, name: 'explain_js' },
] as Steps[]

export const usePresentationStore = defineStore('presentation', () => {
  const currentStep = ref(steps[0])
  function nextStep() {
    if (currentStep.value === undefined) return
    const currentIndex = currentStep.value.step
    if (currentIndex === steps.length - 1) {
      currentStep.value = steps[0]
      return
    }
    currentStep.value = steps[currentIndex + 1]
  }

  return { currentStep, nextStep }
})
