// useEffect:
// 1. The useEffect Hook allows you to perform side effects in your components.
// 2. Some examples of side effects are: fetching data, directly updating the DOM, and timers.
// 3. useEffect accepts two arguments. The second argument is optional.
// 4. useEffect(<function>, <dependency>)

// Example 1:
// import { useState, useEffect } from 'react'

// function Timer () {
//   const [count, setCount] = useState(0)

//   useEffect(() => {
//     setTimeout(() => {
//       setCount((count) => count + 1)
//     }, 1000)
//   })

//   return <h1>I have rendered {count} times!</h1>
// }

// export default Timer


// Example 2:
import React, { useState, useEffect } from 'react'

function Use () {
  const [count, setCount] = useState(0)

  useEffect(() => {
    document.title = `You clicked ${count} times`
  })

  return (
    <>
      <p>
        You clicked
        {count} times
      </p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </>
  )
}

export default Use

