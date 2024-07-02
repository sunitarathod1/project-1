import React, { useState } from "react";

 let One1 = () => {
    var [data,SetData] = useState(["sunita"]);

    let  Update = () => {
        SetData("rathod");
        // SetData("rathod");
    }

    return(
    <div>
        <h1> functional component </h1>
        <h2> x={data}</h2>
        <button onClick={Update}>click me</button>
    </div>
    )
}
export default One1;