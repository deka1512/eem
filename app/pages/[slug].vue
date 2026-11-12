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
const actionIsExternal = page.actionTo?.startsWith('http') ?? false

const illustrativeLeaders = [
  { name: 'Pasteur Joël Mbuyi', role: 'Accompagnement pastoral', image: 'https://images.pexels.com/photos/26903320/pexels-photo-26903320.jpeg?auto=compress&cs=tinysrgb&w=900', alt: 'Portrait illustratif d’un homme africain en costume' },
  { name: 'Maman Grâce Ilunga', role: 'Département des femmes', image: 'https://images.pexels.com/photos/5668768/pexels-photo-5668768.jpeg?auto=compress&cs=tinysrgb&w=900', alt: 'Portrait illustratif d’une femme noire en tenue professionnelle' },
  { name: 'Frère Patrick Kabasele', role: 'Jeunesse et formation', image: 'https://images.pexels.com/photos/33844626/pexels-photo-33844626.jpeg?auto=compress&cs=tinysrgb&w=900', alt: 'Portrait illustratif d’un homme africain en costume' },
  { name: 'Sœur Esther Kabeya', role: 'Accueil et intégration', image: 'https://images.pexels.com/photos/12008288/pexels-photo-12008288.jpeg?auto=compress&cs=tinysrgb&w=900', alt: 'Portrait illustratif d’une femme africaine élégante' },
  { name: 'Évangéliste David Tshibangu', role: 'Évangélisation et mission', image: 'https://images.pexels.com/photos/14124056/pexels-photo-14124056.jpeg?auto=compress&cs=tinysrgb&w=900', alt: 'Portrait illustratif d’un homme africain en costume' },
  { name: 'Maman Ruth Kalombo', role: 'Prière et accompagnement', image: 'https://images.pexels.com/photos/20610322/pexels-photo-20610322.jpeg?auto=compress&cs=tinysrgb&w=900', alt: 'Portrait illustratif d’une femme noire élégante' }
]
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
    <PageHero
      :eyebrow="page.eyebrow"
      :title="page.heroTitle"
      :description="page.intro"
      :image="page.heroImage"
      :breadcrumb="page.title"
    />

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

        <template v-if="slug === 'eglise'">
          <section class="pastor-profile">
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
              <p>La direction pastorale accompagne la communauté dans sa marche avec Dieu, l’enseignement de la Parole et le service du prochain. Cette présentation sera enrichie avec le parcours, le message et les éléments biographiques validés du Révérend Pasteur Nestor Mingina.</p>
              <NuxtLink to="/rendez-vous" class="church-text-link">Demander un échange <UIcon name="i-lucide-arrow-right" /></NuxtLink>
            </div>
          </section>

          <section class="church-leadership">
            <div class="church-section-heading">
              <div>
                <p class="eyebrow">Leadership et ministères</p>
                <h2>Des femmes et des hommes au service de la vision.</h2>
                <p>Une communauté se construit grâce à des engagements complémentaires : accompagner, enseigner, accueillir, servir et annoncer l’Évangile.</p>
              </div>
              <span class="church-section-heading__symbol"><UIcon name="i-lucide-users-round" /></span>
            </div>
            <div class="church-leadership__grid">
              <article v-for="(person, index) in illustrativeLeaders" :key="person.name" class="church-leader-card">
                <div class="church-leader-card__image">
                  <img :src="person.image" :alt="person.alt" loading="lazy">
                  <span>0{{ index + 1 }}</span>
                </div>
                <div class="church-leader-card__body">
                  <h3>{{ person.name }}</h3>
                  <p>{{ person.role }}</p>
                </div>
              </article>
            </div>
            <p class="church-leadership__notice">Noms et fonctions de présentation, à titre de maquette. Ils ne désignent pas les responsables officiellement confirmés de l’EEM. Les portraits sont des visuels d’illustration et seront remplacés par les photos autorisées de l’équipe réelle.</p>
            <div class="church-leadership__action"><BaseButton to="/leadership" variant="secondary">Voir les domaines de service <UIcon name="i-lucide-arrow-right" /></BaseButton></div>
          </section>

          <section class="giving-invite">
            <div class="giving-invite__icon"><UIcon name="i-lucide-hand-heart" /></div>
            <div class="giving-invite__copy">
              <p class="eyebrow">Soutenir la mission</p>
              <h2>Vos dons et offrandes contribuent à la vie de l’œuvre.</h2>
              <p>Découvrez le sens du don, les façons de contribuer et comment obtenir les modalités officielles auprès de l’Église.</p>
            </div>
            <BaseButton to="/offrandes-et-dons" size="lg">Offrandes et dons <UIcon name="i-lucide-arrow-right" /></BaseButton>
          </section>
        </template>

        <aside v-if="slug !== 'eglise' && slug === 'eglise'" class="leadership-invite">
          <div>
            <p class="eyebrow">Leadership et engagement</p>
            <h2>Une communauté grandit lorsque chacun peut servir.</h2>
            <p>Découvrez les principes bibliques et les domaines de collaboration qui accompagnent la mission de l’EEM.</p>
          </div>
          <NuxtLink to="/leadership">Découvrir le leadership <UIcon name="i-lucide-arrow-right" /></NuxtLink>
        </aside>

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
          <a v-if="actionIsExternal" :href="page.actionTo" target="_blank" rel="noopener noreferrer" class="action-link action-link--primary">
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
.page-content{padding-block:clamp(3rem,6vw,5.5rem)}
.leadership-invite{display:flex;align-items:center;justify-content:space-between;gap:2rem;margin-top:3rem;padding:2rem;border-radius:1.2rem;background:var(--eem-surface)}
.leadership-invite h2{margin:.45rem 0;font-size:clamp(1.35rem,2.5vw,1.8rem)}
.leadership-invite p:not(.eyebrow){max-width:650px;margin:0;color:var(--eem-text-muted);font-size:.9rem}
.leadership-invite>a{display:inline-flex;flex:none;align-items:center;gap:.4rem;color:var(--eem-primary);font-size:.88rem;font-weight:750;text-decoration:none}
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
@media(max-width:950px){.contact-grid{grid-template-columns:repeat(2,minmax(0,1fr))}.personal-contact,.leadership-invite{align-items:flex-start;flex-direction:column}}
@media(max-width:560px){.contact-grid{grid-template-columns:1fr}.personal-contact{padding:1.3rem}.personal-contact__actions{width:100%;flex-direction:column}.action-link{width:100%}}

