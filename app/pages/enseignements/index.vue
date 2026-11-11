<script setup lang="ts">
import {sermons} from '~/data/sermons'
useSeoMeta({title:'Enseignements | Église Évangélique Les Moissonneurs',description:'Prédications et enseignements de l’Église Évangélique Les Moissonneurs.'})
</script>
<template><section class="listing-page"><PageContainer><SectionHeading eyebrow="Grandir dans la foi" title="Enseignements" description="Retrouvez les messages et enseignements partagés par l’Église."/><div v-if="sermons.length" class="cards-grid"><CardSermon v-for="item in sermons" :key="item.slug" :item="item"/></div><p v-else class="empty-state">Les prédications et enseignements seront ajoutés dans cette rubrique.</p></PageContainer></section></template>
<style scoped>
.listing-page{min-height:55vh;padding-block:4rem}.cards-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:1.4rem}.empty-state{padding:2rem;border:1px dashed var(--eem-border);border-radius:1rem;color:var(--eem-text-muted);text-align:center}
@media(max-width:800px){.cards-grid{grid-template-columns:repeat(2,minmax(0,1fr))}}@media(max-width:560px){.cards-grid{grid-template-columns:1fr}}
</style>