'use client'

import { Divider } from '@nextui-org/divider'
import { Link } from '@nextui-org/link'
import { Card } from '@nextui-org/card'
import { Balancer } from 'react-wrap-balancer'
import { ParallaxBanner, ParallaxBannerLayer } from 'react-scroll-parallax'

import ContactForm from './ContactForm'

const Contact = () => {
  return (
    <ParallaxBanner
      layers={[
        {
          image: '/fondo_contacto.webp',
          easing: 'easeInOutSine',
          speed: 10,
          translateY: [-10, 10],
          scale: [1.2, 1],
        },
      ]}
    >
      <section
        role="section"
        className="z-0 flex min-h-[80vh] w-full flex-col items-center justify-center px-4 py-10 text-default-800"
        id="contacto"
      >
        <Card className="z-30 w-full border-none bg-background/60 dark:bg-default-100/50 md:w-[80%] lg:w-2/3" isBlurred>
          <div className="flex w-full flex-col-reverse items-center justify-evenly p-4 md:p-6 lg:h-[32rem] lg:flex-row lg:p-12  xl:p-20 ">
            <div className="mt-5 w-full lg:w-8/12">
              <ContactForm />
            </div>
            <Divider
              orientation="vertical"
              className="mx-4 hidden animate-flip-down animate-duration-[2000ms] animate-once animate-ease-in lg:flex"
            />

            <div className="mx-4 mt-5 flex h-full w-full flex-col justify-start align-top lg:w-4/12">
              <h2 className="animate-fade-down px-2 text-xl lg:animate-fade-left lg:px-3 lg:text-2xl xl:text-3xl 2xl:text-4xl">
                // Contacto
              </h2>
              <div className="mt-5 flex flex-col gap-3 px-2 md:px-0 lg:my-6 lg:mt-auto ">
                <p className=" max-w-lg animate-fade-down animate-delay-100 animate-once animate-ease-linear lg:animate-fade-left lg:animate-delay-150">
                  <Balancer>Dani López González</Balancer>
                </p>
                <Link
                  href="tel:+34685014718"
                  isExternal={true}
                  showAnchorIcon
                  underline="hover"
                  color="foreground"
                  className="max-w-lg animate-fade-down transition-all animate-delay-100 animate-once animate-ease-linear  hover:text-primary  lg:animate-fade-left lg:animate-delay-150"
                >
                  <Balancer>(+34) 685 014 718</Balancer>
                </Link>
                <Link
                  href="mailto:contacto@danilopgon.com"
                  isExternal={true}
                  showAnchorIcon
                  underline="hover"
                  color="foreground"
                  className="max-w-lg animate-fade-down transition-all animate-delay-100 animate-once animate-ease-linear hover:text-primary lg:animate-fade-left lg:animate-delay-150"
                >
                  <Balancer>contacto@danilopgon.com</Balancer>
                </Link>
              </div>
            </div>
          </div>
        </Card>
      </section>
    </ParallaxBanner>
  )
}

export default Contact
