import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Veagle | Organisation de développement informatique',
    short_name: 'Veagle',
    description: 'Bienvenue sur la page d\'accueil de Veagle. Vous trouverez ici toutes les informations nécessaires pour nous contacter et découvrir nos projets informatiques, ainsi que nos services.',
    start_url: '/',
    display: 'standalone',
    background_color: '#4d4d4d',
    theme_color: '#575757',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  }
}