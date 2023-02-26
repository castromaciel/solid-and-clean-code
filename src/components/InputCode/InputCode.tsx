import { FC, ReactNode, useContext } from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { dracula, duotoneLight } from 'react-syntax-highlighter/dist/esm/styles/prism'
import { ThemeContext } from '../../provider'

interface InputCodeProps {
  children: ReactNode & ReactNode[]
}

const InputCode: FC<InputCodeProps> = ({ children }) => {
  const { isDark } = useContext(ThemeContext)

  return (
    <SyntaxHighlighter
      customStyle={{ boxShadow: '1px 10px 76px -27px rgba(0,0,0,0.36)' }}
      style={isDark ? dracula : duotoneLight}
      language="typescript"
    >
      { String(children) }
    </SyntaxHighlighter>
  )
}

export default InputCode
