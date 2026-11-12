<script setup lang="ts">
import {sermons} from '~/data/sermons'
import {formatDate} from '~/utils/format-date'
const route=useRoute()
const item=sermons.find(entry=>entry.slug===String(route.params.slug))
if(!item)throw createError({statusCode:404,statusMessage:'Enseignement introuvable'})
useSeoMeta({title:()=>item.title+' | Enseignements EEM',description:()=>item.description||item.title})
</script>
<template><article>
  <PageHero eyebrow="Enseignement biblique" :title="item.title" :description="item.description || 'Un temps pour écouter, méditer et mettre la Parole de Dieu en pratique.'" :image="item.thumbnail || 'https://images.unsplash.com/photo-1504052434569-70ad5836ab65?auto=format&fit=crop&w=2200&q=85'" breadcrumb="Enseignements" />
  <PageContainer><div class="detail-page"><NuxtLink to="/enseignements" class="back-link">← Tous les enseignements</NuxtLink><p class="detail-meta">{{item.preacher}} · {{formatDate(item.preachedAt)}}</p><p v-if="item.scripture" class="scripture">{{item.scripture}}</p><p v-if="item.description" class="detail-copy">{{item.description}}</p><a v-if="item.videoUrl" class="video-link" :href="item.videoUrl" target="_blank" rel="noopener noreferrer">Regarder le message ↗</a></div></PageContainer>
</article></template>
<style scoped>
.detail-page{min-height:55vh;padding-block:4rem}.back-link{display:block;margin-bottom:2rem;color:var(--eem-primary);text-decoration:none}.detail-page h1{max-width:850px;margin:1rem 0;font-size:clamp(2.2rem,5vw,3.8rem)}.detail-meta,.detail-copy{color:var(--eem-text-muted)}.scripture{color:var(--eem-secondary);font-weight:700}.detail-copy{max-width:760px;font-size:1.1rem}.video-link{display:inline-block;margin-top:1rem;color:var(--eem-primary);font-weight:700}
</style>