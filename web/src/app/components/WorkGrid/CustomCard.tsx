import { Card, CardHeader, CardBody, CardFooter } from '@nextui-org/card'
import { Button } from '@nextui-org/button'
import { Image } from '@nextui-org/image'
import { Link } from '@nextui-org/link'
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
      isPressable
    >
      <CardHeader className="absolute top-1 z-10 flex-col !items-start">
        <p className="text-tiny font-bold uppercase text-white/60">{categories}</p>
        <h4 className="text-large font-medium text-white">{title}</h4>
        <p className="text-tiny font-bold uppercase text-white/60">{date}</p>
      </CardHeader>

      <Image removeWrapper alt={alternativeText || ''} className="z-0 h-full w-full object-cover" src={thumbnail} />
      <CardFooter className="absolute bottom-0 z-10 border-t-1 border-default-600 bg-black/40 dark:border-default-100">
        <div className="mx-3 flex flex-grow items-center gap-2">
          <div className="flex flex-col text-left">
            <p className="text-tiny text-white/60">
              <Balancer>{description}</Balancer>
            </p>
            <p className="text-tiny text-white/60"> Hecho con: {technologies}</p>
          </div>
        </div>
        <Button className="flex px-6" radius="full" size="sm" href={url} as={Link} isExternal>
          Ver proyecto
        </Button>
      </CardFooter>
    </Card>
  )
}

export default CustomCard
