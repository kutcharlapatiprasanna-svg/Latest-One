import axios from "axios";
import React, { useState } from "react";



// console.log("Dashboard Token:", token);


 const Dashboard = ({token})=>{
//   console.log("Dashboard Token:", token);

    const [message,setMessage] = useState("");
    async  function getJoke(){
        try{
            const response = await axios.get("https://instagram-express-app.vercel.app/api/auth/zuku",
                {
                    headers:{
                        authorization:`Bearer ${token}`
                    }
                }
            )
        
            setMessage(response.data.data.message)
        }catch(err){
            console.log(err)
        }
    }




    return(


        <div>

      <h1>Dashboard</h1>
      {

        message && <h2>{message}</h2>


      }
      <button onClick={getJoke}>Get Joke</button>
        </div>

    )
}


export default Dashboard;


