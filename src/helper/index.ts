import { ThemeMode } from '../types'

export const detectColorScheme = (): ThemeMode => {
  let theme:ThemeMode = 'light'

  if (localStorage.getItem('theme')) {
    if (localStorage.getItem('theme') === 'dark') {
      theme = 'dark'
    }
  } else if (!window.matchMedia) {
    return 'light'
  } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    theme = 'dark'
  }

  if (theme === 'dark') {
    document.documentElement.setAttribute('data-theme', 'dark')
  }

  return theme
}

export const isDark = (theme: ThemeMode): boolean => (theme === 'dark')
