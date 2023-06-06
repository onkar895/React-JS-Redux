// import logo from './logo.svg'
import './App.css'
import Greet from './Components/Greet'
import Welcome from './Components/Welcome'
import TodoList from './JSX/Todolist'
// import MyButton from './Hooks/UseState'
import Hello from './Hooks/Props'
import Message from './Hooks/UseState'
import Car from './Hooks/UseState'
import ExampleClass from './Hooks/Props'
// import Timer from './Hooks/UseEffect'
import Use from './Hooks/UseEffect'

// Here App() is a Root function and using Functonal component
function App () {
  return (
    <div className='App'>
      <Greet />
      <Welcome />
      <TodoList />
      {/* <MyButton/> */}
      <Hello name='Diana' Actorname='Wonder Women' />
      <Message />
      <br/>
      <Car />
      <br/>
      <br/>
      <ExampleClass />
      <parent />
      <br/>
      <br/>
      {/* <Timer /> */}
      <Use/>
    </div>
  )
}

export default App
