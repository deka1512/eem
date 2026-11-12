<script setup lang="ts">
import { church } from '~/data/church'
import { sermons } from '~/data/sermons'
import { staticPages } from '~/data/pages'

const page = staticPages.enseignements!
const youtubeSearch = 'https://www.youtube.com/results?search_query=' + encodeURIComponent('Eglise Evangelique Les Moissonneurs Kinshasa')
const whatsappMessage = 'Bonjour, je souhaite obtenir des informations sur les prédications et enseignements de l’EEM.'
const whatsappUrl = church.whatsappLink + '?text=' + encodeURIComponent(whatsappMessage)

useSeoMeta({
  title: 'Prédications et enseignements | Église Évangélique Les Moissonneurs',
  description: page.description,
  ogTitle: 'Prédications et enseignements | EEM',
  ogDescription: page.description,
})
</script>

<template>
  <div class="teachings-page">
    <PageHero
      :eyebrow="page.eyebrow"
      :title="page.heroTitle"
      :description="page.intro"
      :image="page.heroImage"
      :breadcrumb="page.title"
    />

    <section class="teachings-intro">
      <PageContainer>
        <div class="teachings-intro__grid">
          <div>
            <p class="eyebrow">Grandir dans la Parole</p>
            <h2>Des messages pour nourrir votre foi et éclairer votre marche.</h2>
          </div>
          <div class="teachings-intro__copy">
            <p>Ces ressources proposent des trames bibliques pour lire les Écritures, approfondir un thème et réfléchir à sa mise en pratique. Elles sont conçues pour accompagner la méditation personnelle et l’enseignement.</p>
            <a :href="youtubeSearch" target="_blank" rel="noopener noreferrer" class="youtube-link">
              <UIcon name="i-lucide-youtube" /> Rechercher les vidéos de l’EEM sur YouTube <UIcon name="i-lucide-arrow-up-right" />
            </a>
          </div>
        </div>
      </PageContainer>
    </section>

    <section class="sermons-section">
      <PageContainer>
        <div class="sermons-heading">
          <div>
            <p class="eyebrow">Ressources bibliques</p>
            <h2>Prédications et plans d’étude</h2>
            <p>Choisissez un thème pour découvrir son passage biblique, son plan et une piste de mise en pratique.</p>
          </div>
          <span class="sermons-heading__icon"><UIcon name="i-lucide-book-open-check" /></span>
        </div>

        <div class="sermons-grid">
          <article v-for="(sermon, index) in sermons" :key="sermon.slug" class="sermon-card">
            <NuxtLink :to="`/enseignements/${sermon.slug}`" class="sermon-card__image">
              <img
                :src="sermon.thumbnail || 'https://images.unsplash.com/photo-1504052434569-70ad5836ab65?auto=format&fit=crop&w=1100&q=85'"
                :alt="`Illustration : ${sermon.title}`"
                loading="lazy"
              >
              <span class="sermon-card__number">{{ String(index + 1).padStart(2, '0') }}</span>
              <span class="sermon-card__open"><UIcon name="i-lucide-arrow-up-right" /></span>
            </NuxtLink>
            <div class="sermon-card__body">
              <p class="sermon-card__category">{{ sermon.category || 'Enseignement biblique' }}</p>
              <h3><NuxtLink :to="`/enseignements/${sermon.slug}`">{{ sermon.title }}</NuxtLink></h3>
              <p class="sermon-card__scripture"><UIcon name="i-lucide-book-open" /> {{ sermon.scripture }}</p>
              <p class="sermon-card__description">{{ sermon.description }}</p>
              <NuxtLink :to="`/enseignements/${sermon.slug}`" class="sermon-card__link">
                Découvrir le plan <UIcon name="i-lucide-arrow-right" />
              </NuxtLink>
            </div>
          </article>
        </div>
        <p class="sermons-note">Ces contenus sont des trames bibliques proposées pour l’édification. Ils ne sont pas attribués à un prédicateur ni présentés comme des enregistrements de cultes. Les vidéos officielles seront ajoutées après vérification des liens.</p>
      </PageContainer>
    </section>

    <section class="scripture-section">
      <PageContainer>
        <div class="scripture-card">
          <span class="scripture-card__mark">“</span>
          <div>
            <p class="eyebrow">Un repère pour notre marche</p>
            <blockquote>Que la parole de Christ habite parmi vous abondamment.</blockquote>
            <cite>Colossiens 3:16</cite>
          </div>
        </div>
      </PageContainer>
    </section>

    <section class="contact-section">
      <PageContainer>
        <div class="contact-panel">
          <div class="contact-panel__copy">
            <p class="eyebrow">Une question sur un enseignement ?</p>
            <h2>Échangeons autour de la Parole.</h2>
            <p>Vous souhaitez proposer un thème, retrouver une prédication ou demander une référence biblique ? Notre équipe est à votre écoute.</p>
          </div>
          <div class="contact-panel__actions">
            <a :href="whatsappUrl" target="_blank" rel="noopener noreferrer" class="contact-action contact-action--primary">
              <UIcon name="i-lucide-message-circle" /> Écrire sur WhatsApp
            </a>
            <NuxtLink to="/contact" class="contact-action">
              <UIcon name="i-lucide-phone" /> Nous contacter
            </NuxtLink>
          </div>
        </div>
      </PageContainer>
    </section>
  </div>
