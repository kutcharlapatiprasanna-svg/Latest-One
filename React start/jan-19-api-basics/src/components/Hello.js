
import React, { useState } from "react";

import axios from "axios";



const Hello = () => {

    const [message, setMessage] = useState("");

    function getMessage() {
        axios.get("https://jsonplaceholder.typicode.com/users")
            .then(response => {
                console.log(response.data[1])
                setMessage(response.data[1].email)
            }
            )
            .catch(err => console.log(err))
    }


    //     function getMessage() {

    //        fetch("http://localhost:3000/users")

    //          .then((response) =>response.json())
    //          .then(data => console.log(data))
    //          setMessage(data.message)
    //          .catch((err)=>console.log(err))

    // }


    return (
        <div>

            <button onClick={getMessage}>Get Result</button>
            <p>{message}</p>

        </div>
    )
}

export default Hello;