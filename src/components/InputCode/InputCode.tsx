import { FC, ReactNode, useContext } from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { dracula, oneLight } from 'react-syntax-highlighter/dist/esm/styles/prism'
import { isDark } from '../../helper'
import { ThemeContext } from '../../provider'

interface InputCodeProps {
  children: ReactNode & ReactNode[]
}

const InputCode: FC<InputCodeProps> = ({ children }) => {
  const { theme } = useContext(ThemeContext)

  return (
    <SyntaxHighlighter
      style={isDark(theme) ? dracula : oneLight}
      language="typescript"
    >
      { String(children) }
    </SyntaxHighlighter>
  )
}

export default InputCode
