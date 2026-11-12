<script setup lang="ts">
import { leadershipAreas } from '~/data/leadership'

const props = withDefaults(defineProps<{
  compact?: boolean
}>(), {
  compact: false
})

const visibleAreas = computed(() => props.compact ? leadershipAreas.slice(0, 4) : leadershipAreas)
</script>

<template>
  <section class="leadership-section" :class="{ 'leadership-section--compact': props.compact }">
    <PageContainer>
      <div class="leadership-section__heading">
        <SectionHeading
          eyebrow="Leadership et service"
          :title="props.compact ? 'Une équipe au service de la vision.' : 'Des responsabilités exercées dans un esprit de service.'"
          description="La mission de l’Église se vit ensemble. Plusieurs domaines de service contribuent à accueillir, accompagner, enseigner et soutenir la communauté."
        />
        <NuxtLink v-if="props.compact" to="/leadership" class="leadership-section__link">
          Découvrir le leadership <UIcon name="i-lucide-arrow-up-right" />
        </NuxtLink>
      </div>

      <div class="leadership-grid">
        <article v-for="area in visibleAreas" :key="area.title" class="leadership-card">
          <div class="leadership-card__visual">
            <img :src="area.image" :alt="area.imageAlt" loading="lazy">
            <span>Servir ensemble</span>
          </div>
          <div class="leadership-card__body">
            <p class="leadership-card__eyebrow">Domaine de service</p>
            <h3>{{ area.title }}</h3>
            <p>{{ area.description }}</p>
            <small><UIcon name="i-lucide-book-open" /> {{ area.reference }}</small>
          </div>
        </article>
      </div>

      <p v-if="!props.compact" class="leadership-note">
        Cette présentation décrit des domaines de collaboration et ne constitue pas un organigramme nominatif.
        Les noms, portraits et fonctions officielles des responsables seront ajoutés après validation par l’Église.
      </p>
    </PageContainer>
  </section>
</template>

<style scoped>
.leadership-section {
  padding-block: clamp(3.5rem, 7vw, 6rem);
  background: #fff;
}
.leadership-section__heading {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 2rem;
  margin-bottom: 2rem;
}
.leadership-section__heading :deep(.section-heading) {
  margin-bottom: 0;
}
.leadership-section__link {
  display: inline-flex;
  flex: none;
  align-items: center;
  gap: .45rem;
  margin-bottom: .3rem;
  color: var(--eem-primary);
  font-size: .85rem;
  font-weight: 750;
  text-decoration: none;
}
.leadership-section__link:hover {
  text-decoration: underline;
}
.leadership-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1.15rem;
}
.leadership-card {
  min-width: 0;
  overflow: hidden;
  border: 1px solid var(--eem-border);
  border-radius: 1.1rem;
  background: #fff;
  box-shadow: var(--eem-shadow-card);
  transition: transform .2s ease, box-shadow .2s ease;
}
.leadership-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 16px 36px rgb(7 84 107 / 12%);
}
.leadership-card__visual {
  position: relative;
  height: 190px;
  overflow: hidden;
  background: var(--eem-surface);
}
.leadership-card__visual::after {
  position: absolute;
  inset: 45% 0 0;
  background: linear-gradient(transparent, rgb(3 35 47 / 65%));
  content: "";
}
.leadership-card__visual img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform .35s ease;
}
.leadership-card:hover .leadership-card__visual img {
  transform: scale(1.04);
}
.leadership-card__visual span {
  position: absolute;
  z-index: 1;
  bottom: .9rem;
  left: 1rem;
  color: #fff;
  font-size: .72rem;
  font-weight: 750;
  letter-spacing: .08em;
  text-transform: uppercase;
}
.leadership-card__body {
  padding: 1.2rem;
}
.leadership-card__eyebrow {
  margin: 0 0 .45rem;
  color: var(--eem-primary);
  font-size: .68rem;
  font-weight: 800;
  letter-spacing: .1em;
  text-transform: uppercase;
}
.leadership-card h3 {
  margin: 0 0 .55rem;
  font-size: 1.08rem;
}
.leadership-card__body > p:not(.leadership-card__eyebrow) {
  min-height: 5.2rem;
  margin: 0;
  color: var(--eem-text-muted);
  font-size: .86rem;
  line-height: 1.65;
}
.leadership-card small {
  display: inline-flex;
  align-items: center;
  gap: .4rem;
  margin-top: 1rem;
  color: var(--eem-secondary);
  font-size: .76rem;
  font-weight: 750;
}
.leadership-note {
  max-width: 850px;
  margin: 2rem auto 0;
  padding: 1rem 1.2rem;
  border-left: 3px solid var(--eem-accent);
  background: var(--eem-surface);
  color: var(--eem-text-muted);
  font-size: .84rem;
}
.leadership-section--compact .leadership-grid {
  grid-template-columns: repeat(4, minmax(0, 1fr));
}
.leadership-section--compact .leadership-card__visual {
  height: 160px;
}
.leadership-section--compact .leadership-card__body {
  padding: 1rem;
}
.leadership-section--compact .leadership-card__body > p:not(.leadership-card__eyebrow) {
  min-height: 6.2rem;
  font-size: .81rem;
}
@media (max-width: 950px) {
  .leadership-section--compact .leadership-grid,
  .leadership-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}
@media (max-width: 620px) {
  .leadership-section__heading {
    align-items: flex-start;
    flex-direction: column;
    gap: .5rem;
  }
  .leadership-grid,
  .leadership-section--compact .leadership-grid {
    grid-template-columns: 1fr;
  }
  .leadership-card__visual,
  .leadership-section--compact .leadership-card__visual {
    height: 205px;
  }
  .leadership-card__body > p:not(.leadership-card__eyebrow),
  .leadership-section--compact .leadership-card__body > p:not(.leadership-card__eyebrow) {
    min-height: 0;
  }
}
</style>