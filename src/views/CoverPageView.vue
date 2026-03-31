<script setup lang="ts">
    import { ref, onBeforeUnmount, onMounted } from 'vue';
    import AnimatedTextBlock from '@/components/AnimatedTextBlock.vue';

    const gallery = ref<HTMLDivElement | null>(null);
    let currGalRotY = 0;
    const displayBlock = ref<HTMLDivElement | null>(null)
    let rotationIntervalId: number | null = null

    const logosData = [
        {
            src: '/src/assets/svg/LogoAngular.svg',
            alt: 'logo-angular',
            text: 'Abb. 1'
        },
        {
            src: '/src/assets/svg/LogoReact.svg',
            alt: 'logo-react',
            text: 'Abb. 2'
        },
        {
            src: '/src/assets/svg/LogoVue.svg',
            alt: 'logo-vue',
            text: 'Abb. 3'
        },
        {
            src: '/src/assets/svg/LogoSvelte.svg',
            alt: 'logo-svelte',
            text: 'Abb. 4'
        }
    ]

    onMounted(() => {
        rotationIntervalId = window.setInterval(() => {
            if (
                !gallery.value ||
                !displayBlock.value 
            ) return;

            currGalRotY += 0.25;

            displayBlock.value.style.transform = `rotateY(-${currGalRotY}deg)`;
            gallery.value.style.transform = `rotateY(${currGalRotY}deg)`;

            if (currGalRotY >= 360) currGalRotY = 0;
        }, 10)
    })

    onBeforeUnmount(() => {
        if (rotationIntervalId !== null) {
            clearInterval(rotationIntervalId)
        }
    })

</script>

<template>
    <div class="size-full flex flex-col justify-center items-center">
        <div class="relative">
            <div class="gallery-container">
                <div class="gallery" ref="gallery">
                    <div v-for="(data, index) in logosData" :key="index" class="relative img-container" :ref="data.alt.split('-').map((d, i) => i ? d.split('').map((n, j) => j ? n : n.toUpperCase()).join('') : d).join('')">
                        <img class="size-full" :src="data.src" :alt="data.alt" />
                        <p class="absolute bottom-1 right-2 opacity-50">{{ data.text }}</p>
                    </div>
                    <div class="flex flex-col items-center justify-between size-full py-10" ref="displayBlock">
                        <AnimatedTextBlock
                            class="w-max text-3xl text-shadow-sm font-bold"
                            text="Reactive Frontend Frameworks und welche Probleme sie lösen"
                            :transformVal="250"
                            :appearDelay="500"
                        ></AnimatedTextBlock>
                        <AnimatedTextBlock
                            class="w-max text-2xl text-shadow-sm font-semibold"
                            text="von Henrik Nöckel"
                            :transformVal="250"
                            :initDelay="4500"
                            :appearDelay="500"
                        ></AnimatedTextBlock>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="css" scoped>
.gallery-container {
    perspective: 1000px; /* Allows us to see the 3D depth */
}

.gallery {
  width: 200px;
  height: 200px;
  position: relative;
  transform-style: preserve-3d;
  /* animation: rotate 10s infinite linear; */ /* Continuous rotation */
}

.gallery .img-container {
    background: rgba(255, 255, 255, 0.2);
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(0.5px);
    border: 1px solid rgba(255, 255, 255, 0.3);
    position: absolute;
    transition: transform 0.5s;
    width: 200px;
    height: 200px;
    border-radius: 10%;
    padding: 10px;
}

/* Distribute the images around a circle */
.gallery .img-container:nth-child(1) { transform: rotateY(0deg) translateZ(450px); }
.gallery .img-container:nth-child(2) { transform: rotateY(90deg) translateZ(450px); }
.gallery .img-container:nth-child(3) { transform: rotateY(180deg) translateZ(450px); }
.gallery .img-container:nth-child(4) { transform: rotateY(270deg) translateZ(450px); }
</style>