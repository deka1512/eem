<script setup lang="ts">
import { church } from '~/data/church'
import { news } from '~/data/news'
import { events } from '~/data/events'

const serviceSchedules = [
  { day: 'Dimanche', time: '08h30 – 11h30', kind: 'Culte dominical', icon: 'i-lucide-sun' },
  { day: 'Lundi', time: '17h00 – 19h00', kind: 'Rencontre de l’Église', icon: 'i-lucide-hand-heart' },
  { day: 'Mercredi', time: '17h00 – 19h00', kind: 'Rencontre de l’Église', icon: 'i-lucide-book-open' },
  { day: 'Jeudi', time: '17h00 – 19h00', kind: 'Rencontre de l’Église', icon: 'i-lucide-users' },
]

const sermonHighlights = [
  {
    number: '01',
    title: 'La moisson est grande',
    scripture: 'Matthieu 9:37-38',
    description: 'Comprendre l’appel à annoncer l’Évangile et à prendre part à l’œuvre de Dieu.',
    youtubeUrl: 'https://www.youtube.com/results?search_query=Eglise+Evangelique+Les+Moissonneurs+Kinshasa+Matthieu+9+37',
    tone: 'sermon-card--blue',
  },
  {
    number: '02',
    title: 'Grandir dans la foi',
    scripture: '2 Pierre 3:18',
    description: 'Nourrir sa vie spirituelle par la Parole, la prière et une marche quotidienne avec Christ.',
    youtubeUrl: 'https://www.youtube.com/results?search_query=Eglise+Evangelique+Les+Moissonneurs+Kinshasa+grandir+dans+la+foi',
    tone: 'sermon-card--gold',
  },
  {
    number: '03',
    title: 'Vivre l’amour de Christ',
    scripture: 'Jean 13:34-35',
    description: 'Laisser l’amour du Seigneur transformer nos relations et notre manière de servir.',
    youtubeUrl: 'https://www.youtube.com/results?search_query=Eglise+Evangelique+Les+Moissonneurs+Kinshasa+amour+de+Christ',
    tone: 'sermon-card--green',
  },
]

const leadershipCards = [
  {
    role: 'Direction pastorale',
    image: '',
    imageAlt: 'Portrait officiel du Révérend Pasteur Nestor Mingina à intégrer',
    initials: 'NM',
    portraitPending: true,
  },
  {
    role: 'Responsabilité du département des femmes',
    image: 'https://assets.lummi.ai/assets/QmVi2THQfyT2UbxMsqysWw3fD4Z5nRgbG9aeLKGiYpaf93?auto=format&w=900',
    imageAlt: 'Portrait illustratif d’une femme noire en tenue professionnelle',
    initials: 'F',
    portraitPending: false,
  },
  {
    role: 'Encadrement de la jeunesse',
    image: 'https://bigdot.ai/assets/img/bayo.jpeg',
    imageAlt: 'Portrait illustratif d’un homme noir en costume',
    initials: 'J',
    portraitPending: false,
  },
  {
    role: 'Accueil et communion fraternelle',
    image: 'https://d9svxltna2b8m.cloudfront.net/activestorage-public-asset/6zg0gepg98qagphw2sslko7lxpd2',
    imageAlt: 'Portrait illustratif d’une femme noire souriante',
    initials: 'A',
    portraitPending: false,
  },
]

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
  { number: '01', icon: 'i-lucide-cross', title: 'Découvrir Jésus-Christ', text: 'Comprendre le message de l’Évangile et l’espérance qu’il annonce.', reference: 'Jean 3:16' },
  { number: '02', icon: 'i-lucide-book-open', title: 'Se nourrir de la Parole', text: 'Lire, écouter et méditer la Bible pour construire une foi solide.', reference: '2 Timothée 3:16-17' },
  { number: '03', icon: 'i-lucide-users', title: 'Vivre en communauté', text: 'Avancer avec les autres dans l’écoute, la fraternité et l’encouragement.', reference: 'Actes 2:42' },
  { number: '04', icon: 'i-lucide-hand-heart', title: 'Servir avec ses dons', text: 'Mettre ses capacités au service du prochain et de la communauté.', reference: '1 Pierre 4:10' },
]

