<script setup lang="ts">
import { computed, ref } from 'vue'
import { news } from '~/data/news'
import { staticPages } from '~/data/pages'
import { church } from '~/data/church'
import { formatDate } from '~/utils/format-date'

const page = staticPages.actualites!
const selectedCategory = ref('Toutes')
const categories = ['Toutes', ...new Set(news.map(item => item.category))]
const featuredArticle = news[0]
const visibleNews = computed(() => {
  if (selectedCategory.value === 'Toutes') return news.slice(1)
  return news.filter(item => item.category === selectedCategory.value)
})

useSeoMeta({
  title: 'Actualités et articles | Église Évangélique Les Moissonneurs',
  description: page.description,
  ogTitle: 'Actualités et articles | Église Évangélique Les Moissonneurs',
  ogDescription: page.description,
})
</script>

<template>
  <section class="news-page">
    <PageHero
      :eyebrow="page.eyebrow"
      :title="page.heroTitle"
      :description="page.intro"
      :image="page.heroImage"
      :breadcrumb="page.title"
    />

    <PageContainer>
      <div class="news-intro">
        <div>
          <p class="eyebrow">Le journal de la communauté</p>
          <h2>Des paroles qui édifient, des nouvelles qui rapprochent.</h2>
        </div>
        <p>Retrouvez des articles autour de la foi chrétienne, de la mission, de la prière et de la vie communautaire. Les annonces pratiques seront publiées lorsqu’elles auront été confirmées par l’Église.</p>
      </div>

      <article v-if="selectedCategory === 'Toutes' && featuredArticle" class="featured-article">
        <NuxtLink :to="`/actualites/${featuredArticle.slug}`" class="featured-article__image">
          <img :src="featuredArticle.image" :alt="featuredArticle.imageAlt || featuredArticle.title">
          <span class="featured-article__label">À découvrir</span>
        </NuxtLink>
        <div class="featured-article__content">
          <div class="article-meta">
            <BaseBadge>{{ featuredArticle.category }}</BaseBadge>
            <time :datetime="featuredArticle.publishedAt">{{ formatDate(featuredArticle.publishedAt) }}</time>
          </div>
          <h2><NuxtLink :to="`/actualites/${featuredArticle.slug}`">{{ featuredArticle.title }}</NuxtLink></h2>
          <p class="featured-article__scripture"><UIcon name="i-lucide-book-open" /> {{ featuredArticle.scripture }}</p>
          <p>{{ featuredArticle.excerpt }}</p>
          <div class="featured-article__footer">
            <span><UIcon name="i-lucide-clock-3" /> {{ featuredArticle.readingTime }}</span>
            <NuxtLink :to="`/actualites/${featuredArticle.slug}`">Lire l’article <UIcon name="i-lucide-arrow-right" /></NuxtLink>
          </div>
        </div>
      </article>

      <div class="news-toolbar">
        <div>
          <p class="eyebrow">Explorer les publications</p>
          <h2>{{ selectedCategory === 'Toutes' ? 'Tous les articles' : selectedCategory }}</h2>
        </div>
        <div class="category-filters" aria-label="Filtrer les articles par catégorie">
          <button
            v-for="category in categories"
            :key="category"
            type="button"
            :class="{ 'is-active': selectedCategory === category }"
            :aria-pressed="selectedCategory === category"
            @click="selectedCategory = category"
          >
            {{ category }}
          </button>
        </div>
      </div>

      <div v-if="visibleNews.length" class="news-grid">
        <CardNews v-for="item in visibleNews" :key="item.slug" :item="item" />
      </div>
      <div v-else class="empty-state">
        <UIcon name="i-lucide-book-open" />
        <h3>Aucun article dans cette catégorie.</h3>
        <button type="button" @click="selectedCategory = 'Toutes'">Voir toutes les publications</button>
      </div>

      <section class="news-cta">
        <div class="news-cta__icon"><UIcon name="i-lucide-messages-square" /></div>
        <div class="news-cta__copy">
          <p class="eyebrow">Restons en contact</p>
          <h2>Une question ou une information à partager ?</h2>
          <p>Pour une annonce officielle, une précision ou une demande d’information, contactez directement l’Église.</p>
        </div>
        <div class="news-cta__actions">
          <a :href="church.facebookUrl" target="_blank" rel="noopener noreferrer" class="news-cta__button news-cta__button--light">
            <UIcon name="i-lucide-facebook" /> Suivre l’EEM
          </a>
          <NuxtLink to="/contact" class="news-cta__button">
            Nous contacter <UIcon name="i-lucide-arrow-right" />
          </NuxtLink>
        </div>
      </section>
    </PageContainer>
  </section>
