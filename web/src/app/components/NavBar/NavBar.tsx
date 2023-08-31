import React from 'react'
import { Navbar, NavbarBrand, NavbarContent, NavbarItem } from '@nextui-org/navbar'
import { Link } from '@nextui-org/link'

import ThemeSwitcher from '../ThemeSwitcher'

interface NavBarProps {
  shouldHideOnScroll: boolean
}

const NavBar = ({ shouldHideOnScroll }: NavBarProps): JSX.Element => {
  return (
    <Navbar shouldHideOnScroll={shouldHideOnScroll}>
      <NavbarBrand aria-label="danilopgon logo">
        <svg
          className="w-6 fill-primary transition-all duration-300 hover:fill-secondary"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 480.72 570"
        >
          <path
            className="cls-1"
            d="M272.09,388.45l2.28,115.33,110.69-2.19q-21.36,43.57-51.21,59.73t-67.13,16.9q-30.42.6-54.79-12.41l2.9,147a375.68,375.68,0,0,0,54.6,2.81q108.69-2.15,174.62-80.13l1.26,63.89,111.35-2.2L550.47,383Z"
            transform="translate(-75.94 -145.65)"
          />
          <path
            className="cls-1"
            d="M466.76,214Q385,145.66,242.69,145.65H228.22V276.34q43,1.5,72.17,12,34,12.27,52.56,45.05a102.93,102.93,0,0,1,5,10.26H540.38Q522.7,260.81,466.76,214Z"
            transform="translate(-75.94 -145.65)"
          />
          <polygon
            className="cls-1"
            points="175.12 437.81 175.12 131.34 171.32 131.34 171.32 0 0 0 0 569.15 171.32 569.15 171.32 437.81 175.12 437.81"
          />
        </svg>
      </NavbarBrand>
      <NavbarContent className="hidden gap-4 sm:flex" justify="center">
        <NavbarItem>
          <Link color="foreground" href="#">
            Inicio
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link color="foreground" href="#">
            Trabajo
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Contacto
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Blog
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <ThemeSwitcher />
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  )
}

export default NavBar
