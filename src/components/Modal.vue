<script setup lang="ts">
import { computed } from 'vue'
import { useModalStore } from './../stores/modal'

const { getIsOpen, getElement, close } = useModalStore();
const activeElement = computed(() => getElement())
</script>

<template>
    <Teleport to="body">
        <div v-if="getIsOpen()" class="absolute top-0 left-0 bg-[rgba(0,0,0,0.7)] h-screen w-full z-9999">
            <div class="relative flex justify-center items-center size-full bg-white">
                <component v-if="activeElement" :is="activeElement.comp" v-bind="activeElement.props"></component>
                <button @click="close()" class="absolute top-0 left-0 size-full"></button>
            </div>
        </div>
    </Teleport>
</template>