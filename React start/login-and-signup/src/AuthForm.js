import React,{useState} from 'react';

const AuthForm = () => {
    const[islogin,setlogin]= useState(false);

  return (
    <div className='container'>
      <div className="form-container">
        <div className="form-toggle">
            <button className={islogin ? "active" : ""} onClick={()=>setlogin(true)}>Login</button>
            <button className={!islogin ? "active" : ""} onClick={()=>setlogin(false)}>Sign Up</button>
        </div>

        {islogin ? <>
            <div className='form'>
                <h2>Login Form</h2>
                <input type='email' placeholder='Email'/>
                <input type='password' placeholder='password' />
                <a href='#'>Forgot Password</a>
                <button>Login</button>
                <p>Not a Member? <a href='#' onClick={()=>setlogin(false)}>Signup</a></p>

            </div>

            </> : <>
            <div className='form'>

            <h2>Signup Form</h2>
            <input type='email' placeholder='Email'/>
            <input type='password' placeholder='password' />
            <input type='password' placeholder='Confirm password' />
            <button>Signup</button>
              </div>
            </>}
          

      </div>
        </div>

  );
}

export default AuthForm;
