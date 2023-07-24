import React from "react";
import Login from "./component/login"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import "./App.css"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  
  
  return (
    <>
      <div className="App">
      <BrowserRouter>
        <Routes>
        
        <Route path='/' element={<Login/>} />
       
        </Routes>
      </BrowserRouter>
     
     
     </div>
     <ToastContainer/>
     </>
  )
}

export default App