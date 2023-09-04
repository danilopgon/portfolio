'use client'

import { ParallaxBanner, ParallaxBannerLayer } from 'react-scroll-parallax'

interface HeroImageProps {
  image: string
  alt?: string
  imageMobile?: string
}

const HeroImage = ({ image, alt, imageMobile }: HeroImageProps): JSX.Element => {
  return (
    <ParallaxBanner className="flex h-[70vh]  lg:h-[80vh]">
      <ParallaxBannerLayer speed={1} scale={[0.9, 1.3]} className="object-top">
        <img src={image} alt={alt} className="hidden  animate-fade md:flex" />
      </ParallaxBannerLayer>

      {imageMobile ? (
        <img src={imageMobile} alt={alt} className="flex animate-fade object-cover object-center md:hidden" />
      ) : (
        ''
      )}
    </ParallaxBanner>
  )
}

export default HeroImage
