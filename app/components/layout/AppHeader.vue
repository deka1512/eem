<script setup lang="ts">
const isMenuOpen=ref(false)
const navigation=[{label:'Accueil',to:'/'},{label:'L’Église',to:'/eglise'},{label:'Vie de l’Église',to:'/vie-de-leglise'},{label:'Enseignements',to:'/enseignements'},{label:'Actualités',to:'/actualites'},{label:'Contact',to:'/contact'}]
const closeMenu=()=>{isMenuOpen.value=false}
</script>
<template>
<header class="site-header"><PageContainer><div class="site-header__inner">
<NuxtLink to="/" class="brand" aria-label="Église Évangélique Les Moissonneurs — Accueil" @click="closeMenu">
<span class="brand__mark"><UIcon name="i-lucide-wheat" /></span><span class="brand__text"><strong>Les Moissonneurs</strong><small>Église Évangélique · EEM</small></span>
</NuxtLink>
<nav class="desktop-nav" aria-label="Navigation principale"><NuxtLink v-for="item in navigation" :key="item.to" :to="item.to" active-class="is-active">{{item.label}}</NuxtLink></nav>
<NuxtLink to="/contact" class="header-cta">Nous contacter <UIcon name="i-lucide-arrow-up-right" /></NuxtLink>
<button class="menu-toggle" type="button" :aria-expanded="isMenuOpen" aria-controls="mobile-navigation" :aria-label="isMenuOpen?'Fermer le menu':'Ouvrir le menu'" @click="isMenuOpen=!isMenuOpen"><UIcon :name="isMenuOpen?'i-lucide-x':'i-lucide-menu'" /></button>
</div>
<nav v-if="isMenuOpen" id="mobile-navigation" class="mobile-nav" aria-label="Navigation mobile">
<NuxtLink v-for="item in navigation" :key="item.to" :to="item.to" @click="closeMenu">{{item.label}}</NuxtLink>
<NuxtLink to="/priere" class="mobile-nav__prayer" @click="closeMenu">Besoin de prière ?</NuxtLink>
</nav></PageContainer></header>
</template>
<style scoped>
.site-header{position:sticky;z-index:50;top:0;border-bottom:1px solid rgb(226 232 240 / 85%);background:rgb(255 255 255 / 96%);backdrop-filter:blur(14px)}
.site-header__inner{display:flex;min-height:82px;align-items:center;justify-content:space-between;gap:1.5rem}
.brand{display:inline-flex;flex:none;align-items:center;gap:.7rem;color:var(--eem-secondary);text-decoration:none}
.brand__mark{display:grid;width:2.65rem;height:2.65rem;place-items:center;border-radius:.8rem;background:var(--eem-surface);font-size:1.4rem}
.brand__text{display:grid;line-height:1.2}.brand__text strong{font-family:var(--eem-font-heading);font-size:.95rem;font-weight:800}.brand__text small{margin-top:.25rem;color:var(--eem-text-muted);font-size:.65rem;letter-spacing:.04em}
.desktop-nav{display:flex;align-items:center;gap:clamp(.8rem,1.5vw,1.4rem)}.desktop-nav a{color:var(--eem-text);font-size:.82rem;font-weight:650;text-decoration:none}.desktop-nav a:hover,.desktop-nav a.is-active{color:var(--eem-primary)}
.header-cta{display:inline-flex;flex:none;align-items:center;gap:.4rem;border-radius:.6rem;padding:.7rem .9rem;background:var(--eem-primary);color:#fff;font-size:.8rem;font-weight:750;text-decoration:none}.header-cta:hover{background:var(--eem-primary-hover)}
.menu-toggle{display:none;width:2.7rem;height:2.7rem;place-items:center;border:1px solid var(--eem-border);border-radius:.65rem;background:#fff;color:var(--eem-secondary);font-size:1.25rem}
.mobile-nav{display:grid;gap:.15rem;padding:0 0 1rem}.mobile-nav a{border-radius:.5rem;padding:.75rem .85rem;color:var(--eem-text);font-weight:650;text-decoration:none}.mobile-nav a:hover{background:var(--eem-surface);color:var(--eem-secondary)}.mobile-nav .mobile-nav__prayer{color:var(--eem-primary)}
@media(max-width:1080px){.desktop-nav,.header-cta{display:none}.menu-toggle{display:grid}}@media(min-width:1081px){.mobile-nav{display:none}}
</style>