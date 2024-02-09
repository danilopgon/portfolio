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
})
