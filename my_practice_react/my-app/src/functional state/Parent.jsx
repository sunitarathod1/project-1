import React, { useState } from 'react';
import Child from './Child';

let Parent = () => {
    let [State , SetState] = useState([0]);
    let Update = () => {
      SetState(+1);
    }
  return (
    <>
    <div>
        <h1> this is the parent class </h1>
        <p> {State} </p>
        <button onClick={Update}>Click Me!</button>
         <Child name={"sunita"} SetState= {"SetState"}/>
    </div>
    </>
  )
}

export default Parent