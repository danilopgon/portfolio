import { Card, CardFooter } from '@nextui-org/card'
import { Image } from '@nextui-org/image'
import { Button } from '@nextui-org/button'
import Link from 'next/link'

import ThemeSwitcher from './components/ThemeSwitcher/ThemeSwitcher'

export default function Home() {
  return (
    <main className="flex h-screen flex-col items-center justify-center bg-background p-24 align-middle">
      <div className="w-full lg:w-2/3 ">
        <Card isFooterBlurred radius="lg" className="border-none">
          <Image
            alt="danilopgon"
            className="w-full object-cover"
            src="https://danilopgon.com/wp-content/uploads/2020/09/encabezado-retocado-definitivo-2-arreglado.jpg"
          />
          <CardFooter className="absolute bottom-1 z-10 ml-1 w-[calc(100%_-_8px)] justify-between overflow-hidden rounded-large border-1 border-white/20 py-1 shadow-small before:rounded-xl before:bg-white/10">
            <p className="text-tiny text-white/80">danilopgon's portfolio template</p>
            <Link href="https://github.com/danilopgon/portfolio-2023">
              <Button>Repository</Button>
            </Link>
          </CardFooter>
        </Card>
        <ThemeSwitcher />
      </div>
    </main>
  )
}
