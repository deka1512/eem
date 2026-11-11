<script setup lang="ts">
import type {EventItem} from '~/types/content'
import {formatDate} from '~/utils/format-date'
defineProps<{item:EventItem}>()
</script>
<template>
<article class="event-card">
<div class="event-card__date"><UIcon name="i-lucide-calendar-days" /><time :datetime="item.date">{{formatDate(item.date)}}</time></div>
<div v-if="item.image" class="event-card__media"><img :src="item.image" :alt="item.imageAlt||item.title" loading="lazy"></div>
<div class="event-card__body">
<h3><NuxtLink :to="`/vie-de-leglise/evenements/${item.slug}`">{{item.title}}</NuxtLink></h3>
<p>{{item.description}}</p>
<p v-if="item.location" class="event-card__location"><UIcon name="i-lucide-map-pin" />{{item.location}}</p>
<NuxtLink :to="`/vie-de-leglise/evenements/${item.slug}`" class="event-card__link">Découvrir <UIcon name="i-lucide-arrow-right" /></NuxtLink>
</div></article>
</template>
<style scoped>
.event-card{display:flex;min-width:0;flex-direction:column;overflow:hidden;border:1px solid var(--eem-border);border-radius:var(--eem-radius-card);background:#fff;box-shadow:var(--eem-shadow-card)}
.event-card__date{display:flex;align-items:center;gap:.55rem;padding:1rem 1.2rem;background:var(--eem-surface);color:var(--eem-secondary);font-size:.82rem;font-weight:750}
.event-card__media{aspect-ratio:16/8;overflow:hidden}.event-card__media img{width:100%;height:100%;object-fit:cover}
.event-card__body{flex:1;padding:1.25rem}.event-card h3{margin:0 0 .55rem;font-size:1.15rem}.event-card h3 a{text-decoration:none}
.event-card__body>p{color:var(--eem-text-muted);font-size:.9rem}.event-card__location{display:flex;align-items:center;gap:.4rem}
.event-card__link{display:inline-flex;align-items:center;gap:.45rem;color:var(--eem-primary);font-size:.85rem;font-weight:700;text-decoration:none}
</style>