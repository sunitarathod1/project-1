import React from 'react'

const CompB = (props) => {
  return (
    <div>
        <h3>{JSON.stringify(props)}</h3>
        <h2>{props.p}</h2>
    </div>
  )
}

export default CompB