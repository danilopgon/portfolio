import { Card, CardHeader, CardBody, CardFooter } from '@nextui-org/card'
import { Button } from '@nextui-org/button'
import { Image } from '@nextui-org/image'
import { Link } from '@nextui-org/link'
import { Chip } from '@nextui-org/chip'
import { Balancer } from 'react-wrap-balancer'

import CustomCardProps from '../../types/CustomCardProps'

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
      className={`${colSpan} h-96 transition delay-100 ease-in-out hover:-translate-y-1 hover:shadow-lg hover:shadow-primary-700`}
      href={url}
      as={Link}
      isExternal
      isPressable
    >
      <CardHeader className="absolute top-1 z-10 flex-col !items-start">
        <div className="flex">
          {categories &&
            categories.map((category) => (
              <p key={category.id} className="text-tiny font-semibold uppercase text-white">
                {categories.length > 1 ? `${category.name} // ` : category.name}
              </p>
            ))}
        </div>

        <h4 className="text-large font-medium text-white">{title}</h4>
        <p className="text-tiny font-bold uppercase text-white">{date}</p>
      </CardHeader>

      <Image removeWrapper alt={alternativeText || ''} className="z-0 h-full w-full object-cover" src={thumbnail} />
      <CardFooter className="absolute bottom-0 z-10 border-t-1 border-default-200 bg-black/40">
        <div className="mx-3 flex  flex-grow items-center gap-2">
          <div className="flex flex-col text-left">
            <div className="mb-3 flex gap-2">
              {technologies &&
                technologies.map((technology) => (
                  <Chip key={technology.id} className="text-tiny" color="primary">
                    {technology.name}
                  </Chip>
                ))}
            </div>
            <p className="text-tiny text-white">
              <Balancer>{description}</Balancer>
            </p>
          </div>
        </div>
        {/* <Button className="flex px-6" color="primary" size="sm">
          Ver proyecto
        </Button> */}
      </CardFooter>
    </Card>
  )
}

export default CustomCard
