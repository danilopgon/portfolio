import { Card, CardFooter } from '@nextui-org/card'
import { Image } from '@nextui-org/image'
import { Button } from '@nextui-org/button'
import Link from 'next/link'

import HeroText from './components/HeroText/'

export default function Home() {
  return (
    <main className="flex h-screen flex-col content-center items-center justify-center bg-default-50 ">
      <HeroText />
    </main>
  )
}
