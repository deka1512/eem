<script setup lang="ts">
import { sermons } from '~/data/sermons'
import { staticPages } from '~/data/pages'

const page = staticPages.enseignements
useSeoMeta({
  title: 'Enseignements | Église Évangélique Les Moissonneurs',
  description: page.description,
  ogTitle: 'Enseignements | Église Évangélique Les Moissonneurs',
  ogDescription: page.description,
})
</script>

<template>
  <section class="listing-page">
    <PageContainer>
      <header class="listing-hero">
        <p class="eyebrow">{{ page.eyebrow }}</p>
        <h1>{{ page.heroTitle }}</h1>
        <p>{{ page.intro }}</p>
      </header>

      <div v-if="sermons.length" class="cards-grid">
        <CardSermon v-for="item in sermons" :key="item.slug" :item="item" />
      </div>
      <div v-else class="empty-state">
        <span class="empty-state__icon"><UIcon name="i-lucide-book-open" /></span>
        <h2>Les enseignements seront bientôt accessibles.</h2>
        <p>Les prédications seront publiées avec leur titre, leur date, leurs références bibliques et, lorsque disponible, un lien audio ou vidéo vérifié.</p>
        <NuxtLink to="/contact">Contacter l’Église <UIcon name="i-lucide-arrow-right" /></NuxtLink>
      </div>

      <EditorialSections :sections="page.sections" />

      <aside class="editorial-note">
        <UIcon name="i-lucide-lightbulb" />
        <p>Prenez le temps de lire les passages bibliques dans leur contexte et de méditer les enseignements à la lumière des Écritures.</p>
      </aside>
    </PageContainer>
  </section>
</template>

<style scoped>
.listing-page{min-height:60vh;padding-block:clamp(3.5rem,7vw,5.5rem)}
.listing-hero{max-width:820px;margin-bottom:3rem}
.listing-hero h1{margin:.6rem 0 1rem;font-size:clamp(2.35rem,5vw,4rem)}
.listing-hero>p:last-child{max-width:760px;color:var(--eem-text-muted);font-size:1.08rem}
.cards-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:1.4rem}
.empty-state{display:grid;justify-items:center;max-width:760px;margin:0 auto;padding:3rem 2rem;border:1px solid var(--eem-border);border-radius:1.2rem;background:var(--eem-surface);text-align:center}
.empty-state__icon{display:grid;width:3.5rem;height:3.5rem;place-items:center;border-radius:1rem;background:#fff;color:var(--eem-secondary);font-size:1.6rem}
.empty-state h2{margin:1.2rem 0 .5rem;font-size:1.4rem}
.empty-state p{max-width:590px;margin:0;color:var(--eem-text-muted)}
.empty-state a{display:inline-flex;align-items:center;gap:.4rem;margin-top:1.2rem;color:var(--eem-primary);font-size:.9rem;font-weight:750;text-decoration:none}
.editorial-note{display:flex;align-items:flex-start;gap:.8rem;max-width:760px;margin:3rem auto 0;padding:1rem 1.2rem;border-left:3px solid var(--eem-accent);background:#fafafa;color:var(--eem-text-muted);font-size:.88rem}
.editorial-note :deep(svg){flex:none;margin-top:.2rem;color:var(--eem-secondary)}
.editorial-note p{margin:0}
@media(max-width:800px){.cards-grid{grid-template-columns:repeat(2,minmax(0,1fr))}}
@media(max-width:560px){.cards-grid{grid-template-columns:1fr}.empty-state{padding:2rem 1.2rem}}
</style>
