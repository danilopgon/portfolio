'use client'

import { NextUIProvider } from '@nextui-org/react'
import { ThemeProvider as NextThemesProvider } from 'next-themes'
import { Provider as BalancerProvider } from 'react-wrap-balancer'

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <NextUIProvider>
      <NextThemesProvider attribute="class" defaultTheme="dark">
        <BalancerProvider>{children}</BalancerProvider>
      </NextThemesProvider>
    </NextUIProvider>
  )
}

export default Providers
