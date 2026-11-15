export interface LeadershipArea {
  title: string
  description: string
  image: string
  imageAlt: string
  reference: string
}

/**
 * Domaines de service présentés comme repères éditoriaux.
 * Ils ne constituent pas un organigramme nominatif de l’EEM.
 */
export const leadershipAreas: LeadershipArea[] = [
  {
    title: 'Direction pastorale',
    description: 'Porter une vision spirituelle centrée sur Jésus-Christ, enseigner la Parole et accompagner la communauté avec écoute et discernement.',
    image: '/past nestor mingina.jpg',
    imageAlt: 'Révérend Pasteur Nestor Mingina',
    reference: 'Marc 10:42-45'
  },
  {
    title: 'Enseignement et formation',
    description: 'Encourager la découverte des Écritures, la compréhension du message biblique et une foi qui se traduit dans la vie quotidienne.',
    image: '/past 1.jpg',
    imageAlt: 'Portrait issu des photographies de l’EEM',
    reference: '2 Timothée 3:16-17'
  },
  {
    title: 'Accueil et communion',
    description: 'Favoriser un accueil bienveillant, les liens fraternels, l’intégration des visiteurs et l’attention portée à chacun.',
    image: '/past femme.jpg',
    imageAlt: 'Portrait d’une responsable de l’EEM',
    reference: 'Romains 12:10'
  },
  {
    title: 'Prière et accompagnement',
    description: 'Créer un espace d’écoute respectueux, soutenir les personnes dans la prière et orienter les demandes vers les interlocuteurs appropriés.',
    image: '/past 2.jpg',
    imageAlt: 'Portrait d’un membre de l’équipe de l’EEM',
    reference: 'Galates 6:2'
  },
  {
    title: 'Organisation et service',
    description: 'Contribuer à la préparation des rencontres, à la coordination des besoins pratiques et au bon déroulement de la vie communautaire.',
    image: '/past 3.jpg',
    imageAlt: 'Portrait d’un collaborateur de l’EEM',
    reference: '1 Pierre 4:10'
  }
]
