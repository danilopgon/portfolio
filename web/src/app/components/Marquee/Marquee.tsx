import { Divider } from '@nextui-org/divider'

interface MarqueeProps {
  text: string
}

const Marquee = ({ text }: MarqueeProps): JSX.Element => {
  return (
    <section>
      <div className="bold relative flex w-full overflow-x-hidden whitespace-nowrap bg-primary uppercase text-primary-foreground shadow-lg  shadow-primary-300">
        <div className="animate-marquee bg-primary py-14">
          <span className="mx-4 text-4xl lg:text-6xl xl:text-7xl 2xl:text-8xl">{text}</span>
          <span className="mx-4 text-4xl lg:text-6xl xl:text-7xl 2xl:text-8xl">{text}</span>
          <span className="mx-4 text-4xl lg:text-6xl xl:text-7xl 2xl:text-8xl">{text}</span>
          <span className="mx-4 text-4xl lg:text-6xl xl:text-7xl 2xl:text-8xl">{text}</span>
          <span className="mx-4 text-4xl lg:text-6xl xl:text-7xl 2xl:text-8xl">{text}</span>
        </div>

        <div className="animate-marquee2 absolute top-0 bg-primary py-14">
          <span className="mx-4 text-4xl lg:text-6xl xl:text-7xl 2xl:text-8xl">{text}</span>
          <span className="mx-4 text-4xl lg:text-6xl xl:text-7xl 2xl:text-8xl">{text}</span>
          <span className="mx-4 text-4xl lg:text-6xl xl:text-7xl 2xl:text-8xl">{text}</span>
          <span className="mx-4 text-4xl lg:text-6xl xl:text-7xl 2xl:text-8xl">{text}</span>
          <span className="mx-4 text-4xl lg:text-6xl xl:text-7xl 2xl:text-8xl">{text}</span>
        </div>
      </div>
      <Divider className="my-4 animate-flip-down animate-duration-[2000ms] animate-once animate-ease-in" />
    </section>
  )
}

export default Marquee
