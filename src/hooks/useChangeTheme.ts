import { useContext, useEffect } from 'react'
import { detectColorScheme } from '../helper'
import { ThemeContext } from '../provider'

export const useChangeTheme = () => {
  const { theme, setTheme } = useContext(ThemeContext)

  useEffect(() => {
    setTheme(detectColorScheme())
  }, [setTheme])

  const handleClick = () => {
    if (theme === 'light') {
      setTheme('dark')
      document.documentElement.setAttribute('data-theme', 'dark')
      localStorage.setItem('theme', 'dark')
      return
    }
    setTheme('light')
    document.documentElement.setAttribute('data-theme', 'light')
    localStorage.setItem('theme', 'light')
  }
  return {
    handleClick,
    theme
  }
}
