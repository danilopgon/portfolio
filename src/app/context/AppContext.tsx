import { createContext, useContext, useEffect, useState } from 'react'
import ProjectCardProps from '../models/ProjectCardProps'
import { projects as projectsInfo } from '../constants/projects'

const AppContext = createContext({} as any)

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [projects, setProjects] = useState<ProjectCardProps[]>([])
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setProjects(projectsInfo)
    setIsLoaded(true)
  }, [])

  const store = { projects, isLoaded }
  const actions = {}

  return <AppContext.Provider value={{ store, actions }}>{children}</AppContext.Provider>
}

const useAppContext = () => useContext(AppContext)

export default useAppContext
