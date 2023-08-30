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
    >
      Dark mode
    </Switch>
  )
}

//   return (
//     <div>
//       <button
//         aria-label="Toggle Dark Mode"
//         type="button"
//         className="h-10 w-10 rounded bg-default-100 text-primary-300"
//         onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
//       >
//         {theme === 'dark' ? (
//           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
//           </svg>
//         ) : (
//           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
//           </svg>
//         )}
//       </button>
//     </div>

export default ThemeSwitcher
