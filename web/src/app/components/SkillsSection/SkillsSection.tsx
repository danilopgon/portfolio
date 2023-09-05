import { Divider } from '@nextui-org/divider'
import { Balancer } from 'react-wrap-balancer'

const SkillsSection = () => {
  return (
    <section role="section" className="flex h-2/3 w-full flex-col text-default-800 ">
      <div className="flex w-full flex-col items-center justify-evenly p-6 lg:h-[32rem] lg:flex-row lg:p-12   xl:p-20 ">
        <div className="mt-5 flex h-full w-full flex-col justify-start align-top lg:w-4/12">
          <h2 className="animate-fade-down text-xl lg:animate-fade-left lg:px-3 lg:text-2xl xl:text-3xl 2xl:text-4xl">
            // Lo que hago
          </h2>
        </div>
        <Divider
          orientation="vertical"
          className="mx-4 hidden animate-flip-down animate-duration-[2000ms] animate-once animate-ease-in lg:flex"
        />

        <div className="lg:grid-cols- mt-5 flex h-full w-full flex-col gap-4 lg:grid lg:w-8/12 lg:grid-rows-3 lg:place-items-center lg:p-3">
          <div className="lg:col-span-2 lg:row-span-1">
            <h5 className="my-5 animate-fade-up text-lg md:animate-fade-right lg:text-xl xl:text-2xl 2xl:text-3xl">
              <Balancer ratio={0.8}>Front-end</Balancer>
            </h5>
            <p>
              <Balancer>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet, cumque nemo quaerat beatae esse vitae
                fuga minima debitis facere consequatur voluptatum laborum.
              </Balancer>
            </p>
          </div>
          <Divider
            orientation="vertical"
            className="col-span-1 row-span-1 mx-4 hidden animate-flip-down  animate-duration-[2000ms] animate-once animate-ease-in lg:flex"
          />
          <Divider className="my-4 lg:hidden" />
          <div className="lg:col-span-2 lg:row-span-1">
            <h5 className="my-5 animate-fade-up text-lg md:animate-fade-right lg:text-xl xl:text-2xl 2xl:text-3xl">
              <Balancer ratio={0.8}>Back-end</Balancer>
            </h5>
            <p>
              <Balancer>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet, cumque nemo quaerat beatae esse vitae
                fuga minima debitis facere consequatur voluptatum laborum.
              </Balancer>
            </p>
          </div>
          <Divider className="col-span-5 row-span-1 my-4 animate-flip-down  animate-duration-[2000ms] animate-once animate-ease-in" />
          <div className="lg:col-span-2 lg:row-span-1">
            <h5 className="my-5 animate-fade-up text-lg md:animate-fade-right lg:text-xl xl:text-2xl 2xl:text-3xl">
              <Balancer ratio={0.8}>UX/UI</Balancer>
            </h5>
            <p>
              <Balancer>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet, cumque nemo quaerat beatae esse vitae
                fuga minima debitis facere consequatur voluptatum laborum.
              </Balancer>
            </p>
          </div>
          <Divider
            orientation="vertical"
            className="col-span-1 row-span-1 mx-4 hidden animate-flip-down  animate-duration-[2000ms] animate-once animate-ease-in lg:flex"
          />
          <Divider className="my-4 lg:hidden" />
          <div className="lg:col-span-2 lg:row-span-1 lg:justify-self-start">
            <h5 className="my-5 animate-fade-up text-lg md:animate-fade-right lg:text-xl xl:text-2xl 2xl:text-3xl">
              <Balancer ratio={0.8}>Contenido digital</Balancer>
            </h5>
            <p>
              <Balancer>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet, cumque nemo quaerat beatae esse vitae
                fuga minima debitis facere consequatur voluptatum laborum.
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
