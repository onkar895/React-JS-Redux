// 1. BrowserRouter: BrowserRouter is a router implementation that uses the HTML5 history API(pushState, replaceState and the popstate event) to keep your UI in sync with the URL. 
//                             It is the parent component that is used to store all of the other components.
// 2. Routes: It’s a new component introduced in the v6 and a upgrade of the component
// 3. Route: Route is the conditionally shown component that renders some UI when its path matches the current URL.
// 4. Link: Link component is used to create links to different routes and implement navigation around the application. It works like HTML anchor tag.

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import './App.css'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import About from './Components/About'
import Contact from './Components/Contact'
import OrderSummary from './Components/OrderSummary'
import { NoMatch } from './Components/NoMatch'



function App () {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='about' element={<About />}></Route>
        <Route path='contact' element={<Contact />}></Route>
        <Route path='order-summary' element={<OrderSummary />}></Route>
        <Route path='*' element={<NoMatch/>}></Route>
      </Routes>
    </>
  )
}

export default App
