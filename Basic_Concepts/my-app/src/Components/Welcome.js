// 2. Stateful Class Component:

// Here render() method returning html

// class welcome extends React.Component {
//   render () {
//     return <h1>Hello, {this.props.name}</h1>
//   }
// }

// Now, whenever you create a class component, we need to include 'React' and 'Component' class from react.
import React, { Component } from 'react'

class Welcome extends Component {
  render () {
    return <h1>Class Component</h1>
  }
}

export default Welcome
