import React, { useState } from 'react';
import "./login.css";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Login() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [otp, setOtp] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:8000/signup", { email });
      toast.success('Otp send successfully!', { autoClose: 5000 });
      setMessage(res.data.message);
    } catch (error) {
      toast.error('Otp sending failed!', { autoClose: 5000 });
      setMessage("Error sending verification email");
    } 
  }

  const verify = () => {
    if (otp === message) {
      toast.success('Verification successful!', { autoClose: 5000 });
    } else {
      toast.error('Invalid OTP. Verification failed.', { autoClose: 5000 });
    }
  }

  return (
    <>
      <ToastContainer />
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

        <button onClick={handleSubmit} className='button'>Send OTP</button>
        <button onClick={verify} className='button'>Verify</button>
      </div>
    </>
  )
}

export default Login;
