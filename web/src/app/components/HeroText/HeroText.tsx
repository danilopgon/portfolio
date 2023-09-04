import { Balancer } from 'react-wrap-balancer'

const HeroText = () => {
  return (
    <header className=" justify-left flex h-2/3 w-full p-6 text-default-800 md:justify-between md:p-12 xl:p-14 ">
      <div className="flex flex-col gap-4 ">
        <h1 className="text-left text-3xl  font-bold  md:text-5xl lg:text-7xl xl:text-8xl 2xl:text-9xl">
          <Balancer>Dani López González</Balancer>
        </h1>
        <h2 className=" text-left text-2xl font-semibold md:text-4xl lg:text-6xl xl:text-7xl 2xl:text-8xl">
          <Balancer>Full-Stack Developer</Balancer>
        </h2>
      </div>
      <div className="mt-24 hidden animate-fade-down place-content-end items-end justify-end animate-duration-1000 animate-once animate-ease-out md:flex xl:mt-36 2xl:mt-52 ">
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
          <h3 className=" flex-1  text-xl font-semibold xl:text-3xl">Haz scroll</h3>
        </div>
      </div>
    </header>
  )
}

export default HeroText
