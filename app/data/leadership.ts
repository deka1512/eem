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
    image: 'https://images.unsplash.com/photo-1507692049790-de58290a4334?auto=format&fit=crop&w=1000&q=85',
    imageAlt: 'Espace de rassemblement dans une église',
    reference: 'Marc 10:42-45'
  },
  {
    title: 'Enseignement et formation',
    description: 'Encourager la découverte des Écritures, la compréhension du message biblique et une foi qui se traduit dans la vie quotidienne.',
    image: 'https://images.unsplash.com/photo-1504052434569-70ad5836ab65?auto=format&fit=crop&w=1000&q=85',
    imageAlt: 'Bible ouverte dans un moment de lecture',
    reference: '2 Timothée 3:16-17'
  },
  {
    title: 'Accueil et communion',
    description: 'Favoriser un accueil bienveillant, les liens fraternels, l’intégration des visiteurs et l’attention portée à chacun.',
    image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1000&q=85',
    imageAlt: 'Groupe de personnes réunies et souriantes',
    reference: 'Romains 12:10'
  },
  {
    title: 'Prière et accompagnement',
    description: 'Créer un espace d’écoute respectueux, soutenir les personnes dans la prière et orienter les demandes vers les interlocuteurs appropriés.',
    image: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=1000&q=85',
    imageAlt: 'Personnes partageant un moment de communion',
    reference: 'Galates 6:2'
  },
  {
    title: 'Organisation et service',
    description: 'Contribuer à la préparation des rencontres, à la coordination des besoins pratiques et au bon déroulement de la vie communautaire.',
    image: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1000&q=85',
    imageAlt: 'Collaborateurs échangeant autour d’un projet',
    reference: '1 Pierre 4:10'
  }
]
