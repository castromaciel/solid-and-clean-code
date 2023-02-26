import {
  FC, ReactNode, useContext, useEffect, useState
} from 'react'
import CopyToClipboard from 'react-copy-to-clipboard'
import { PrismLight as SyntaxHighLighter } from 'react-syntax-highlighter'
import { dracula, oneLight } from 'react-syntax-highlighter/dist/esm/styles/prism'
import { CopyIcon, PasteIcon } from '../../assets/icons'
import { ThemeContext } from '../../provider'
import styles from './code.module.scss'

interface ICodeProps {
  children: ReactNode & ReactNode[]
}

const Code: FC<ICodeProps> = ({ children }) => {
  const { isDark } = useContext(ThemeContext)
  const [isCopy, setIsCopy] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsCopy(false)
    }, 1200)
  
    return () => clearTimeout(timer)
  }, [isCopy])

  return (
    <div className={styles.code}>
      <CopyToClipboard text={String(children)} onCopy={() => setIsCopy(true)}>
        <button type="button" className={styles.copy_icon}>
          {
            !isCopy 
              ? <CopyIcon />
              : <PasteIcon />
          }
        </button>
      </CopyToClipboard>
      <SyntaxHighLighter
        customStyle={{ boxShadow: '1px 10px 76px -27px rgba(0,0,0,0.36)' }}
        style={isDark ? dracula : oneLight}
        language="typescript"
      >
        { String(children) }
      </SyntaxHighLighter>
    </div>
  ) 
}

export default Code
