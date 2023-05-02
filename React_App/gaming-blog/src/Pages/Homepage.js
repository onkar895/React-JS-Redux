// Example of useSate:

// import useCustomFetch from "../CustomFetch"

// import { useState } from "react"
// useState: Returns the current state of the component and its setter function.

// const Homepage = () => {
//   const clickHandler = () => {
//     console.log('Hello')
//   }

// Event:
// const clickHandler = (e) => {
//   console.log(e)
//   console.log(e.target.value)
// }

// const clickHandlerCustomized = (name) => {
//   console.log('Hello', name)
// }

// let name = "Onkar"

// so, if u want to change the name to another name in the same place where first name was then, we have to import 'usestate'  from react
// The value returned by useState() consists of an array with two values.
// The first value is the initial(or starting) value of the state variable,
// while the second value is a reference to the function that can be used to update the variable.
// One can always use array destructuring to assign both values at once so that they can be used in the component.
// Of course, they can also be assigned separately by assigning a variable with useState() and assigning its first index to one variable and its second index to another(destructuring just makes this easier).

// const [name, setName] = useState("Onkar")
// const [Subscribers, setSubs] = useState("550000")

// Here, useState() works differently from the setName() & setSubs function (which is used to change the value of state variables in class-based components) when it comes to using arrays.

//   const clickToChangeName = () => {
//     setName("Rishi")
//   }

//   const clickToChangeSubs = () => {
//     setSubs("650000")
//   }

//   return (
//     <div className='Home'>
//       <h2>HOME PAGE</h2>
//       <p>{name}</p>
//       <p>{name} has {Subscribers} subscribers </p>
//       {/* so, if u want to change the first name to last name in the same place where first name was then we have to import 'usestate' */}
//       <button onClick={clickHandler}>
//         Click Me
//       </button>
//       <button onClick={() => { clickHandlerCustomized("onkar") }}>
//         Click Me Too
//       </button>
//       <button onClick={clickToChangeName}>
//         Update Name
//       </button>
//       <button onClick={clickToChangeSubs}>
//         Update Subscribers
//       </button>
//     </div >
//   )
// }

// export default Homepage;                The export default keywords specify the main component in the file.

// Example 3:

// import React, { useState } from 'react'

// function App() {
//   const [click, setClick] = useState(0)
// using array destructuring here
// to assign initial value 0
// to click and a reference to the function
// that updates click to setClick
//   return (
//     <div>
//       <p>You clicked {click} times</p>

//       <button onClick={() => setClick(click + 1)}>
//         Click me
//       </button>
//     </div>
//   )
// }

// export default App

// UseState,UseEffect and Props:
// import { useState, useEffect } from 'react'
// useState: Returns the current state of the component and its setter function.
// import Bloglist from './Bloglist'


