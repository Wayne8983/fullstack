import React, { useState } from 'react'
import { BackendURL } from '../App';
import { toast } from 'react-toastify';
import axios from 'axios';

const Form = ({setToken}) => {
    const [currentForm,setCurrentForm]=useState("Login");
    const [firstName,setFirstName]=useState("");
    const [surName,setsurName]=useState("");
    const [lastName,setlastName]=useState("");
    const [email,setemail]=useState("");
    const [password,setpassword]=useState("");

    const handleSubmit = async(e)=>{
      e.preventDefault();
      try{
        if(currentForm==="Login"){
          const response = await axios.post(BackendURL+"/api/users/login",{email,password});
          if(response.data.success){
            setToken(response.data.accessToken);
            toast.success(response.data.message);
          }else{
          toast.error(response.data.error);
        }
      }
      }catch(err){
        console.log(err.message);
      }

    }


  return (
    <div className=' flex min-h-screen items-center justify-center bg-gray-300 ' >
      <form onSubmit={handleSubmit} className='flex flex-col gap-3 bg-white shadow-2xl h-120 w-120 rounded-2xl  ' >
        <h1 className='uppercase text-center font-bold text-amber-950' >{currentForm}</h1>
        {currentForm==="SignUp"? (
          <div className='flex flex-col gap-3 ' >
            <input type='text' value={firstName} onChange={(e)=>setFirstName(e.target.value)} placeholder='First Name' />
              <input type='text' value={surName} onChange={(e)=>setsurName(e.target.value)} placeholder='surName' />
            <input type='text' value={lastName} onChange={(e)=>setlastName(e.target.value)} placeholder='lastName' />
                      
          </div>
          ):null}

          <div className='flex flex-col gap-3'>
            <input type='email' value={email} onChange={(e)=>setemail(e.target.value) }placeholder='email' />
            <input type='password' value={password} onChange={(e)=>setpassword(e.target.value)} placeholder='Password' />
          </div>
          <div className='flex flex-row'>
            {currentForm==="SignUp"? 
            (
              <div className='flex flex-row justify-s' >
                <p>Have an account?</p><p onClick={()=>setCurrentForm("Login")} >Login</p>
              </div>
            
          ):(
            <div className='flex flex-row gap-10' >
              <p>Don't have an account?</p><p onClick={()=>setCurrentForm("SignUp")} >SignUp</p>
            </div>
            
          ) }
            
          </div>
          <div>
            <button type='Submit' >{currentForm}</button>
          </div>

      </form>
    </div>
  )
}

export default Form
