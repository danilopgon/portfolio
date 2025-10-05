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
        title: 'Holy Seitan',
        thumbnail: '/holy-seitan.webp',
        alternativeText: 'Holy Seitan mockup',
        description: 'Holy Seitan, nuestro recetario vegano en markdown: simple, bonito y totalmente funcional.',
        categories: ['Full-stack'],
        technologies: ['Next.js ', 'Supabase', 'Drizzle ORM', 'Zustand', 'Shadcn/UI'],
        url: 'https://holy-seitan.danilopgon.com/',
        date: '2025',
    },
]
