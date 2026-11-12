<script setup lang="ts">
import { computed } from 'vue'
import { news } from '~/data/news'
import { formatDate } from '~/utils/format-date'

const route = useRoute()
const article = news.find(entry => entry.slug === String(route.params.slug))
if (!article) throw createError({ statusCode: 404, statusMessage: 'Actualité introuvable' })

const paragraphs = computed(() => article.content?.length ? article.content : [article.excerpt])
const relatedArticles = computed(() => news.filter(entry => entry.slug !== article.slug).slice(0, 2))

useSeoMeta({
  title: () => article.title + ' | Actualités EEM',
  description: () => article.excerpt,
  ogTitle: () => article.title + ' | EEM',
  ogDescription: () => article.excerpt,
  ogImage: () => article.image,
})
</script>

<template>
  <article class="article-page">
    <PageHero
      eyebrow="Actualités et édification"
      :title="article.title"
      :description="article.excerpt"
      :image="article.image || 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=2200&q=85'"
      breadcrumb="Actualités"
    />
    <PageContainer>
      <div class="article-layout">
        <main class="article-main">
          <NuxtLink to="/actualites" class="back-link"><UIcon name="i-lucide-arrow-left" /> Toutes les actualités</NuxtLink>
          <div class="article-meta">
            <BaseBadge>{{ article.category }}</BaseBadge>
            <time :datetime="article.publishedAt">{{ formatDate(article.publishedAt) }}</time>
            <span v-if="article.readingTime"><UIcon name="i-lucide-clock-3" /> {{ article.readingTime }}</span>
          </div>
          <p v-if="article.scripture" class="article-scripture"><UIcon name="i-lucide-book-open" /> Lecture biblique : {{ article.scripture }}</p>
          <img v-if="article.image" class="article-image" :src="article.image" :alt="article.imageAlt || article.title">
          <div class="article-copy">
            <p v-for="(paragraph, index) in paragraphs" :key="index">{{ paragraph }}</p>
          </div>
          <div class="article-end">
            <span>Église Évangélique Les Moissonneurs</span>
            <NuxtLink to="/enseignements">Découvrir les prédications <UIcon name="i-lucide-arrow-right" /></NuxtLink>
          </div>
        </main>
        <aside class="article-aside">
          <div class="aside-card">
            <span class="aside-card__icon"><UIcon name="i-lucide-book-open-check" /></span>
            <p class="eyebrow">Pour aller plus loin</p>
            <h2>Nourrir votre foi par la Parole.</h2>
            <p>Retrouvez des plans de prédications et des pistes de méditation biblique.</p>
            <NuxtLink to="/enseignements">Voir les prédications <UIcon name="i-lucide-arrow-up-right" /></NuxtLink>
          </div>
        </aside>
      </div>

      <section class="related-section">
        <div class="related-heading">
          <div><p class="eyebrow">Continuer la lecture</p><h2>À découvrir également</h2></div>
          <NuxtLink to="/actualites">Toutes les publications <UIcon name="i-lucide-arrow-right" /></NuxtLink>
        </div>
        <div class="related-grid">
          <CardNews v-for="item in relatedArticles" :key="item.slug" :item="item" />
        </div>
      </section>
    </PageContainer>
  </article>
</template>

<style scoped>
.article-page{padding-bottom:clamp(3rem,6vw,5rem)}
.article-page>:deep(.page-container){padding-top:clamp(2.5rem,5vw,4rem)}
.article-layout{display:grid;grid-template-columns:minmax(0,1fr) 280px;gap:clamp(2rem,5vw,4.5rem);align-items:start}
.article-main{min-width:0}
.back-link{display:inline-flex;align-items:center;gap:.45rem;margin-bottom:1.5rem;color:var(--eem-primary);font-size:.86rem;font-weight:800;text-decoration:none}
.article-meta{display:flex;flex-wrap:wrap;align-items:center;gap:.8rem;color:var(--eem-text-muted);font-size:.78rem}
.article-meta>span{display:inline-flex;align-items:center;gap:.35rem}
.article-scripture{display:flex;align-items:center;gap:.5rem;margin:1.3rem 0 0;color:var(--eem-primary);font-size:.86rem;font-weight:800}
.article-image{display:block;width:100%;max-height:500px;margin:1.5rem 0 2rem;aspect-ratio:16/9;object-fit:cover;border-radius:1.1rem}
.article-copy{max-width:790px}
.article-copy p{margin:0 0 1.25rem;color:var(--eem-text-muted);font-size:1.02rem;line-height:1.9}
.article-copy p:first-child{color:var(--eem-text);font-size:1.1rem;font-weight:550}
.article-end{display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:1rem;margin-top:2rem;padding-top:1.2rem;border-top:1px solid var(--eem-border);color:var(--eem-text-muted);font-size:.78rem;font-weight:750}
.article-end a,.related-heading>a{display:inline-flex;align-items:center;gap:.4rem;color:var(--eem-primary);text-decoration:none}
.article-aside{position:sticky;top:2rem}
.aside-card{padding:1.4rem;border:1px solid var(--eem-border);border-radius:1rem;background:var(--eem-surface)}
.aside-card__icon{display:grid;width:2.8rem;height:2.8rem;place-items:center;border-radius:.8rem;background:#fff;color:var(--eem-secondary);font-size:1.3rem}
.aside-card .eyebrow{margin:1rem 0 .4rem}
.aside-card h2{margin:0 0 .6rem;font-size:1.25rem;line-height:1.25}
.aside-card>p:not(.eyebrow){color:var(--eem-text-muted);font-size:.86rem;line-height:1.65}
.aside-card>a{display:inline-flex;align-items:center;gap:.4rem;margin-top:.4rem;color:var(--eem-primary);font-size:.82rem;font-weight:850;text-decoration:none}
.related-section{margin-top:4rem;padding-top:2rem;border-top:1px solid var(--eem-border)}
.related-heading{display:flex;align-items:flex-end;justify-content:space-between;gap:1rem;margin-bottom:1.4rem}
.related-heading h2{margin:.4rem 0 0;font-size:clamp(1.5rem,3vw,2rem)}
.related-heading>a{font-size:.82rem;font-weight:800}
.related-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:1.2rem}
@media(max-width:850px){.article-layout{grid-template-columns:1fr}.article-aside{position:static}.aside-card{display:grid;grid-template-columns:auto 1fr;column-gap:1rem;align-items:center}.aside-card__icon{grid-row:span 3}.aside-card .eyebrow{margin:.1rem 0}.aside-card h2{margin:0}.aside-card>p:not(.eyebrow){margin:.4rem 0}.aside-card>a{grid-column:2}}
@media(max-width:580px){.related-heading{align-items:flex-start;flex-direction:column}.related-grid{grid-template-columns:1fr}.article-copy p{font-size:.96rem}.aside-card{display:block}.aside-card__icon{margin-bottom:1rem}}
</style>