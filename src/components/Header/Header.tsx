import { useContext } from 'react'
import { LogoIcon, MoonIcon, SunIcon } from '../../assets/icons'
import { ThemeContext } from '../../provider'
import styles from './header.module.scss'

const Header = () => {
  const { isDark, setIsDark } = useContext(ThemeContext)
  return (
    <header className={styles.header}>
      <div className="container">

        <div className={styles.logo_wrapper}>
          <div className={styles.logo}>
            <LogoIcon />
            <span>Clean Code</span>
          </div>

          <button type="button" onClick={() => setIsDark(!isDark)}>
            {
              isDark 
                ? <MoonIcon />
                : <SunIcon />
            }
          </button>
        </div>
      
      </div>
    </header>
  ) 
}

export default Header
