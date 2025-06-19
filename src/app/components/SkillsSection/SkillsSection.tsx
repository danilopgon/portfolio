import { Divider } from '@nextui-org/divider'
import { Balancer } from 'react-wrap-balancer'

const SkillsSection = () => {
  return (
    <section role="section" className="flex h-2/3 w-full flex-col text-default-800 ">
      <div className="flex w-full flex-col items-center justify-evenly p-6 lg:h-[32rem] lg:flex-row lg:p-12   xl:p-20 ">
        <div className="mt-5 flex h-full w-full flex-col justify-start align-top lg:w-4/12">
          <h2 className="animate-fade-down text-xl lg:animate-fade-right lg:px-3 lg:text-2xl xl:text-3xl 2xl:text-4xl">
            // Lo que hago
          </h2>
        </div>
        <Divider
          orientation="vertical"
          className="mx-4 hidden animate-flip-down animate-duration-[2000ms] animate-once animate-ease-in lg:flex"
        />
        <div className="lg:grid-cols- mt-5 flex h-full w-full flex-col gap-4 lg:grid lg:w-8/12 lg:grid-rows-3 lg:place-items-center lg:p-3">
          <div className="lg:col-span-2 lg:row-span-1">
            <h5 className="my-3 animate-fade-up text-lg lg:animate-fade-left lg:text-xl xl:text-2xl 2xl:text-3xl">
              <Balancer ratio={0.8}>Front-end</Balancer>
            </h5>
            <p className="max-w-lg animate-fade-up animate-delay-100 animate-once animate-ease-linear lg:animate-fade-left lg:animate-delay-150">
              <Balancer>
                Desarrollo interfaces accesibles, reactivas y con intención. Trabajo con Angular y React para crear
                experiencias modernas, coherentes y bien estructuradas.
              </Balancer>
            </p>
          </div>
          <Divider
            orientation="vertical"
            className="col-span-1 row-span-1 mx-4 hidden animate-flip-down animate-duration-[2000ms] animate-once animate-ease-in lg:flex"
          />
          <Divider className="my-4 lg:hidden" />
          <div className="lg:col-span-2 lg:row-span-1 lg:justify-self-start">
            <h5 className="my-3 animate-fade-up text-lg lg:animate-fade-left lg:text-xl xl:text-2xl 2xl:text-3xl">
              <Balancer ratio={0.8}>Back-end</Balancer>
            </h5>
            <p className="max-w-lg animate-fade-up animate-delay-100 animate-once animate-ease-linear lg:animate-fade-left lg:animate-delay-150 ">
              <Balancer>
                Construyo APIs robustas y mantenibles con tecnologías como NestJS, .NET o Python. Me ocupo tanto de la
                lógica como del acceso a datos y el despliegue.
              </Balancer>
            </p>
          </div>
          <Divider className="col-span-5 row-span-1 my-4 animate-flip-down  animate-duration-[2000ms] animate-once animate-ease-in" />
          <div className="lg:col-span-2 lg:row-span-1">
            <h5 className="my-3 animate-fade-up text-lg lg:animate-fade-left lg:text-xl xl:text-2xl 2xl:text-3xl">
              <Balancer ratio={0.8}>UX/UI</Balancer>
            </h5>
            <p className="max-w-lg animate-fade-up animate-delay-100 animate-once animate-ease-linear lg:animate-fade-left lg:animate-delay-150 ">
              <Balancer>
                Diseño experiencias centradas en el usuario desde el prototipado en Figma hasta la implementación.
                Aplico principios de accesibilidad y diseño emocional.
              </Balancer>
            </p>
          </div>
          <Divider
            orientation="vertical"
            className="col-span-1 row-span-1 mx-4 hidden animate-flip-down  animate-duration-[2000ms] animate-once animate-ease-in lg:flex"
          />
          <Divider className="my-4 lg:hidden" />
          <div className="lg:col-span-2 lg:row-span-1 lg:justify-self-start">
            <h5 className="my-3 animate-fade-up text-lg lg:animate-fade-left lg:text-xl xl:text-2xl 2xl:text-3xl">
              <Balancer ratio={0.8}>Creatividad digital</Balancer>
            </h5>
            <p className="max-w-lg animate-fade-up animate-delay-100 animate-once animate-ease-linear lg:animate-fade-left lg:animate-delay-150 ">
              <Balancer>
                Aporto una mirada creativa y narrativa. Diseño elementos visuales, produzco piezas multimedia y los
                integro en proyectos que requieren coherencia estética.
              </Balancer>
            </p>
          </div>
        </div>
      </div>
      <Divider className="my-4 animate-flip-down animate-duration-[2000ms] animate-once animate-ease-in" />
    </section>
  )
}

export default SkillsSection
