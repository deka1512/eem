<script setup lang="ts">
import { church } from '~/data/church'
import { news } from '~/data/news'
import { events } from '~/data/events'
import { sermons } from '~/data/sermons'

const commitments = [
  {
    icon: 'i-lucide-book-open',
    title: 'La Parole de Dieu',
    text: 'Découvrir les Écritures, approfondir sa compréhension de l’Évangile et chercher à mettre la Parole en pratique.',
    reference: '2 Timothée 3:16-17',
  },
  {
    icon: 'i-lucide-heart-handshake',
    title: 'La communion fraternelle',
    text: 'Grandir dans une foi vécue ensemble, faite d’accueil, d’encouragement, d’écoute et d’amour du prochain.',
    reference: 'Actes 2:42',
  },
  {
    icon: 'i-lucide-sprout',
    title: 'Le témoignage chrétien',
    text: 'Partager avec humilité et conviction la Bonne Nouvelle de Jésus-Christ autour de nous.',
    reference: 'Matthieu 28:19-20',
  },
]

const discoveryLinks = [
  { icon: 'i-lucide-landmark', title: 'Découvrir l’Église', text: 'Notre identité et notre mission.', to: '/eglise', label: 'En savoir plus' },
  { icon: 'i-lucide-book-open-check', title: 'Grandir dans la foi', text: 'Les enseignements et ressources bibliques.', to: '/enseignements', label: 'Explorer' },
  { icon: 'i-lucide-calendar-days', title: 'Suivre la communauté', text: 'Les nouvelles et annonces officielles.', to: '/actualites', label: 'Voir les actualités' },
]

useSeoMeta({
  title: 'Accueil | Église Évangélique Les Moissonneurs',
  description: church.description,
  ogTitle: 'Église Évangélique Les Moissonneurs',
  ogDescription: church.description,
})
</script>

