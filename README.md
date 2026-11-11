# Église Évangélique Les Moissonneurs — EEM

Site institutionnel construit avec Nuxt 4, Vue 3, TypeScript et Nuxt UI.

## Installation locale

- Node.js 20.19 ou supérieur (ou Node.js 22.12+)
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

## Organisation du contenu

Les contenus sont statiques et centralisés dans `app/data/` :
- `church.ts` : identité et coordonnées officielles de l'EEM ;
- `pages.ts` : textes institutionnels des pages ;
- `news.ts` : actualités ;
- `events.ts` : événements ;
- `sermons.ts` : enseignements.

Les listes d'actualités, d'événements et de prédications restent vides tant que les publications ne sont pas validées. Ne pas inventer d'horaires, de responsables, de biographies, de programmes ou de témoignages.

## Ligne éditoriale

Le document `docs/ligne-editoriale.md` définit le positionnement pastoral, le ton, les piliers de contenu, les règles de validation et les précautions de confidentialité. Les textes institutionnels de `pages.ts` sont une base éditoriale à faire valider par les responsables de l'EEM.

## UI

Palette EEM « Bleu océan », Manrope pour les titres, Inter pour les textes, Lucide pour les icônes. Les composants réutilisables sont dans `app/components/`.

## Routes principales

- `/` : accueil
- `/eglise` : présentation et mission
- `/vie-de-leglise` : vie communautaire et événements
- `/enseignements` : prédications et ressources bibliques
- `/actualites` : annonces et nouvelles
- `/contact` : coordonnées et accès
- `/priere` : demande de prière
- `/rendez-vous` : demande d'échange ou d'accompagnement

Les demandes de prière et de rendez-vous sont actuellement orientées vers les canaux de contact officiels. Aucun formulaire ni stockage de données personnelles n'est activé à ce stade.
