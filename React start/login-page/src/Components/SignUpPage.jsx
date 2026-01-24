import axios from 'axios';
import React, { useState } from 'react'
import "./signup.css"

const SignUpPage = () => {



    const [user, SetUser] =useState({
        name:"",
        email:"",
        password:"",
        confirmPassword:""
    });


    function updateUser(e){
        let key = e.target.name;
        let value = e.target.value;
        SetUser({...user,[key]:value})
    }

const {name,email,password,confirmPassword} = user;

const [successMessage,SetSuccessMessage] = useState("");
const [errorMessage, SetErrorMessage] = useState("");





 async function implementSignUp(e){

  e.preventDefault();
  try{
  const response = await axios.post("https://instagram-express-app.vercel.app/api/auth/signup",
    {
      "name" : name,
      "email" : email,
      "password":password,
    }
  ) 
   console.log( "Success" ,response.data)
   SetSuccessMessage(response.data.message)
   SetErrorMessage("")
}
catch(err){
   console.log( "Failure" ,err)
   SetErrorMessage(err.response.data.message)
   SetSuccessMessage("")
}
}



  return (
  
    <div className='signup-page'>

      <h1>SignUp Form</h1>

      
      {
        successMessage && <h2>{successMessage}</h2>
      }

      {

        errorMessage && <h2>{errorMessage}</h2>
      }

   <form onSubmit={implementSignUp}>

        <input type='text' placeholder='Enter a Name' name='name'
         value={name}
         onChange={updateUser}
        />    

         <input type='text' placeholder='Enter Email' name='email'
         value={email}
         onChange={updateUser}
        />

         <input type='password' placeholder='Enter a password' name='password'
         value={password}
         onChange={updateUser}
        />

         <input type='password' placeholder='Confirm password' name='confirmPassword'
         value={confirmPassword}
         onChange={updateUser}
        />

        <button type='submit'>Submit</button>
       </form>

       {/* <hr/> */}
      
    </div>
  )
}

export default SignUpPage