</template>

<style scoped>
.news-page{min-height:60vh;padding-bottom:clamp(3.5rem,7vw,5.5rem)}
.news-page>:deep(.page-container){padding-top:clamp(3rem,6vw,5rem)}
.news-intro{display:grid;grid-template-columns:1.05fr .95fr;gap:clamp(2rem,6vw,5rem);align-items:end;margin-bottom:2.4rem}
.news-intro h2,.news-toolbar h2{max-width:690px;margin:.55rem 0 0;color:var(--eem-text);font-size:clamp(1.9rem,3.6vw,2.8rem);line-height:1.12;letter-spacing:-.03em}
.news-intro>p{max-width:560px;margin:0;color:var(--eem-text-muted);font-size:.96rem;line-height:1.8}
.featured-article{display:grid;grid-template-columns:1.1fr .9fr;overflow:hidden;margin-bottom:4rem;border:1px solid var(--eem-border);border-radius:1.25rem;background:#fff;box-shadow:var(--eem-shadow-card)}
.featured-article__image{position:relative;display:block;min-height:390px;overflow:hidden;background:var(--eem-surface)}
.featured-article__image img{display:block;width:100%;height:100%;min-height:390px;object-fit:cover;transition:transform .35s}
.featured-article:hover .featured-article__image img{transform:scale(1.035)}
.featured-article__label{position:absolute;top:1.2rem;left:1.2rem;padding:.5rem .8rem;border-radius:2rem;background:#fff;color:var(--eem-secondary);font-size:.72rem;font-weight:850;letter-spacing:.05em;text-transform:uppercase}
.featured-article__content{display:flex;flex-direction:column;justify-content:center;padding:clamp(1.5rem,4vw,3rem)}
.article-meta{display:flex;flex-wrap:wrap;align-items:center;gap:.8rem;color:var(--eem-text-muted);font-size:.76rem}
.featured-article__content h2{margin:1.1rem 0 .65rem;font-size:clamp(1.65rem,2.7vw,2.35rem);line-height:1.16;letter-spacing:-.025em}
.featured-article__content h2 a{color:var(--eem-text);text-decoration:none}
.featured-article__content h2 a:hover{color:var(--eem-primary)}
.featured-article__scripture{display:flex;align-items:center;gap:.45rem;margin:0 0 .85rem;color:var(--eem-primary);font-size:.8rem;font-weight:800}
.featured-article__content>p:not(.featured-article__scripture){margin:0;color:var(--eem-text-muted);font-size:.94rem;line-height:1.75}
.featured-article__footer{display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:1rem;margin-top:1.7rem;padding-top:1.2rem;border-top:1px solid var(--eem-border)}
.featured-article__footer span,.featured-article__footer a{display:inline-flex;align-items:center;gap:.4rem;font-size:.8rem;font-weight:800}
.featured-article__footer span{color:var(--eem-text-muted)}
.featured-article__footer a{color:var(--eem-primary);text-decoration:none}
.news-toolbar{display:flex;align-items:flex-end;justify-content:space-between;gap:2rem;margin-bottom:1.6rem}
.news-toolbar h2{font-size:clamp(1.6rem,3vw,2.15rem)}
.category-filters{display:flex;flex-wrap:wrap;justify-content:flex-end;gap:.5rem}
.category-filters button{min-height:2.35rem;padding:.5rem .85rem;border:1px solid var(--eem-border);border-radius:2rem;background:#fff;color:var(--eem-text-muted);font:inherit;font-size:.76rem;font-weight:750;cursor:pointer;transition:background .2s,border-color .2s,color .2s}
.category-filters button:hover,.category-filters button.is-active{border-color:var(--eem-secondary);background:var(--eem-secondary);color:#fff}
.news-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:1.35rem}
.news-grid :deep(.content-card){height:100%;transition:transform .2s,box-shadow .2s}
.news-grid :deep(.content-card:hover){transform:translateY(-4px);box-shadow:0 16px 35px rgb(5 54 72 / 10%)}
.empty-state{display:grid;justify-items:center;gap:.8rem;padding:3rem 1.5rem;border:1px dashed var(--eem-border);border-radius:1rem;background:var(--eem-surface);text-align:center;color:var(--eem-secondary)}
.empty-state> :deep(svg){font-size:2rem}
.empty-state h3{margin:0;color:var(--eem-text)}
.empty-state button{border:0;background:none;color:var(--eem-primary);font:inherit;font-size:.85rem;font-weight:800;cursor:pointer}
.news-cta{display:flex;align-items:center;gap:1.4rem;margin-top:4rem;padding:clamp(1.5rem,4vw,2.6rem);border-radius:1.25rem;background:linear-gradient(115deg,#07546b,#06384b);color:#fff}
.news-cta__icon{display:grid;width:3.6rem;height:3.6rem;flex:none;place-items:center;border:1px solid rgb(255 255 255 / 20%);border-radius:1rem;background:rgb(255 255 255 / 9%);font-size:1.6rem}
.news-cta__copy{flex:1}
.news-cta__copy .eyebrow{color:#b9e6f0}
.news-cta__copy h2{margin:.3rem 0 .45rem;color:#fff;font-size:clamp(1.3rem,2.5vw,1.9rem)}
.news-cta__copy>p:last-child{max-width:620px;margin:0;color:rgb(255 255 255 / 75%);font-size:.88rem;line-height:1.65}
.news-cta__actions{display:flex;flex:none;flex-direction:column;gap:.6rem;min-width:175px}
.news-cta__button{display:inline-flex;min-height:2.7rem;align-items:center;justify-content:center;gap:.45rem;padding:.7rem .9rem;border:1px solid rgb(255 255 255 / 35%);border-radius:.65rem;color:#fff;font-size:.8rem;font-weight:800;text-decoration:none}
.news-cta__button--light{border-color:#fff;background:#fff;color:#07546b}
@media(max-width:900px){.news-intro{grid-template-columns:1fr;gap:1rem}.featured-article{grid-template-columns:1fr 1fr}.featured-article__image,.featured-article__image img{min-height:330px}.news-toolbar{align-items:flex-start;flex-direction:column}.category-filters{justify-content:flex-start}.news-grid{grid-template-columns:repeat(2,minmax(0,1fr))}.news-cta{align-items:flex-start;flex-wrap:wrap}.news-cta__actions{flex-direction:row;flex-wrap:wrap}}
@media(max-width:620px){.featured-article{grid-template-columns:1fr}.featured-article__image,.featured-article__image img{min-height:230px;max-height:270px}.featured-article__content{padding:1.35rem}.news-grid{grid-template-columns:1fr}.category-filters{gap:.4rem}.category-filters button{font-size:.72rem}.news-cta{flex-direction:column}.news-cta__actions{width:100%;flex-direction:column}.news-cta__button{width:100%}}
@media(prefers-reduced-motion:reduce){.featured-article__image img,.category-filters button,.news-grid :deep(.content-card){transition:none}}
</style>