import { Link, Outlet } from "react-router-dom"

// 1. So , here products page or parent still does not know where to render the child component so, for that we have provide 'outlet component' to the page
// 2. Outlet Component: Renders the child route's element, if there is one.
// 3. An <Outlet> should be used in parent route elements to render their child route elements.
//     This allows nested UI to show up when child routes are rendered.
//     If the parent route matched exactly, it will render a child index route or nothing if there is no index route.

export const Products = () => {
    return (
        <>
            <br/>
          <div>
             <input type='search' placeholder='Search Products' />
            </div>
            <br/>
            <nav>
                {/* Relative links: We are going to use relative links here which does not need to write '/' before url path */}
                <Link to="featured">Featured</Link>
                <Link to="new">New</Link>
            </nav>
            <Outlet />
       </>
  )
}


