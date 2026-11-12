<script setup lang="ts">
withDefaults(defineProps<{
  eyebrow: string
  title: string
  description: string
  image: string
  breadcrumb?: string
}>(), {
  breadcrumb: ''
})
</script>

<template>
  <section class="page-hero" :style="{ '--hero-image': 'url(' + image + ')' }">
    <PageContainer>
      <nav v-if="breadcrumb" class="page-hero__breadcrumb" aria-label="Fil d’Ariane">
        <NuxtLink to="/">Accueil</NuxtLink>
        <UIcon name="i-lucide-chevron-right" />
        <span aria-current="page">{{ breadcrumb }}</span>
      </nav>
      <p class="eyebrow">{{ eyebrow }}</p>
      <h1>{{ title }}</h1>
      <p class="page-hero__intro">{{ description }}</p>
    </PageContainer>
  </section>
</template>

<style scoped>
.page-hero {
  position: relative;
  isolation: isolate;
  display: flex;
  min-height: 390px;
  align-items: center;
  overflow: hidden;
  padding-block: clamp(4rem, 8vw, 6.5rem);
  background-color: #06384b;
  background-image:
    linear-gradient(90deg, rgb(3 31 43 / 90%) 0%, rgb(3 31 43 / 76%) 52%, rgb(3 31 43 / 36%) 100%),
    var(--hero-image);
  background-position: center;
  background-size: cover;
}
.page-hero :deep(.page-container) {
  position: relative;
  z-index: 1;
}
.page-hero__breadcrumb {
  display: inline-flex;
  align-items: center;
  gap: .5rem;
  margin-bottom: 2rem;
  color: rgb(255 255 255 / 76%);
  font-size: .8rem;
}
.page-hero__breadcrumb a {
  color: #fff;
  text-decoration: none;
}
.page-hero__breadcrumb a:hover {
  text-decoration: underline;
}
.page-hero .eyebrow {
  color: #b9e6f0;
}
.page-hero h1 {
  max-width: 940px;
  margin: .65rem 0 1rem;
  color: #fff;
  font-size: clamp(2.35rem, 5.5vw, 4.4rem);
  line-height: 1.08;
}
.page-hero__intro {
  max-width: 790px;
  margin: 0;
  color: rgb(255 255 255 / 86%);
  font-size: clamp(1rem, 1.7vw, 1.18rem);
}
@media (max-width: 600px) {
  .page-hero {
    min-height: 340px;
    background-position: 58% center;
  }
}
</style>