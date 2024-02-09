import { createContext, useContext, useEffect, useState } from 'react'

import fetchProjects from '../services/fetchProjects'
import Project from '../types/Project'
import CustomCardProps from '../types/CustomCardProps'
import styles from '../components/WorkGrid/WorkGrid.module.css'

const AppContext = createContext({} as any)

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [projects, setProjects] = useState<Project[]>([])
  const [adaptedProjects, setAdaptedProjects] = useState<CustomCardProps[]>([])
  const [isLoaded, setIsLoaded] = useState<boolean>(false)

  const adaptProjects = (projects: Project[]): CustomCardProps[] => {
    return projects.map((project) => {
      const id = project.id
      const {
        title,
        description,
        URL: url,
        finish_date: date,
        categories,
        technologies,
        thumbnail,
      } = project.attributes

      const { alternativeText, url: thumbnailUrl } = thumbnail.data.attributes
      const cardImageURL = `${process.env.NEXT_PUBLIC_STRAPI_URL}${thumbnailUrl}`
      const categoriesList = categories.data.map((category) => {
        return { name: category.attributes.Name, id: category.id }
      })
      const technologiesList = technologies.data.map((technology) => {
        return { name: technology.attributes.Name, id: technology.id }
      })
      const yearDate = new Date(date).getFullYear().toString()

      return {
        id,
        colSpan: `${styles['card-span']}`,
        title,
        thumbnail: cardImageURL,
        alternativeText,
        description,
        categories: categoriesList,
        technologies: technologiesList,
        url,
        date: yearDate,
      }
    })
  }

  useEffect(() => {
    const getProjects = async () => {
      const projectsFromServer = await fetchProjects()
      

      if (projectsFromServer) {
        setProjects(projectsFromServer)
      }
    }

    getProjects()
  }, [])

  useEffect(() => {
    if (projects.length > 0) {
      const adaptedProjects = adaptProjects(projects)
      setAdaptedProjects(adaptedProjects)
    }
  }, [projects])

  useEffect(() => {
    if (adaptedProjects) {
      setIsLoaded(true)
    }

  
  }, [adaptedProjects])

  const store = { projects, adaptedProjects, isLoaded }
  const actions = {}

  return <AppContext.Provider value={{ store, actions }}>{children}</AppContext.Provider>
}

const useAppContext = () => useContext(AppContext)

export default useAppContext
