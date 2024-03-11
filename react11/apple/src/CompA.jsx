import React from 'react'
import CompB from './CompB'
const CompA = () => {
    var masg="good"
  return (
    <div>
        <h4>{masg}</h4>
        
   <CompB p={masg}/>
    </div>
  )
}

export default CompA