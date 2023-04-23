// Props:
// 1. In React, components are able to use props, or “properties”, to display and share data throughout the application.
// 2. In other words, props is the information that gets passed from one component to another.
// 3. A component’s props is an object. It holds information about that component.
// 4. Parent components can pass props to their child components, but not the other way around.
// 5. Props can be many data types, including: Numbers, Strings, Functions, Objects

// In functional components props will be used as :  'props.'
// In Class components props will be used as :  'this.props'

// import React from 'react'

// const Hello = (props) => {
//   console.log(props)
//   return <h1>Hello, {props.name} a.k.a {props.Actorname}</h1>
// }

// export default Hello

// import React, { Component } from 'react'

//  Class Component:
// class ExampleClass extends Component {
//   render () {
//     return (
//       <div>
//         {/* accessing array prop directly */}
//         <h1>The names of students are: {this.props.names}</h1>
//       </div>
//     )
//   }
// }

// ExampleClass.defaultProps = {
//   names: ['Ram', 'Shyam', 'Raghav']
// }

// export default ExampleClass

import React, { Component } from 'react'
import ChildComponent from './Props1'
class ParentComponent extends Component {
  // The constructor is a special method that is called when an instance of the ParentComponent is created. 
  constructor (props) {
    // The super(props) statement is required in the constructor of any class that extends another class in JavaScript.
    super(props)

    this.state = {
      parentName: 'Parent'
    }

    this.greetParent = this.greetParent.bind(this)
  }

  greetParent () {
    alert(`Hello ${this.state.parentName}`)
  }

  render () {
    return (
      <div>
        <ChildComponent greetHandler={this.greetParent} />
      </div>
    )
  }
}

export default ParentComponent
