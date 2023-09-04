interface HeroImageProps {
  image: string
  alt?: string
  imageMobile?: string
}

const HeroImage = ({ image, alt, imageMobile }: HeroImageProps): JSX.Element => {
  return (
    <div className="flex h-[70vh] lg:h-[80vh]">
      <img src={image} alt={alt} className="hidden object-cover object-top md:flex" />
      {imageMobile ? <img src={imageMobile} alt={alt} className="flex object-cover object-center md:hidden" /> : ''}
    </div>
  )
}

export default HeroImage
