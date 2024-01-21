/* eslint-disable no-unused-vars */
import React, { useState } from 'react'

const HOC = (PersonComponent) => {
  const NewComponent = () => {
    const [IncNum, setIncNum] = useState(10)

    const handleEvent = () => {
      setIncNum(IncNum + 10)
    }
    return <PersonComponent IncNum={IncNum} handleEvent={handleEvent} />
  }
  return NewComponent
}

export default HOC
