import React, { useState } from "react";
import cricketContext from "./CricketContext";

const CricketProvider = (props) => {
    // let name = "virat kohili"
    const [cricketer, setCricketer] = useState({
        name: "prasanna",
        age: 23,
        country: "INDIA",
        retired: true,

    })


    return (
       

            <cricketContext.Provider value={{

                cricketer: cricketer,
                setCricketer: setCricketer
            }}>
                {props.children}
            </cricketContext.Provider>



    )



}

export default CricketProvider;