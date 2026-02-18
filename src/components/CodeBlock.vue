<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { codeToHtml } from 'shiki'

const { code, lang } = defineProps<{
  code: string
  lang?: string
}>()

const html = ref<string>()

onMounted(async () => {
  html.value = await codeToHtml(code.trim(), {
    lang: lang || 'typescript',
    theme: 'nord',
  })
})
</script>

<template>
  <div v-html="html"></div>
</template>
