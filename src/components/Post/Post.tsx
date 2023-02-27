import { FC } from 'react'
import ReactMarkdown from 'react-markdown'
import { BlockCode } from '../index'
import styles from './post.module.scss'

const Post: FC<{doc: string}> = ({ doc }) => (
  <article className={styles.article}>
    <div className="container">
      <div className={styles.post_wrapper}>
        <ReactMarkdown
          components={{
            code: BlockCode
          }}
        >
          {doc}
        </ReactMarkdown>
      </div>
    </div>
  </article>
) 

export default Post
