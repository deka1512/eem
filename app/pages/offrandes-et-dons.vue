<script setup lang="ts">
import { church } from '~/data/church'

useSeoMeta({
  title: 'Offrandes et dons | Église Évangélique Les Moissonneurs',
  description: 'Soutenez la mission de l’Église Évangélique Les Moissonneurs par une offrande ou un don volontaire.',
  ogTitle: 'Offrandes et dons | Église Évangélique Les Moissonneurs',
  ogDescription: 'Votre générosité accompagne la vie et la mission de la communauté.'
})
</script>

<template>
  <div>
    <PageHero
      eyebrow="Générosité et engagement"
      title="Offrandes et dons"
      description="Soutenir l’œuvre de Dieu avec un cœur libre, dans la foi, la reconnaissance et la transparence."
      image="https://images.unsplash.com/photo-1507692049790-de58290a4334?auto=format&fit=crop&w=2200&q=85"
      breadcrumb="Offrandes et dons"
    />

    <section class="giving-page">
      <PageContainer>
        <div class="giving-page__intro">
          <p class="eyebrow">Un geste volontaire</p>
          <h2>Contribuer à la mission, selon ses possibilités.</h2>
          <p>Les offrandes et les dons sont des gestes libres de générosité. Ils peuvent soutenir la vie de la communauté et les actions liées à sa mission d’annonce de l’Évangile.</p>
        </div>

        <div class="giving-page__principles">
          <article>
            <span><UIcon name="i-lucide-heart-handshake" /></span>
            <h3>Un don libre</h3>
            <p>Chacun contribue selon ses convictions et ses possibilités. Aucun montant n’est imposé et aucun don ne conditionne l’accueil ou l’accompagnement pastoral.</p>
          </article>
          <article>
            <span><UIcon name="i-lucide-hand-heart" /></span>
            <h3>Un geste de reconnaissance</h3>
            <p>La générosité s’inscrit dans une démarche personnelle de foi, de gratitude et de participation à la vie de l’Église.</p>
          </article>
          <article>
            <span><UIcon name="i-lucide-shield-check" /></span>
            <h3>Des modalités confirmées</h3>
            <p>Avant toute contribution, contactez l’Église pour obtenir les consignes officielles et vérifier le canal de réception autorisé.</p>
          </article>
        </div>

        <div class="giving-page__scripture">
          <UIcon name="i-lucide-book-open" />
          <blockquote>« Que chacun donne comme il l’a résolu en son cœur, sans tristesse ni contrainte. »</blockquote>
          <span>2 Corinthiens 9:7</span>
        </div>

        <section class="giving-page__contact">
          <div>
            <p class="eyebrow">Comment contribuer ?</p>
            <h2>Demandez les modalités officielles à l’Église.</h2>
            <p>Pour le moment, aucun numéro de compte, portefeuille mobile ou moyen de paiement n’est publié sur cette page. Contactez directement l’EEM afin de recevoir les informations vérifiées avant d’effectuer un don.</p>
          </div>
          <div class="giving-page__actions">
            <a :href="church.whatsappLink" target="_blank" rel="noopener noreferrer" class="giving-action giving-action--primary"><UIcon name="i-lucide-message-circle" /> Écrire sur WhatsApp</a>
            <a :href="church.phoneLink" class="giving-action"><UIcon name="i-lucide-phone" /> Appeler l’Église</a>
            <a :href="'mailto:' + church.email" class="giving-action"><UIcon name="i-lucide-mail" /> Envoyer un e-mail</a>
          </div>
        </section>

        <p class="giving-page__address"><UIcon name="i-lucide-map-pin" /> {{ church.address }}</p>
      </PageContainer>
    </section>
  </div>
</template>

<style scoped>
.giving-page{padding-block:clamp(3.5rem,7vw,6rem)}
.giving-page__intro{max-width:780px;margin:0 auto 2.5rem;text-align:center}
.giving-page__intro h2{margin:.5rem 0 .9rem;font-size:clamp(2rem,4vw,3rem)}
.giving-page__intro>p:last-child{color:var(--eem-text-muted)}
.giving-page__principles{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:1.2rem}
.giving-page__principles article{padding:1.6rem;border:1px solid var(--eem-border);border-radius:1.1rem;background:#fff;box-shadow:var(--eem-shadow-card)}
.giving-page__principles article>span{display:grid;width:3rem;height:3rem;place-items:center;border-radius:.9rem;background:var(--eem-surface);color:var(--eem-secondary);font-size:1.4rem}
.giving-page__principles h3{margin:1.1rem 0 .5rem;font-size:1.15rem}
.giving-page__principles p{margin:0;color:var(--eem-text-muted);font-size:.9rem}
.giving-page__scripture{display:flex;flex-direction:column;align-items:center;gap:.65rem;margin:2.5rem 0;padding:2.3rem 1.5rem;border-radius:1.2rem;background:var(--eem-surface);color:var(--eem-secondary);text-align:center}
.giving-page__scripture>svg{font-size:1.7rem}
.giving-page__scripture blockquote{max-width:760px;margin:0;font-family:var(--eem-font-heading);font-size:clamp(1.15rem,2.5vw,1.7rem);font-weight:700}
.giving-page__scripture span{color:var(--eem-primary);font-size:.8rem;font-weight:800}
.giving-page__contact{display:flex;align-items:center;justify-content:space-between;gap:2rem;padding:clamp(1.5rem,4vw,2.8rem);border-radius:1.3rem;background:linear-gradient(115deg,#07546b,#06384b);color:#fff}
.giving-page__contact .eyebrow{color:#b9e6f0}
.giving-page__contact h2{max-width:650px;margin:.45rem 0 .7rem;color:#fff;font-size:clamp(1.6rem,3vw,2.2rem)}
.giving-page__contact p:not(.eyebrow){max-width:700px;margin:0;color:rgb(255 255 255 / 78%);font-size:.9rem}
.giving-page__actions{display:flex;min-width:210px;flex-direction:column;gap:.65rem}
.giving-action{display:inline-flex;min-height:2.8rem;align-items:center;justify-content:center;gap:.5rem;padding:.7rem 1rem;border:1px solid rgb(255 255 255 / 35%);border-radius:.7rem;color:#fff;font-size:.85rem;font-weight:750;text-decoration:none}
.giving-action--primary{border-color:#fff;background:#fff;color:var(--eem-secondary)}
.giving-page__address{display:flex;align-items:center;justify-content:center;gap:.5rem;margin:1.5rem 0 0;color:var(--eem-text-muted);font-size:.82rem;text-align:center}
@media(max-width:850px){.giving-page__principles{grid-template-columns:1fr 1fr}.giving-page__contact{align-items:flex-start;flex-direction:column}.giving-page__actions{width:100%;flex-direction:row;flex-wrap:wrap}.giving-action{flex:1}}
@media(max-width:560px){.giving-page__principles{grid-template-columns:1fr}.giving-page__actions{flex-direction:column}.giving-action{width:100%}}
</style>