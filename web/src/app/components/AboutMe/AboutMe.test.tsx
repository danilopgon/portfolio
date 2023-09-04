import { render, screen } from '@testing-library/react'
import AboutMe from './AboutMe'

describe('AboutMe', () => {
  it('renders the AboutMe section', () => {
    render(<AboutMe />)
    const AboutMeElements = screen.queryByRole('section')
    expect(AboutMeElements).toBeInTheDocument()
  })
  it('renders the AboutMe section with a h2 Title', () => {
    render(<AboutMe />)
    const title = screen.queryByText(/Sobre mí/i)
    expect(title).toBeInTheDocument()
  })
  it('renders the AboutMe section with a text description in p that containts full-stack', () => {
    render(<AboutMe />)
    const description = screen.queryByText(/full stack/i)
    expect(description).toBeInTheDocument()
  })
})
