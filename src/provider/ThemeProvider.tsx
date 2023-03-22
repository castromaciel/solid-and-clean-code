import {
  createContext, Dispatch, FC, ReactNode, SetStateAction, useMemo, useState
} from 'react'
import { detectColorScheme } from '../helper'
import { ThemeMode } from '../types'

interface ThemeProviderType {
  theme: ThemeMode
  setTheme: Dispatch<SetStateAction<ThemeMode>>
}

const initialState: ThemeProviderType = {} as ThemeProviderType

export const ThemeContext = createContext<ThemeProviderType>(initialState)

interface IThemeProvider {
  children: ReactNode | ReactNode []
}

const ThemeProvider: FC<IThemeProvider> = ({ children }) => {
  const [theme, setTheme] = useState<ThemeMode>(detectColorScheme())

  const value = useMemo(() => ({
    theme, setTheme
  }), [theme])

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  ) 
}

export default ThemeProvider
