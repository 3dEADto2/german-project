<script setup lang="ts">
import { ref, onMounted } from 'vue'

const {
    siteName,
    firstName,
    lastName,
    releaseYear = 'o.D.',
    title,
    lastVisit = 'XX.XX.XXXX',
    url = '#',
    rowStart = '&#9679; '
} = defineProps<{
    siteName?: string;
    firstName?: string;
    lastName?: string;
    releaseYear?: string;
    title?: string;
    lastVisit?: string;
    url?: string;
    rowStart?: string;
}>();
</script>

<template>
    <p>
        <b v-html="rowStart"></b>
        <span v-if="firstName && lastName">
            <b>{{ lastName }}</b>, 
            {{ firstName[0] }}
        </span>
        <span v-if="firstName && !lastName">
            <b>{{ firstName }}</b>
        </span>
        <span v-if="siteName">
            <b>{{ siteName }}</b>
        </span>
        ({{ releaseYear }}): 
        {{ title }}.
        (zuletzt aufgerufen am {{  lastVisit }} unter <a :href="url" target="_blank" class="text-blue-700">{{ url }}</a>)
    </p>
</template>