</template>

<style scoped>
.teachings-intro{padding-block:clamp(3rem,6vw,4.8rem);background:#fff}
.teachings-intro__grid{display:grid;grid-template-columns:1.05fr .95fr;gap:clamp(2rem,6vw,5rem);align-items:center}
.teachings-intro h2,.sermons-heading h2,.contact-panel h2{max-width:680px;margin:.55rem 0 0;font-size:clamp(2rem,3.7vw,3.1rem);line-height:1.12;letter-spacing:-.03em}
.teachings-intro__copy p{margin:0;color:var(--eem-text-muted);font-size:1rem;line-height:1.8}
.youtube-link{display:inline-flex;align-items:center;gap:.5rem;margin-top:1.2rem;color:#c62828;font-size:.87rem;font-weight:800;text-decoration:none}
.sermons-section{padding-block:clamp(3.5rem,7vw,5.8rem);background:#f1f7f9}
.sermons-heading{display:flex;align-items:flex-end;justify-content:space-between;gap:2rem;margin-bottom:2rem}
.sermons-heading>div{max-width:760px}
.sermons-heading h2{margin:.45rem 0 .65rem}
.sermons-heading>div>p:last-child{margin:0;color:var(--eem-text-muted);line-height:1.7}
.sermons-heading__icon{display:grid;width:4.5rem;height:4.5rem;flex:none;place-items:center;border-radius:1.2rem;background:#fff;color:var(--eem-secondary);font-size:2rem;box-shadow:var(--eem-shadow-card)}
.sermons-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:1.35rem}
.sermon-card{overflow:hidden;border:1px solid #e0e9ed;border-radius:1.15rem;background:#fff;box-shadow:0 12px 35px rgb(13 55 72 / 6%);transition:transform .22s ease,box-shadow .22s ease}
.sermon-card:hover{transform:translateY(-4px);box-shadow:0 18px 42px rgb(13 55 72 / 11%)}
.sermon-card__image{position:relative;display:block;aspect-ratio:16/10;overflow:hidden;background:#dce8ec}
.sermon-card__image::after{position:absolute;inset:35% 0 0;background:linear-gradient(transparent,rgb(3 31 43 / 35%));content:""}
.sermon-card__image img{display:block;width:100%;height:100%;object-fit:cover;transition:transform .4s ease}
.sermon-card:hover .sermon-card__image img{transform:scale(1.045)}
.sermon-card__number{position:absolute;z-index:1;right:1rem;bottom:.8rem;color:#fff;font-size:.76rem;font-weight:850;letter-spacing:.1em}
.sermon-card__open{position:absolute;z-index:1;top:1rem;right:1rem;display:grid;width:2.2rem;height:2.2rem;place-items:center;border:1px solid rgb(255 255 255 / 65%);border-radius:50%;background:rgb(4 48 65 / 78%);color:#fff}
.sermon-card__body{padding:1.4rem}
.sermon-card__category{margin:0 0 .55rem;color:var(--eem-primary);font-size:.7rem;font-weight:850;letter-spacing:.09em;text-transform:uppercase}
.sermon-card h3{margin:0;font-size:1.32rem;line-height:1.25}
.sermon-card h3 a{color:var(--eem-text);text-decoration:none}
.sermon-card h3 a:hover{color:var(--eem-primary)}
.sermon-card__scripture{display:flex;align-items:center;gap:.45rem;margin:.65rem 0;color:#56717d;font-size:.8rem;font-weight:750}
.sermon-card__description{min-height:4.7rem;margin:0;color:var(--eem-text-muted);font-size:.88rem;line-height:1.65}
.sermon-card__link{display:inline-flex;align-items:center;gap:.45rem;margin-top:1.2rem;color:var(--eem-primary);font-size:.82rem;font-weight:850;text-decoration:none}
.sermons-note{margin:1rem 0 0;color:#6d818a;font-size:.74rem;line-height:1.6}
.scripture-section{padding-block:clamp(2.5rem,5vw,4rem);background:#fff}
.scripture-card{display:flex;align-items:center;gap:1.6rem;max-width:900px;margin-inline:auto;padding:clamp(1.5rem,4vw,2.5rem);border:1px solid var(--eem-border);border-radius:1.2rem;background:#f8fbfc}
.scripture-card__mark{color:#b8d6df;font-family:Georgia,serif;font-size:5rem;line-height:.7}
.scripture-card blockquote{margin:.5rem 0;color:var(--eem-secondary);font-family:var(--eem-font-heading);font-size:clamp(1.25rem,2.8vw,1.8rem);font-weight:750;line-height:1.4}
.scripture-card cite{color:var(--eem-primary);font-size:.82rem;font-style:normal;font-weight:800}
.contact-section{padding-block:clamp(2.5rem,5vw,4.5rem);background:#f1f7f9}
.contact-panel{display:flex;align-items:center;justify-content:space-between;gap:2rem;padding:clamp(1.6rem,4vw,3rem);border-radius:1.35rem;background:linear-gradient(115deg,#07546b,#06384b);color:#fff;box-shadow:0 18px 45px rgb(3 48 65 / 16%)}
.contact-panel__copy{max-width:690px}
.contact-panel .eyebrow{color:#b9e6f0}
.contact-panel h2{margin:.45rem 0 .65rem;color:#fff;font-size:clamp(1.8rem,3.4vw,2.6rem)}
.contact-panel__copy>p:last-child{margin:0;color:rgb(255 255 255 / 78%);font-size:.92rem;line-height:1.7}
.contact-panel__actions{display:flex;flex:none;flex-direction:column;gap:.7rem;min-width:210px}
.contact-action{display:inline-flex;min-height:2.9rem;align-items:center;justify-content:center;gap:.5rem;padding:.75rem 1rem;border:1px solid rgb(255 255 255 / 35%);border-radius:.7rem;color:#fff;font-size:.84rem;font-weight:800;text-decoration:none;transition:background .2s ease}
.contact-action:hover{background:rgb(255 255 255 / 12%)}
.contact-action--primary{border-color:#fff;background:#fff;color:#07546b}
.contact-action--primary:hover{background:#eaf5f8}
@media(max-width:850px){.teachings-intro__grid{grid-template-columns:1fr;gap:1.3rem}.sermons-grid{grid-template-columns:repeat(2,minmax(0,1fr))}.contact-panel{align-items:flex-start;flex-direction:column}.contact-panel__actions{width:100%;flex-direction:row;flex-wrap:wrap}.contact-action{flex:1}}
@media(max-width:580px){.sermons-heading{align-items:flex-start}.sermons-heading__icon{display:none}.sermons-grid{grid-template-columns:1fr}.sermon-card__description{min-height:0}.scripture-card{align-items:flex-start;gap:.8rem}.scripture-card__mark{font-size:3.5rem}.contact-panel__actions{flex-direction:column}.contact-action{width:100%}}
@media(prefers-reduced-motion:reduce){.sermon-card,.sermon-card__image img,.contact-action{transition:none}}
</style>