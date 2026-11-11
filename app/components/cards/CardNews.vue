<script setup lang="ts">
import type {NewsItem} from '~/types/content'
import {formatDate} from '~/utils/format-date'
defineProps<{item:NewsItem}>()
</script>
<template>
<article class="content-card news-card">
<NuxtLink :to="`/actualites/${item.slug}`" class="news-card__media" :aria-label="`Lire : ${item.title}`">
<img v-if="item.image" :src="item.image" :alt="item.imageAlt||item.title" loading="lazy">
<div v-else class="news-card__placeholder" aria-hidden="true"><UIcon name="i-lucide-newspaper" /></div>
</NuxtLink>
<div class="content-card__body">
<div class="content-card__meta"><BaseBadge>{{item.category}}</BaseBadge><time :datetime="item.publishedAt">{{formatDate(item.publishedAt)}}</time></div>
<h3><NuxtLink :to="`/actualites/${item.slug}`">{{item.title}}</NuxtLink></h3>
<p>{{item.excerpt}}</p>
<NuxtLink :to="`/actualites/${item.slug}`" class="content-card__link">Lire l’actualité <UIcon name="i-lucide-arrow-right" /></NuxtLink>
</div></article>
</template>
<style scoped>
.content-card{overflow:hidden;border:1px solid var(--eem-border);border-radius:var(--eem-radius-card);background:#fff;box-shadow:var(--eem-shadow-card)}
.news-card__media{display:block;overflow:hidden;aspect-ratio:16/9;background:var(--eem-surface)}.news-card__media img{width:100%;height:100%;object-fit:cover;transition:transform 250ms}.news-card:hover .news-card__media img{transform:scale(1.035)}
.news-card__placeholder{display:grid;width:100%;height:100%;place-items:center;color:var(--eem-secondary);font-size:2.5rem}
.content-card__body{padding:1.25rem}.content-card__meta{display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:.6rem;color:var(--eem-text-muted);font-size:.75rem}
.content-card h3{margin:1rem 0 .55rem;font-size:1.15rem}.content-card h3 a{text-decoration:none}.content-card h3 a:hover{color:var(--eem-primary)}
.content-card__body>p{margin:0;color:var(--eem-text-muted);font-size:.9rem}.content-card__link{display:inline-flex;align-items:center;gap:.45rem;margin-top:1.1rem;color:var(--eem-primary);font-size:.85rem;font-weight:700;text-decoration:none}
</style>