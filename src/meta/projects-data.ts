import ProjectType from "@/types/project.type";

import griff from "../../public/thumb/griff.webp";
import infinidea from "../../public/thumb/infinidea.webp";
import veaglefr from "../../public/thumb/veagle.fr.webp";

// Pour ajouter des images, vous devez les ajouter dans le dossier public/thumb
// puis lancer le script "pnpm run convert-images" pour convertir les images en webp et les optimiser
// Ensuite, il suffit de l'importer ici et de l'ajouter dans le tableau ci-dessous
// La taille est réduite par 10, voire 20 donc c'est très optimisé

const projects: ProjectType[] = [
  {
    name: 'Griff',
    description: 'La troisième version du Griff, le lanceur de jeu de Veagle',
    image: griff,
    link: 'https://github.com/VeagleDev/Griff',
    updated: '2023-11-05'
  },
  {
    name: 'InfinIdea',
    description: 'InfinIdea est un site sur lequel chacun peut poster des articles sur ses projets, des actualités ou des tutoriels orientés programmation/codage en général.',
    image: infinidea,
    link: 'https://github.com/VeagleDev/InfinIdea',
    updated: '2023-11-05'
  },
  {
    name: 'Landing Page',
    description: 'Ancienne Landing Page du site Veagle',
    image: veaglefr,
    link: 'https://github.com/VeagleDev/veagle.fr',
    updated: '2023-11-05'
  }
];

export default projects;