// Updating the screen :

// Often, you’ll want your component to “remember” some information and display it.
// For example, maybe you want to count the number of times a button is clicked.To do this, add state to your component.

// Hooks:

// 1. In React, hooks are functions that give class-like abilities to function components, including state and side - effects.
// 2. There are a few rules when using hooks, including the following:
//       1.Hooks must be called from React functions(i.e.components or custom hooks) and not from a regular JavaScript function.
//       2.Hooks should not be called inside of a loop, condition, or nested function.Instead, hooks should be called at the top level of a React function so they render in the same order every time.
//       3.While there are standard React hooks, like useState() and useEffect(), there are also custom - made hooks!
// 3. Hooks are imported at the top of a file from the react library:
// 4. Syntax:   import React, { useHook } from 'react'

// UseState:

// 1. The value returned by useState() consists of an array with two values.
// 2. The first value is the initial(or starting) value of the state variable,
// while the second value is a reference to the function that can be used to update the variable.
// 3. One can always use array destructuring to assign both values at once so that they can be used in the component.
// 4. Of course, they can also be assigned separately by assigning a variable with useState() and assigning its first index to one variable and
// its second index to another(destructuring just makes this easier).

// 5. In functional components useState will be used as :  'useState' only
// 6. In Class components useState will be used as :  'this.state'

// import React from 'react'

// 1. First, import useState from React for functional component:
// import { useState } from 'react'

// 2. You’ll get two things from useState: the current state(count), and the function that lets you update it(setCount).
// You can give them any names, but the convention is to write[something, setSomething].
// The first time the button is displayed, count will be 0 because you passed 0 to useState().
// When you want to change state, call setCount() and pass the new value to it.Clicking this button will increment the counter:

// Example 1:
// functional component using useState:

// function MyButton () {
//   const [count, setCount] = useState(0)
//   function handleClick () {
//     setCount(count + 1)
//   }

//   return (

//     <button onClick={handleClick}>
//       Clicked
//       {count} times
//     </button>
//   )
// }

// export default MyButton

// Example 2:

// import { useState } from "react"
// useState: Returns the current state of the component and its setter function.

// const Homepage = () => {
//   const clickHandler = () => {
//     console.log('Hello')
//   }

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

// Class component using useState:

// Use this syntax for class COMPONENT:
// import React, { Component } from 'react'

// class Message extends Component {
//   constructor () {
// The "super" method is called in the constructor to initialize the component's state.
// This is necessary because the constructor of a subclass in JavaScript must call the "super" method before accessing "this".
//     super()              // Within the Constructor we call the super method
//     this.state = {
//       message: 'Welcome Visitor'
//     }
//   }

//   changeMessage () {
//     this.setState({message: 'Thanks for subscribing'})
//   }

//   render () {
//     return (
//       <div>
//         <h1>{this.state.message}</h1>
//         <button onClick={() => this.changeMessage()}>
//           Plz Subscribe
//         </button>
//       </div>
//     )
//   }
// }

// export default Message

// Example 4:

import React, { Component } from 'react'
class Car extends Component {
  constructor () {
    super()
    this.state = {
      brand: 'Chevrolet',
      model: 'Malibu',
      color: 'white',
      year: 1998
    }
  }

  changeColor () {
    this.setState({color: 'Pink'})
  }

  render () {
    return (
      <div>
        <h1>My First Car</h1>
        <p>
          It is a
          {this.state.color}
          {this.state.brand}
          {this.state.model} made in
          {this.state.year}. 🚙
        </p>
        <button onClick={this.changeColor()}>
          ClickToChangeColor
        </button>
      </div>
    )
  }
}

export default Car
