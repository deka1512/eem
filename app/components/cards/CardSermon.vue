<script setup lang="ts">
import type {SermonItem} from '~/types/content'
import {formatDate} from '~/utils/format-date'
defineProps<{item:SermonItem}>()
</script>
<template>
<article class="sermon-card">
<NuxtLink :to="`/enseignements/${item.slug}`" class="sermon-card__media" :aria-label="`Voir le message : ${item.title}`">
<img v-if="item.thumbnail" :src="item.thumbnail" :alt="`Illustration : ${item.title}`" loading="lazy">
<div v-else class="sermon-card__placeholder" aria-hidden="true"><UIcon name="i-lucide-book-open" /></div>
<span class="sermon-card__play"><UIcon name="i-lucide-play" /></span>
</NuxtLink>
<div class="sermon-card__body">
<p class="sermon-card__date">{{formatDate(item.preachedAt)}}</p><h3><NuxtLink :to="`/enseignements/${item.slug}`">{{item.title}}</NuxtLink></h3>
<p class="sermon-card__preacher">{{item.preacher}}</p>
<p v-if="item.scripture" class="sermon-card__scripture">{{item.scripture}}</p>
<p v-if="item.description" class="sermon-card__description">{{item.description}}</p>
<a v-if="item.videoUrl" :href="item.videoUrl" target="_blank" rel="noopener noreferrer" class="sermon-card__link">Voir le message <UIcon name="i-lucide-external-link" /></a>
</div></article>
</template>
<style scoped>
.sermon-card{overflow:hidden;border:1px solid var(--eem-border);border-radius:var(--eem-radius-card);background:#fff;box-shadow:var(--eem-shadow-card)}
.sermon-card__media{position:relative;display:grid;overflow:hidden;aspect-ratio:16/9;place-items:center;background:var(--eem-secondary)}
.sermon-card__media img{width:100%;height:100%;object-fit:cover}.sermon-card__placeholder{color:rgb(255 255 255 / 75%);font-size:2.8rem}
.sermon-card__play{position:absolute;display:grid;width:3rem;height:3rem;place-items:center;border-radius:50%;background:#fff;color:var(--eem-secondary);box-shadow:0 4px 16px rgb(0 0 0 / 15%)}
.sermon-card__body{padding:1.25rem}.sermon-card__date,.sermon-card__preacher,.sermon-card__scripture,.sermon-card__description{color:var(--eem-text-muted);font-size:.84rem}
.sermon-card__date{margin:0 0 .6rem}.sermon-card h3{margin:0 0 .5rem;font-size:1.15rem}.sermon-card h3 a{text-decoration:none}
.sermon-card__preacher{margin:0;font-weight:700}.sermon-card__scripture{margin:.5rem 0 0;color:var(--eem-secondary)}.sermon-card__description{margin:.5rem 0 0}
.sermon-card__link{display:inline-flex;align-items:center;gap:.4rem;margin-top:1rem;color:var(--eem-primary);font-size:.85rem;font-weight:700;text-decoration:none}
</style>