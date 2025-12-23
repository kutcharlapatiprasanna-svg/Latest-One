import React, { useState } from "react";

const Child = ({ isloggedin, setIsLoggedIn }) => {

    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");


    function handleLogin(e) {


        e.preventDefault()
        if (username && password) {
            setIsLoggedIn(true);
        }

    }



    return (
        <div>
            <form onSubmit={handleLogin}>
                Username:<input type="text" name="username"
                    value={username} onChange={(e) => setUserName(e.target.value)}
                /> <br />
                Password:<input type="password" name="password"
                    value={password} onChange={(e) => setPassword(e.target.value)} />
                <br />

                <button type="submit">Login</button>
            </form>

            {

                isloggedin && <p>Welcome You are logged in.</p>
            }
        </div>
    )
}
export default Child;