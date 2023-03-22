import { Header, Post } from './components'
import { useLoadDocs } from './hooks'

const App = () => {
  const { docs } = useLoadDocs()
  return (
    <div>
      <Header />
      {
        docs.map((doc) => (
          <Post key={doc} doc={doc} />
        ))
      }
    </div>
  )
}

export default App
