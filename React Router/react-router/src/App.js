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
import { Products } from './Components/Products'
import Featured from './Components/FeaturedProducts'
import New from './Components/NewProducts'

import Users from './Components/Users'
import UserDeatails from './Components/UserDetails'
import Admin from './Components/Admin'



function App () {
  return (
    
    <>
      <Navbar />
      <Routes>
          {/* Relative links: 
          We are going to use relative links here which does not need to write '/' before url path */}
        <Route path='/' element={<Home />}></Route>
        <Route path='about' element={<About />}></Route>
        <Route path='contact' element={<Contact />}></Route>
        <Route path='order-summary' element={<OrderSummary />}></Route>
        
          {/* Nested Routes : featured and new routes under products route */}
        <Route path='products' element={<Products />}>
            {/* <Route index element={<Featured/>}></Route> */}
            <Route path='featured' element={<Featured />}></Route>
            <Route path='new' element={<New />}></Route>
        </Route>
        <Route path='users' element={<Users />}></Route>
         {/* Dynamic Route: UserDetails:  we can also write nested dyanamic routes to display data on the same page using Outlet */}
        <Route path='users/:userId' element={<UserDeatails />}></Route>
        {/*Here we  includes a dynamic parameter called "userId" that can be used to display information about a specific user. */}
       <Route path='users/admin' element={<Admin/>}></Route>
        <Route path='*' element={<NoMatch />}></Route>
         
      </Routes>
    </>
  )
}

export default App

// index route:
// The index route will render when we have not clicked on any one of the links (Featured, or New) in the secondary navigation inside the /products route.