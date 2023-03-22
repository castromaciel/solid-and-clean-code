import { LogoIcon, MoonIcon, SunIcon } from '../../assets/icons'
import { isDark } from '../../helper'
import { useChangeTheme } from '../../hooks'

const Header = () => {
  const { handleClick, theme } = useChangeTheme()
  return (
    <header className="header">
      <div className="container">

        <div className="logo_wrapper">
          <div className="logo">
            <LogoIcon />
            <span>Clean Code</span>
          </div>
          <div className="options">
            <button type="button">
              En
            </button>
            <button type="button" onClick={handleClick}>
              {
                isDark(theme)
                  ? <MoonIcon />
                  : <SunIcon />
              }
            </button>
          </div>
        </div>
      
      </div>
    </header>
  ) 
}

export default Header
