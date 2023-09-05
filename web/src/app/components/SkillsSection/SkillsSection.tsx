import { Divider } from '@nextui-org/divider'

const SkillsSection = () => {
  return (
    <section role="section" className=" flex h-2/3 w-full flex-col text-default-800 ">
      <div className="flex w-full flex-col-reverse items-center justify-evenly p-6 md:h-64 md:flex-row md:p-12 lg:h-96  xl:p-20 ">
        <div className="mt-5 flex h-full w-full flex-col justify-start align-top md:w-4/12">
          <h2 className="animate-fade-down text-xl md:animate-fade-left md:px-3 lg:text-2xl xl:text-3xl 2xl:text-4xl">
            // Lo que hago
          </h2>
        </div>
        <Divider
          orientation="vertical"
          className="mx-4 hidden animate-flip-down animate-duration-[2000ms] animate-once animate-ease-in md:flex"
        />
        <div className="mt-5 flex h-full w-full flex-col md:w-8/12"></div>
      </div>
      <Divider className="my-4 animate-flip-down animate-duration-[2000ms] animate-once animate-ease-in" />
    </section>
  )
}

export default SkillsSection
