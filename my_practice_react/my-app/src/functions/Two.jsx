
import React from 'react'

function Two({props}) {
  return (
    <div>
      <h2> Two </h2>
      <pre>{JSON.stringify(props)}</pre>

    </div>
  )
}

export default Two