const Homepage = () => {
//   const [blogs, setBlog] = useState([
//     { title: 'Crusader Kings III', body: 'Crusader Kings III is a grand strategy role-playing video game set in the Middle Ages, developed by Paradox Development Studio', author: 'Onkar', id: '1' },
//     { title: "Assassin's Creed Valhalla", body: "Assassin's Creed Valhalla is a 2020 action role-playing video game developed by Ubisoft Montreal and published by Ubisoft.", author: 'Rishi', id: '2' },
//     { title: 'StarCraft II: Wings of Liberty', body: 'StarCraft II: Wings of Liberty is a science fiction real-time strategy video game developed and published by Blizzard Entertainment.', author: 'Onkar', id: '3' },
//     { title: 'The Witcher 3: Wild Hunt', body: 'The Witcher 3: Wild Hunt is a 2015 action role-playing game developed and published by CD Projekt.', author: 'Harshal', id: '4' },
//     { title: "PlayerUnknown's Battlegrounds", body: 'PUBG: Battlegrounds is a battle royale game developed by PUBG Studios and published by Krafton.', author: 'Keshav', id: '5' },
//     { title: 'StarCraft II: Wings of Liberty', body: 'StarCraft II: Wings of Liberty is a science fiction real-time strategy video game developed and published by Blizzard Entertainment.', author: 'Manish', id: '6' },
//     { title: "PlayerUnknown's Battlegrounds", body: 'PUBG: Battlegrounds is a battle royale game developed by PUBG Studios and published by Krafton.', author: 'Harshal', id: '7' },
//     { title: 'Crusader Kings III', body: 'Crusader Kings III is a grand strategy role-playing video game set in the Middle Ages, developed by Paradox Development Studio', author: 'Manish', id: '8' }
//   ])
  
  // const [blogs, setBlog] = useState(null);
  // const [IsFetchPending, setIsFetchPending] = useState(true)
  // We have created another state here to check whether the feach is pending or not.
  // const [isError, setError] = useState(null);
  // This state is for handling the error if there is any error.

  // const { datas, IsFetchPending, isError } = useCustomFetch("http://localhost:8000/blogs")

  // const [blogPreview, setPreview] = useState('This is blog preview content')

  // const deleteBlog = (id) => {
  //   const newBlogs = blogs.filter(blogs => blogs.id !== id)
  //   setBlog(newBlogs)
  // }

  // useEffect: 
  // 1. The useEffect Hook allows you to perform side effects in your components.
  // 2. Some examples of side effects are: fetching data, directly updating the DOM, and timers.
  // 3. useEffect accepts two arguments. The second argument is optional.
  // 4. useEffect(<function>, <dependency>)

  // useEffect(() => {
  //   console.log('State changed/ useEffect triggred')
  // }, [blogPreview]) 
  // So here above I have passed blogPreview to useEffect because useEffect dependeant on that blogPreview value.
  // so everytime this blogPreview state changes then at that time only useEffect getting triggerd.
  // So, thats why it is called as a depedency factor of useEffect
  
  
  // JSON Command to write on cmd: 
// npx json-server --watch dataBase/dataBase.json --port 8000
  
  // useEffect(() => {
  //   setTimeout(() => {
  //     fetch(" http://localhost:8000/blogs")     // displays a list of blogs fetched from a local server at http://localhost:8000/blogs.
  //       .then(response => {
  //         console.log(response)
  //         if (!response.ok) {
  //           throw Error ("Could not fetch the data from the resources!")
  //         }
  //     return response.json()
  //     })
  //     .then(data => {
  //       console.log(data)
  //       setBlog(data);
  //       setIsFetchPending(false)
  //       setError(null)
  //     }
  //     ).catch(err => {     // Handling error
  //       setError(err.message)
  //     console.log(err.message)
  //   })
  //   },2000)
    
  // }, [ ]
  // )
  // The useEffect hook is used to fetch the data from the server and update the state of blogs with the fetched data. 
  // The second argument of useEffect is an empty array[], which means that the effect will only run once when the component mounts.

  return (
    <>
      {/* <Bloglist blogs={blogs} title='Gaming Blogs' deleteBlog={deleteBlog} /> */}

      {/* <Bloglist blogs={blogs.filter((blog) => blog.author === 'Onkar')} title="Onkar's Gaming Blogs:" deleteBlog={deleteBlog} /> */}
      {/* filter method Returns the elements of an array that meet the condition specified in a callback function. */}

      {/* <Bloglist blogs={blogs.filter((blog) => blog.author === 'Harshal')} title="Harshal's Gaming Blogs:" deleteBlog={deleteBlog} /> */}

      
      {/* Conditional Templating: */}
      {/* In React, conditional templating is typically achieved using the ternary operator (?:) or the logical && operator.
      The ternary operator is used to render one of two components based on a condition, while the logical && operator is used to render a component only if a certain condition is true. */}


      {/* Conditional Templating for fetch status */}
      {/* {IsFetchPending && <div><h2>Data is loading....</h2></div>} */}
       {/* so here we use conditional templationg beacuse we want to render Data on the browser */}
      
          {/* Conditional Templating for error */}
      {/* {isError && <div><h3>{ isError }</h3></div>} */}
       {/* so here we use conditional templationg beacuse we want to render Error message on the browser if there is any error */}
      
      {/* Conditional Templating for Bloglist */}
      {/* {datas && <Bloglist blogs={datas} title="Gaming Blogs" deleteBlog={deleteBlog} />} */}
      {/* This statement means that the Bloglist component will only be rendered if blogs is truthy (i.e., not null, undefined, false, 0, NaN, or an empty string). */}

      <h2>Welcome to Gaming Community</h2>
      <p>Gaming is not just fun, exciting, and entertaining. It has amazing benefits too for people of different ages.
        Accordingly, it improves memory and drives quick decision-making. As gaming can motivate players to take risks and persevere through failures, it can contribute to man’s ability to handle difficult situations.
        With that in mind, we don’t need to wonder why numerous gaming apps, devices, and blogs are emerging in the market these days.
        Fortunately, you can find ample gaming blogs that do not just offer fantastic, useful news and articles but are truly user-friendly.</p>
      
      
      {/* <p>
        {blogPreview}
      </p> */}

      {/* <button onClick={() => setPreview('Updated Preview')}>
        Click to change the above text   
      </button> */}
    </>
  )
}

export default Homepage
// The export default keywords specify the main component in the file.
