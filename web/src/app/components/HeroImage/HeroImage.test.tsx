import { render, screen } from '@testing-library/react'
import HeroImage from './HeroImage'

describe('HeroImage', () => {
  it('renders the image', () => {
    render(<HeroImage image="" alt="" />)
    const imageElement = screen.getByRole('img')
    expect(imageElement).toBeInTheDocument()
  })
})
