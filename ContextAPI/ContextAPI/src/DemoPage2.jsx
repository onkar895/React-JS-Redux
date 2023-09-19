/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useContext } from 'react'
import UserContext from './useContext'



const DemoPage2 = ({ data }) => {

  const { changeText, setChangeText } = useContext(UserContext)

  return (
    <div>
      <h3>{data}</h3>
      <button onClick={() => setChangeText(changeText)}>Click To Change the Text</button>
    </div>
  )
}

export default DemoPage2
