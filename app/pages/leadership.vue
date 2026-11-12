<script setup lang="ts">
useSeoMeta({
  title: 'Leadership et service | Église Évangélique Les Moissonneurs',
  description: 'Découvrez les domaines de service et de collaboration qui contribuent à la mission de l’Église Évangélique Les Moissonneurs.',
  ogTitle: 'Leadership et service | Église Évangélique Les Moissonneurs',
  ogDescription: 'Une responsabilité exercée dans l’humilité, l’écoute et le service.'
})
</script>

<template>
  <div>
    <PageHero
      eyebrow="Leadership et service"
      title="Servir avec foi, conduire avec humilité."
      description="Le leadership chrétien prend tout son sens lorsqu’il aide chacun à grandir, à trouver sa place et à participer à la mission de l’Évangile."
      image="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=2200&q=85"
      breadcrumb="Leadership"
    />

    <LeadershipSection />

    <section class="leadership-values">
      <PageContainer>
        <SectionHeading
          eyebrow="Nos repères bibliques"
          title="L’autorité chrétienne se reconnaît au service."
          description="La Bible invite les responsables et les collaborateurs à exercer leurs engagements avec un cœur disponible, une conduite cohérente et une attention réelle aux autres."
        />
        <div class="leadership-values__grid">
          <article>
            <span><UIcon name="i-lucide-heart-handshake" /></span>
            <h2>Humilité</h2>
            <p>Ne pas rechercher la première place, mais être disponible pour servir et soutenir les autres.</p>
            <small>Marc 10:42-45</small>
          </article>
          <article>
            <span><UIcon name="i-lucide-book-open-check" /></span>
            <h2>Fidélité</h2>
            <p>Agir avec sérieux, intégrité et constance dans les responsabilités confiées.</p>
            <small>1 Corinthiens 4:2</small>
          </article>
          <article>
            <span><UIcon name="i-lucide-hand-heart" /></span>
            <h2>Attention aux personnes</h2>
            <p>Accompagner sans dominer, écouter avec respect et prendre soin de la communauté.</p>
            <small>1 Pierre 5:2-3</small>
          </article>
        </div>
      </PageContainer>
    </section>

    <section class="leadership-cta">
      <PageContainer>
        <div>
          <p class="eyebrow">Échanger avec l’Église</p>
          <h2>Vous souhaitez en savoir davantage ou proposer votre aide ?</h2>
          <p>Nous vous invitons à prendre contact pour obtenir des informations ou échanger sur les possibilités de service.</p>
        </div>
        <BaseButton to="/contact" variant="secondary">Contacter l’Église <UIcon name="i-lucide-arrow-right" /></BaseButton>
      </PageContainer>
    </section>
  </div>
</template>

<style scoped>
.leadership-values {
  padding-block: clamp(3.5rem, 7vw, 6rem);
  background: var(--eem-surface);
}
.leadership-values__grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1.2rem;
}
.leadership-values__grid article {
  padding: 1.5rem;
  border: 1px solid rgb(7 84 107 / 9%);
  border-radius: 1rem;
  background: #fff;
}
.leadership-values__grid article > span {
  display: grid;
  width: 2.9rem;
  height: 2.9rem;
  place-items: center;
  border-radius: .85rem;
  background: var(--eem-surface);
  color: var(--eem-secondary);
  font-size: 1.35rem;
}
.leadership-values__grid h2 {
  margin: 1rem 0 .5rem;
  font-size: 1.12rem;
}
.leadership-values__grid p {
  margin: 0;
  color: var(--eem-text-muted);
  font-size: .9rem;
}
.leadership-values__grid small {
  display: block;
  margin-top: 1rem;
  color: var(--eem-primary);
  font-size: .78rem;
  font-weight: 750;
}
.leadership-cta {
  padding-block: 3.5rem;
  background: var(--eem-secondary);
  color: #fff;
}
.leadership-cta :deep(.page-container) {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
}
.leadership-cta .eyebrow {
  color: #b9e6f0;
}
.leadership-cta h2 {
  max-width: 720px;
  margin: .5rem 0;
  color: #fff;
  font-size: clamp(1.6rem, 3vw, 2.3rem);
}
.leadership-cta p:not(.eyebrow) {
  max-width: 680px;
  margin: 0;
  color: rgb(255 255 255 / 75%);
}
@media (max-width: 800px) {
  .leadership-values__grid {
    grid-template-columns: 1fr 1fr;
  }
  .leadership-cta :deep(.page-container) {
    align-items: flex-start;
    flex-direction: column;
  }
}
@media (max-width: 560px) {
  .leadership-values__grid {
    grid-template-columns: 1fr;
  }
}
</style>