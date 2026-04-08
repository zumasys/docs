<script setup lang="ts">
import { useData } from 'vitepress'
import { computed } from 'vue'

const { page, site, frontmatter } = useData()

const crumbs = computed(() => {
  const path = page.value.relativePath
  const segments = path
    .replace(/\/index\.md$/, '')
    .replace(/\.md$/, '')
    .split('/')
    .filter(Boolean)

  if (segments.length === 0) return []

  const items: { text: string; link: string }[] = [
    { text: site.value.title, link: '/' },
  ]

  let accumulated = ''
  for (const seg of segments) {
    accumulated += '/' + seg
    const text = seg
      .split('-')
      .map((w: string) => w.charAt(0).toUpperCase() + w.slice(1))
      .join(' ')
    items.push({ text, link: accumulated + '/' })
  }

  return items
})

const readingTime = computed(() => {
  const mins = frontmatter.value.readingTime
  if (!mins) return null
  return `${mins} min read`
})
</script>

<template>
  <div v-if="crumbs.length > 1" class="page-header">
    <nav class="page-breadcrumb" aria-label="Breadcrumb">
      <ol>
        <li v-for="(crumb, i) in crumbs" :key="crumb.link">
          <span v-if="i > 0" class="sep" aria-hidden="true">›</span>
          <a v-if="i < crumbs.length - 1" :href="crumb.link">{{ crumb.text }}</a>
          <span v-else class="current" aria-current="page">{{ crumb.text }}</span>
        </li>
      </ol>
    </nav>
    <span v-if="readingTime" class="reading-time" aria-label="Estimated reading time">
      <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
      {{ readingTime }}
    </span>
  </div>
</template>
