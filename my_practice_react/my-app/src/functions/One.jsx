import React from 'react'
import Two from './Two';


function One() {
  var ename="rahul"
  

  return (
    <div>
      <h1> One </h1>
      <hr />
    {/* <pre>{JSON.stringify}</pre> */}
    {/* <Two props ={ename}/> */}
    <Two/>
    <h2>student_name={ename}</h2>
    
    
    </div>
  )
}

export default One