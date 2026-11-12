import type { NewsItem } from '~/types/content'

/**
 * Articles d’édification préparés pour le lancement du site.
 * Ils proposent des réflexions bibliques et ne décrivent pas des événements datés.
 */
export const news: NewsItem[] = [
  {
    slug: 'la-moisson-est-grande',
    title: 'La moisson est grande : répondre à l’appel de l’Évangile',
    excerpt: 'Jésus nous rappelle que la mission est vaste et que chaque croyant peut prendre part, par la prière, le témoignage et le service, à l’annonce de la Bonne Nouvelle.',
    category: 'Mission',
    publishedAt: '2026-11-12',
    scripture: 'Matthieu 9:37-38',
    readingTime: '4 min de lecture',
    image: 'https://images.unsplash.com/photo-1507692049790-de58290a4334?auto=format&fit=crop&w=1400&q=85',
    imageAlt: 'Lumière entrant dans un lieu de culte',
    content: [
      'Lorsque Jésus parle d’une moisson abondante et du manque d’ouvriers, il attire notre attention sur les personnes qui ont besoin d’entendre la Bonne Nouvelle. Son regard est un regard de compassion : il voit les besoins et appelle ses disciples à prier.',
      'La mission chrétienne ne commence pas par la recherche de reconnaissance. Elle commence par une disponibilité devant Dieu. Prier pour les ouvriers, écouter son prochain, partager avec simplicité ce que l’Évangile a changé dans notre vie et servir avec amour sont autant de manières de répondre à cet appel.',
      'Chaque croyant peut être un témoin là où il vit : dans sa famille, son quartier, son travail ou ses relations. Le témoignage gagne en crédibilité lorsqu’il unit les paroles à une conduite empreinte de patience, d’humilité et de bonté.',
      'L’image de la moisson nous invite donc à ne pas rester spectateurs. Demandons à Dieu de renouveler notre compassion et de nous rendre disponibles pour annoncer Jésus-Christ avec fidélité.'
    ]
  },
  {
    slug: 'la-priere-au-quotidien',
    title: 'La prière : construire une relation vivante avec Dieu',
    excerpt: 'La prière n’est pas seulement une demande dans les moments difficiles. Elle est un rendez-vous régulier qui nourrit la confiance, l’écoute et la relation avec Dieu.',
    category: 'Vie spirituelle',
    publishedAt: '2026-11-12',
    scripture: 'Matthieu 6:6 ; Philippiens 4:6-7',
    readingTime: '4 min de lecture',
    image: 'https://images.unsplash.com/photo-1504052434569-70ad5836ab65?auto=format&fit=crop&w=1400&q=85',
    imageAlt: 'Bible ouverte dans une atmosphère paisible',
    content: [
      'La prière est une invitation à se tenir devant Dieu avec sincérité. Elle ne dépend pas de formules compliquées ni de paroles impressionnantes. Jésus encourage ses disciples à rechercher un lieu de simplicité et de vérité dans leur relation avec le Père.',
      'Prier, c’est parler à Dieu, mais aussi apprendre à lui faire confiance. Nous pouvons lui présenter nos joies, nos inquiétudes, nos décisions et nos besoins. La prière nous aide à déposer ce qui nous pèse et à orienter de nouveau notre cœur vers sa volonté.',
      'Une vie de prière se construit dans la régularité. Quelques instants consacrés chaque jour à la prière et à la lecture biblique peuvent devenir un repère précieux. Il est également possible de prier au fil de la journée, dans les situations ordinaires.',
      'La promesse biblique n’est pas que toutes nos circonstances changeront immédiatement, mais que Dieu nous invite à lui faire confiance et à recevoir sa paix. Faisons de la prière un chemin quotidien, personnel et communautaire.'
    ]
  },
  {
    slug: 'grandir-ensemble-dans-la-foi',
    title: 'Grandir ensemble dans la foi : la force de la communion',
    excerpt: 'La marche chrétienne est personnelle, mais elle n’est pas solitaire. L’encouragement, l’écoute et la communion fraternelle nous aident à persévérer.',
    category: 'Communauté',
    publishedAt: '2026-11-12',
    scripture: 'Hébreux 10:24-25 ; Actes 2:42',
    readingTime: '5 min de lecture',
    image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1400&q=85',
    imageAlt: 'Groupe de personnes réunies dans un moment de partage',
    content: [
      'La foi se nourrit de la relation avec Dieu et se fortifie aussi dans la communion avec les autres croyants. Les Écritures encouragent les disciples à se retrouver, à s’exhorter à l’amour et aux bonnes œuvres, et à demeurer attachés à l’enseignement reçu.',
      'Une communauté vivante est un lieu où l’on apprend à écouter, à accueillir et à porter attention aux autres. Chacun traverse des saisons différentes. Un mot d’encouragement, une présence fidèle ou une prière partagée peuvent aider une personne à reprendre courage.',
      'La communion ne signifie pas que tout le monde pense ou agit exactement de la même manière. Elle demande de la patience, du pardon et le désir de rechercher ce qui édifie. Elle nous apprend à regarder l’autre avec respect et à reconnaître les dons que Dieu lui a confiés.',
      'Grandir ensemble implique donc une participation de chacun. Nous pouvons encourager, servir, apprendre, partager et prendre soin les uns des autres, afin que notre communauté reflète davantage l’amour de Christ.'
    ]
  },
  {
    slug: 'servir-avec-amour',
    title: 'Servir avec amour : mettre ses dons au service des autres',
    excerpt: 'Le service chrétien ne se mesure pas à la visibilité d’une responsabilité, mais à la fidélité avec laquelle chacun met ses capacités au service du prochain.',
    category: 'Service',
    publishedAt: '2026-11-12',
    scripture: '1 Pierre 4:10 ; Marc 10:45',
    readingTime: '4 min de lecture',
    image: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=1400&q=85',
    imageAlt: 'Des personnes qui se retrouvent et s’entraident',
    content: [
      'Dans la perspective de l’Évangile, servir n’est pas chercher une place d’honneur. Jésus lui-même a présenté le service comme une expression de l’amour. Il nous invite à considérer les besoins des autres et à agir avec humilité.',
      'La Bible rappelle que chacun a reçu des capacités et des dons qu’il peut mettre au service du bien commun. Ces dons sont différents, mais aucun service accompli avec amour n’est insignifiant. Accueillir, écouter, enseigner, encourager, organiser ou aider concrètement sont autant de gestes qui peuvent édifier.',
      'Servir demande aussi de respecter ses limites et celles des autres. Un engagement sain se construit dans la transparence, la collaboration et la fidélité, sans pression ni recherche de reconnaissance personnelle.',
      'Demandons à Dieu de nous montrer comment être utiles autour de nous. Le service devient un témoignage lorsque l’amour de Christ se traduit en gestes concrets et désintéressés.'
    ]
  },
  {
    slug: 'vivre-lamour-de-christ',
    title: 'Vivre l’amour de Christ au quotidien',
    excerpt: 'L’amour fraternel est plus qu’un sentiment : il se manifeste dans nos paroles, nos choix, notre capacité à pardonner et notre attention envers notre prochain.',
    category: 'Vie chrétienne',
    publishedAt: '2026-11-12',
    scripture: 'Jean 13:34-35 ; 1 Corinthiens 13:4-7',
    readingTime: '5 min de lecture',
    image: 'https://images.unsplash.com/photo-1527529482837-4698179dc6ce?auto=format&fit=crop&w=1400&q=85',
    imageAlt: 'Des personnes réunies dans un moment de joie et de fraternité',
    content: [
      'Jésus donne à ses disciples un commandement qui place l’amour au centre de leurs relations. Cet amour prend pour modèle celui qu’il leur a manifesté. Il ne s’agit pas uniquement d’une émotion, mais d’une manière de traiter l’autre avec dignité et bienveillance.',
      'Aimer au quotidien commence souvent par des gestes simples : prendre le temps d’écouter, parler avec respect, tenir sa parole, reconnaître ses torts et chercher la réconciliation lorsque cela est possible. Ces gestes rendent visible une foi qui transforme la vie.',
      'L’amour chrétien ne ferme pas les yeux sur le mal et ne supprime pas la nécessité de poser des limites justes. Il refuse cependant la vengeance et nous appelle à rechercher la vérité avec douceur, patience et responsabilité.',
      'Nous pouvons demander au Seigneur de renouveler notre manière d’aimer, dans nos familles, dans l’Église et dans notre environnement. Que nos paroles et nos actes témoignent de l’amour que nous avons reçu en Jésus-Christ.'
    ]
  }
]