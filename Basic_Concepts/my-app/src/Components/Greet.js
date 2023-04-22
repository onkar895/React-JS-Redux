// In react, We have to component types:
//         1. Stateless Functional Component
//         2. Stateful Class Component.

// 1. Stateless Functional Component:
//     1. Simple Functions
//     2. Absence of 'this' Keyword
//     3. Solution without using state

// function welcome(props) {
//     return <h1>Hello, {props.name}</h1>
// }

import React from 'react'

// Example 1: Stateless Functional Component:

// function Component1 () {
//   return <h1>Hello, Onkar</h1>
// }

const Greet = () => <h1>Functional Component</h1>

export default Greet
// The 'export default' keywords specify the main component in the file.
