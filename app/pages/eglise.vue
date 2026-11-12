<script setup lang="ts">
import { church } from '~/data/church'
import { staticPages } from '~/data/pages'

const page = staticPages.eglise!

const announcements = [
  {
    category: 'Retour en images',
    title: 'Moisson 21',
    subtitle: '9e jour · Temps fort de la communauté',
    description: 'Retrouvez les moments partagés autour de ce programme spirituel dans les communications de l’Église.',
    image: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=1100&q=85',
    alt: 'Groupe de personnes réunies lors d’un événement communautaire — visuel d’illustration',
  },
  {
    category: 'Prière et intercession',
    title: 'Jeudi Mahombi',
    subtitle: 'Un rendez-vous de prière',
    description: 'Un temps pour se rassembler, prier, chercher Dieu et grandir dans la communion fraternelle.',
    image: 'https://images.unsplash.com/photo-1507692049790-de58290a4334?auto=format&fit=crop&w=1100&q=85',
    alt: 'Personne dans un moment de prière — visuel d’illustration',
  },
  {
    category: 'Formation biblique',
    title: 'École d’affermissement',
    subtitle: 'Remise des diplômes',
    description: 'Un moment de reconnaissance qui met à l’honneur le parcours de formation et l’engagement des participants.',
    image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1100&q=85',
    alt: 'Cérémonie de remise de diplômes — visuel d’illustration',
  },
]

const leaders = [
  { name: 'Pasteur Joël Mbuyi', role: 'Accompagnement pastoral', image: 'https://images.pexels.com/photos/26903320/pexels-photo-26903320.jpeg?auto=compress&cs=tinysrgb&w=900', alt: 'Portrait illustratif d’un homme africain en costume' },
  { name: 'Maman Grâce Ilunga', role: 'Département des femmes', image: 'https://images.pexels.com/photos/5668768/pexels-photo-5668768.jpeg?auto=compress&cs=tinysrgb&w=900', alt: 'Portrait illustratif d’une femme noire en tenue professionnelle' },
  { name: 'Frère Patrick Kabasele', role: 'Jeunesse et formation', image: 'https://images.pexels.com/photos/33844626/pexels-photo-33844626.jpeg?auto=compress&cs=tinysrgb&w=900', alt: 'Portrait illustratif d’un homme africain en costume' },
  { name: 'Sœur Esther Kabeya', role: 'Accueil et intégration', image: 'https://images.pexels.com/photos/12008288/pexels-photo-12008288.jpeg?auto=compress&cs=tinysrgb&w=900', alt: 'Portrait illustratif d’une femme africaine élégante' },
  { name: 'Évangéliste David Tshibangu', role: 'Évangélisation et mission', image: 'https://images.pexels.com/photos/14124056/pexels-photo-14124056.jpeg?auto=compress&cs=tinysrgb&w=900', alt: 'Portrait illustratif d’un homme africain en costume' },
  { name: 'Maman Ruth Kalombo', role: 'Prière et accompagnement', image: 'https://images.pexels.com/photos/20610322/pexels-photo-20610322.jpeg?auto=compress&cs=tinysrgb&w=900', alt: 'Portrait illustratif d’une femme noire élégante' },
]

useSeoMeta({
  title: page.title + ' | Église Évangélique Les Moissonneurs',
  description: page.description,
  ogTitle: page.title + ' | Église Évangélique Les Moissonneurs',
  ogDescription: page.description,
})
</script>

