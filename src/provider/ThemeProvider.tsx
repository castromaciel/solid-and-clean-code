import {
  createContext, Dispatch, FC, ReactNode, SetStateAction, useMemo, useState
} from 'react'

interface ThemeProviderType {
  isDark: boolean
  setIsDark: Dispatch<SetStateAction<boolean>>
}

const initialState: ThemeProviderType = {} as ThemeProviderType

export const ThemeContext = createContext<ThemeProviderType>(initialState)

interface IThemeProvider {
  children: ReactNode | ReactNode []
}

const ThemeProvider: FC<IThemeProvider> = ({ children }) => {
  const [isDark, setIsDark] = useState<boolean>(true)

  const value = useMemo(() => ({
    isDark, setIsDark
  }), [isDark])

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  ) 
}

export default ThemeProvider
