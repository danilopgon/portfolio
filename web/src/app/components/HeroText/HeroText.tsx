'use client'

import { useState } from 'react'
import { Balancer } from 'react-wrap-balancer'
import { Divider } from '@nextui-org/divider'

const HeroText = () => {
  const [text, setText] = useState('Dani López González')

  const handleHover = () => {
    setText('¡Hola! Soy danilopgon')
  }

  const handleMouseLeave = () => {
    setText('Dani López González')
  }

  return (
    <header className="w-full">
      <div className="justify-left my-5 flex h-2/3 w-full px-6 py-8 uppercase text-default-800 md:justify-between md:px-12 md:pt-14 xl:px-20 xl:pt-24">
        <div className="flex flex-col gap-4 ">
          <h1 className="hover:duration-50 transform  animate-fade-right text-left text-3xl font-bold transition duration-100 animate-normal animate-fill-both  animate-once animate-ease-in-out hover:-translate-y-1 hover:animate-fade-left hover:ease-in-out md:text-4xl lg:text-6xl 2xl:text-8xl">
            <Balancer onMouseEnter={handleHover} onMouseLeave={handleMouseLeave}>
              {text}
            </Balancer>
          </h1>
          <h2 className="animate-fade-right text-left text-2xl font-semibold animate-once animate-ease-out md:text-3xl lg:text-5xl  2xl:text-7xl">
            Full-Stack Developer
          </h2>
        </div>

        <div className=" mt-auto hidden animate-fade-down place-content-end items-end justify-end animate-duration-1000 animate-once animate-ease-out md:flex  ">
          <div className="flex transition hover:translate-y-2">
            <svg
              role="img"
              aria-label="Arrow indicating to scroll down"
              className=" w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M14.5895 16.0032L5.98291 7.39664L7.39712 5.98242L16.0037 14.589V7.00324H18.0037V18.0032H7.00373V16.0032H14.5895Z"></path>
            </svg>

            <div>
              <h3 className=" flex-1  text-xl font-semibold xl:text-2xl 2xl:text-3xl ">Haz scroll</h3>
            </div>
          </div>
          <Divider orientation="vertical" />
        </div>
      </div>
      <Divider className="my-4 animate-flip-down animate-duration-[2000ms] animate-once animate-ease-in" />
    </header>
  )
}

export default HeroText
