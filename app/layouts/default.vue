<template>
  <div class="site-layout">
    <a class="skip-link" href="#main-content">Aller au contenu principal</a>
    <AppHeader />
    <main id="main-content">
      <slot />
    </main>
    <AppFooter />
  </div>
</template>

<style scoped>
.skip-link{position:absolute;z-index:100;top:-5rem;left:1rem;padding:.75rem 1rem;border-radius:.5rem;background:#fff;color:var(--eem-secondary);font-weight:750;box-shadow:var(--eem-shadow-card)}
.skip-link:focus{top:1rem}
</style>
