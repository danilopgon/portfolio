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
  it('renders the AboutMe section with a text description in p that containts desarrollador', () => {
    render(<AboutMe />)
    const description = screen.queryByText(/desarrollador/i)
    expect(description).toBeInTheDocument()
  })
  it('renders the social media icons with the correct aria-label', () => {
    render(<AboutMe />)
    const github = screen.queryByLabelText(/GitHub Link/i)
    const linkedin = screen.queryByLabelText(/LinkedIn Link/i)
    const instagram = screen.queryByLabelText(/Instagram Link/i)
    expect(github).toBeInTheDocument()
    expect(linkedin).toBeInTheDocument()
    expect(instagram).toBeInTheDocument()
  })
  it('renders the social media icons with links to my social media', () => {
    render(<AboutMe />)
    const github = screen.queryByLabelText(/GitHub Link/i)
    const linkedin = screen.queryByLabelText(/LinkedIn Link/i)
    const instagram = screen.queryByLabelText(/Instagram Link/i)
    expect(github).toHaveAttribute('href')
    expect(linkedin).toHaveAttribute('href')
    expect(instagram).toHaveAttribute('href')
  })
})
