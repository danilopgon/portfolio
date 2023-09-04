import HeroText from './components/HeroText/'
import HeroImage from './components/HeroImage/HeroImage'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col content-center items-center justify-center bg-default-50 ">
      <HeroText />
      <HeroImage
        image="encabezado_danilopgon.webp"
        alt="danilopgon's photography"
        imageMobile="encabezado_danilopgon_movil.webp"
      />
      <HeroText />
    </main>
  )
}
