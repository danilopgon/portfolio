import { render, screen } from '@testing-library/react'
import HeroText from './HeroText'

describe('HeroText', () => {
  it('renders the text with h1 tag', () => {
    render(<HeroText />)
    const heroText = screen.getByText(/Dani López González/i)
    expect(heroText).toBeInTheDocument()
  })
  it('renders the text with h2 tag', () => {
    render(<HeroText />)
    const heroText = screen.getByText(/Full-Stack Developer/i)
    expect(heroText).toBeInTheDocument()
  })
  it('renders the text with h3 tag', () => {
    render(<HeroText />)
    const heroText = screen.getByText(/Haz scroll/i)
    expect(heroText).toBeInTheDocument()
  })
  it('renders the svg arrow', () => {
    render(<HeroText />)
    const svgElement = screen.getByRole('img')
    expect(svgElement).toBeInTheDocument()
  })
})
