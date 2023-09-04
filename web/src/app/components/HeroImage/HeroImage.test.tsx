import { render, screen } from '@testing-library/react'
import HeroImage from './HeroImage'

describe('HeroImage', () => {
  it('renders the image', () => {
    render(<HeroImage image="encabezado_danilopgon.webp" alt="danilopgon's photography" />)
    const imageElements = screen.queryAllByRole('img')
    expect(imageElements.length).toBe(1)
  })
  it('renders both image and imageMobile', () => {
    render(
      <HeroImage
        image="encabezado_danilopgon.webp"
        alt="danilopgon's photography"
        imageMobile="encabezado_danilopgon_movil.webp"
      />,
    )
    const imageElements = screen.queryAllByRole('img')
    expect(imageElements.length).toBe(2)
  })
})
