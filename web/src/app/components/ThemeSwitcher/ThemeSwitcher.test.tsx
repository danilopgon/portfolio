/**
 * @jest-environment jsdom
 */

import { render, screen, fireEvent } from '@testing-library/react'
import ThemeSwitcher from './ThemeSwitcher'

describe('ThemeSwitcher', () => {
  it('should render the switch component', () => {
    render(<ThemeSwitcher />)
    const switchElement = screen.getByRole('switch')
    expect(switchElement).toBeInTheDocument()
  })

  it('should toggle the theme when clicked', () => {
    render(<ThemeSwitcher />)
    const switchElement = screen.getByRole('switch')
    const htmlElement = document.querySelector('html')
    const initialTheme = htmlElement?.classList.contains('dark')
    console.log(initialTheme)
    fireEvent.click(switchElement)
    const finalTheme = htmlElement?.classList.contains('dark')
    console.log(finalTheme)
    expect(initialTheme).not.toBe(finalTheme)
  })
})