<template>
  <div>
    <section class="home-hero">
      <PageContainer>
        <div class="home-hero__content">
          <p class="eyebrow">Église Évangélique · Kinshasa</p>
          <h1>Ensemble, annonçons l’Évangile de Jésus-Christ.</h1>
          <p class="home-hero__description">{{ church.description }}</p>
          <div class="home-hero__actions">
            <BaseButton to="/eglise" size="lg">Découvrir l’Église <UIcon name="i-lucide-arrow-right" /></BaseButton>
            <BaseButton to="/contact" variant="ghost" size="lg">Nous contacter</BaseButton>
          </div>
          <p class="home-hero__address"><UIcon name="i-lucide-map-pin" /> Limete Résidentiel · Kinshasa</p>
        </div>
        <div class="home-hero__visual">
          <img src="https://images.unsplash.com/photo-1438032005730-c779502df39b?auto=format&fit=crop&w=1200&q=85" alt="Communauté réunie dans un lieu de culte" fetchpriority="high">
          <div class="home-hero__visual-caption"><span>Foi · Communion · Engagement</span><small>Matthieu 9:37-38</small></div>
        </div>
      </PageContainer>
    </section>

    <section class="page-section welcome-section">
      <PageContainer>
        <div class="welcome-grid">
          <div>
            <p class="eyebrow">Bienvenue à l’EEM</p>
            <h2>Une communauté tournée vers l’Évangile.</h2>
          </div>
          <div>
            <p>{{ church.description }} Notre désir est de faire connaître Jésus-Christ et d’encourager chacun à découvrir et approfondir la foi chrétienne.</p>
            <BaseButton to="/eglise" variant="secondary">Mieux connaître l’Église <UIcon name="i-lucide-arrow-right" /></BaseButton>
          </div>
        </div>
      </PageContainer>
    </section>

    <section class="page-section leadership-section">
      <PageContainer>
        <div class="leadership-heading">
          <SectionHeading eyebrow="Servir ensemble" title="Une équipe au service de la vision." description="Derrière la vie de l’Église, des femmes et des hommes s’engagent dans l’accueil, la prière, l’enseignement et l’accompagnement de la communauté." />
          <NuxtLink to="/eglise" class="leadership-more">Découvrir notre Église <UIcon name="i-lucide-arrow-up-right" /></NuxtLink>
        </div>
        <div class="leadership-grid">
          <article class="leader-card leader-card--featured">
            <img src="https://images.unsplash.com/photo-1507692049790-de58290a4334?auto=format&fit=crop&w=1000&q=85" alt="Intérieur lumineux d’une église" loading="lazy">
            <div class="leader-card__body"><span class="leader-card__role">Direction pastorale</span><h3>Conduire et accompagner</h3><p>Un ministère consacré à la prédication de la Parole, à la vision spirituelle et à l’accompagnement pastoral.</p></div>
          </article>
          <article class="leader-card">
            <img src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=720&q=85" alt="Personnes réunies dans un moment de partage" loading="lazy">
            <div class="leader-card__body"><span class="leader-card__role">Communion fraternelle</span><h3>Accueillir et rassembler</h3><p>Créer des liens, prendre soin les uns des autres et faire vivre une communauté accueillante.</p></div>
          </article>
          <article class="leader-card">
            <img src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=720&q=85" alt="Équipe échangeant autour d’un projet" loading="lazy">
            <div class="leader-card__body"><span class="leader-card__role">Service & organisation</span><h3>Faire grandir les initiatives</h3><p>Des collaborateurs mobilisés pour soutenir les activités et le bon fonctionnement de l’Église.</p></div>
          </article>
          <article class="leader-card">
            <img src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=720&q=85" alt="Groupe partageant un moment ensemble" loading="lazy">
            <div class="leader-card__body"><span class="leader-card__role">Prière & accompagnement</span><h3>Écouter et soutenir</h3><p>Être présents, porter les sujets de prière et encourager chacun dans son cheminement de foi.</p></div>
          </article>
        </div>
      </PageContainer>
    </section>

    <section class="page-section mission-section">
      <PageContainer>
        <div class="mission-heading">
          <SectionHeading eyebrow="Notre engagement" title="Annoncer la Bonne Nouvelle, avec foi et amour." description="Le nom Les Moissonneurs nous rappelle l’image biblique de la moisson et l’appel à participer à l’œuvre de Dieu." />
          <p class="mission-reference"><UIcon name="i-lucide-book-open" /> Matthieu 9:37-38</p>
        </div>
        <div class="commitments-grid">
          <article v-for="item in commitments" :key="item.title" class="commitment-card">
            <span class="commitment-card__icon"><UIcon :name="item.icon" /></span>
            <h3>{{ item.title }}</h3>
            <p>{{ item.text }}</p>
            <span class="commitment-card__reference">{{ item.reference }}</span>
          </article>
        </div>
      </PageContainer>
    </section>

    <section class="page-section discovery-section">
      <PageContainer>
        <SectionHeading eyebrow="Explorer" title="Faisons connaissance." description="Retrouvez les principales rubriques du site et avancez à votre rythme." />
        <div class="discovery-grid">
          <NuxtLink v-for="item in discoveryLinks" :key="item.to" :to="item.to" class="discovery-card">
            <span class="discovery-card__icon"><UIcon :name="item.icon" /></span>
            <h3>{{ item.title }}</h3>
            <p>{{ item.text }}</p>
            <span class="discovery-card__link">{{ item.label }} <UIcon name="i-lucide-arrow-right" /></span>
          </NuxtLink>
        </div>
      </PageContainer>
    </section>

    <section v-if="events.length" class="page-section page-section--soft">
      <PageContainer>
        <SectionHeading eyebrow="Vie de l’Église" title="Nos prochains rendez-vous" description="Retrouvez les événements et rencontres annoncés par l’Église." />
        <div class="cards-grid"><CardEvent v-for="event in events.slice(0, 3)" :key="event.slug" :item="event" /></div>
        <div class="section-more"><BaseButton to="/vie-de-leglise" variant="secondary">Toute la vie de l’Église</BaseButton></div>
      </PageContainer>
    </section>

    <section v-if="sermons.length" class="page-section">
      <PageContainer>
        <SectionHeading eyebrow="Grandir dans la foi" title="Enseignements" description="Retrouvez les messages et enseignements partagés par l’Église." />
        <div class="cards-grid"><CardSermon v-for="sermon in sermons.slice(0, 3)" :key="sermon.slug" :item="sermon" /></div>
        <div class="section-more"><BaseButton to="/enseignements" variant="secondary">Tous les enseignements</BaseButton></div>
      </PageContainer>
    </section>

    <section v-if="news.length" class="page-section page-section--soft">
      <PageContainer>
        <SectionHeading eyebrow="À la une" title="Actualités de l’Église" description="Suivez les nouvelles et les temps forts de notre communauté." />
        <div class="cards-grid"><CardNews v-for="item in news.slice(0, 3)" :key="item.slug" :item="item" /></div>
        <div class="section-more"><BaseButton to="/actualites" variant="secondary">Toutes les actualités</BaseButton></div>
      </PageContainer>
    </section>

    <section class="home-invitation">
      <PageContainer>
        <div class="home-invitation__content">
          <p class="eyebrow">Nous sommes à votre écoute</p>
          <h2>Besoin de prière ou d’un accompagnement ?</h2>
          <p>Vous pouvez partager un sujet de prière ou demander un temps d’échange avec l’Église. Votre démarche reste personnelle.</p>
        </div>
        <div class="home-invitation__actions">
          <BaseButton to="/priere" variant="secondary">Demander la prière</BaseButton>
          <BaseButton to="/rendez-vous" variant="ghost">Prendre rendez-vous</BaseButton>
        </div>
      </PageContainer>
    </section>
  </div>
