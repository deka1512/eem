<script setup lang="ts">
import {news} from '~/data/news'
import {formatDate} from '~/utils/format-date'
const route=useRoute()
const item=news.find(entry=>entry.slug===String(route.params.slug))
if(!item)throw createError({statusCode:404,statusMessage:'Actualité introuvable'})
useSeoMeta({title:()=>item.title+' | Actualités EEM',description:()=>item.excerpt})
</script>
<template><article>
  <PageHero eyebrow="Actualités de l’EEM" :title="item.title" :description="item.excerpt" :image="item.image || 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=2200&q=85'" breadcrumb="Actualités" />
  <PageContainer><div class="detail-page"><NuxtLink to="/actualites" class="back-link">← Toutes les actualités</NuxtLink><BaseBadge>{{item.category}}</BaseBadge><time :datetime="item.publishedAt">{{formatDate(item.publishedAt)}}</time><img v-if="item.image" class="detail-image" :src="item.image" :alt="item.imageAlt||item.title"><p class="detail-copy">{{item.excerpt}}</p></div></PageContainer>
</article></template>
<style scoped>
.detail-page{min-height:55vh;padding-block:4rem}.back-link{display:block;margin-bottom:2rem;color:var(--eem-primary);text-decoration:none}.detail-page h1{max-width:850px;margin:1rem 0;font-size:clamp(2.2rem,5vw,3.8rem)}time{color:var(--eem-text-muted);font-size:.85rem}.detail-image{display:block;width:100%;max-width:900px;max-height:520px;margin:2rem 0;object-fit:cover;border-radius:1rem}.detail-copy{max-width:760px;color:var(--eem-text-muted);font-size:1.1rem}
</style>