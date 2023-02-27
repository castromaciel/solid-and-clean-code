import { Header, Post } from './components'
import useLoadDocs from './hooks/useLoadDocs'

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
