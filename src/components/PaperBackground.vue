<script setup lang="ts">
import PinnedCard from './PinnedCard.vue';

</script>
<template>
    <div id="paper-background-container">
        <slot />
    </div>
</template>

<style>
@import url(https://fonts.googleapis.com/css?family=Mako|Gentium+Basic);
</style>

<style scoped>
#paper-background-container {
    position: relative;
    background-color: #EAEBE1;
    background-size: 1px 28px;
    line-height: 28px;
    vertical-align: 2px;
    padding: 12px 10px 6px 50px;
    background-clip: border-box;
    background-image: repeating-linear-gradient(transparent, transparent 27px, #d5c999 27px, #d5c999 100%);
    background-position: 0 6px;
}

#paper-background-container::before, #paper-background-container::after {
    content: '';
    position: absolute;
    top: 0; 
}

#paper-background-container::after {
    margin-left: -10px;
    width: 0;
    height: 100%;
    border-left: 3px double #d5c999;
}

#paper-background-container::before {
    width: 100%;
    height: 6px;
    left: 0;
    background-color: #EAEBE1;
}

:slotted(p) {
    margin: 0;
    font-size: 13px;
    font-family: 'Mako', serif;
    text-align: justify;
}

:slotted(h3) {
    font-weight: 300;
    text-align: left;
    text-decoration: none;
    font-size: 23px;
    padding-bottom: 6px;
    margin: -5px 0 -3px 0;
    letter-spacing: 1px;
    font-family: 'Gentium Basic', serif;
}
</style>