import { FC, ReactNode, useContext } from 'react'
import { PrismLight as SyntaxHighLighter } from 'react-syntax-highlighter'
import { dracula, oneLight } from 'react-syntax-highlighter/dist/esm/styles/prism'
import { ThemeContext } from '../../provider'

interface InputCodeProps {
  children: ReactNode & ReactNode[]
}

const InputCode: FC<InputCodeProps> = ({ children }) => {
  const { isDark } = useContext(ThemeContext)

  return (
    <SyntaxHighLighter
      customStyle={{ boxShadow: '1px 10px 76px -27px rgba(0,0,0,0.36)' }}
      style={isDark ? dracula : oneLight}
      language="typescript"
    >
      { String(children) }
    </SyntaxHighLighter>
  )
}

export default InputCode
