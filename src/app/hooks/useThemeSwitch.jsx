import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'
import useSound from 'use-sound'

export const useThemeSwitch = () => {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme, resolvedTheme } = useTheme()
  const [ThemeSound] = useSound('/static/sounds/switch-on.mp3')

  useEffect(() => setMounted(true), [])

  const toggleTheme = () => {
    setTheme(theme === 'dark' || resolvedTheme === 'dark' ? 'light' : 'dark')
    ThemeSound()
  }

  return { mounted, theme, resolvedTheme, toggleTheme }
}
