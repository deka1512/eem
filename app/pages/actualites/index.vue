<script setup lang="ts">
import {news} from '~/data/news'
useSeoMeta({title:'Actualités | Église Évangélique Les Moissonneurs',description:'Les actualités et les temps forts de l’Église Évangélique Les Moissonneurs.'})
</script>
<template><section class="listing-page"><PageContainer><SectionHeading eyebrow="À la une" title="Actualités de l’Église" description="Suivez les nouvelles et les temps forts de notre communauté."/><div v-if="news.length" class="cards-grid"><CardNews v-for="item in news" :key="item.slug" :item="item"/></div><p v-else class="empty-state">Les actualités seront publiées ici dès que les informations auront été confirmées.</p></PageContainer></section></template>
<style scoped>
.listing-page{min-height:55vh;padding-block:4rem}.cards-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:1.4rem}.empty-state{padding:2rem;border:1px dashed var(--eem-border);border-radius:1rem;color:var(--eem-text-muted);text-align:center}
@media(max-width:800px){.cards-grid{grid-template-columns:repeat(2,minmax(0,1fr))}}@media(max-width:560px){.cards-grid{grid-template-columns:1fr}}
</style>