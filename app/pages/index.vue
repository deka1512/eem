<script setup lang="ts">
import {church} from '~/data/church'
import {news} from '~/data/news'
import {events} from '~/data/events'
import {sermons} from '~/data/sermons'

useSeoMeta({
  title:'Accueil | Église Évangélique Les Moissonneurs',
  description:church.description,
})
</script>
<template>
<div>
<section class="home-hero"><PageContainer><div class="home-hero__content">
<p class="eyebrow">Église Évangélique · Kinshasa</p>
<h1>Ensemble, annonçons l’Évangile de Jésus-Christ.</h1>
<p class="home-hero__description">{{church.description}}</p>
<div class="home-hero__actions"><BaseButton to="/eglise" size="lg">Découvrir l’Église <UIcon name="i-lucide-arrow-right" /></BaseButton><BaseButton to="/contact" variant="ghost" size="lg">Nous contacter</BaseButton></div>
</div><div class="home-hero__visual" aria-hidden="true"><div class="home-hero__symbol"><UIcon name="i-lucide-wheat" /></div><span>Foi · Communion · Engagement</span></div></PageContainer></section>
<section class="page-section"><PageContainer><div class="welcome-grid"><div><p class="eyebrow">Bienvenue à l’EEM</p><h2>Une communauté tournée vers l’Évangile.</h2></div><div><p>{{church.description}}</p><BaseButton to="/eglise" variant="secondary">En savoir plus <UIcon name="i-lucide-arrow-right" /></BaseButton></div></div></PageContainer></section>
<section v-if="events.length" class="page-section page-section--soft"><PageContainer><SectionHeading eyebrow="Vie de l’Église" title="Nos prochains rendez-vous" description="Retrouvez les événements et rencontres annoncés par l’Église."/><div class="cards-grid"><CardEvent v-for="event in events.slice(0,3)" :key="event.slug" :item="event"/></div></PageContainer></section>
<section v-if="sermons.length" class="page-section"><PageContainer><SectionHeading eyebrow="Grandir dans la foi" title="Enseignements" description="Retrouvez les messages et enseignements partagés par l’Église."/><div class="cards-grid"><CardSermon v-for="sermon in sermons.slice(0,3)" :key="sermon.slug" :item="sermon"/></div></PageContainer></section>
<section v-if="news.length" class="page-section page-section--soft"><PageContainer><SectionHeading eyebrow="À la une" title="Actualités de l’Église" description="Suivez les nouvelles et les temps forts de notre communauté."/><div class="cards-grid"><CardNews v-for="item in news.slice(0,3)" :key="item.slug" :item="item"/></div></PageContainer></section>
<section class="home-invitation"><PageContainer><div><p class="eyebrow">Nous sommes à votre écoute</p><h2>Besoin de prière ou d’un accompagnement ?</h2><p>Vous pouvez nous adresser une demande de prière ou solliciter un rendez-vous.</p></div><div class="home-invitation__actions"><BaseButton to="/priere" variant="secondary">Demander la prière</BaseButton><BaseButton to="/rendez-vous" variant="ghost">Prendre rendez-vous</BaseButton></div></PageContainer></section>
</div>
</template>
<style scoped>
.home-hero{overflow:hidden;background:linear-gradient(115deg,#f1fbfd 0%,#fff 57%,#e5f5f8 100%)}
.home-hero :deep(.page-container){display:grid;min-height:560px;grid-template-columns:1.15fr .85fr;align-items:center;gap:2rem;padding-block:5rem}
.home-hero__content{max-width:700px}.home-hero h1{margin:1rem 0 1.2rem;font-size:clamp(2.6rem,5.7vw,4.8rem)}
.home-hero__description{max-width:590px;color:var(--eem-text-muted);font-size:clamp(1rem,1.6vw,1.15rem)}
.home-hero__actions{display:flex;flex-wrap:wrap;gap:.8rem;margin-top:2rem}
.home-hero__visual{display:grid;min-height:340px;place-items:center;align-content:center;gap:1.3rem;border:1px solid rgb(7 84 107 / 10%);border-radius:2rem;background:radial-gradient(circle,#fff 0%,#e5f5f8 72%);color:var(--eem-secondary)}
.home-hero__symbol{display:grid;width:170px;height:170px;place-items:center;border:1px solid rgb(7 84 107 / 15%);border-radius:50%;background:rgb(255 255 255 / 75%);font-size:5rem;box-shadow:0 20px 70px rgb(7 84 107 / 10%)}
.home-hero__visual>span{color:var(--eem-text-muted);font-size:.8rem;font-weight:700;letter-spacing:.12em;text-transform:uppercase}
.welcome-grid{display:grid;grid-template-columns:1fr 1fr;gap:4rem;align-items:center}.welcome-grid h2,.home-invitation h2{margin:.6rem 0 0;font-size:clamp(1.8rem,3.5vw,2.8rem)}
.welcome-grid>div:last-child>p{margin-top:0;color:var(--eem-text-muted);font-size:1.05rem}.welcome-grid :deep(.base-button){margin-top:.7rem}
.cards-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:1.4rem}
.home-invitation{padding-block:4rem;background:var(--eem-secondary);color:#fff}.home-invitation :deep(.page-container){display:flex;align-items:center;justify-content:space-between;gap:2rem}
.home-invitation h2{max-width:650px;color:#fff}.home-invitation p:not(.eyebrow){color:rgb(255 255 255 / 75%)}.home-invitation .eyebrow{color:#b9e6f0}
.home-invitation__actions{display:flex;flex:none;flex-wrap:wrap;gap:.7rem}
@media(max-width:850px){.home-hero :deep(.page-container){grid-template-columns:1fr;min-height:auto;padding-block:4rem}.home-hero__visual{min-height:240px}.home-hero__symbol{width:120px;height:120px;font-size:3.5rem}.welcome-grid{grid-template-columns:1fr;gap:1.5rem}.cards-grid{grid-template-columns:repeat(2,minmax(0,1fr))}.home-invitation :deep(.page-container){align-items:flex-start;flex-direction:column}}
@media(max-width:560px){.home-hero h1{font-size:clamp(2.3rem,11vw,3.4rem)}.cards-grid{grid-template-columns:1fr}.home-hero__actions,.home-invitation__actions{width:100%;flex-direction:column}.home-hero__actions :deep(.base-button),.home-invitation__actions :deep(.base-button){width:100%}}
</style>