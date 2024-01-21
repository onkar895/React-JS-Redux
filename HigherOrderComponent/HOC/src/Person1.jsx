/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
/* eslint-disable no-unused-vars */
import React from 'react'
import HOC from './HOC'

const Person1 = (props) => {
  const { IncNum, handleEvent } = props;

  return (
    <div>
      <span>Increase the number by 10: {IncNum}</span>
      <button onClick={handleEvent}>+</button>
    </div>
  )
}

export default HOC(Person1)
