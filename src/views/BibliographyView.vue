<script setup lang="ts">
import PaperBackground from '@/components/PaperBackground.vue';
import SourceRow from '@/components/SourceRow.vue';

const sources: {
    siteName?: string;
    firstName?: string;
    lastName?: string;
    releaseYear?: string;
    title?: string;
    lastVisit?: string;
    url?: string;
}[] = [
        {
            siteName: 'Wikipedia',
            title: 'Document Object Model',
            lastVisit: '24.03.2026',
            url: 'https://en.wikipedia.org/wiki/Document_Object_Model'
        }, {
            firstName: 'Jérémy',
            title: 'Reactive programming & web frameworks',
            releaseYear: '2023',
            lastVisit: '24.03.2026',
            url: 'https://www.atipik.ch/en/blog/reactive-programming-web-frameworks'
        }, {
            siteName: 'vuejs',
            title: 'Reactivity in Depth',
            lastVisit: '24.03.2026',
            url: 'https://vuejs.org/guide/extras/reactivity-in-depth'
        }, {
            siteName: 'vuejs',
            title: 'Rendering Mechanism',
            lastVisit: '24.03.2026',
            url: 'https://vuejs.org/guide/extras/rendering-mechanism'
        }, {
            firstName: 'Matthew',
            lastName: 'Tyson',
            title: 'Reactive JavaScript - The evolution of front-end architecture',
            releaseYear: '2022',
            lastVisit: '24.03.2026',
            url: 'https://www.infoworld.com/article/2335507/reactive-javascript-the-evolution-of-front-end-architecture.html'
        },
        {
            firstName: 'Kristofer',
            lastName: 'Koishigawa',
            title: 'Reusable HTML Components - How to Reuse a Header and Footer on a Website',
            releaseYear: '2020',
            lastVisit: '24.03.2026',
            url: 'https://www.freecodecamp.org/news/reusable-html-components-how-to-reuse-a-header-and-footer-on-a-website/'
        },
        {
            siteName: 'arocom',
            title: 'Browser Compatibility',
            lastVisit: '24.03.2026',
            url: 'https://www.arocom.de/en/technical-terms/web-development/browser-compatibility'
        },
        {
            siteName: 'Wikipedia',
            title: 'Polyfill (programming)',
            lastVisit: '24.03.2026',
            url: 'https://en.wikipedia.org/wiki/Polyfill_(programming)'
        },
        {
            siteName: 'vuejs',
            title: 'Browser Compatibility',
            lastVisit: '24.03.2026',
            url: 'https://cli.vuejs.org/guide/browser-compatibility.html'
        },
        {
            siteName: 'Sanity',
            title: 'Virtual DOM definition',
            releaseYear: '2024',
            lastVisit: '24.03.2026',
            url: 'https://www.sanity.io/glossary/virtual-dom'
        },
        {
            siteName: 'Angular',
            title: 'Angular coding style guide',
            lastVisit: '24.03.2026',
            url: 'https://angular.dev/style-guide'
        },
        {
            firstName: 'Emily',
            lastName: 'Nielsen',
            title: 'What is the Difference Between SPAs, SSGs, and SSR?',
            lastVisit: '24.03.2026',
            url: 'https://hygraph.com/blog/difference-spa-ssg-ssr'
        },
        {
            firstName: 'Sarrah',
            lastName: 'Pitaliya',
            title: 'Must-Know Front End Statistics for Data-Driven Decision Making',
            lastVisit: '24.03.2026',
            url: 'https://radixweb.com/blog/frontend-statistics'
        },
        {
            firstName: 'Abbey',
            lastName: 'Perini',
            title: 'State Management in Front-end Web Development',
            releaseYear: '2025',
            lastVisit: '24.03.2026',
            url: 'https://dev.to/abbeyperini/state-management-in-front-end-web-development-state-101-48g3'
        }
    ]

</script>

<template>
    <div class="size-full overflow-y-auto">
        <PaperBackground>
            <h3>Literaturverzeichnis</h3>
            <p class="opacity-0"> SPACE </p>
            <template v-for="(source, index) in sources" :key="index">
                <SourceRow
                    :siteName="source.siteName"
                    :firstName="source.firstName"
                    :lastName="source.lastName"
                    :title="source.title"
                    :releaseYear="source.releaseYear"
                    :lastVisit="source.lastVisit"
                    :url="source.url"
                ></SourceRow>
                <p class="opacity-0"> SPACE </p>
            </template>
        </PaperBackground>
    </div>
</template>