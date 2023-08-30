'use client'
import React from 'react'
import { Switch } from '@nextui-org/react'
import { MoonIcon } from './MoonIcon'
import { SunIcon } from './SunIcon'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <Switch
      aria-label="Toggle Dark Mode"
      defaultSelected
      size="lg"
      color="secondary"
      startContent={<SunIcon />}
      endContent={<MoonIcon />}
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
    ></Switch>
  )
}

export default ThemeSwitcher
