import React, { useState } from "react";

let One2 = () => {
    let [Set , SetState] = useState(["Sunita"]);

    let Update = () => {
        SetState("Rathod");
    }

    return(
        <div>
            <h1> hello this is sunita doing state in functional component </h1>
            <h2>{Set}</h2>
            <button onClick={Update}>Click me!</button>


        </div>
    )

}
export default One2;
