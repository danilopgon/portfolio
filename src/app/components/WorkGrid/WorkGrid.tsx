'use client'

import { Divider } from '@nextui-org/divider'
import { Skeleton } from '@nextui-org/skeleton'

import CustomCard from './CustomCard'
import styles from './WorkGrid.module.css'
import useAppContext from '../../context/AppContext'
import CustomCardProps from '@/app/models/ProjectCardProps'

const WorkGrid = () => {
  const { store } = useAppContext()
  const { projects, isLoaded } = store

  if (!isLoaded) {
    return (
      <section className="w-full" id="trabajo">
        <div className="mx-auto grid auto-rows-[384px] grid-cols-12 gap-4 px-4 py-10">
          {[...Array(3)].map((_, i) => (
            <Skeleton key={i} className={`h-96 ${i === 0 ? styles['big-card-span'] : styles['card-span']}`} />
          ))}
        </div>
      </section>
    )
  }

  return (
    <section className="w-full" id="trabajo">
      <div className="mx-auto grid auto-rows-[384px] grid-cols-12 gap-4 px-4 py-10">
        {projects.slice(0, 3).map((project: CustomCardProps, index: number) => {
          const colSpanClass = index === 0 ? styles['big-card-span'] : styles['card-span']

          return <CustomCard key={project.id} {...project} colSpan={colSpanClass} />
        })}
      </div>

      <Divider className="my-8 animate-flip-down animate-duration-[2000ms]" />
    </section>
  )
}

export default WorkGrid
