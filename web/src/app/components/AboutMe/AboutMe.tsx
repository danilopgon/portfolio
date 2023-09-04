import { Divider } from '@nextui-org/divider'
import { Balancer } from 'react-wrap-balancer'

const AboutMe = () => {
  return (
    <section role="section" className=" flex h-2/3 w-full flex-col text-default-800 ">
      <Divider className="my-4 animate-flip-down animate-duration-[2000ms] animate-once animate-ease-in" />
      <div className="flex w-full flex-col-reverse items-center justify-evenly p-6 md:h-64 md:flex-row md:p-12 lg:h-96 xl:my-10 xl:p-20 ">
        <div className="mt-5 w-full md:w-2/3">
          <p className="animate-fade-up text-2xl md:animate-fade-right lg:text-3xl xl:text-4xl 2xl:text-5xl">
            <Balancer>
              Como Desarrollador Full Stack con antecedentes en comunicación y creación de contenido digital, mi enfoque
              se centra en la construcción de experiencias que logran la combinación perfecta entre diseño atractivo y
              funcionalidad robusta.
            </Balancer>
          </p>
        </div>
        <Divider
          orientation="vertical"
          className="mx-4 hidden animate-flip-down animate-duration-[2000ms] animate-once animate-ease-in md:flex"
        />
        <div className="mt-5 flex w-full content-between md:w-1/3">
          <h2 className="animate-fade-down text-xl md:animate-fade-left md:px-3 lg:text-2xl xl:text-3xl 2xl:text-4xl">
            // Sobre mí
          </h2>
        </div>
      </div>
      <Divider className="my-4 animate-flip-down animate-duration-[2000ms] animate-once animate-ease-in" />
    </section>
  )
}

export default AboutMe
