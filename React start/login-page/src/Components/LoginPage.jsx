import axios from 'axios';
import React, { useState } from 'react'
import "./loginPage.css"

const LoginPage = () => {

    const [user, SetUser] =useState({
     
        email:"",
        password:"",
       
    });


    function updateUser(e){
        let key = e.target.name;
        let value = e.target.value;
        SetUser({...user,[key]:value})
    }

const {email,password} = user;

const [successMessage,SetSuccessMessage] = useState("");
const [errorMessage, SetErrorMessage] = useState("");





 async function implementSignUp(e){

  e.preventDefault();
  try{
  const response = await axios.post("https://instagram-express-app.vercel.app/api/auth/login",
    {
 
      "email" : email,
      "password":password,
    }
  ) 
   console.log( "Success" ,response.data)
   SetSuccessMessage(response.data.message)
   SetErrorMessage("")
   SetUser({
    email:"",
    password:"",
   })
}
catch(err){
   console.log( "Failure" ,err)
   SetErrorMessage(err.response.data.message)
   SetSuccessMessage("")
}
}



  return (

    <div className='login-page'>
          <h1>Login Form</h1>
      {
        successMessage && <h2>{successMessage}</h2>
      }

      {

        errorMessage && <h2>{errorMessage}</h2>
      }

   <form onSubmit={implementSignUp}>

         

         <input type='text' placeholder='Enter Email' name='email'
         value={email}
         onChange={updateUser}
        />

         <input type='password' placeholder='Enter a password' name='password'
         value={password}
         onChange={updateUser}
        />


        <button type='submit'>Submit</button>
       </form>
      
    </div>
  )
}

export default LoginPage;
