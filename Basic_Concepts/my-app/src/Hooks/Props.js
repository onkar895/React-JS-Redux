// Props:
// 1. In React, components are able to use props, or “properties”, to display and share data throughout the application.
// 2. In other words, props is the information that gets passed from one component to another.
// 3. A component’s props is an object. It holds information about that component.
// 4. Parent components can pass props to their child components, but not the other way around.
// 5. Props can be many data types, including: Numbers, Strings, Functions, Objects

// In functional components props will be used as :  'props.'
// In Class components props will be used as :  'this.props'

import React from 'react'

const Hello = (props) => {
  console.log(props)
  return <h1>Hello, {props.name} a.k.a {props.Actorname}</h1>
}

export default Hello
