import React from 'react'

let Child = (props, SetState) => {
    let Change = () => {
        SetState(10);
    }
  return (
    <div>
    <h1> {props.name} </h1>
    <butto onClick={Change}>child button</butto>
    </div>
  )
}

export default Child