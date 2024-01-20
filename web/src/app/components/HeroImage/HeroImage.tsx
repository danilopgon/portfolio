'use client'

import { ParallaxBanner, ParallaxBannerLayer } from 'react-scroll-parallax'

interface HeroImageProps {
  image: string
  alt?: string
  imageMobile?: string
}

const HeroImage = ({ image, alt, imageMobile }: HeroImageProps): JSX.Element => {
  return (
    <ParallaxBanner className="flex min-h-[70vh] w-full md:h-screen xl:h-[90vh]">
      <ParallaxBannerLayer speed={0.5} scale={[1.3, 1]} className="object-top">
        <img src={image} alt={alt} className="hidden  animate-fade xl:flex" />
      </ParallaxBannerLayer>

      {imageMobile ? (
        <img src={imageMobile} alt={alt} className="flex animate-fade object-cover object-center xl:hidden" />
      ) : (
        ''
      )}
    </ParallaxBanner>
  )
}

export default HeroImage
