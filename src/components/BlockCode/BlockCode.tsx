import {
  FC, ReactNode, useEffect, useState
} from 'react'
import CopyToClipboard from 'react-copy-to-clipboard'
import { CopyIcon, PasteIcon } from '../../assets/icons'
import { InputCode } from '../index'
import styles from './code.module.scss'

interface ICodeProps {
  children: ReactNode & ReactNode[]
}

const BlockCode: FC<ICodeProps> = ({ children }) => {
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
      <InputCode>
        {children}
      </InputCode>
      
    </div>
  ) 
}

export default BlockCode
