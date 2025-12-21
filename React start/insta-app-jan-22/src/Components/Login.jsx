import React, { useState } from "react";
import axios from "axios";



const Login = () => {

  const [userPrasanna, setUser] = useState({
    email: "",
    password: "",



  });

  const[token,setToken] = useState("")

  const [successMessage , setSuccessMessage] = useState("")
  const[errorMessage,setErrorMessage] = useState("")

  const { email, password } = userPrasanna;


  function updateUser(e) {
    let key = e.target.name;
    let value = e.target.value;
    setUser({ ...userPrasanna, [key]: value })



  }


  async function implementLogin(e) {
      e.preventDefault(); 
    
    try {
      const response = await axios.post("https://instagram-express-app.vercel.app/api/auth/login",
        {

//  https://jsonplaceholder.typicode.com/posts
        
          email: email,
          password:password,

    
        }
      )
      console.log("Success",response.data)
      
    setSuccessMessage(response.data.message)
    
      setToken(response.data.token)
      setErrorMessage("")
    //   setUser({
    //     email:email,
    //     password:password,
    //   })
    } 
    
    
    
    catch (err) {
      console.log("Failure",err)
      setErrorMessage(err.response.data.message)
        setSuccessMessage("")
    }

  }





  return (



    <div>

        <h1>Login   </h1>

    {
    successMessage && <h2>{successMessage}</h2>
    }

    {

      errorMessage &&  <h2>{errorMessage}</h2>
    }












      {/* generate a form with name,email,password and confirm password(choice) */}

      <form onSubmit={implementLogin}>

      
        <input type="email" placeholder="Enter Email" name="email"
          value={email}
          onChange={updateUser} />
        <input type="password" placeholder="Enter Password" name="password"
          value={password}
          onChange={updateUser} />
       

          <button type="submit">Submit</button>



      </form>


    </div>
  )
}
export default Login;