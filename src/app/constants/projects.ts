import ProjectCardProps from '../models/ProjectCardProps'

export const projects: ProjectCardProps[] = [
    {
        id: 1,
        title: 'Día de Gachas',
        thumbnail: '/dia-de-gachas.png',
        alternativeText: 'Landing de Día de Gachas',
        description: 'Si hace frío, viento o llueve... la respuesta está clara: ¡Hoy es día de gachas!',
        categories: ['Full-stack'],
        technologies: ['Angular', 'Nest', 'PrimeNG', 'GSAP'],
        url: 'https://www.diadegachas.com/',
        date: '2025',
    },
    {
        id: 2,
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
        id: 3,
        title: 'Dewedd',
        thumbnail: '/dewedd.png',
        alternativeText: 'Dewedd mockup',
        description: 'MVP para Dewedd. Un planificador de bodas con funcionalidades y herramientas innovadoras.',
        categories: ['Full-stack'],
        technologies: ['React', 'Flask', 'Tailwind CSS'],
        url: 'https://dewedd.com',
        date: '2023',
    },
]
