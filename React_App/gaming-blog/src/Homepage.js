// Hooks:

// 1. In React, hooks are functions that give class-like abilities to function components, including state and side - effects.
// 2. There are a few rules when using hooks, including the following:
//       1.Hooks must be called from React functions(i.e.components or custom hooks) and not from a regular JavaScript function.
//       2.Hooks should not be called inside of a loop, condition, or nested function.Instead, hooks should be called at the top level of a React function so they render in the same order every time.
//       3.While there are standard React hooks, like useState() and useEffect(), there are also custom - made hooks!
// 3. Hooks are imported at the top of a file from the react library:
// 4. Syntax:   import React, { useHook } from 'react';


// Example 1:

// import { useState } from "react";
// function App() {
//   const click = useState('GeeksForGeeks');
//   return (
//     <h1>Welcome to {click}</h1>
//   );
// }
// export default App;


// Example 2:

// import { useState } from "react";
// useState: Returns the current state of the component and its setter function.
// const Homepage = () => {

//   const clickHandler = () => {
//     console.log('Hello')
//   }

// const clickHandler = (e) => {
//   console.log(e);
//   console.log(e.target.value);
// }

// const clickHandlerCustomized = (name) => {
//   console.log('Hello', name)
// }

// let name = "Onkar";

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
//     setName("Rishi");
//   }

//   const clickToChangeSubs = () => {
//     setSubs("650000");
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

// export default Homepage;


// Example 3:

// import React, { useState } from 'react';

// function App() {
//   const [click, setClick] = useState(0);
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
//   );
// }

// export default App;


import { useState } from "react";

const Homepage = () => {
  const [blogs] = useState([
    { title: "Dark Sector", body: "Lorem Ipsem", author: "Onkar", Id: "1" },
    { title: "Assaisian Creed", body: "Lorem Ipsem", author: "Rishi", Id: "2" },
    { title: "Far Cry", body: "Lorem Ipsem", author: "Harshal", Id: "3" },
    { title: "Witcher 3", body: "Lorem Ipsem", author: "Keshav", Id: "4" },
  ]);

  return (
    <div className="home">
      {/* <div></div>
      <div></div>
      <div></div>
      <div></div> */}

      {/* map : Calls a defined callback function on each element of an array, and returns an  new array that contains the results. */}
      {blogs.map((blog) => (
        <div className="blog-preview">
          <h2>{blog.title}</h2>
          <p>author:{blog.author}</p>
          <p>ID: {blog.Id}</p>
        </div>
      )
      )}
    </div>
  )
}

export default Homepage;