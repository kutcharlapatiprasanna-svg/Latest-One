import React, { useState } from "react";
import Child from "./Child";
const Parent = () => {
    const [isloggedin, setIsLoggedIn] = useState(false);





    return (
        <div>
            <h1>Parent Component</h1>
            <Child isloggedin={isloggedin}
                setIsLoggedIn={setIsLoggedIn} />
        </div>
    )
}

export default Parent;