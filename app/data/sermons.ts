import type { SermonItem } from '~/types/content'

/**
 * Trames de prédications préparées comme ressources bibliques.
 * Aucun prédicateur, date de culte ou lien vidéo n’est attribué sans validation.
 */
export const sermons: SermonItem[] = [
  {
    slug: 'la-moisson-est-grande',
    title: 'La moisson est grande : devenir des ouvriers disponibles',
    category: 'Mission et évangélisation',
    scripture: 'Matthieu 9:35-38',
    description: 'Jésus nous apprend à regarder les foules avec compassion, à prier pour les ouvriers et à nous rendre disponibles pour la mission.',
    thumbnail: 'https://images.unsplash.com/photo-1507692049790-de58290a4334?auto=format&fit=crop&w=1200&q=85',
    outline: [
      { title: 'Le regard de compassion de Jésus', description: 'Avant de parler de la moisson, Jésus voit les personnes, leur fatigue et leurs besoins. La mission commence par un regard rempli de compassion.' },
      { title: 'La nécessité de prier', description: 'Le Seigneur invite ses disciples à demander au maître de la moisson d’envoyer des ouvriers. La prière place la mission sous la direction de Dieu.' },
      { title: 'La disponibilité de chaque disciple', description: 'La prière nous conduit aussi à nous rendre disponibles. Chacun peut témoigner de Christ avec fidélité dans son environnement.' }
    ],
    application: 'Identifier une personne pour laquelle prier cette semaine et chercher une occasion naturelle de lui témoigner de l’amour de Christ.',
    prayer: 'Seigneur, renouvelle notre compassion et rends-nous disponibles pour annoncer ton Évangile avec humilité, courage et amour.'
  },
  {
    slug: 'la-priere-qui-transforme',
    title: 'La prière qui transforme notre manière de vivre',
    category: 'Vie de prière',
    scripture: 'Matthieu 6:5-13 ; Philippiens 4:6-7',
    description: 'Découvrir la prière comme une relation sincère avec Dieu, une école de confiance et une source de paix au milieu des circonstances.',
    thumbnail: 'https://images.unsplash.com/photo-1504052434569-70ad5836ab65?auto=format&fit=crop&w=1200&q=85',
    outline: [
      { title: 'Prier avec sincérité', description: 'Jésus enseigne une relation vraie avec le Père, loin de la recherche d’approbation humaine.' },
      { title: 'Présenter nos besoins à Dieu', description: 'La prière nous apprend à confier nos préoccupations à Dieu avec reconnaissance et confiance.' },
      { title: 'Recevoir la paix et apprendre à dépendre de Dieu', description: 'La paix promise ne dépend pas d’une vie sans difficulté, mais d’une confiance renouvelée en Dieu.' }
    ],
    application: 'Réserver chaque jour un moment simple pour prier et lire un passage biblique, puis noter un sujet de reconnaissance.',
    prayer: 'Père, apprends-nous à venir à toi avec confiance et à recevoir ta paix dans toutes les saisons de notre vie.'
  },
  {
    slug: 'une-foi-qui-persevere',
    title: 'Une foi qui persévère au milieu des épreuves',
    category: 'Foi et persévérance',
    scripture: 'Jacques 1:2-8 ; Hébreux 12:1-3',
    description: 'Comprendre comment l’épreuve peut éprouver notre confiance et nous appeler à rechercher la sagesse et la fidélité de Dieu.',
    thumbnail: 'https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?auto=format&fit=crop&w=1200&q=85',
    outline: [
      { title: 'Reconnaître la réalité des épreuves', description: 'La foi biblique ne nie pas la souffrance. Elle nous apprend à traverser les difficultés sans perdre de vue Dieu.' },
      { title: 'Laisser la persévérance accomplir son œuvre', description: 'Jacques invite à considérer le fruit que la persévérance peut produire dans le caractère du croyant.' },
      { title: 'Fixer les yeux sur Jésus', description: 'Jésus demeure notre repère : il a persévéré et nous invite à poursuivre notre marche avec confiance.' }
    ],
    application: 'Face à une difficulté, chercher un conseil sage, demander la prière et choisir un pas concret de fidélité plutôt que l’isolement.',
    prayer: 'Seigneur, soutiens ceux qui traversent l’épreuve et fortifie notre foi afin que nous persévérions avec espérance.'
  },
  {
    slug: 'grandir-dans-la-grace',
    title: 'Grandir dans la grâce et la connaissance de Christ',
    category: 'Croissance spirituelle',
    scripture: '2 Pierre 3:17-18 ; Colossiens 2:6-7',
    description: 'La croissance chrétienne est un chemin continu : s’enraciner en Christ, approfondir les Écritures et laisser la foi porter du fruit.',
    thumbnail: 'https://images.unsplash.com/photo-1490730141103-6cac27aaab94?auto=format&fit=crop&w=1200&q=85',
    outline: [
      { title: 'S’enraciner en Jésus-Christ', description: 'La maturité spirituelle commence par une relation vivante avec Christ et une confiance qui s’approfondit.' },
      { title: 'Se nourrir de la Parole', description: 'La lecture et la méditation des Écritures aident à discerner, à apprendre et à renouveler notre intelligence.' },
      { title: 'Porter des fruits visibles', description: 'La croissance se manifeste dans une vie transformée : amour, patience, fidélité et service.' }
    ],
    application: 'Choisir un passage biblique à méditer durant la semaine et mettre en pratique une vérité comprise dans ce texte.',
    prayer: 'Seigneur Jésus, fais-nous grandir dans ta grâce et aide-nous à vivre chaque jour selon ta Parole.'
  },
  {
    slug: 'lamour-signe-du-disciple',
    title: 'L’amour, le signe visible du disciple de Jésus',
    category: 'Vie chrétienne',
    scripture: 'Jean 13:34-35 ; 1 Corinthiens 13:1-7',
    description: 'L’amour que Jésus commande se traduit par des attitudes concrètes : patience, vérité, pardon, respect et attention au prochain.',
    thumbnail: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1200&q=85',
    outline: [
      { title: 'Recevoir l’amour de Christ', description: 'Jésus est la source et le modèle de l’amour auquel il appelle ses disciples.' },
      { title: 'Pratiquer un amour concret', description: 'La patience, la bonté, le respect et le pardon rendent l’amour visible dans les relations quotidiennes.' },
      { title: 'Témoigner par nos relations', description: 'L’amour fraternel devient un signe par lequel les autres peuvent reconnaître les disciples de Jésus.' }
    ],
    application: 'Poser cette semaine un acte précis de réconciliation, d’écoute ou de service envers une personne de notre entourage.',
    prayer: 'Seigneur, apprends-nous à aimer comme tu nous as aimés et à refléter ton caractère dans nos relations.'
  }
]