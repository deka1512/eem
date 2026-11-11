<script setup lang="ts">
import {events} from '~/data/events'
useSeoMeta({title:'Vie de l’Église | Église Évangélique Les Moissonneurs',description:'Activités et rendez-vous de l’Église Évangélique Les Moissonneurs.'})
</script>
<template><section class="listing-page"><PageContainer><SectionHeading eyebrow="Communion et vie communautaire" title="Vie de l’Église" description="Retrouvez les activités et les événements annoncés par l’Église."/><div v-if="events.length" class="cards-grid"><CardEvent v-for="item in events" :key="item.slug" :item="item"/></div><p v-else class="empty-state">Les activités et événements seront annoncés ici après confirmation de leurs informations.</p></PageContainer></section></template>
<style scoped>
.listing-page{min-height:55vh;padding-block:4rem}.cards-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:1.4rem}.empty-state{padding:2rem;border:1px dashed var(--eem-border);border-radius:1rem;color:var(--eem-text-muted);text-align:center}
@media(max-width:800px){.cards-grid{grid-template-columns:repeat(2,minmax(0,1fr))}}@media(max-width:560px){.cards-grid{grid-template-columns:1fr}}
</style>