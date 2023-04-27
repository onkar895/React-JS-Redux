// import logo from './logo.svg'
import './App.css'
import Navbar from './Navbar'
import Homepage from './Homepage'

function App () {
  return (
    // If we use class instead of className for JSX, we're going to get a warning saying, class is an invalid DOM property:
    <div className='App'>
      <Navbar />
      <Homepage />
      <div className='content'>
      </div>
      <header className='App-header'>
        <h3>HII, THIS IS A SIMPLE GAMING BLOG</h3>
      </header>
    </div>
  )
}

export default App
