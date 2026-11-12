<script setup lang="ts">
import { sermons } from '~/data/sermons'

const route = useRoute()
const sermon = sermons.find(entry => entry.slug === String(route.params.slug))
if (!sermon) throw createError({ statusCode: 404, statusMessage: 'Enseignement introuvable' })

useSeoMeta({
  title: () => sermon.title + ' | Enseignements EEM',
  description: () => sermon.description || sermon.title,
  ogTitle: () => sermon.title + ' | EEM',
  ogDescription: () => sermon.description || sermon.title,
  ogImage: () => sermon.thumbnail,
})
</script>

<template>
  <article class="sermon-detail">
    <PageHero
      eyebrow="Prédication et étude biblique"
      :title="sermon.title"
      :description="sermon.description || 'Un temps pour écouter, méditer et mettre la Parole de Dieu en pratique.'"
      :image="sermon.thumbnail || 'https://images.unsplash.com/photo-1504052434569-70ad5836ab65?auto=format&fit=crop&w=2200&q=85'"
      breadcrumb="Enseignements"
    />
    <PageContainer>
      <div class="sermon-detail__layout">
        <main>
          <NuxtLink to="/enseignements" class="back-link"><UIcon name="i-lucide-arrow-left" /> Toutes les prédications</NuxtLink>
          <div class="sermon-meta">
            <BaseBadge>{{ sermon.category || 'Enseignement biblique' }}</BaseBadge>
            <span v-if="sermon.scripture"><UIcon name="i-lucide-book-open" /> {{ sermon.scripture }}</span>
          </div>

          <section v-if="sermon.outline?.length" class="outline-section">
            <p class="eyebrow">Plan de prédication</p>
            <h2>Comprendre le message</h2>
            <div class="outline-list">
              <article v-for="(point, index) in sermon.outline" :key="point.title" class="outline-item">
                <span class="outline-item__number">{{ String(index + 1).padStart(2, '0') }}</span>
                <div><h3>{{ point.title }}</h3><p>{{ point.description }}</p></div>
              </article>
            </div>
          </section>

          <section v-if="sermon.application" class="application-card">
            <span><UIcon name="i-lucide-footprints" /></span>
            <div><p class="eyebrow">Mise en pratique</p><h2>Un pas concret cette semaine</h2><p>{{ sermon.application }}</p></div>
          </section>

          <section v-if="sermon.prayer" class="prayer-card">
            <p class="eyebrow">Pour terminer</p>
            <h2>Sujet de prière</h2>
            <p>{{ sermon.prayer }}</p>
          </section>

          <div v-if="sermon.videoUrl" class="video-action">
            <a :href="sermon.videoUrl" target="_blank" rel="noopener noreferrer"><UIcon name="i-lucide-play-circle" /> Regarder la prédication <UIcon name="i-lucide-arrow-up-right" /></a>
          </div>
          <p class="editorial-note">Cette page présente une trame biblique destinée à l’étude et à l’édification. Elle ne constitue pas la transcription d’une prédication enregistrée.</p>
        </main>

        <aside class="sermon-aside">
          <div class="aside-card">
            <span class="aside-card__icon"><UIcon name="i-lucide-book-open-check" /></span>
            <p class="eyebrow">Poursuivre la réflexion</p>
            <h2>La Parole prend vie dans notre quotidien.</h2>
            <p>Relisez les passages proposés, prenez le temps de méditer et partagez vos questions avec la communauté.</p>
            <NuxtLink to="/contact">Échanger avec l’EEM <UIcon name="i-lucide-arrow-right" /></NuxtLink>
          </div>
        </aside>
      </div>
    </PageContainer>
  </article>
</template>

<style scoped>
.sermon-detail{padding-bottom:clamp(3rem,6vw,5rem)}
.sermon-detail>:deep(.page-container){padding-top:clamp(2.5rem,5vw,4rem)}
.sermon-detail__layout{display:grid;grid-template-columns:minmax(0,1fr) 280px;gap:clamp(2rem,5vw,4rem);align-items:start}
.back-link{display:inline-flex;align-items:center;gap:.45rem;margin-bottom:1.5rem;color:var(--eem-primary);font-size:.86rem;font-weight:800;text-decoration:none}
.sermon-meta{display:flex;flex-wrap:wrap;align-items:center;gap:1rem;color:var(--eem-text-muted);font-size:.82rem}
.sermon-meta>span{display:inline-flex;align-items:center;gap:.4rem}
.outline-section{margin-top:2.2rem}
.outline-section h2,.application-card h2,.prayer-card h2{margin:.45rem 0 1.2rem;font-size:clamp(1.6rem,3vw,2.2rem);line-height:1.2}
.outline-list{display:grid;gap:.8rem}
.outline-item{display:grid;grid-template-columns:2.8rem 1fr;gap:1rem;padding:1.25rem;border:1px solid var(--eem-border);border-radius:1rem;background:#fff}
.outline-item__number{display:grid;width:2.5rem;height:2.5rem;place-items:center;border-radius:.8rem;background:var(--eem-surface);color:var(--eem-primary);font-size:.8rem;font-weight:850}
.outline-item h3{margin:.1rem 0 .45rem;font-size:1.08rem}
.outline-item p{margin:0;color:var(--eem-text-muted);font-size:.9rem;line-height:1.7}
.application-card{display:flex;gap:1rem;margin-top:1.4rem;padding:1.4rem;border-radius:1rem;background:#edf6f8}
.application-card>span{display:grid;width:2.8rem;height:2.8rem;flex:none;place-items:center;border-radius:.8rem;background:#fff;color:var(--eem-secondary);font-size:1.25rem}
.application-card h2,.prayer-card h2{margin:.25rem 0 .5rem;font-size:1.25rem}
.application-card p:last-child,.prayer-card>p:last-child{margin:0;color:var(--eem-text-muted);font-size:.9rem;line-height:1.7}
.prayer-card{margin-top:1rem;padding:1.4rem;border:1px solid var(--eem-border);border-radius:1rem}
.video-action{margin-top:1.4rem}
.video-action a{display:inline-flex;align-items:center;gap:.5rem;color:var(--eem-primary);font-weight:800;text-decoration:none}
.editorial-note{margin-top:1.5rem;color:var(--eem-text-muted);font-size:.76rem;line-height:1.6}
.sermon-aside{position:sticky;top:2rem}
.aside-card{padding:1.4rem;border:1px solid var(--eem-border);border-radius:1rem;background:var(--eem-surface)}
.aside-card__icon{display:grid;width:2.8rem;height:2.8rem;place-items:center;border-radius:.8rem;background:#fff;color:var(--eem-secondary);font-size:1.3rem}
.aside-card .eyebrow{margin:1rem 0 .4rem}
.aside-card h2{margin:0 0 .6rem;font-size:1.25rem;line-height:1.25}
.aside-card>p:not(.eyebrow){color:var(--eem-text-muted);font-size:.86rem;line-height:1.65}
.aside-card>a{display:inline-flex;align-items:center;gap:.4rem;margin-top:.4rem;color:var(--eem-primary);font-size:.82rem;font-weight:850;text-decoration:none}
@media(max-width:850px){.sermon-detail__layout{grid-template-columns:1fr}.sermon-aside{position:static}}
</style>