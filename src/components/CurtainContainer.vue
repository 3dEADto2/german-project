<script setup lang="ts">
    import { ref } from 'vue'
    const clip = ref(0)

    const toggleCurtain = () => {
        clip.value = clip.value >= 100 ? 0 : 100;
        emit('emitStatus', clip.value > 0);
    }

    const emit = defineEmits<{
        (e: 'emitStatus', status: boolean): void
    }>();

    defineExpose({
        toggleCurtain,
    })
</script>

<template>
    <div class="relative">
        <div @click="toggleCurtain()" class="absolute top-0 left-0 size-full">
            <slot name="back"></slot>
        </div>
        <div
            @click="toggleCurtain()"
            class="absolute top-0 left-0 size-full transition-all duration-1000"
            :style="{'clip-path': `inset(0 ${clip}% 0 0)`}"
        >
            <slot name="front"></slot>
        </div>
    </div>
</template>