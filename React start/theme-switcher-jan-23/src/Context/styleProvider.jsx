import React, { useState } from "react";

import colorContext from "./styleContext";

const StyleProvider = (props) => {

    const [theme, setTheme] = useState({
        color: "red",
        backgroundColor: "white",
        border: "1px solid red"
    })
    return (



        <colorContext.Provider value={
            {
                theme: theme,
                 lightTheme: ()=>setTheme({...theme,
                    color:"red",
                    backgroundColor:"white",
                    boorder:"2px solid black"
                }),
                darkTheme: ()=>setTheme({...theme,
                    color:"white",
                    backgroundColor:"black",
                    boorder:"2px solid green"
                })

                  
            }
        }>

            {props.children}
        </colorContext.Provider>
    )
}
export default StyleProvider;
