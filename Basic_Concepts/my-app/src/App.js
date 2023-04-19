// import logo from './logo.svg'
import './App.css'
import Greet from './Components/Greet'
import Welcome from './Components/Welcome'

// Here App() is a Root function
function App () {
  return (
    <div className='App'>
      <Greet />
      <Welcome />
    </div>
  )
}

export default App
