// import logo from './logo.svg'
import './App.css'
import Navbar from './Navbar'
import { About } from './Pages/About'
import { AllBlogs } from './Pages/AllBlogs'
import { Contact } from './Pages/Contact'
import Homepage from './Pages/Homepage'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App () {
  return (

    <BrowserRouter>
      {/* Wrapping all the data in BrowserRouter component */}
      <Navbar />
      <Homepage />
      <Routes>
        <Route exact path='/home' element={<Homepage />}></Route>
        <Route exact path='/about' element={<About/>}></Route>
        <Route exact path='/blog' element={<AllBlogs/>}></Route>
        <Route exact path='/contact' element={<Contact/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
