<template>
<footer class="site-footer"><PageContainer><div class="site-footer__main">
<div class="site-footer__brand"><NuxtLink to="/" class="footer-brand"><span class="footer-brand__mark"><UIcon name="i-lucide-wheat" /></span><span><strong>Les Moissonneurs</strong><small>Église Évangélique · EEM</small></span></NuxtLink><p>Une communauté chrétienne engagée à annoncer l’Évangile de Jésus-Christ et à sauver des âmes.</p></div>
<div class="site-footer__column"><h2>Découvrir</h2><NuxtLink to="/eglise">L’Église</NuxtLink><NuxtLink to="/vie-de-leglise">Vie de l’Église</NuxtLink><NuxtLink to="/enseignements">Enseignements</NuxtLink><NuxtLink to="/actualites">Actualités</NuxtLink></div>
<div class="site-footer__column"><h2>Nous contacter</h2><a href="tel:+243963921063">+243 963 921 063</a><a href="mailto:egliselesmoissonneurs@gmail.com">egliselesmoissonneurs@gmail.com</a><p>N°162, avenue des Fresias, 11ème Rue, C. Limete Résidentiel, Kinshasa, RDC</p></div>
<div class="site-footer__column"><h2>À votre écoute</h2><NuxtLink to="/priere">Demande de prière</NuxtLink><NuxtLink to="/rendez-vous">Demander un rendez-vous</NuxtLink><a href="https://www.facebook.com/people/%C3%89glise-%C3%89vang%C3%A9lique-Les-MoissonneursEEM/61593163313292/" target="_blank" rel="noopener noreferrer">Facebook <UIcon name="i-lucide-external-link" /></a></div>
</div><div class="site-footer__bottom"><span>© {{new Date().getFullYear()}} Église Évangélique Les Moissonneurs. Tous droits réservés.</span><NuxtLink to="/contact">Nous trouver</NuxtLink></div></PageContainer></footer>
</template>
<style scoped>
.site-footer{padding-top:4rem;background:var(--eem-secondary);color:rgb(255 255 255 / 82%)}
.site-footer__main{display:grid;grid-template-columns:1.5fr 1fr 1.4fr 1fr;gap:2rem;padding-bottom:3rem}
.footer-brand{display:inline-flex;align-items:center;gap:.7rem;color:#fff;text-decoration:none}.footer-brand__mark{display:grid;width:2.6rem;height:2.6rem;place-items:center;border-radius:.8rem;background:rgb(255 255 255 / 12%);font-size:1.35rem}
.footer-brand span:last-child{display:grid;line-height:1.2}.footer-brand strong{font-family:var(--eem-font-heading);font-size:.95rem}.footer-brand small{margin-top:.25rem;color:rgb(255 255 255 / 65%);font-size:.65rem}
.site-footer__brand>p,.site-footer__column p{max-width:340px;color:rgb(255 255 255 / 68%);font-size:.85rem}
.site-footer__column{display:flex;flex-direction:column;align-items:flex-start;gap:.65rem}.site-footer__column h2{margin:0 0 .45rem;color:#fff;font-size:.95rem;letter-spacing:0}
.site-footer__column a{color:rgb(255 255 255 / 78%);font-size:.83rem;text-decoration:none;overflow-wrap:anywhere}.site-footer__column a:hover,.site-footer__bottom a:hover{color:#fff;text-decoration:underline}.site-footer__column p{margin:0}
.site-footer__bottom{display:flex;justify-content:space-between;gap:1rem;border-top:1px solid rgb(255 255 255 / 16%);padding-block:1.2rem;color:rgb(255 255 255 / 62%);font-size:.75rem}.site-footer__bottom a{color:#fff;text-decoration:none}
@media(max-width:900px){.site-footer__main{grid-template-columns:repeat(2,minmax(0,1fr))}}@media(max-width:560px){.site-footer__main{grid-template-columns:1fr;gap:1.7rem}.site-footer__bottom{flex-direction:column}}
</style>