</template>

<style scoped>
.home-hero{overflow:hidden;background:linear-gradient(115deg,#f1fbfd 0%,#fff 57%,#e5f5f8 100%)}
.home-hero :deep(.page-container){display:grid;min-height:570px;grid-template-columns:1.15fr .85fr;align-items:center;gap:2.5rem;padding-block:5rem}
.home-hero__content{max-width:720px}.home-hero h1{margin:1rem 0 1.2rem;font-size:clamp(2.6rem,5.7vw,4.8rem);line-height:1.08}
.home-hero__description{max-width:590px;color:var(--eem-text-muted);font-size:clamp(1rem,1.6vw,1.15rem)}
.home-hero__actions{display:flex;flex-wrap:wrap;gap:.8rem;margin-top:2rem}
.home-hero__address{display:flex;align-items:center;gap:.45rem;margin-top:1.5rem;color:var(--eem-text-muted);font-size:.82rem}
.home-hero__visual{position:relative;min-height:390px;overflow:hidden;border-radius:2rem;background:var(--eem-secondary);box-shadow:0 24px 65px rgb(7 84 107 / 16%)}
.home-hero__visual>img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover}
.home-hero__visual::after{position:absolute;inset:35% 0 0;background:linear-gradient(transparent,rgb(3 35 47 / 78%));content:""}
.home-hero__visual-caption{position:absolute;z-index:1;right:1.5rem;bottom:1.5rem;left:1.5rem;display:grid;gap:.35rem;color:#fff}
.home-hero__visual-caption span{font-size:.8rem;font-weight:750;letter-spacing:.12em;text-transform:uppercase}
.home-hero__visual-caption small{font-size:.8rem;font-weight:650}
.leadership-section{background:#fff}
.leadership-heading{display:flex;align-items:flex-end;justify-content:space-between;gap:2rem;margin-bottom:2rem}
.leadership-more{display:inline-flex;flex:none;align-items:center;gap:.4rem;margin-bottom:2rem;color:var(--eem-primary);font-size:.85rem;font-weight:750;text-decoration:none}
.leadership-grid{display:grid;grid-template-columns:1.2fr 1fr 1fr;gap:1.1rem}
.leader-card{overflow:hidden;border:1px solid var(--eem-border);border-radius:1.1rem;background:#fff;box-shadow:var(--eem-shadow-card)}
.leader-card--featured{grid-row:span 2}
.leader-card>img{display:block;width:100%;height:190px;object-fit:cover}
.leader-card--featured>img{height:300px}
.leader-card__body{padding:1.15rem}
.leader-card__role{color:var(--eem-primary);font-size:.7rem;font-weight:800;letter-spacing:.1em;text-transform:uppercase}
.leader-card h3{margin:.45rem 0;font-size:1.05rem}
.leader-card p{margin:0;color:var(--eem-text-muted);font-size:.84rem;line-height:1.6}
.welcome-grid{display:grid;grid-template-columns:1fr 1fr;gap:4rem;align-items:center}.welcome-grid h2{max-width:520px;margin:.6rem 0 0;font-size:clamp(1.8rem,3.5vw,2.8rem)}
.welcome-grid>div:last-child>p{margin-top:0;color:var(--eem-text-muted);font-size:1.05rem}.welcome-grid :deep(.base-button){margin-top:.7rem}
.mission-section{background:var(--eem-surface)}
.mission-heading{display:flex;align-items:flex-end;justify-content:space-between;gap:2rem}
.mission-reference{display:inline-flex;flex:none;align-items:center;gap:.45rem;margin:0 0 2rem;padding:.65rem .9rem;border-radius:2rem;background:#fff;color:var(--eem-secondary);font-size:.82rem;font-weight:750}
.commitments-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:1.2rem}
.commitment-card{padding:1.6rem;border:1px solid rgb(7 84 107 / 9%);border-radius:1rem;background:#fff}
.commitment-card__icon,.discovery-card__icon{display:grid;width:3rem;height:3rem;place-items:center;border-radius:.85rem;background:var(--eem-surface);color:var(--eem-secondary);font-size:1.4rem}
.commitment-card h3,.discovery-card h3{margin:1.1rem 0 .55rem;font-size:1.15rem}
.commitment-card p,.discovery-card p{margin:0;color:var(--eem-text-muted);font-size:.9rem}
.commitment-card__reference{display:block;margin-top:1.2rem;color:var(--eem-primary);font-size:.78rem;font-weight:750}
.discovery-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:1.2rem}
.discovery-card{display:flex;min-height:250px;flex-direction:column;padding:1.5rem;border:1px solid var(--eem-border);border-radius:1rem;background:#fff;box-shadow:var(--eem-shadow-card);text-decoration:none;transition:transform .2s,border-color .2s}
.discovery-card:hover{transform:translateY(-3px);border-color:var(--eem-primary)}
.discovery-card__link{display:inline-flex;align-items:center;gap:.4rem;margin-top:auto;padding-top:1.4rem;color:var(--eem-primary);font-size:.84rem;font-weight:750}
.cards-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:1.4rem}
.section-more{display:flex;justify-content:center;margin-top:2rem}
.home-invitation{padding-block:4rem;background:var(--eem-secondary);color:#fff}
.home-invitation :deep(.page-container){display:flex;align-items:center;justify-content:space-between;gap:2rem}
.home-invitation h2{max-width:650px;margin:.6rem 0;color:#fff;font-size:clamp(1.8rem,3.5vw,2.8rem)}
.home-invitation p:not(.eyebrow){max-width:680px;color:rgb(255 255 255 / 75%)}
.home-invitation .eyebrow{color:#b9e6f0}.home-invitation__actions{display:flex;flex:none;flex-wrap:wrap;gap:.7rem}
@media(max-width:850px){.home-hero :deep(.page-container){grid-template-columns:1fr;min-height:auto;padding-block:4rem}.home-hero__visual{min-height:280px}.leadership-heading{align-items:flex-start;flex-direction:column;gap:0}.leadership-more{margin:0 0 1.5rem}.leadership-grid{grid-template-columns:1fr 1fr}.leader-card--featured{grid-row:auto}.leader-card--featured>img{height:220px}.welcome-grid{grid-template-columns:1fr;gap:1.5rem}.mission-heading{align-items:flex-start;flex-direction:column;gap:0}.mission-reference{margin-bottom:1.5rem}.commitments-grid,.discovery-grid{grid-template-columns:1fr 1fr}.cards-grid{grid-template-columns:repeat(2,minmax(0,1fr))}.home-invitation :deep(.page-container){align-items:flex-start;flex-direction:column}}
@media(max-width:560px){.home-hero h1{font-size:clamp(2.3rem,11vw,3.4rem)}.home-hero__actions,.home-invitation__actions{width:100%;flex-direction:column}.home-hero__actions :deep(.base-button),.home-invitation__actions :deep(.base-button){width:100%}.commitments-grid,.discovery-grid,.cards-grid,.leadership-grid{grid-template-columns:1fr}.leader-card>img,.leader-card--featured>img{height:210px}.discovery-card{min-height:210px}}
</style>