.pastor-profile{display:grid;grid-template-columns:.82fr 1.18fr;gap:clamp(2rem,6vw,5rem);align-items:center;margin-top:5rem;padding:clamp(1.3rem,3vw,2.5rem);border:1px solid var(--eem-border);border-radius:1.35rem;background:linear-gradient(135deg,#f2f9fb,#fff 65%);box-shadow:var(--eem-shadow-card)}
.pastor-profile__visual{overflow:hidden;border-radius:1rem;background:#06384b}
.pastor-profile__portrait{display:flex;min-height:340px;flex-direction:column;align-items:center;justify-content:center;gap:.9rem;background:radial-gradient(circle at 50% 35%,#23768b,#0b4356 55%,#062e40);color:#fff}
.pastor-profile__portrait span{display:grid;width:124px;height:124px;place-items:center;border:1px solid rgb(255 255 255 / 45%);border-radius:50%;background:rgb(255 255 255 / 9%);font-family:var(--eem-font-heading);font-size:3rem;font-weight:800}
.pastor-profile__portrait small{color:rgb(255 255 255 / 72%);font-size:.7rem;letter-spacing:.1em;text-transform:uppercase}
.pastor-profile__verse{padding:1.2rem 1.4rem;background:#062e40;color:#fff;font-family:var(--eem-font-heading);font-size:.95rem;font-style:italic}
.pastor-profile__verse strong{display:block;margin-top:.45rem;color:#d9b98c;font-family:var(--eem-font-body);font-size:.75rem;font-style:normal}
.pastor-profile__copy h2,.church-section-heading h2,.giving-invite h2{margin:.5rem 0 1rem;font-size:clamp(1.8rem,3.5vw,2.7rem);line-height:1.12}
.pastor-profile__copy>p:not(.eyebrow){color:var(--eem-text-muted)}
.pastor-profile__copy .pastor-profile__lead{color:var(--eem-secondary);font-family:var(--eem-font-heading);font-size:1.12rem;font-weight:700}
.church-text-link{display:inline-flex;align-items:center;gap:.45rem;margin-top:.8rem;color:var(--eem-primary);font-weight:750;text-decoration:none}
.church-leadership{margin-top:5rem;padding:clamp(1.5rem,4vw,3.5rem);border-radius:1.4rem;background:#f1f7f9}
.church-section-heading{display:flex;align-items:center;justify-content:space-between;gap:2rem;margin-bottom:2rem}
.church-section-heading>div{max-width:760px}
.church-section-heading h2{margin-bottom:.65rem}
.church-section-heading>div>p:last-child{margin:0;color:var(--eem-text-muted)}
.church-section-heading__symbol{display:grid;width:4.5rem;height:4.5rem;flex:none;place-items:center;border-radius:1.2rem;background:#fff;color:var(--eem-secondary);font-size:2rem;box-shadow:var(--eem-shadow-card)}
.church-leadership__grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:1.2rem}
.church-leader-card{overflow:hidden;border:1px solid var(--eem-border);border-radius:1rem;background:#fff;box-shadow:var(--eem-shadow-card)}
.church-leader-card__image{position:relative;height:290px;overflow:hidden;background:#dce9ed}
.church-leader-card__image img{width:100%;height:100%;display:block;object-fit:cover;object-position:center 30%;transition:transform .35s ease}
.church-leader-card:hover .church-leader-card__image img{transform:scale(1.035)}
.church-leader-card__image>span{position:absolute;right:.85rem;bottom:.85rem;display:grid;width:2.3rem;height:2.3rem;place-items:center;border:1px solid rgb(255 255 255 / 40%);border-radius:50%;background:rgb(4 48 65 / 82%);color:#fff;font-size:.7rem;font-weight:800}
.church-leader-card__body{padding:1.15rem 1.25rem 1.35rem}
.church-leader-card h3{margin:0 0 .3rem;font-size:1.05rem}
.church-leader-card p{margin:0;color:var(--eem-text-muted);font-size:.84rem}
.church-leadership__notice{margin:1.2rem 0 0;color:var(--eem-text-muted);font-size:.78rem}
.church-leadership__action{display:flex;justify-content:center;margin-top:1.6rem}
.giving-invite{display:flex;align-items:center;gap:1.5rem;margin-top:4rem;padding:clamp(1.5rem,4vw,2.8rem);border-radius:1.3rem;background:linear-gradient(115deg,#07546b,#06384b);color:#fff}
.giving-invite__icon{display:grid;width:4.2rem;height:4.2rem;flex:none;place-items:center;border:1px solid rgb(255 255 255 / 25%);border-radius:1.1rem;background:rgb(255 255 255 / 9%);color:#f1d4a8;font-size:2rem}
.giving-invite__copy{flex:1}
.giving-invite .eyebrow{color:#b9e6f0}
.giving-invite h2{margin:.35rem 0 .5rem;color:#fff;font-size:clamp(1.5rem,3vw,2.1rem)}
.giving-invite__copy p:last-child{max-width:700px;margin:0;color:rgb(255 255 255 / 78%);font-size:.9rem}
.giving-invite :deep(.base-button){flex:none}
@media(max-width:900px){.pastor-profile{grid-template-columns:1fr}.pastor-profile__visual{max-width:540px;width:100%}.church-leadership__grid{grid-template-columns:repeat(2,minmax(0,1fr))}.giving-invite{align-items:flex-start;flex-wrap:wrap}.giving-invite__copy{min-width:calc(100% - 6rem)}}
@media(max-width:560px){.church-section-heading{align-items:flex-start}.church-section-heading__symbol{display:none}.church-leadership__grid{grid-template-columns:1fr}.church-leader-card__image{height:340px}.giving-invite{flex-direction:column}.giving-invite__copy{min-width:0}.giving-invite :deep(.base-button){width:100%}.pastor-profile__portrait{min-height:270px}}

</style>
