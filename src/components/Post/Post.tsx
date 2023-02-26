/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react/no-children-prop */
import { useEffect, useState } from 'react'
import ReactMarkdown from 'react-markdown'
import TechnicalDebt from '../../docs/en/01-VariableNames.md'
import { Code } from '../index'
import styles from './post.module.scss'

const Post = () => {
  const [technicalDebt, setTechnicalDebt] = useState('')

  useEffect(() => {
    fetch(TechnicalDebt)
      .then((response) => response.text())
      .then((text) => {
        setTechnicalDebt(text)
      })
  }, [])
  return (
    <article className={styles.article}>
      <div className="container">
        <div className={styles.post_wrapper}>
          <ReactMarkdown
            components={{
              code: ({ children }) => <Code children={children} />
            }}
          >
            {technicalDebt}
          </ReactMarkdown>
        </div>
      </div>
    </article>
  ) 
}

export default Post
