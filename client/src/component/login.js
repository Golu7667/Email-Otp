import React, { useState } from 'react'
import "./login.css"
import axios from "axios";
function Login() {
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [otp,setOtp]=useState("");
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        const res = await axios.post("http://localhost:8000/signup", { email });
        setMessage(res.data.message);
        
      } catch (error) {
        setMessage("Error sending verification email");
      }
    }
    const verify=()=>{
        if(otp===message){
            alert("verified")
        }else{
            alert("wrong OTP")
        }
    }
  return (
    <div className='login'>
  <input
         type="email"
         placeholder="Enter Your Email Id"
         value={email}
         onChange={(e) => setEmail(e.target.value)}
       />
       <input
         type="text"
         placeholder="Enter Your OTP"
         value={otp}
         onChange={(e) => setOtp(e.target.value)}
       />
      <button onClick={handleSubmit} className='button'>send otp</button>
      <button onClick={verify} className='button'>verify</button>
      <div>{message}</div>
    
    </div>
  )
}

export default Login