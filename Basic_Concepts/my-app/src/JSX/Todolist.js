// Writing markup with JSX: { }

//     1. The markup syntax you’ve seen here { } is called JSX. It is optional, but most React projects use JSX for its convenience.
//     2. JSX is stricter than HTML. You have to close tags ke <br />. Your component also can’t return multiple JSX tags.
//     3. You have to wrap them into a shared parent, ke a <div>...</div> or an empty <>...< /> wrapper:
//     4. JSX lets you put markup into JavaScript. Curly braces let you “escape back” into JavaScript so that you can embed some variable from your code and display it to the user.
//     5. JSX lets you write HTML - like markup inside a JavaScript file, keeping rendering logic and content in the same place.
//     Sometimes you will want to add a little JavaScript logic or reference a dynamic property inside that markup.In this situation, you can use curly braces in your JSX to “open a window” to JavaScript:

import React from 'react'

const person = {
  name: 'Gregorio Y. Zara',
  theme: {
    backgroundColor: 'black',
    color: 'pink'
  }
}

function TodoList () {
  return (
    <div style={person.theme}>
      <h1>{person.name}'s Todos</h1>
      <img className='avatar' src='https://i.imgur.com/7vQD0fPs.jpg' alt='Gregorio Y. Zara' />
      <ul>
        <li>
          Improve the videophone
        </li>
        <li>
          Prepare aeronautics lectures
        </li>
        <li>
          Work on the alcohol-fuelled engine
        </li>
      </ul>
    </div>
  )
}

// Rendering Lists:
const products = [
  { title: 'Cabbage', id: 1 },
  { title: 'Garlic', id: 2 },
  { title: 'Apple', id: 3 }
]

// Notice how <li> has a key attribute. For each item in a list, you should pass a string or a number that uniquely identifies that item among its siblings. 
// Usually, a key should be coming from your data, such as a database ID.
// React uses your keys to know what happened if you later insert, delete, or reorder the items.
const listItems = products.map(product => <li key={product.id}>
                                            {product.title}
                                          </li>
)

console.log({ listItems})

export default TodoList

// Responding to events

// function MyButton () {
//   function handleClick () {
//     alert('You clicked me!')
//   }

//   return (
//     <button onClick={handleClick}>
//       Click me
//     </button>
//   )
// }

// export default MyButton
