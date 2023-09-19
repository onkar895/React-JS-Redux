/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from 'react'
import DemoPage1 from './DemoPage1'
import DemoPage2 from './DemoPage2'
import UserContext from './useContext'

const App = () => {

  const [ChangeText, setChangeText] = useState("")

  useEffect(() => {
    const data = {
      name: 'This is the New Text'
    }
    setChangeText(data.name)
  }, [])

  const { Info } = useContext(UserContext)

  return (
    <div>
      <UserContext.Provider value={{ Info: ChangeText, setChangeText }}>
        <DemoPage1 />
        <DemoPage2 />
      </UserContext.Provider>

    </div>
  )
}

export default App
