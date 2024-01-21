import './App.css'
import Person1 from './Person1'
import Person2 from './Person2'

function App() {

  return (
    <>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <Person1 />
        <Person2 />
      </div>
    </>
  )
}

export default App
