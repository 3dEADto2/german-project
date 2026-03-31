import { ref, computed, type Component, shallowRef } from 'vue'
import { defineStore } from 'pinia'

interface DisplayedComponent {
  comp: Component | null;
  props?: Record<string, any>;
}

export const useModalStore = defineStore('modal', () => {
  const displayedComponent = shallowRef<DisplayedComponent | null>(null);
  const isShown = ref(false);
  
  function setElement(input: DisplayedComponent) {
    displayedComponent.value = input;
  }

  function getElement() {
    return displayedComponent.value;
  }

  function getIsOpen() {
    return isShown.value;
  }

  function open() {
    isShown.value = true;
  }

  function close() {
    isShown.value = false;
  }

  function deploy(component: DisplayedComponent) {
    setElement(component);
    open();
  }

  return { setElement, getElement, getIsOpen, open, close, deploy }
})
