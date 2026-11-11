<script setup lang="ts">
import type { ContentSection } from '~/data/pages'

defineProps<{
  sections: ContentSection[]
}>()
</script>

<template>
  <section v-if="sections.length" class="editorial-sections" aria-label="Informations complémentaires">
    <article v-for="(section, index) in sections" :key="section.title" class="editorial-section">
      <span class="editorial-section__number">{{ String(index + 1).padStart(2, '0') }}</span>
      <div>
        <h2>{{ section.title }}</h2>
        <p v-for="paragraph in section.paragraphs" :key="paragraph">{{ paragraph }}</p>
        <ul v-if="section.points?.length">
          <li v-for="point in section.points" :key="point">{{ point }}</li>
        </ul>
        <p v-if="section.reference" class="scripture-reference">
          <UIcon name="i-lucide-book-open" /> Repère biblique : {{ section.reference }}
        </p>
      </div>
    </article>
  </section>
</template>

<style scoped>
.editorial-sections{max-width:900px;margin-inline:auto}
.editorial-section{display:grid;grid-template-columns:3.2rem 1fr;gap:1.3rem;padding-block:2rem;border-bottom:1px solid var(--eem-border)}
.editorial-section:first-child{padding-top:0}
.editorial-section__number{color:var(--eem-primary);font-family:var(--eem-font-heading);font-size:1rem;font-weight:800}
.editorial-section h2{margin:0 0 .8rem;font-size:clamp(1.35rem,2.5vw,1.75rem)}
.editorial-section p{margin:.55rem 0;color:var(--eem-text-muted)}
.editorial-section ul{padding-left:1.2rem;color:var(--eem-text-muted)}
.scripture-reference{display:inline-flex;align-items:center;gap:.5rem;margin-top:.9rem!important;padding:.55rem .8rem;border-radius:.5rem;background:var(--eem-surface);color:var(--eem-secondary)!important;font-size:.82rem;font-weight:700}
@media(max-width:560px){.editorial-section{grid-template-columns:2rem 1fr;gap:.7rem}}
</style>
