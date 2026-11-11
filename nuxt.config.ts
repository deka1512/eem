export default defineNuxtConfig({
  compatibilityDate: '2026-11-11',
  devtools: { enabled: true },
  modules: ['@nuxt/ui'],
  css: ['~/assets/css/main.css'],
  components: [{ path: '~/components', pathPrefix: false }],
  typescript: { strict: true, typeCheck: true },
  app: {
    head: {
      htmlAttrs: { lang: 'fr' },
      title: 'Église Évangélique Les Moissonneurs',
      meta: [
        { name: 'description', content: "Une communauté chrétienne engagée à annoncer l’Évangile de Jésus-Christ et à sauver des âmes." },
        { name: 'theme-color', content: '#07546B' },
      ],
    },
  },
})