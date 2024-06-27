import React from 'react'
import Comp2 from './Comp2'

function Comp1() {
    const Student = [{name:"rahul", age:12 , place:"bangaluru"}];
  return (
    <><h1>Comp1</h1>
        
    <Comp2/>
    <h2>std=({Student[0]})</h2>
    </>
  )
}

export default Comp1