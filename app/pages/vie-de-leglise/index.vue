<script setup lang="ts">
import { events } from '~/data/events'
import { staticPages } from '~/data/pages'

const page = staticPages['vie-de-leglise']
useSeoMeta({
  title: 'Vie de l’Église | Église Évangélique Les Moissonneurs',
  description: page.description,
  ogTitle: 'Vie de l’Église | Église Évangélique Les Moissonneurs',
  ogDescription: page.description,
})
</script>

<template>
  <section class="listing-page">
    <PageHero :eyebrow="page.eyebrow" :title="page.heroTitle" :description="page.intro" :image="page.heroImage" :breadcrumb="page.title" />
    <PageContainer>

      <div v-if="events.length" class="cards-grid">
        <CardEvent v-for="item in events" :key="item.slug" :item="item" />
      </div>
      <div v-else class="empty-state">
        <span class="empty-state__icon"><UIcon name="i-lucide-calendar-days" /></span>
        <h2>Les prochains rendez-vous seront annoncés ici.</h2>
        <p>Les informations pratiques seront publiées dès confirmation par l’Église. Nous préférons vous communiquer des dates et horaires exacts plutôt que des informations non vérifiées.</p>
        <NuxtLink to="/contact">Demander une information <UIcon name="i-lucide-arrow-right" /></NuxtLink>
      </div>

      <EditorialSections :sections="page.sections" />

      <div class="life-note">
        <div>
          <p class="eyebrow">Vivre la communion</p>
          <h2>La vie chrétienne se construit aussi ensemble.</h2>
          <p>La prière, l’écoute de la Parole, l’encouragement mutuel et le service donnent corps à la communion fraternelle.</p>
        </div>
        <NuxtLink to="/priere">Besoin de prière ? <UIcon name="i-lucide-arrow-right" /></NuxtLink>
      </div>
    </PageContainer>
  </section>
</template>

<style scoped>
.listing-page{min-height:60vh;padding-bottom:clamp(3.5rem,7vw,5.5rem)}
.listing-page > :deep(.page-container){padding-top:clamp(3rem,6vw,5rem)}
.cards-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:1.4rem}
.empty-state{display:grid;justify-items:center;max-width:760px;margin:0 auto;padding:3rem 2rem;border:1px solid var(--eem-border);border-radius:1.2rem;background:var(--eem-surface);text-align:center}
.empty-state__icon{display:grid;width:3.5rem;height:3.5rem;place-items:center;border-radius:1rem;background:#fff;color:var(--eem-secondary);font-size:1.6rem}
.empty-state h2{margin:1.2rem 0 .5rem;font-size:1.4rem}
.empty-state p{max-width:590px;margin:0;color:var(--eem-text-muted)}
.empty-state a{display:inline-flex;align-items:center;gap:.4rem;margin-top:1.2rem;color:var(--eem-primary);font-size:.9rem;font-weight:750;text-decoration:none}
.life-note{display:flex;align-items:center;justify-content:space-between;gap:2rem;margin-top:4rem;padding:2rem;border-radius:1.2rem;background:var(--eem-secondary);color:#fff}
.life-note h2{max-width:620px;margin:.5rem 0;color:#fff;font-size:clamp(1.5rem,3vw,2rem)}
.life-note p:not(.eyebrow){max-width:650px;margin:0;color:rgb(255 255 255 / 75%)}
.life-note .eyebrow{color:#b9e6f0}
.life-note>a{display:inline-flex;flex:none;align-items:center;gap:.4rem;color:#fff;font-size:.9rem;font-weight:750;text-decoration:none}
@media(max-width:800px){.cards-grid{grid-template-columns:repeat(2,minmax(0,1fr))}.life-note{align-items:flex-start;flex-direction:column}}
@media(max-width:560px){.cards-grid{grid-template-columns:1fr}.empty-state{padding:2rem 1.2rem}}
</style>