<template>
  <div class="church-page">
    <PageHero
      :eyebrow="page.eyebrow"
      :title="page.heroTitle"
      :description="page.intro"
      :image="page.heroImage"
      :breadcrumb="page.title"
    />

    <section class="announcements-section">
      <PageContainer>
        <div class="section-heading">
          <div class="section-heading__copy">
            <p class="eyebrow">À la une · Vie de l’EEM</p>
            <h2>Les temps forts de notre communauté.</h2>
            <p>Des moments de prière, de formation et de communion qui rythment la vie de l’Église.</p>
          </div>
          <a class="section-heading__link" :href="church.facebookUrl" target="_blank" rel="noopener noreferrer">
            Toutes les nouvelles <UIcon name="i-lucide-arrow-up-right" />
          </a>
        </div>

        <div class="announcements-grid">
          <article v-for="(item, index) in announcements" :key="item.title" class="announcement-card">
            <a class="announcement-card__visual" :href="church.facebookUrl" target="_blank" rel="noopener noreferrer" :aria-label="'Voir les actualités de l’EEM : ' + item.title">
              <img :src="item.image" :alt="item.alt" :loading="index === 0 ? 'eager' : 'lazy'">
              <span class="announcement-card__number">0{{ index + 1 }}</span>
              <span class="announcement-card__image-label">Visuel d’illustration</span>
            </a>
            <div class="announcement-card__body">
              <p class="announcement-card__category">{{ item.category }}</p>
              <h3>{{ item.title }}</h3>
              <p class="announcement-card__subtitle">{{ item.subtitle }}</p>
              <p class="announcement-card__description">{{ item.description }}</p>
              <a class="announcement-card__link" :href="church.facebookUrl" target="_blank" rel="noopener noreferrer">
                Suivre la publication <UIcon name="i-lucide-arrow-up-right" />
              </a>
            </div>
          </article>
        </div>
        <p class="announcements-note">Les photos de cette sélection sont des illustrations. Les clichés des événements seront intégrés à partir des publications officielles validées par l’Église.</p>
      </PageContainer>
    </section>

    <section class="story-section">
      <PageContainer>
        <div class="story-heading">
          <p class="eyebrow">Notre identité</p>
          <h2>Une histoire portée par une mission.</h2>
          <p>Découvrir l’EEM, c’est comprendre la vision qui nous rassemble : annoncer l’Évangile de Jésus-Christ et contribuer au salut des âmes.</p>
        </div>
        <EditorialSections :sections="page.sections" />
      </PageContainer>
    </section>

    <section class="pastor-section">
      <PageContainer>
        <div class="pastor-profile">
          <div class="pastor-profile__visual">
            <div class="pastor-profile__portrait">
              <span>NM</span>
              <small>Portrait officiel à intégrer</small>
            </div>
            <div class="pastor-profile__verse">« Le bon berger donne sa vie pour ses brebis. »<strong>Jean 10:11</strong></div>
          </div>
          <div class="pastor-profile__copy">
            <p class="eyebrow">Direction pastorale</p>
            <h2>Révérend Pasteur Nestor Mingina</h2>
            <p class="pastor-profile__lead">Un ministère consacré à l’annonce de l’Évangile et à l’accompagnement spirituel.</p>
            <p>La direction pastorale accompagne la communauté dans sa marche avec Dieu, l’enseignement de la Parole et le service du prochain. Cette présentation sera enrichie avec le parcours et les éléments biographiques validés du Révérend Pasteur Nestor Mingina.</p>
            <NuxtLink to="/rendez-vous" class="text-link">Demander un échange <UIcon name="i-lucide-arrow-right" /></NuxtLink>
          </div>
        </div>
      </PageContainer>
    </section>

    <section class="leadership-section">
      <PageContainer>
        <div class="section-heading section-heading--leadership">
          <div class="section-heading__copy">
            <p class="eyebrow">Leadership et ministères</p>
            <h2>Des femmes et des hommes au service de la vision.</h2>
            <p>Accompagner, enseigner, accueillir, servir et annoncer l’Évangile : une mission portée par des engagements complémentaires.</p>
          </div>
          <span class="section-heading__symbol"><UIcon name="i-lucide-users-round" /></span>
        </div>

        <div class="leaders-grid">
          <article v-for="(person, index) in leaders" :key="person.name" class="leader-card">
            <div class="leader-card__image">
              <img :src="person.image" :alt="person.alt" loading="lazy">
              <span>0{{ index + 1 }}</span>
            </div>
            <div class="leader-card__body">
              <h3>{{ person.name }}</h3>
              <p>{{ person.role }}</p>
            </div>
          </article>
        </div>
        <p class="leaders-note">Noms et fonctions présentés à titre de maquette : ils ne désignent pas les responsables officiellement confirmés de l’EEM. Les portraits sont des illustrations et seront remplacés par les photos autorisées de l’équipe réelle.</p>
        <div class="leaders-action">
          <BaseButton to="/leadership" variant="secondary">Voir les domaines de service <UIcon name="i-lucide-arrow-right" /></BaseButton>
        </div>
      </PageContainer>
    </section>

    <section class="giving-section">
      <PageContainer>
        <div class="giving-card">
          <span class="giving-card__icon"><UIcon name="i-lucide-hand-heart" /></span>
          <div class="giving-card__copy">
            <p class="eyebrow">Soutenir la mission</p>
            <h2>Vos dons et offrandes contribuent à la vie de l’œuvre.</h2>
            <p>Découvrez le sens du don et contactez l’Église pour recevoir les modalités officielles de contribution.</p>
          </div>
          <BaseButton to="/offrandes-et-dons" size="lg">Offrandes et dons <UIcon name="i-lucide-arrow-right" /></BaseButton>
        </div>
      </PageContainer>
    </section>
  </div>
</template>

