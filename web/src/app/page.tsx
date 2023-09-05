import HeroText from './components/HeroText/'
import HeroImage from './components/HeroImage/'
import AboutMe from './components/AboutMe/'
import SkillsSection from './components/SkillsSection'
import Marquee from './components/Marquee'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col content-center items-center justify-center bg-default-50 ">
      <HeroText />
      <HeroImage
        image="encabezado_danilopgon.webp"
        alt="danilopgon's photography"
        imageMobile="encabezado_danilopgon_movil.webp"
      />
      <AboutMe />
      <SkillsSection />
      <Marquee text="Proyectos" />
    </main>
  )
}
