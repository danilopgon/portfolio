import { Divider } from '@nextui-org/divider'

const SkillsSection = () => {
  return (
    <section role="section" className=" flex h-2/3 w-full flex-col text-default-800 ">
      <Divider className="my-4 animate-flip-down animate-duration-[2000ms] animate-once animate-ease-in" />
      <div className="flex w-full flex-col-reverse items-center justify-evenly p-6 md:h-64 md:flex-row md:p-12 lg:h-96  xl:p-20 ">
        <div className="mt-5 w-full md:w-4/12">
          <h2 className="text-center text-3xl font-bold md:text-left">¿Qué hago?</h2>
        </div>
        <Divider
          orientation="vertical"
          className="mx-4 hidden animate-flip-down animate-duration-[2000ms] animate-once animate-ease-in md:flex"
        />
        <div className="mt-5 flex h-full w-full flex-col  justify-evenly  md:w-8/12"></div>
      </div>
    </section>
  )
}

export default SkillsSection