<style scoped>
.announcements-section{padding-block:clamp(3.5rem,7vw,6rem);background:#f2f7f9}
.section-heading{display:flex;align-items:flex-end;justify-content:space-between;gap:2rem;margin-bottom:2rem}
.section-heading__copy{max-width:760px}
.section-heading h2,.story-heading h2,.pastor-profile h2,.giving-card h2{margin:.45rem 0 .7rem;font-size:clamp(1.9rem,3.6vw,3rem);line-height:1.12;letter-spacing:-.025em}
.section-heading__copy>p:last-child,.story-heading>p:last-child{max-width:690px;margin:0;color:var(--eem-text-muted);font-size:1rem;line-height:1.75}
.section-heading__link{display:inline-flex;flex:none;align-items:center;gap:.45rem;margin-bottom:.3rem;color:var(--eem-primary);font-size:.88rem;font-weight:800;text-decoration:none}
.announcements-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:1.35rem}
.announcement-card{overflow:hidden;border:1px solid #e1e9ed;border-radius:1.15rem;background:#fff;box-shadow:0 12px 35px rgb(13 55 72 / 6%);transition:transform .25s ease,box-shadow .25s ease}
.announcement-card:hover{transform:translateY(-5px);box-shadow:0 18px 42px rgb(13 55 72 / 11%)}
.announcement-card__visual{position:relative;display:block;aspect-ratio:16/10;overflow:hidden;background:#dce8ec}
.announcement-card__visual::after{position:absolute;inset:35% 0 0;background:linear-gradient(transparent,rgb(3 31 43 / 48%));content:""}
.announcement-card__visual img{display:block;width:100%;height:100%;object-fit:cover;transition:transform .45s ease}
.announcement-card:hover .announcement-card__visual img{transform:scale(1.045)}
.announcement-card__number{position:absolute;z-index:1;top:1rem;left:1rem;display:grid;width:2.45rem;height:2.45rem;place-items:center;border:1px solid rgb(255 255 255 / 50%);border-radius:50%;background:rgb(3 48 65 / 70%);color:#fff;font-size:.72rem;font-weight:800}
.announcement-card__image-label{position:absolute;z-index:1;right:.85rem;bottom:.8rem;color:#fff;font-size:.65rem;font-weight:700;letter-spacing:.04em;text-shadow:0 1px 4px rgb(0 0 0 / 45%)}
.announcement-card__body{padding:1.35rem 1.4rem 1.5rem}
.announcement-card__category{margin:0 0 .55rem;color:var(--eem-primary);font-size:.7rem;font-weight:850;letter-spacing:.09em;text-transform:uppercase}
.announcement-card h3{margin:0;font-size:1.35rem;line-height:1.25}
.announcement-card__subtitle{margin:.35rem 0 .8rem;color:#56717d;font-size:.8rem;font-weight:750}
.announcement-card__description{min-height:4.5rem;margin:0;color:var(--eem-text-muted);font-size:.88rem;line-height:1.65}
.announcement-card__link{display:inline-flex;align-items:center;gap:.4rem;margin-top:1.15rem;color:var(--eem-primary);font-size:.82rem;font-weight:800;text-decoration:none}
.announcements-note{margin:1rem 0 0;color:#6d818a;font-size:.73rem}
.story-section{padding-block:clamp(3.8rem,7vw,6rem);background:#fff}
.story-heading{max-width:790px;margin:0 auto 2rem;text-align:center}
.story-heading h2{margin-inline:auto}
.story-heading>p:last-child{margin-inline:auto}
.story-section :deep(.editorial-sections){max-width:920px}
.story-section :deep(.editorial-section){padding-block:1.65rem}
.pastor-section{padding-block:clamp(3rem,6vw,5rem);background:#f2f7f9}
.pastor-profile{display:grid;grid-template-columns:.82fr 1.18fr;gap:clamp(2rem,6vw,5rem);align-items:center;padding:clamp(1.3rem,3vw,2.5rem);border:1px solid var(--eem-border);border-radius:1.4rem;background:#fff;box-shadow:0 16px 45px rgb(13 55 72 / 7%)}
.pastor-profile__visual{overflow:hidden;border-radius:1rem;background:#06384b}
.pastor-profile__portrait{display:flex;min-height:330px;flex-direction:column;align-items:center;justify-content:center;gap:.9rem;background:radial-gradient(circle at 50% 35%,#23768b,#0b4356 55%,#062e40);color:#fff}
.pastor-profile__portrait span{display:grid;width:124px;height:124px;place-items:center;border:1px solid rgb(255 255 255 / 45%);border-radius:50%;background:rgb(255 255 255 / 9%);font-size:3rem;font-weight:800}
.pastor-profile__portrait small{color:rgb(255 255 255 / 72%);font-size:.7rem;letter-spacing:.1em;text-transform:uppercase}
.pastor-profile__verse{padding:1.2rem 1.4rem;background:#062e40;color:#fff;font-size:.95rem;font-style:italic}
.pastor-profile__verse strong{display:block;margin-top:.45rem;color:#d9b98c;font-size:.75rem;font-style:normal}
.pastor-profile__copy h2{max-width:580px}
.pastor-profile__copy>p:not(.eyebrow){color:var(--eem-text-muted);line-height:1.75}
.pastor-profile__copy .pastor-profile__lead{color:var(--eem-secondary);font-size:1.12rem;font-weight:750}
.text-link{display:inline-flex;align-items:center;gap:.45rem;margin-top:.8rem;color:var(--eem-primary);font-weight:800;text-decoration:none}
.leadership-section{padding-block:clamp(3.8rem,7vw,6rem);background:#fff}
.section-heading--leadership{align-items:center}
.section-heading__symbol{display:grid;width:4.6rem;height:4.6rem;flex:none;place-items:center;border-radius:1.25rem;background:#edf5f7;color:var(--eem-secondary);font-size:2rem}
.leaders-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:1.2rem}
.leader-card{overflow:hidden;border:1px solid var(--eem-border);border-radius:1.1rem;background:#fff;box-shadow:0 10px 28px rgb(13 55 72 / 5%);transition:transform .25s ease}
.leader-card:hover{transform:translateY(-4px)}
.leader-card__image{position:relative;height:300px;overflow:hidden;background:#e2ecef}
.leader-card__image img{display:block;width:100%;height:100%;object-fit:cover;object-position:center 28%;transition:transform .4s ease}
.leader-card:hover .leader-card__image img{transform:scale(1.04)}
.leader-card__image span{position:absolute;right:.85rem;bottom:.85rem;display:grid;width:2.25rem;height:2.25rem;place-items:center;border:1px solid rgb(255 255 255 / 45%);border-radius:50%;background:rgb(4 48 65 / 82%);color:#fff;font-size:.7rem;font-weight:800}
.leader-card__body{padding:1.1rem 1.2rem 1.3rem}
.leader-card h3{margin:0 0 .35rem;font-size:1.05rem}
.leader-card p{margin:0;color:var(--eem-text-muted);font-size:.84rem}
.leaders-note{margin:1.15rem 0 0;color:var(--eem-text-muted);font-size:.76rem;line-height:1.6}
.leaders-action{display:flex;justify-content:center;margin-top:1.6rem}
.giving-section{padding-block:clamp(2.5rem,5vw,4rem);background:#f2f7f9}
.giving-card{display:flex;align-items:center;gap:1.5rem;padding:clamp(1.5rem,4vw,2.8rem);border-radius:1.4rem;background:linear-gradient(115deg,#07546b,#06384b);color:#fff;box-shadow:0 18px 45px rgb(3 48 65 / 17%)}
.giving-card__icon{display:grid;width:4.2rem;height:4.2rem;flex:none;place-items:center;border:1px solid rgb(255 255 255 / 25%);border-radius:1.1rem;background:rgb(255 255 255 / 9%);color:#f1d4a8;font-size:2rem}
.giving-card__copy{flex:1}
.giving-card .eyebrow{color:#b9e6f0}
.giving-card h2{margin:.35rem 0 .5rem;color:#fff;font-size:clamp(1.5rem,3vw,2.1rem)}
.giving-card__copy>p:last-child{max-width:700px;margin:0;color:rgb(255 255 255 / 78%);font-size:.9rem;line-height:1.65}
.giving-card :deep(.base-button){flex:none}
@media(max-width:950px){.announcements-grid{grid-template-columns:repeat(2,minmax(0,1fr))}.announcement-card:last-child{grid-column:1/-1;max-width:calc(50% - .675rem)}.pastor-profile{grid-template-columns:1fr}.pastor-profile__visual{max-width:540px;width:100%}.leaders-grid{grid-template-columns:repeat(2,minmax(0,1fr))}.giving-card{align-items:flex-start;flex-wrap:wrap}.giving-card__copy{min-width:calc(100% - 6rem)}}
@media(max-width:620px){.section-heading{align-items:flex-start;flex-direction:column;gap:1rem}.announcements-grid,.leaders-grid{grid-template-columns:1fr}.announcement-card:last-child{grid-column:auto;max-width:none}.announcement-card__visual{aspect-ratio:16/9}.story-heading{text-align:left}.story-heading h2{margin-inline:0}.story-heading>p:last-child{margin-inline:0}.section-heading__symbol{display:none}.leader-card__image{height:330px}.giving-card{flex-direction:column}.giving-card__copy{min-width:0}.giving-card :deep(.base-button){width:100%}.pastor-profile__portrait{min-height:270px}}
@media(prefers-reduced-motion:reduce){.announcement-card,.announcement-card__visual img,.leader-card,.leader-card__image img{transition:none}}
</style>
