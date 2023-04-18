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

// export default Homepage;                The export default keywords specify the main component in the file.


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
// useState: Returns the current state of the component and its setter function.
import Bloglist from "./Bloglist";

const Homepage = () => {
  const [blogs, setBlog] = useState([
    { title: "Crusader Kings III", body: "Crusader Kings III is a grand strategy role-playing video game set in the Middle Ages, developed by Paradox Development Studio", author: "Onkar", id: "1" },
    { title: "Assassin's Creed Valhalla", body: "Assassin's Creed Valhalla is a 2020 action role-playing video game developed by Ubisoft Montreal and published by Ubisoft.", author: "Rishi", id: "2" },
    { title: "StarCraft II: Wings of Liberty", body: "StarCraft II: Wings of Liberty is a science fiction real-time strategy video game developed and published by Blizzard Entertainment.", author: "Onkar", id: "3" },
    { title: "The Witcher 3: Wild Hunt", body: "The Witcher 3: Wild Hunt is a 2015 action role-playing game developed and published by CD Projekt.", author: "Harshal", id: "4" },
    { title: "PlayerUnknown's Battlegrounds", body: "PUBG: Battlegrounds is a battle royale game developed by PUBG Studios and published by Krafton.", author: "Keshav", id: "5" },
    { title: "StarCraft II: Wings of Liberty", body: "StarCraft II: Wings of Liberty is a science fiction real-time strategy video game developed and published by Blizzard Entertainment.", author: "Manish", id: "6" },
    { title: "PlayerUnknown's Battlegrounds", body: "PUBG: Battlegrounds is a battle royale game developed by PUBG Studios and published by Krafton.", author: "Harshal", id: "7" },
    { title: "Crusader Kings III", body: "Crusader Kings III is a grand strategy role-playing video game set in the Middle Ages, developed by Paradox Development Studio", author: "Manish", id: "8" },
  ]);

  const deleteBlog = (id) => {
    const newBlogs = blogs.filter(blogs => blogs.id !== id);
    setBlog(newBlogs);
  }

  return (
    <div className="home">
      <Bloglist blogs={blogs} title="Gaming Blogs" deleteBlog={deleteBlog} />
      <Bloglist blogs={blogs.filter((blog) => blog.author === "Onkar")} title="Onkar's Gaming Blogs:" deleteBlog={deleteBlog} />
      {/* filter method Returns the elements of an array that meet the condition specified in a callback function. */}
      <Bloglist blogs={blogs.filter((blog) => blog.author === "Harshal")} title="Harshal's Gaming Blogs:" deleteBlog={deleteBlog} />

    </div>
  )
}

export default Homepage;
// The export default keywords specify the main component in the file.

