<script setup lang="ts">
import {church} from '~/data/church'
const route=useRoute()
const sections:Record<string,{title:string;description:string}>={
  eglise:{title:'L’Église',description:'Découvrez l’Église Évangélique Les Moissonneurs, sa présentation, sa vision et son engagement.'},
  'vie-de-leglise':{title:'Vie de l’Église',description:'Retrouvez les activités et les rendez-vous de la communauté.'},
  enseignements:{title:'Enseignements',description:'Les prédications et enseignements seront publiés dans cette rubrique.'},
  actualites:{title:'Actualités',description:'Retrouvez les nouvelles et les temps forts de l’Église.'},
  contact:{title:'Nous contacter',description:'L’Église Évangélique Les Moissonneurs vous accueille à Kinshasa.'},
  priere:{title:'Demande de prière',description:'Pour transmettre une demande de prière, contactez directement l’Église. Un formulaire dédié sera ajouté dans une prochaine étape.'},
  'rendez-vous':{title:'Demander un rendez-vous',description:'Pour solliciter un rendez-vous, contactez directement l’Église. Un formulaire dédié sera ajouté dans une prochaine étape.'},
}
const section=sections[String(route.params.slug)]
if(!section)throw createError({statusCode:404,statusMessage:'Page introuvable'})
useSeoMeta({title:()=>section.title+' | Église Évangélique Les Moissonneurs',description:()=>section.description})
</script>
<template>
<section class="section-page"><PageContainer>
<p class="eyebrow">Église Évangélique Les Moissonneurs</p><h1>{{section.title}}</h1><p class="section-page__description">{{section.description}}</p>
<div v-if="route.params.slug==='contact'" class="contact-details">
<div><UIcon name="i-lucide-map-pin"/><div><strong>Adresse</strong><p>{{church.address}}</p></div></div>
<div><UIcon name="i-lucide-phone"/><div><strong>Téléphone / WhatsApp</strong><p><a :href="church.phoneLink">{{church.phone}}</a></p></div></div>
<div><UIcon name="i-lucide-mail"/><div><strong>E-mail</strong><p><a :href="`mailto:${church.email}`">{{church.email}}</a></p></div></div>
</div>
<div v-else class="section-page__notice"><UIcon name="i-lucide-info"/><p>Cette rubrique sera enrichie avec les informations et les contenus validés par l’Église.</p></div>
<BaseButton to="/" variant="secondary">Retour à l’accueil</BaseButton>
</PageContainer></section>
</template>
<style scoped>
.section-page{min-height:55vh;padding-block:clamp(4rem,8vw,7rem)}.section-page h1{margin:.7rem 0;font-size:clamp(2.4rem,5vw,4rem)}.section-page__description{max-width:700px;color:var(--eem-text-muted);font-size:1.1rem}
.section-page__notice,.contact-details{max-width:760px;margin:2rem 0;padding:1.5rem;border:1px solid var(--eem-border);border-radius:1rem;background:#fff;box-shadow:var(--eem-shadow-card)}
.section-page__notice{display:flex;align-items:center;gap:1rem;color:var(--eem-secondary)}.section-page__notice p{margin:0}
.contact-details{display:grid;gap:1.25rem}.contact-details>div{display:flex;align-items:flex-start;gap:1rem}.contact-details>div> :deep(svg){flex:none;margin-top:.2rem;color:var(--eem-primary);font-size:1.3rem}.contact-details strong{color:var(--eem-secondary)}.contact-details p{margin:.2rem 0 0;color:var(--eem-text-muted)}.contact-details a{color:var(--eem-primary);text-decoration:none}
</style>