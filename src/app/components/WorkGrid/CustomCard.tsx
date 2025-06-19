import { Card, CardHeader, CardBody, CardFooter } from '@nextui-org/card'
import { Image } from '@nextui-org/image'
import { Link } from '@nextui-org/link'
import { Chip } from '@nextui-org/chip'
import { Balancer } from 'react-wrap-balancer'

import CustomCardProps from '../../models/ProjectCardProps'

const CustomCard = ({
  colSpan,
  title,
  thumbnail,
  alternativeText,
  description,
  categories,
  technologies,
  url,
  date,
}: CustomCardProps): JSX.Element => {
  return (
    <Card
      className={`${colSpan} relative h-full overflow-hidden transition delay-100 ease-in-out hover:-translate-y-1 hover:shadow-lg hover:shadow-primary-700`}
      href={url}
      as={Link}
      isExternal
      isPressable
    >
      <Image
        removeWrapper
        alt={alternativeText || ''}
        className="absolute inset-0 z-0 h-full w-full object-cover"
        src={thumbnail}
      />

      <div className="absolute inset-0 z-10 bg-black/30" />

      <CardHeader className="absolute top-1 z-20 flex-col !items-start text-white">
        <div className="flex">
          {categories?.map((category, index) => (
            <p key={`${category}-${index}`} className="text-tiny font-semibold uppercase">
              {categories.length > 1 ? `${category} // ` : category}
            </p>
          ))}
        </div>
        <h4 className="text-large font-medium">{title}</h4>
        <p className="text-tiny font-bold uppercase">{date}</p>
      </CardHeader>

      {/* Footer encima del overlay */}
      <CardFooter className="absolute bottom-0 z-20 border-t-1 border-default-200 bg-black/50 text-white">
        <div className="mx-3 flex flex-grow items-center gap-2">
          <div className="flex flex-col text-left">
            <div className="mb-3 flex flex-wrap gap-2">
              {technologies?.map((tech, index) => (
                <Chip key={`${tech}-${index}`} className="text-tiny" color="primary">
                  {tech}
                </Chip>
              ))}
            </div>
            <p className="text-tiny">
              <Balancer>{description}</Balancer>
            </p>
          </div>
        </div>
      </CardFooter>
    </Card>
  )
}

export default CustomCard
