import React from 'react'

function Comp2(props) {
  return (
    <div>Comp2
        <pre>{JSON.stringify(props)}</pre>
        <h2>{props.std}</h2>
    </div>
  )
}

export default Comp2