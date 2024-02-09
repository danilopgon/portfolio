import { Divider } from '@nextui-org/divider'

interface MarqueeProps {
  text: string
}

const Marquee = ({ text }: MarqueeProps): JSX.Element => {
  return (
    <section className="w-full">
      <div className=" relative flex w-full overflow-x-hidden bg-primary uppercase  text-primary-foreground">
        <div className="bold animate-marquee whitespace-nowrap bg-primary py-14">
          <span className="mx-4 text-4xl lg:text-6xl xl:text-7xl 2xl:text-8xl">{text}</span>
          <span className="mx-4 text-4xl lg:text-6xl xl:text-7xl 2xl:text-8xl">{text}</span>
          <span className="mx-4 text-4xl lg:text-6xl xl:text-7xl 2xl:text-8xl">{text}</span>
        </div>

        <div className="bold absolute top-0 animate-marquee2  whitespace-nowrap bg-primary py-14">
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
