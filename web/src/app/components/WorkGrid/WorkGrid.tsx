'use client'

import { useState, useEffect } from 'react'
import { Card, CardHeader, CardBody, CardFooter } from '@nextui-org/card'
import { Button } from '@nextui-org/button'
import { Image } from '@nextui-org/image'
import { Divider } from '@nextui-org/divider'
import { Skeleton } from '@nextui-org/skeleton'

import fetchProjects from '../../services/fetchProjects'
import Project from '../../types/Project'

const WorkGrid = () => {
  const [projects, setProjects] = useState<Project[]>([])
  const [isLoaded, setIsLoaded] = useState<boolean>(false)

  useEffect(() => {
    const getProjects = async () => {
      const projectsFromServer = await fetchProjects()
      console.log(projectsFromServer)

      if (projectsFromServer) {
        setProjects(projectsFromServer)
      }
    }

    getProjects()
  }, [])

  useEffect(() => {
    if (projects) {
      setIsLoaded(true)
    }
  }, [projects])

  if (!isLoaded) {
    return (
      <section className="w-full">
        <div className="grid max-w-full animate-fade grid-cols-12 grid-rows-2 gap-2 px-8 py-10">
          <Skeleton className="col-span-12 h-96  sm:col-span-4"></Skeleton>
          <Skeleton className="col-span-12 h-96  sm:col-span-4"></Skeleton>
          <Skeleton className="col-span-12 h-96  sm:col-span-4"></Skeleton>
          <Skeleton className="col-span-12 h-96  sm:col-span-5"></Skeleton>
          <Skeleton className="col-span-12 h-96  sm:col-span-7"></Skeleton>
        </div>
      </section>
    )
  }

  return (
    <section className="w-full">
      <div className="grid max-w-full animate-fade grid-cols-12 grid-rows-2 gap-2 px-8 py-10">
        <Card
          className="col-span-12 h-96  transition delay-100 ease-in-out hover:-translate-y-1 hover:shadow-lg hover:shadow-primary-700  sm:col-span-4"
          isPressable
        >
          <CardHeader className="absolute top-1 z-10 flex-col !items-start">
            <p className="text-tiny font-bold uppercase text-white/60">What to watch</p>
            <h4 className="text-large font-medium text-white">Stream the Acme event</h4>
          </CardHeader>

          <Image
            removeWrapper
            alt="Card background"
            className="z-0 h-full w-full object-cover"
            src="encabezado_danilopgon_movil.webp"
          />
        </Card>

        <Card
          className=" col-span-12 h-96 transition delay-100 ease-in-out hover:-translate-y-1 hover:shadow-lg hover:shadow-primary-700 sm:col-span-4"
          isPressable
        >
          <CardHeader className="absolute top-1 z-10 flex-col !items-start">
            <p className="text-tiny font-bold uppercase text-white/60">{projects[0]?.attributes?.description}</p>
            <h4 className="text-large font-medium text-white">Contribute to the planet</h4>
          </CardHeader>
          <Image
            removeWrapper
            alt="Card background"
            className="z-0 h-full w-full object-cover"
            src="encabezado_danilopgon_movil.webp"
          />
        </Card>
        <Card
          className="col-span-12 h-96 transition delay-100 ease-in-out hover:-translate-y-1 hover:shadow-lg hover:shadow-primary-700 sm:col-span-4"
          isPressable
        >
          <CardHeader className="absolute top-1 z-10 flex-col !items-start">
            <p className="text-tiny font-bold uppercase text-white/60">Supercharged</p>
            <h4 className="text-large font-medium text-white">Creates beauty like a beast</h4>
          </CardHeader>
          <Image
            removeWrapper
            alt="Card background"
            className="z-0 h-full w-full object-cover"
            src="encabezado_danilopgon_movil.webp"
          />
        </Card>
        <Card
          isFooterBlurred
          className="col-span-12  h-96 w-full transition delay-100 ease-in-out hover:-translate-y-1 hover:shadow-lg hover:shadow-primary-700 sm:col-span-5 "
          isPressable
        >
          <CardHeader className="absolute top-1 z-10 flex-col items-start">
            <p className="text-tiny font-bold uppercase text-white/60">New</p>
            <h4 className="text-2xl font-medium text-black">Acme camera</h4>
          </CardHeader>
          <Image
            removeWrapper
            alt="Card example background"
            className="z-0 h-full w-full -translate-y-6 scale-125 object-cover"
            src="encabezado_danilopgon_movil.webp"
          />
          <CardFooter className="absolute bottom-0 z-10 justify-between border-t-1 border-zinc-100/50 bg-white/30">
            <div>
              <p className="text-tiny text-black">Available soon.</p>
              <p className="text-tiny text-black">Get notified.</p>
            </div>
            <Button className="text-tiny" color="primary" radius="full" size="sm">
              Notify Me
            </Button>
          </CardFooter>
        </Card>
        <Card
          isFooterBlurred
          className="col-span-12 h-96 w-full transition delay-100 ease-in-out hover:-translate-y-1 hover:shadow-lg hover:shadow-primary-700 sm:col-span-7"
          isPressable
        >
          <CardHeader className="absolute top-1 z-10 flex-col items-start">
            <p className="text-tiny font-bold uppercase text-white/60">Your day your way</p>
            <h4 className="text-xl font-medium text-white/90">Your checklist for better sleep</h4>
          </CardHeader>
          <Image
            removeWrapper
            alt="Relaxing app background"
            className="z-0 h-full w-full object-cover"
            src="encabezado_danilopgon_movil.webp"
          />
          <CardFooter className="absolute bottom-0 z-10 border-t-1 border-default-600 bg-black/40 dark:border-default-100">
            <div className="flex flex-grow items-center gap-2">
              <Image
                alt="Breathing app icon"
                className="h-11 w-10 rounded-full bg-black"
                src="/images/breathing-app-icon.jpeg"
              />
              <div className="flex flex-col">
                <p className="text-tiny text-white/60">Breathing App</p>
                <p className="text-tiny text-white/60">Get a good night's sleep.</p>
              </div>
            </div>
            <Button radius="full" size="sm">
              Get App
            </Button>
          </CardFooter>
        </Card>
      </div>

      <Divider className="my-4 animate-flip-down animate-duration-[2000ms] animate-once animate-ease-in" />
    </section>
  )
}

export default WorkGrid
