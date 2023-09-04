'use client'

import { NextUIProvider } from '@nextui-org/react'
import { ThemeProvider as NextThemesProvider } from 'next-themes'
import { Provider as BalancerProvider } from 'react-wrap-balancer'
import { ParallaxProvider } from 'react-scroll-parallax'

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <NextUIProvider>
      <NextThemesProvider attribute="class" defaultTheme="dark">
        <ParallaxProvider>
          <BalancerProvider>{children}</BalancerProvider>
        </ParallaxProvider>
      </NextThemesProvider>
    </NextUIProvider>
  )
}

export default Providers
