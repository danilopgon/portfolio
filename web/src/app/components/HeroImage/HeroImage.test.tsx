import { render, screen } from '@testing-library/react'
import HeroImage from './HeroImage'
import { ParallaxProvider } from 'react-scroll-parallax'

describe('HeroImage', () => {
  it('renders the image', () => {
    render(
      <ParallaxProvider>
        <HeroImage image="encabezado_danilopgon.webp" alt="danilopgon's photography" />
      </ParallaxProvider>,
    )
    const imageElements = screen.queryAllByRole('img')
    expect(imageElements.length).toBe(1)
  })
  it('renders both image and imageMobile', () => {
    render(
      <ParallaxProvider>
        <HeroImage
          image="encabezado_danilopgon.webp"
          alt="danilopgon's photography"
          imageMobile="encabezado_danilopgon_movil.webp"
        />
      </ParallaxProvider>,
    )
    const imageElements = screen.queryAllByRole('img')
    expect(imageElements.length).toBe(2)
  })
})
