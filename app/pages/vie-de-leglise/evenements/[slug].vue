<script setup lang="ts">
import {events} from '~/data/events'
import {formatDate} from '~/utils/format-date'
const route=useRoute()
const item=events.find(entry=>entry.slug===String(route.params.slug))
if(!item)throw createError({statusCode:404,statusMessage:'Événement introuvable'})
useSeoMeta({title:()=>item.title+' | Vie de l’Église',description:()=>item.description})
</script>
<template><article class="detail-page"><PageContainer><NuxtLink to="/vie-de-leglise" class="back-link">← Vie de l’Église</NuxtLink><p class="eyebrow">Événement</p><h1>{{item.title}}</h1><p class="detail-meta"><UIcon name="i-lucide-calendar-days"/> {{formatDate(item.date)}} <span v-if="item.location">· {{item.location}}</span></p><img v-if="item.image" class="detail-image" :src="item.image" :alt="item.imageAlt||item.title"><p class="detail-copy">{{item.description}}</p></PageContainer></article></template>
<style scoped>
.detail-page{min-height:55vh;padding-block:4rem}.back-link{display:block;margin-bottom:2rem;color:var(--eem-primary);text-decoration:none}.detail-page h1{max-width:850px;margin:1rem 0;font-size:clamp(2.2rem,5vw,3.8rem)}.detail-meta{display:flex;align-items:center;gap:.5rem;color:var(--eem-text-muted)}.detail-image{display:block;width:100%;max-width:900px;max-height:520px;margin:2rem 0;object-fit:cover;border-radius:1rem}.detail-copy{max-width:760px;color:var(--eem-text-muted);font-size:1.1rem}
</style>