const discoveryLinks = [
  { icon: 'i-lucide-landmark', title: 'Découvrir l’Église', text: 'Notre identité, notre histoire et notre mission.', to: '/eglise', label: 'Découvrir' },
  { icon: 'i-lucide-book-open-check', title: 'Explorer les enseignements', text: 'Des repères bibliques pour nourrir votre réflexion.', to: '/enseignements', label: 'Explorer' },
  { icon: 'i-lucide-calendar-days', title: 'Suivre la communauté', text: 'Les annonces et les nouvelles de l’EEM.', to: '/actualites', label: 'Voir les actualités' },
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
          <p class="eyebrow">Une communauté chrétienne · Kinshasa</p>
          <h1>Église Évangélique Les Moissonneurs</h1>
          <p class="home-hero__lead">Ensemble, annonçons l’Évangile de Jésus-Christ.</p>
          <p class="home-hero__description">{{ church.description }} Notre porte est ouverte à celles et ceux qui souhaitent découvrir la foi chrétienne, approfondir les Écritures ou échanger avec la communauté.</p>
          <div class="home-hero__actions">
            <BaseButton to="/eglise" size="lg">Découvrir l’Église <UIcon name="i-lucide-arrow-right" /></BaseButton>
            <BaseButton to="/rendez-vous" variant="ghost" size="lg">Rencontrer l’Église</BaseButton>
          </div>
          <p class="home-hero__verse">« La moisson est grande, mais il y a peu d’ouvriers. » <span>Matthieu 9:37</span></p>
          <p class="home-hero__address"><UIcon name="i-lucide-map-pin" /> Limete Résidentiel · Kinshasa</p>
        </div>
      </PageContainer>
    </section>

    <section class="page-section welcome-section">
      <PageContainer>
        <div class="welcome-grid">
          <div class="welcome-copy">
            <p class="eyebrow">Bienvenue à l’EEM</p>
            <h2>Une maison de foi, de prière et de communion.</h2>
            <p>{{ church.description }} Notre désir est de faire connaître Jésus-Christ et d’encourager chacun à découvrir et approfondir la foi chrétienne.</p>
            <p>Que vous soyez de passage, en recherche spirituelle ou déjà engagé dans la foi, vous êtes le bienvenu parmi nous.</p>
            <BaseButton to="/eglise" variant="secondary">Mieux connaître l’Église <UIcon name="i-lucide-arrow-right" /></BaseButton>
          </div>
          <aside class="pastor-feature">
            <div class="pastor-feature__portrait">
              <span>NM</span>
              <small>Portrait officiel à intégrer</small>
            </div>
            <div class="pastor-feature__caption">
              <p class="eyebrow">Direction pastorale</p>
              <h3>Révérend Pasteur Nestor Mingina</h3>
              <p>Un ministère au service de l’annonce de l’Évangile et de l’accompagnement spirituel.</p>
            </div>
          </aside>
        </div>
      </PageContainer>
    </section>

    <section class="page-section services-section">
      <PageContainer>
        <div class="services-heading">
          <div>
            <p class="eyebrow">Retrouvons-nous</p>
            <h2>Programmes de cultes</h2>
            <p>Des temps pour louer Dieu, prier, écouter sa Parole et grandir ensemble.</p>
          </div>
          <span class="services-heading__mark"><UIcon name="i-lucide-calendar-heart" /></span>
        </div>
        <div class="service-schedule">
          <article v-for="service in serviceSchedules" :key="service.day" class="service-card">
            <span class="service-card__icon"><UIcon :name="service.icon" /></span>
            <div class="service-card__body">
              <p>{{ service.kind }}</p>
              <h3>{{ service.day }}</h3>
              <strong>{{ service.time }}</strong>
            </div>
          </article>
        </div>
        <p class="services-note">Les rencontres de semaine ont lieu aux horaires indiqués ; leur programme détaillé peut être confirmé auprès de l’Église.</p>
        <div class="services-footer">
          <p>Vous souhaitez échanger avec le pasteur ou demander un accompagnement ?</p>
          <BaseButton to="/rendez-vous" size="lg">Prendre rendez-vous avec le pasteur <UIcon name="i-lucide-arrow-right" /></BaseButton>
        </div>
      </PageContainer>
    </section>

    <section class="page-section sermons-section">
      <PageContainer>
        <div class="section-heading-row">
          <SectionHeading eyebrow="Nourrir sa foi" title="Prédications et paroles bibliques" description="Trois thèmes pour poursuivre votre réflexion et rechercher des enseignements sur YouTube." />
          <a class="youtube-channel-link" href="https://www.youtube.com/results?search_query=Eglise+Evangelique+Les+Moissonneurs+Kinshasa" target="_blank" rel="noopener noreferrer">
            Explorer sur YouTube <UIcon name="i-lucide-external-link" />
          </a>
        </div>
        <div class="sermons-grid">
          <article v-for="sermon in sermonHighlights" :key="sermon.number" class="sermon-card" :class="sermon.tone">
            <div class="sermon-card__top">
              <span>{{ sermon.number }}</span>
              <UIcon name="i-lucide-play-circle" />
            </div>
            <p class="sermon-card__scripture">{{ sermon.scripture }}</p>
            <h3>{{ sermon.title }}</h3>
            <p class="sermon-card__description">{{ sermon.description }}</p>
            <a :href="sermon.youtubeUrl" target="_blank" rel="noopener noreferrer">Rechercher sur YouTube <UIcon name="i-lucide-arrow-up-right" /></a>
          </article>
        </div>
        <p class="sermons-note">Les liens ouvrent une recherche YouTube par thème. Les liens directs vers les vidéos officielles de l’EEM seront ajoutés dès leur confirmation.</p>
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

    <section class="page-section leadership-section">
      <PageContainer>
        <SectionHeading eyebrow="Leadership et service" title="Des femmes et des hommes engagés au service de l’Église." description="La responsabilité chrétienne se vit dans l’humilité, la fidélité à la Parole et le soin apporté à la communauté." />
        <div class="leadership-grid">
          <article v-for="person in leadershipCards" :key="person.role" class="leader-card">
            <div class="leader-card__image">
              <div v-if="person.portraitPending" class="leader-card__placeholder">
                <span>{{ person.initials }}</span>
                <small>Portrait officiel à intégrer</small>
              </div>
              <img v-else :src="person.image" :alt="person.imageAlt" loading="lazy">
            </div>
            <div class="leader-card__content">
              <p class="leader-card__eyebrow">Domaine de responsabilité</p>
              <h3>{{ person.role }}</h3>
              <span v-if="person.portraitPending" class="leader-card__status">Révérend Pasteur Nestor Mingina</span>
              <span v-else class="leader-card__status">Portrait d’illustration · Nom à confirmer</span>
            </div>
          </article>
        </div>
        <p class="leadership-note">Les portraits secondaires sont des visuels d’illustration et ne représentent pas les responsables de l’EEM. Les domaines présentés sont des repères de mise en page, pas un organigramme officiel ; les noms et fonctions seront ajoutés après validation.</p>
        <div class="leadership-more"><BaseButton to="/leadership" variant="secondary">Découvrir le leadership <UIcon name="i-lucide-arrow-right" /></BaseButton></div>
      </PageContainer>
    </section>

    <section class="page-section next-steps-section">
      <PageContainer>
        <SectionHeading eyebrow="Grandir dans la foi" title="Une foi vivante se construit chaque jour." description="À chaque étape, il existe une manière de découvrir davantage l’Évangile, d’approfondir les Écritures et de prendre sa place dans la communauté." />
        <div class="next-steps-grid">
          <article v-for="step in faithSteps" :key="step.number" class="next-step-card">
            <div class="next-step-card__top"><span>{{ step.number }}</span><UIcon :name="step.icon" /></div>
            <h3>{{ step.title }}</h3>
            <p>{{ step.text }}</p>
            <small>{{ step.reference }}</small>
          </article>
        </div>
      </PageContainer>
    </section>

    <section class="page-section discovery-section">
      <PageContainer>
        <div class="discovery-intro">
          <div>
            <p class="eyebrow">Explorer l’EEM</p>
            <h2>Plusieurs façons de prendre part à la vie de l’Église.</h2>
          </div>
          <p>Découvrez nos rubriques, suivez les nouvelles de la communauté et avancez à votre rythme.</p>
        </div>
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
.home-hero{position:relative;isolation:isolate;overflow:hidden;min-height:680px;background:#06384b url('https://images.unsplash.com/photo-1438032005730-c779502df39b?auto=format&fit=crop&w=2200&q=90') center 42%/cover no-repeat;color:#fff}
.home-hero::before{position:absolute;inset:0;background:linear-gradient(90deg,rgb(3 31 43 / 93%) 0%,rgb(3 31 43 / 78%) 54%,rgb(3 31 43 / 28%) 100%);content:""}
.home-hero :deep(.page-container){position:relative;z-index:1;display:flex;min-height:680px;align-items:center;padding-block:clamp(4rem,8vw,6rem)}
.home-hero__content{max-width:820px}
.home-hero .eyebrow{color:#b9e6f0}
.home-hero h1{max-width:800px;margin:1rem 0 .8rem;color:#fff;font-size:clamp(2.7rem,6vw,5.1rem);line-height:1.04}
.home-hero__lead{margin:0 0 1.2rem;color:#e6f5f8;font-family:var(--eem-font-heading);font-size:clamp(1.2rem,2.2vw,1.7rem);font-weight:650}
.home-hero__description{max-width:680px;color:rgb(255 255 255 / 86%);font-size:clamp(1rem,1.6vw,1.15rem)}
.home-hero__actions{display:flex;flex-wrap:wrap;gap:.8rem;margin-top:2rem}
.home-hero__verse{max-width:580px;margin:2rem 0 0;padding-left:1rem;border-left:2px solid #d9b98c;color:rgb(255 255 255 / 88%);font-family:var(--eem-font-heading);font-size:.95rem;font-style:italic}
.home-hero__verse span{display:block;margin-top:.35rem;color:#d9b98c;font-family:var(--eem-font-body);font-size:.75rem;font-style:normal;font-weight:750}
.home-hero__address{display:flex;align-items:center;gap:.45rem;margin-top:1.2rem;color:rgb(255 255 255 / 78%);font-size:.82rem}
.home-hero :deep(.base-button--ghost){border:1px solid rgb(255 255 255 / 45%);color:#fff}
.home-hero :deep(.base-button--ghost:hover){border-color:rgb(255 255 255 / 75%);background:rgb(255 255 255 / 12%);color:#fff}
.welcome-grid{display:grid;grid-template-columns:1.1fr .9fr;gap:clamp(2rem,6vw,5rem);align-items:center}
.welcome-copy h2,.discovery-intro h2{max-width:620px;margin:.65rem 0 1rem;font-size:clamp(2rem,3.8vw,3.1rem)}
.welcome-copy>p:not(.eyebrow){max-width:650px;color:var(--eem-text-muted)}
.welcome-copy :deep(.base-button){margin-top:.8rem}
.pastor-feature{overflow:hidden;border:1px solid var(--eem-border);border-radius:1.2rem;background:#fff;box-shadow:var(--eem-shadow-card)}
.pastor-feature__portrait{display:flex;min-height:290px;flex-direction:column;align-items:center;justify-content:center;gap:.8rem;background:radial-gradient(circle at 50% 35%,#1e7182 0,#0b4356 48%,#062e40 100%);color:#fff}
.pastor-feature__portrait>span{display:grid;width:116px;height:116px;place-items:center;border:1px solid rgb(255 255 255 / 42%);border-radius:50%;background:rgb(255 255 255 / 10%);font-family:var(--eem-font-heading);font-size:2.8rem;font-weight:800;letter-spacing:.04em}
.pastor-feature__portrait small{color:rgb(255 255 255 / 72%);font-size:.72rem;letter-spacing:.08em;text-transform:uppercase}
.pastor-feature__caption{padding:1.5rem}
.pastor-feature__caption h3{margin:.35rem 0;font-size:1.35rem}
.pastor-feature__caption>p:last-child{margin:0;color:var(--eem-text-muted);font-size:.9rem}
.services-section{background:#f3f8fa}
.services-heading{display:flex;align-items:center;justify-content:space-between;gap:2rem;margin-bottom:2rem}
.services-heading h2{margin:.45rem 0;font-size:clamp(2rem,3.8vw,3rem)}
.services-heading>div>p:last-child{margin:0;color:var(--eem-text-muted)}
.services-heading__mark{display:grid;width:4.5rem;height:4.5rem;flex:none;place-items:center;border-radius:1.2rem;background:#fff;color:var(--eem-primary);font-size:2rem;box-shadow:var(--eem-shadow-card)}
.service-schedule{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:1rem}
.service-card{display:flex;min-height:170px;gap:1rem;padding:1.35rem;border:1px solid rgb(7 84 107 / 9%);border-radius:1rem;background:#fff;box-shadow:var(--eem-shadow-card)}
.service-card__icon{display:grid;width:2.8rem;height:2.8rem;flex:none;place-items:center;border-radius:.85rem;background:var(--eem-surface);color:var(--eem-secondary);font-size:1.25rem}
.service-card__body p{margin:.1rem 0 .5rem;color:var(--eem-text-muted);font-size:.75rem;font-weight:650}
.service-card__body h3{margin:0 0 .45rem;font-size:1.15rem}
.service-card__body strong{color:var(--eem-primary);font-size:.9rem}
.services-note{margin:0 0 1rem;color:var(--eem-text-muted);font-size:.78rem}
.services-footer{display:flex;align-items:center;justify-content:space-between;gap:1.5rem;margin-top:2rem;padding:1.4rem 1.6rem;border-radius:1rem;background:var(--eem-secondary);color:#fff}
.services-footer p{margin:0;color:rgb(255 255 255 / 86%);font-size:.95rem}
.services-footer :deep(.base-button){flex:none}
.sermons-section{background:#fff}
.section-heading-row{display:flex;align-items:flex-end;justify-content:space-between;gap:2rem}
.youtube-channel-link{display:inline-flex;flex:none;align-items:center;gap:.45rem;margin-bottom:2rem;color:#c62828;font-size:.85rem;font-weight:750;text-decoration:none}
.sermons-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:1.2rem}
.sermon-card{display:flex;min-height:310px;flex-direction:column;padding:1.5rem;border:1px solid transparent;border-radius:1.1rem}
.sermon-card--blue{background:linear-gradient(145deg,#e8f4fa,#f7fbfd);border-color:#d4e9f2}
.sermon-card--gold{background:linear-gradient(145deg,#fbf2e3,#fffaf2);border-color:#f1e2c9}
.sermon-card--green{background:linear-gradient(145deg,#eaf5ef,#f8fcf9);border-color:#d9eadf}
.sermon-card__top{display:flex;align-items:center;justify-content:space-between;color:var(--eem-secondary)}
.sermon-card__top span{font-size:.78rem;font-weight:800;letter-spacing:.12em}
.sermon-card__top :deep(svg){font-size:1.7rem}
.sermon-card__scripture{margin:1.6rem 0 .45rem;color:var(--eem-primary);font-size:.76rem;font-weight:800;text-transform:uppercase;letter-spacing:.07em}
.sermon-card h3{margin:0 0 .65rem;font-size:1.45rem}
.sermon-card__description{margin:0;color:var(--eem-text-muted);font-size:.9rem}
.sermon-card>a{display:inline-flex;align-items:center;gap:.4rem;margin-top:auto;padding-top:1.4rem;color:var(--eem-secondary);font-size:.82rem;font-weight:800;text-decoration:none}
.sermons-note,.leadership-note{margin:1.2rem 0 0;color:var(--eem-text-muted);font-size:.78rem}
.mission-section{background:var(--eem-surface)}
.mission-heading{display:flex;align-items:flex-end;justify-content:space-between;gap:2rem}
.mission-reference{display:inline-flex;flex:none;align-items:center;gap:.45rem;margin:0 0 2rem;padding:.65rem .9rem;border-radius:2rem;background:#fff;color:var(--eem-secondary);font-size:.82rem;font-weight:750}
.commitments-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:1.2rem}
.commitment-card{padding:1.6rem;border:1px solid rgb(7 84 107 / 9%);border-radius:1rem;background:#fff}
.commitment-card__icon,.discovery-card__icon{display:grid;width:3rem;height:3rem;place-items:center;border-radius:.85rem;background:var(--eem-surface);color:var(--eem-secondary);font-size:1.4rem}
.commitment-card h3,.discovery-card h3{margin:1.1rem 0 .55rem;font-size:1.15rem}
.commitment-card p,.discovery-card p{margin:0;color:var(--eem-text-muted);font-size:.9rem}
.commitment-card__reference{display:block;margin-top:1.2rem;color:var(--eem-primary);font-size:.78rem;font-weight:750}
.leadership-section{background:#fff}
.leadership-grid{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:1rem}
.leader-card{overflow:hidden;border:1px solid var(--eem-border);border-radius:1rem;background:#fff;box-shadow:var(--eem-shadow-card)}
.leader-card__image{height:245px;overflow:hidden;background:#e8f0f3}
.leader-card__image img{width:100%;height:100%;object-fit:cover;object-position:center 30%;display:block}
.leader-card__placeholder{display:flex;width:100%;height:100%;flex-direction:column;align-items:center;justify-content:center;gap:.6rem;background:radial-gradient(circle at 50% 35%,#1e7182 0,#0b4356 50%,#062e40 100%);color:#fff}
.leader-card__placeholder span{display:grid;width:92px;height:92px;place-items:center;border:1px solid rgb(255 255 255 / 45%);border-radius:50%;background:rgb(255 255 255 / 10%);font-family:var(--eem-font-heading);font-size:2rem;font-weight:800}
.leader-card__placeholder small{color:rgb(255 255 255 / 75%);font-size:.68rem;text-transform:uppercase;letter-spacing:.06em}
.leader-card__content{padding:1.2rem}
.leader-card__eyebrow{margin:0 0 .4rem;color:var(--eem-primary);font-size:.68rem;font-weight:800;letter-spacing:.08em;text-transform:uppercase}
.leader-card h3{min-height:3rem;margin:0 0 .65rem;font-size:1.05rem}
.leader-card__status{color:var(--eem-text-muted);font-size:.72rem}
.leadership-more{display:flex;justify-content:center;margin-top:1.8rem}
.next-steps-section{background:#f3f8fa}
.next-steps-grid{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:1rem}
.next-step-card{min-height:230px;padding:1.35rem;border:1px solid rgb(7 84 107 / 9%);border-radius:1rem;background:#fff;box-shadow:var(--eem-shadow-card)}
.next-step-card__top{display:flex;align-items:center;justify-content:space-between;color:var(--eem-primary)}
.next-step-card__top span{font-size:.75rem;font-weight:850;letter-spacing:.12em}
.next-step-card__top :deep(svg){font-size:1.5rem}
.next-step-card h3{margin:1.3rem 0 .45rem;font-size:1.05rem}
.next-step-card p{margin:0;color:var(--eem-text-muted);font-size:.86rem}
.next-step-card small{display:block;margin-top:1rem;color:var(--eem-primary);font-size:.76rem;font-weight:750}
.discovery-intro{display:flex;align-items:flex-end;justify-content:space-between;gap:2rem;margin-bottom:2rem}
.discovery-intro h2{margin-bottom:0}
.discovery-intro>p{max-width:390px;margin:0 0 .35rem;color:var(--eem-text-muted)}
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
.home-invitation .eyebrow{color:#b9e6f0}
.home-invitation__actions{display:flex;flex:none;flex-wrap:wrap;gap:.7rem}
@media(max-width:1050px){.service-schedule,.leadership-grid,.next-steps-grid{grid-template-columns:repeat(2,minmax(0,1fr))}.welcome-grid{gap:2rem}.leader-card__image{height:260px}}
@media(max-width:850px){.home-hero{min-height:600px}.home-hero :deep(.page-container){min-height:600px;padding-block:4rem}.welcome-grid{grid-template-columns:1fr;gap:2rem}.pastor-feature{max-width:520px}.section-heading-row,.mission-heading,.discovery-intro{align-items:flex-start;flex-direction:column;gap:.5rem}.youtube-channel-link{margin:0 0 1.5rem}.mission-reference{margin-bottom:1.5rem}.services-footer{align-items:flex-start;flex-direction:column}.sermons-grid,.commitments-grid,.discovery-grid{grid-template-columns:1fr 1fr}.home-invitation :deep(.page-container){align-items:flex-start;flex-direction:column}}
@media(max-width:560px){.home-hero{min-height:640px;background-position:58% center}.home-hero :deep(.page-container){min-height:640px}.home-hero h1{font-size:clamp(2.4rem,11vw,3.5rem)}.home-hero__actions,.home-invitation__actions{width:100%;flex-direction:column}.home-hero__actions :deep(.base-button),.home-invitation__actions :deep(.base-button){width:100%}.services-heading__mark{display:none}.service-schedule,.sermons-grid,.commitments-grid,.leadership-grid,.next-steps-grid,.discovery-grid{grid-template-columns:1fr}.service-card{min-height:130px}.sermon-card{min-height:280px}.leader-card__image{height:300px}.discovery-card{min-height:210px}}
</style>