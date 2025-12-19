
import axios from "axios";
import React, { useState } from "react";



const Sum = () => {


    const [number1, setNumber1] = useState("0")
    const [number2, setNumber2] = useState("0")

    const [result, setResult] = useState("0")

    function getSum(e) {

        //     fetch("https://jsonplaceholder.typicode.com/users", {

        //         method: "POST",
        //         headers: {

        //             "Content-Type": "application/json"
        //         },

        //         body: JSON.stringify(
        //             {
        //                 num1: 100,
        //                 num2: 3000
        //             }
        //         )
        //     }

        //     )

        //         .then(response => (response.json()))
        //         .then(data => console.log(data))
        //         .catch(err => console.log(err))
        e.preventDefault();

        axios.post("https://jsonplaceholder.typicode.com/users", {

            num1: number1,
            num2: number2

        })

            // .then(response => console.log(response.data))
            // setResult(response.data)

            //     .catch(err => console.log(err))
            .then(response => {
                const sum = response.data.num1 + response.data.num2;
                setResult(sum);   // ✅ 3100
            })
            .catch(err => console.log(err));


    }

    return (


        < div >
            <form onSubmit={getSum}>
                <input type="number" placeholder="Enter number 1" 
                value={number1}
                onChange={(e)=>setNumber1(e.target.value)}/>
                <input type="number" placeholder="Enter number 2" 
                value={number2}
                onChange={(e) =>setNumber2(e.target.value)}/>
             <button>Get Result</button>
            </form>

            <h1>Sum</h1>
            <p>{result}</p>
        </div >
    )
}

export default Sum;