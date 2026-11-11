<script setup lang="ts">
import { church } from '~/data/church'
import { staticPages } from '~/data/pages'

const route = useRoute()
const slug = String(route.params.slug)
const page = staticPages[slug]

if (!page) {
  throw createError({ statusCode: 404, statusMessage: 'Page introuvable' })
}

const isContact = slug === 'contact'
const needsPersonalContact = slug === 'priere' || slug === 'rendez-vous'
const whatsappUrl = church.whatsappLink
const mapsUrl = 'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent(church.address)

useSeoMeta({
  title: () => page.title + ' | Église Évangélique Les Moissonneurs',
  description: () => page.description,
  ogTitle: () => page.title + ' | Église Évangélique Les Moissonneurs',
  ogDescription: () => page.description,
})
</script>

<template>
  <div class="static-page">
    <section class="page-hero">
      <PageContainer>
        <NuxtLink to="/" class="breadcrumb">Accueil <UIcon name="i-lucide-chevron-right" /> {{ page.title }}</NuxtLink>
        <p class="eyebrow">{{ page.eyebrow }}</p>
        <h1>{{ page.heroTitle }}</h1>
        <p class="page-hero__intro">{{ page.intro }}</p>
      </PageContainer>
    </section>

    <section class="page-content">
      <PageContainer>
        <div v-if="isContact" class="contact-grid">
          <article class="contact-card">
            <span class="contact-card__icon"><UIcon name="i-lucide-map-pin" /></span>
            <h2>Adresse</h2>
            <p>{{ church.address }}</p>
            <a :href="mapsUrl" target="_blank" rel="noopener noreferrer">Voir l’itinéraire <UIcon name="i-lucide-arrow-up-right" /></a>
          </article>
          <article class="contact-card">
            <span class="contact-card__icon"><UIcon name="i-lucide-phone" /></span>
            <h2>Téléphone</h2>
            <p>{{ church.phone }}</p>
            <a :href="church.phoneLink">Appeler l’Église <UIcon name="i-lucide-arrow-up-right" /></a>
          </article>
          <article class="contact-card">
            <span class="contact-card__icon"><UIcon name="i-lucide-message-circle" /></span>
            <h2>WhatsApp</h2>
            <p>Écrivez-nous directement pour une demande d’information.</p>
            <a :href="whatsappUrl" target="_blank" rel="noopener noreferrer">Ouvrir WhatsApp <UIcon name="i-lucide-arrow-up-right" /></a>
          </article>
          <article class="contact-card">
            <span class="contact-card__icon"><UIcon name="i-lucide-mail" /></span>
            <h2>E-mail</h2>
            <p>{{ church.email }}</p>
            <a :href="'mailto:' + church.email">Envoyer un e-mail <UIcon name="i-lucide-arrow-up-right" /></a>
          </article>
        </div>

        <EditorialSections :sections="page.sections" />

        <aside v-if="needsPersonalContact" class="personal-contact">
          <div>
            <p class="eyebrow">Prendre contact</p>
            <h2>Choisissez le moyen qui vous convient.</h2>
            <p>Votre demande est personnelle. Partagez uniquement les informations nécessaires à la prise de contact.</p>
          </div>
          <div class="personal-contact__actions">
            <a :href="whatsappUrl" target="_blank" rel="noopener noreferrer" class="action-link action-link--primary"><UIcon name="i-lucide-message-circle" /> WhatsApp</a>
            <a :href="church.phoneLink" class="action-link"><UIcon name="i-lucide-phone" /> Appeler</a>
            <a :href="'mailto:' + church.email" class="action-link"><UIcon name="i-lucide-mail" /> E-mail</a>
          </div>
        </aside>

        <div v-if="page.actionTo" class="page-action">
          <a v-if="page.actionTo.startsWith('http')" :href="page.actionTo" target="_blank" rel="noopener noreferrer" class="action-link action-link--primary">
            {{ page.actionLabel }} <UIcon name="i-lucide-arrow-up-right" />
          </a>
          <BaseButton v-else :to="page.actionTo" variant="secondary">
            {{ page.actionLabel }} <UIcon name="i-lucide-arrow-right" />
          </BaseButton>
        </div>
      </PageContainer>
    </section>
  </div>
</template>

<style scoped>
.page-hero{padding-block:clamp(3.5rem,8vw,6.5rem);background:linear-gradient(120deg,#f0f9fc 0%,#fff 65%,#e5f5f8 100%)}
.breadcrumb{display:inline-flex;align-items:center;gap:.45rem;margin-bottom:2.2rem;color:var(--eem-text-muted);font-size:.8rem;text-decoration:none}
.breadcrumb:hover{color:var(--eem-primary)}
.page-hero h1{max-width:900px;margin:.65rem 0 1rem;font-size:clamp(2.35rem,5.5vw,4.4rem);line-height:1.08}
.page-hero__intro{max-width:780px;margin:0;color:var(--eem-text-muted);font-size:clamp(1rem,1.7vw,1.18rem)}
.page-content{padding-block:clamp(3rem,6vw,5.5rem)}
.contact-grid{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:1rem;margin-bottom:4rem}
.contact-card{min-width:0;padding:1.35rem;border:1px solid var(--eem-border);border-radius:1rem;background:#fff;box-shadow:var(--eem-shadow-card)}
.contact-card__icon{display:grid;width:2.7rem;height:2.7rem;place-items:center;border-radius:.8rem;background:var(--eem-surface);color:var(--eem-secondary);font-size:1.25rem}
.contact-card h2{margin:1rem 0 .45rem;font-size:1.1rem}
.contact-card p{min-height:3.2rem;margin:0 0 1rem;color:var(--eem-text-muted);font-size:.88rem;overflow-wrap:anywhere}
.contact-card a{display:inline-flex;align-items:center;gap:.35rem;color:var(--eem-primary);font-size:.82rem;font-weight:750;text-decoration:none}
.personal-contact{display:flex;align-items:center;justify-content:space-between;gap:2rem;margin-top:3rem;padding:2rem;border-radius:1.2rem;background:var(--eem-surface)}
.personal-contact h2{margin:.35rem 0;font-size:1.5rem}
.personal-contact p:not(.eyebrow){max-width:600px;margin:0;color:var(--eem-text-muted);font-size:.9rem}
.personal-contact__actions{display:flex;flex-wrap:wrap;gap:.65rem}
.action-link{display:inline-flex;align-items:center;justify-content:center;gap:.45rem;min-height:2.8rem;padding:.7rem 1rem;border:1px solid var(--eem-border);border-radius:.65rem;background:#fff;color:var(--eem-secondary);font-size:.85rem;font-weight:750;text-decoration:none}
.action-link--primary{border-color:var(--eem-primary);background:var(--eem-primary);color:#fff}
.action-link--primary:hover{background:var(--eem-primary-hover)}
.page-action{display:flex;justify-content:center;margin-top:3rem}
@media(max-width:950px){.contact-grid{grid-template-columns:repeat(2,minmax(0,1fr))}.personal-contact{align-items:flex-start;flex-direction:column}}
@media(max-width:560px){.contact-grid{grid-template-columns:1fr}.content-section{grid-template-columns:2rem 1fr;gap:.7rem}.personal-contact{padding:1.3rem}.personal-contact__actions{width:100%;flex-direction:column}.action-link{width:100%}}
</style>
