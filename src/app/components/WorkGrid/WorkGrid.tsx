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
        <div className="grid max-w-full animate-fade grid-cols-12 grid-rows-2 gap-2 px-8 py-10">
          <Skeleton className={`${styles['card-span']} h-96`}></Skeleton>
          <Skeleton className={`${styles['card-span']} h-96`}></Skeleton>
          <Skeleton className={`${styles['card-span']} h-96`}></Skeleton>
          <Skeleton className={`${styles['big-card-span']} h-96`}></Skeleton>
          <Skeleton className={`${styles['medium-card-span']} h-96`}></Skeleton>
        </div>
      </section>
    )
  }

  return (
    <section className="w-full" id="trabajo">
      <div className="grid max-w-full animate-fade grid-cols-12 grid-rows-2 gap-2 px-2 py-4 md:px-8 md:py-10">
        {projects.map((project: CustomCardProps, index: number) => {
          if (index > 4) return

          if (index === 0) {
            project.colSpan = `${styles['big-card-span']}`
           
          }

          if (index === 1) {
            project.colSpan = `${styles['medium-card-span']}`
          }

          if (index !== 0 && index !== 1) {
            project.colSpan = `${styles['card-span']}`
          }

          return <CustomCard key={project.id} {...project} />
        })}
      </div>

      <Divider className="my-4 animate-flip-down animate-duration-[2000ms] animate-once animate-ease-in" />
    </section>
  )
}

export default WorkGrid
