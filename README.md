# Église Évangélique Les Moissonneurs — EEM

Site institutionnel construit avec Nuxt 4, Vue 3, TypeScript et Nuxt UI.

## Installation locale

- Node.js 20 ou supérieur
- npm

```bash
npm install
npm run dev
```

## Vérifications

```bash
npm run typecheck
npm run build
```

## Contenu statique

Les contenus sont typés et centralisés dans `app/data/` :
- `news.ts` : actualités
- `events.ts` : événements
- `sermons.ts` : enseignements

Les listes sont volontairement vides tant que les informations officielles ne sont pas validées. Ne pas publier d’horaires, de noms, de biographies ou de programmes non confirmés.

## UI

Palette EEM « Bleu océan », Manrope pour les titres, Inter pour les textes, Lucide pour les icônes. Les composants réutilisables sont dans `app/components/`.
