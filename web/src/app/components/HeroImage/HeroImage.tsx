interface HeroImageProps {
  image: string
  alt?: string
}

const HeroImage = ({ image, alt }: HeroImageProps): JSX.Element => {
  return (
    <div className="">
      <img src={image} alt={alt} />
    </div>
  )
}

export default HeroImage
