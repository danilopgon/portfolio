import { render, screen } from '@testing-library/react'
import NavBar from './NavBar'

describe('NavBar', () => {
  it('renders the navbar brand', () => {
    render(<NavBar shouldHideOnScroll={true} />)
    const brandElement = screen.getByRole('img')
    expect(brandElement).toBeInTheDocument()
  })

  it('renders the navigation links', () => {
    render(<NavBar shouldHideOnScroll={true} />)
    const homeLink = screen.getByText('Inicio')
    const workLink = screen.getByText('Trabajo')
    const contactLink = screen.getByText('Contacto')

    expect(homeLink).toBeInTheDocument()
    expect(workLink).toBeInTheDocument()
    expect(contactLink).toBeInTheDocument()
  })

  it('renders the theme switcher', () => {
    render(<NavBar shouldHideOnScroll={true} />)
    const themeSwitcher = screen.getByLabelText('Toggle Dark Mode')
    expect(themeSwitcher).toBeInTheDocument()
  })
})
