/* eslint-disable no-unused-vars */
import React from 'react'
import DemoPage2 from './DemoPage2'


const DemoPage1 = () => {


  const data = "Onkar Karale"
  return (
    <div>
      <h1>{data}</h1>
      <DemoPage2 data={data} />
      
    </div>
  )
}

export default DemoPage1
