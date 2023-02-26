import { useEffect, useState } from 'react'
import ReactMarkdown from 'react-markdown'
import TechnicalDebt from '../../docs/en/01-VariableNames.md'
import { BlockCode } from '../index'
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
              code: BlockCode
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
