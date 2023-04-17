import { useState } from "react";

const Homepage = () => {

  const clickHandler = () => {
    console.log('Hello')
  }

  // const clickHandler = (e) => {
  //   console.log(e);
  //   console.log(e.target);
  // }

  const clickHandlerCustomized = (name) => {
    console.log('Hello: ', name)
  }

  // let name = "Onkar";

  // so, if u want to change the name to another name in the same place where first name was then, we have to import 'usestate'  from react
  const [name, setName] = useState("Onkar")
  const [Subscribers, setSubs] = useState("550000")

  const clickToChangeName = () => {
    setName("Rishi");
  }

  const clickToChangeSubs = () => {
    setSubs("650000");
  }

  return (
    <div className='Home'>
      <h2>HOME PAGE</h2>
      <p>{name}</p>
      <p>{name} has {Subscribers} subscribers </p>
      {/* so, if u want to change the first name to last name in the same place where first name was then we have to import 'usestate' */}
      <button onClick={clickHandler}>
        Click Me
      </button>
      <button onClick={() => { clickHandlerCustomized("onkar") }}>
        Click Me Too
      </button>
      <button onClick={clickToChangeName}>
        Update Name
      </button>
      <button onClick={clickToChangeSubs}>
        Update Subscribers
      </button>
    </div >
  )
}

export default Homepage
