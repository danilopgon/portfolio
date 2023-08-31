import { render, screen } from '@testing-library/react'
import NavBar from './NavBar'

describe('NavBar', () => {
  it('renders the navbar brand', () => {
    render(<NavBar />)
    const brandElement = screen.getByLabelText('danilopgon logo')
    console.log(brandElement)
    expect(brandElement).toBeInTheDocument()
  })

  it('renders the navigation links', () => {
    render(<NavBar />)
    const homeLink = screen.getByText('Inicio')
    const workLink = screen.getByText('Trabajo')
    const contactLink = screen.getByText('Contacto')
    const blogLink = screen.getByText('Blog')

    expect(homeLink).toBeInTheDocument()
    expect(workLink).toBeInTheDocument()
    expect(contactLink).toBeInTheDocument()
    expect(blogLink).toBeInTheDocument()
  })

  it('renders the theme switcher', () => {
    render(<NavBar />)
    const themeSwitcher = screen.getByLabelText('Toggle Dark Mode')
    expect(themeSwitcher).toBeInTheDocument()
  })
})
