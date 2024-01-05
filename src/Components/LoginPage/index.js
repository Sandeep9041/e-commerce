import { useState } from "react";
import "./index.css";
import Cookies from "js-cookie";
import { useNavigate , Navigate } from "react-router-dom";

export const LoginPage=()=>{
    
    const [userDetails,setUserdetails] = useState({
    username:"kminchelle",
    password:"0lelplR"
});

    const submitForm = async(e) => {
        e.preventDefault();
        const {username,password} = userDetails; 
        const url = 'https://dummyjson.com/auth/login'
        const options = {
            method: "POST",
            body: JSON.stringify(userDetails),
            headers: { 'Content-Type': 'application/json' },
          };
          const response = await fetch(url, options);
          if (response.ok === true){
            const data = await response.json();
            Cookies.set("token", data.token, {
              expires: 30,
              path: "/",
            });
            navigate("/");
          }
          
          
        
    }

    const navigate = useNavigate();
    const cookies = Cookies.get("token")
    console.log(cookies);
    if (cookies !== undefined){
        return <Navigate to="/" />;
    }
    
    return(
        < div className="login-bg">
            <div className="login-card">
                <h1>Welcome Back!</h1>
                <p>Please enter your name and password to login.</p>
                <form onSubmit={submitForm}>
                    <label for="name">Name</label>
                    <input type="name" value={userDetails.username} 
                    onChange={e=>{setUserdetails({
                        ...userDetails,username: e.target.value
                    })}}/>

                    <label for="password" >Password</label>
                    <input type="password" value={userDetails.password} onChange={e=>{setUserdetails({
                        ...userDetails,password: e.target.value
                    })}}/>
                    <button type="submit">Login</button>
                </form>
            </div>
        </div>
    )
}