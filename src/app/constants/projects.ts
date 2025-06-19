import ProjectCardProps from '../models/ProjectCardProps'

export const projects: ProjectCardProps[] = [
  {
    id: 1,
    title: 'Landing page Hotel Sur',
    thumbnail: '/hotel-sur.png',
    alternativeText: 'Hotel Sur mockup',
    description: 'Landing page para la banda de art-rock Hotel Sur. Diseño y desarrollo de la página.',
    categories: ['Front-end'],
    technologies: ['NextJS', 'Tailwind CSS', 'GSAP'],
    url: 'https://hotelsur.es',
    date: '2025',
  },
  {
    id: 2,
    title: 'Dewedd',
    thumbnail: '/dewedd.png',
    alternativeText: 'Dewedd mockup',
    description: 'MVP para Dewedd. Un planificador de bodas con funcionalidades y herramientas innovadoras.',
    categories: ['Full-stack'],
    technologies: ['React', 'Flask', 'Tailwind CSS'],
    url: 'https://dewedd.com',
    date: '2023',
  },
  {
    id: 3,
    title: 'Creador de riders técnicos',
    thumbnail: '/riders.png',
    alternativeText: 'Riders mockup',
    description: 'Creador de riders técnicos para artistas, promotores y técnicos de sonido.',
    categories: ['Full-stack'],
    technologies: ['React', 'Flask', 'Tailwind CSS', 'PostgreSQL'],
    url: 'https://rider-creation-app.onrender.com/',
    date: '2023',
  },
]
