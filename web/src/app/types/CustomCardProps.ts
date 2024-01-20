import ProjectProperties from './ProjectProperties'

interface CustomCardProps {
  id: number
  colSpan: string
  title: string
  thumbnail: string
  alternativeText?: string | null
  description: string
  categories: Array<ProjectProperties>
  technologies: Array<ProjectProperties>
  url: string
  date: string
}

export default CustomCardProps
