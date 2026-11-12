<script setup lang="ts">
import { news } from '~/data/news'
import { staticPages } from '~/data/pages'
import { church } from '~/data/church'

const page = staticPages.actualites
useSeoMeta({
  title: 'Actualités | Église Évangélique Les Moissonneurs',
  description: page.description,
  ogTitle: 'Actualités | Église Évangélique Les Moissonneurs',
  ogDescription: page.description,
})
</script>

<template>
  <section class="listing-page">
    <PageHero :eyebrow="page.eyebrow" :title="page.heroTitle" :description="page.intro" :image="page.heroImage" :breadcrumb="page.title" />
    <PageContainer>

      <div v-if="news.length" class="cards-grid">
        <CardNews v-for="item in news" :key="item.slug" :item="item" />
      </div>
      <div v-else class="empty-state">
        <span class="empty-state__icon"><UIcon name="i-lucide-newspaper" /></span>
        <h2>Les prochaines nouvelles seront publiées ici.</h2>
        <p>Cette rubrique accueillera les annonces, les informations utiles et les retours sur les temps forts de l’Église. Les publications seront ajoutées après vérification.</p>
        <a :href="church.facebookUrl" target="_blank" rel="noopener noreferrer">Suivre la page Facebook officielle <UIcon name="i-lucide-arrow-up-right" /></a>
      </div>

      <EditorialSections :sections="page.sections" />
    </PageContainer>
  </section>
</template>

<style scoped>
.listing-page{min-height:60vh;padding-bottom:clamp(3.5rem,7vw,5.5rem)}
.cards-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:1.4rem}
.empty-state{display:grid;justify-items:center;max-width:760px;margin:0 auto;padding:3rem 2rem;border:1px solid var(--eem-border);border-radius:1.2rem;background:var(--eem-surface);text-align:center}
.empty-state__icon{display:grid;width:3.5rem;height:3.5rem;place-items:center;border-radius:1rem;background:#fff;color:var(--eem-secondary);font-size:1.6rem}
.empty-state h2{margin:1.2rem 0 .5rem;font-size:1.4rem}
.empty-state p{max-width:590px;margin:0;color:var(--eem-text-muted)}
.empty-state a{display:inline-flex;align-items:center;gap:.4rem;margin-top:1.2rem;color:var(--eem-primary);font-size:.9rem;font-weight:750;text-decoration:none}
@media(max-width:800px){.cards-grid{grid-template-columns:repeat(2,minmax(0,1fr))}}
@media(max-width:560px){.cards-grid{grid-template-columns:1fr}.empty-state{padding:2rem 1.2rem}}
</style>
