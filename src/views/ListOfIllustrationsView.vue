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
    id: number;
}[] = [
    {
        siteName: 'Wikipedia',
        title: 'Datei:Angular Logo.svg',
        lastVisit: '24.03.2026',
        url: 'https://de.wikipedia.org/wiki/Datei:Angular_Logo.svg',
        id: 1,
    },
    {
        siteName: 'Wikipedia',
        title: 'Datei:React-icon.svg',
        lastVisit: '24.03.2026',
        url: 'https://de.wikipedia.org/wiki/Datei:React-icon.svg',
        id: 2,
    },
    {
        siteName: 'Wikipedia',
        title: 'Datei:Vue.js Logo 2.svg',
        lastVisit: '24.03.2026',
        url: 'https://de.wikipedia.org/wiki/Datei:Vue.js_Logo_2.svg',
        id: 3,
    },
    {
        siteName: 'Wikipedia',
        title: 'Datei:Svelte Logo.svg',
        lastVisit: '24.03.2026',
        url: 'https://de.wikipedia.org/wiki/Datei:Svelte_Logo.svg',
        id: 4,
    },
    {
        siteName: 'EASEOUT',
        title: 'An Introduction to the DOM',
        releaseYear: '2020',
        lastVisit: '24.03.2026',
        url: 'https://www.easeout.co/blog/2020-12-14-an-introduction-to-the-dom/',
        id: 5
    },
    {
        siteName: 'DOTNET GURU',
        title: 'Virtual DOM in ReactJS',
        releaseYear: '2022',
        lastVisit: '24.03.2026',
        url: 'https://softmindit.blogspot.com/2022/09/virtual-dom-in-reactjs.html',
        id: 6
    },
    {
        siteName: 'mdn',
        title: 'String.prototype.replaceAll()',
        lastVisit: '24.03.2026',
        url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replaceAll',
        id: 7
    },
    {
        siteName: 'EDUCBA',
        title: 'Angular 2 Architecture',
        lastVisit: '24.03.2026',
        url: 'https://www.educba.com/angular-2-architecture/',
        id: 8
    },
    {
        siteName: 'DebugBear',
        title: 'What’s the meaning of client side and server side?',
        lastVisit: '24.03.2026',
        url: 'https://www.debugbear.com/docs/client-vs-server-side',
        id: 9
    },
    {
        siteName: 'Stackoverflow',
        title: 'StackOverflow Developer Survey 2025',
        lastVisit: '24.03.2026',
        url: 'https://survey.stackoverflow.co/2025/technology#most-popular-technologies-webframe-webframe',
        id: 10
    },
    {
        siteName: 'BuiltWith',
        title: 'React Usage Statistics',
        lastVisit: '24.03.2026',
        url: 'https://trends.builtwith.com/javascript/React',
        id: 11
    },
    {
        siteName: 'Glorywebs',
        title: 'Top Vue Component Libraries & Frameworks to Watch in 2026',
        releaseYear: '2025',
        lastVisit: '24.03.2026',
        url: 'https://www.glorywebs.com/blog/vue-component-libraries-frameworks',
        id: 12
    }
]

</script>

<template>
    <div class="size-full overflow-y-auto">
        <PaperBackground>
            <h3>Abbilungsverzeichnis</h3>
            <p class="opacity-0"> SPACE </p>
            <template v-for="source in sources" :key="source.id">
                <SourceRow
                    :siteName="source.siteName"
                    :firstName="source.firstName"
                    :lastName="source.lastName"
                    :title="source.title"
                    :releaseYear="source.releaseYear"
                    :lastVisit="source.lastVisit"
                    :url="source.url"
                    :rowStart="`Abb. ${source.id ?? 'X'} &rArr; `"
                ></SourceRow>
                <p class="opacity-0"> SPACE </p>
            </template>
        </PaperBackground>
    </div>
</template>