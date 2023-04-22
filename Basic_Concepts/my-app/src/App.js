// import logo from './logo.svg'
import './App.css'
import Greet from './Components/Greet'
import Welcome from './Components/Welcome'
import TodoList from './JSX/Todolist'
// import MyButton from './Hooks/UseState'
import Hello from './Hooks/Props'
import Message from './Hooks/UseState'
import Car from './Hooks/UseState'

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
      <Car/>
    </div>
  )
}

export default App
