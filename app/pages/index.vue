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

const faithSteps = [
  { icon: 'i-lucide-cross', title: 'Découvrir l’Évangile', text: 'Rencontrer le message de Jésus-Christ et comprendre l’espérance annoncée dans les Écritures.', reference: 'Jean 3:16' },
  { icon: 'i-lucide-book-open', title: 'Approfondir la Parole', text: 'Lire, écouter et méditer la Bible pour nourrir une foi réfléchie et vivante.', reference: '2 Timothée 3:16-17' },
  { icon: 'i-lucide-users', title: 'Vivre la communion', text: 'Grandir avec les autres dans l’encouragement, l’écoute et l’amour fraternel.', reference: 'Actes 2:42' },
  { icon: 'i-lucide-hand-heart', title: 'Servir avec amour', text: 'Mettre ses capacités au service du prochain et contribuer au bien de la communauté.', reference: '1 Pierre 4:10' },
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
          <p class="home-hero__description">{{ church.description }} Notre porte est ouverte à celles et ceux qui souhaitent découvrir la foi chrétienne, approfondir les Écritures ou échanger avec la communauté.</p>
          <div class="home-hero__actions">
            <BaseButton to="/eglise" size="lg">Découvrir l’Église <UIcon name="i-lucide-arrow-right" /></BaseButton>
            <BaseButton to="/contact" variant="ghost" size="lg">Nous contacter</BaseButton>
          </div>
          <p class="home-hero__address"><UIcon name="i-lucide-map-pin" /> Limete Résidentiel · Kinshasa</p>
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

    <LeadershipSection compact />


    <section class="page-section next-steps-section">
      <PageContainer>
        <SectionHeading eyebrow="Grandir dans la foi" title="Quelques pas pour avancer ensemble." description="La vie chrétienne est un chemin : découvrir l’Évangile, approfondir la Parole, vivre la communion et mettre l’amour en action." />
        <div class="next-steps-grid">
          <article v-for="step in faithSteps" :key="step.title" class="next-step-card">
            <span><UIcon :name="step.icon" /></span>
            <h3>{{ step.title }}</h3>
            <p>{{ step.text }}</p>
            <small>{{ step.reference }}</small>
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
.home-hero{position:relative;isolation:isolate;overflow:hidden;min-height:640px;background:#06384b url('https://images.unsplash.com/photo-1438032005730-c779502df39b?auto=format&fit=crop&w=2200&q=90') center 42%/cover no-repeat;color:#fff}
.home-hero::before{position:absolute;inset:0;background:linear-gradient(90deg,rgb(3 31 43 / 91%) 0%,rgb(3 31 43 / 76%) 55%,rgb(3 31 43 / 30%) 100%);content:""}
.home-hero :deep(.page-container){position:relative;z-index:1;display:flex;min-height:640px;align-items:center;padding-block:clamp(4rem,8vw,6rem)}
.home-hero__content{max-width:780px}
.home-hero .eyebrow{color:#b9e6f0}
.home-hero h1{margin:1rem 0 1.2rem;color:#fff;font-size:clamp(2.6rem,5.7vw,4.8rem);line-height:1.08}
.home-hero__description{max-width:650px;color:rgb(255 255 255 / 86%);font-size:clamp(1rem,1.6vw,1.15rem)}
.home-hero__actions{display:flex;flex-wrap:wrap;gap:.8rem;margin-top:2rem}
.home-hero__address{display:flex;align-items:center;gap:.45rem;margin-top:1.5rem;color:rgb(255 255 255 / 82%);font-size:.82rem}
.home-hero :deep(.base-button--ghost){border:1px solid rgb(255 255 255 / 45%);color:#fff}
.next-steps-section{background:var(--eem-surface)}
.next-steps-grid{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:1rem}
.next-step-card{padding:1.35rem;border:1px solid rgb(7 84 107 / 9%);border-radius:1rem;background:#fff;box-shadow:var(--eem-shadow-card)}
.next-step-card>span{display:grid;width:2.8rem;height:2.8rem;place-items:center;border-radius:.8rem;background:var(--eem-surface);color:var(--eem-secondary);font-size:1.25rem}
.next-step-card h3{margin:1rem 0 .45rem;font-size:1.05rem}
.next-step-card p{margin:0;color:var(--eem-text-muted);font-size:.86rem}
.next-step-card small{display:block;margin-top:1rem;color:var(--eem-primary);font-size:.76rem;font-weight:750}
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
@media(max-width:850px){.home-hero{min-height:560px}.home-hero :deep(.page-container){min-height:560px;padding-block:4rem}.welcome-grid{grid-template-columns:1fr;gap:1.5rem}.next-steps-grid{grid-template-columns:1fr 1fr}.mission-heading{align-items:flex-start;flex-direction:column;gap:0}.mission-reference{margin-bottom:1.5rem}.commitments-grid,.discovery-grid{grid-template-columns:1fr 1fr}.cards-grid{grid-template-columns:repeat(2,minmax(0,1fr))}.home-invitation :deep(.page-container){align-items:flex-start;flex-direction:column}}
@media(max-width:560px){.home-hero{min-height:590px;background-position:58% center}.home-hero h1{font-size:clamp(2.3rem,11vw,3.4rem)}.home-hero__actions,.home-invitation__actions{width:100%;flex-direction:column}.home-hero__actions :deep(.base-button),.home-invitation__actions :deep(.base-button){width:100%}.next-steps-grid,.commitments-grid,.discovery-grid,.cards-grid{grid-template-columns:1fr}.discovery-card{min-height:210px}}
</style>
