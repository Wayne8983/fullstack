import React, { useState } from 'react'
import { BackendURL } from '../App';
import { toast } from 'react-toastify';
import axios from 'axios';
import {Lock, Mail, User} from 'iconoir-react'

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
      }else{
        const response = await axios.post(BackendURL+'/api/users/register',{firstName,surName,lastName,email,password});
          if(response.data.success){
            toast.success(response.data.message);
          }else{
          toast.error(response.data.error);
        }

      }


      }catch(err){
        if(err.response.data.error){
          toast.error(err.response.data.error);
        }else{
          toast.error("Something went wrong");
        }

      }

    }


  return (
    <div className=' flex min-h-screen items-center justify-center bg-gray-300 ' >
      <form onSubmit={handleSubmit} className='flex flex-col gap-3 space-y-1 bg-white shadow-2xl h-120 w-120 rounded-2xl  p-7 last:bottom-0 ' >
        {currentForm==="Login"? (
            <p>Welcome back,,,</p>
        ):null}
        <div className='flex flex-row gap-5 items-center justify-center p-1  ' >
            <User fontSize={18} /><h1 className='uppercase text-2xl text-center font-bold text-amber-950 shadow-black ' >{currentForm}</h1>       
        </div>
        
        {currentForm==="SignUp"? (
          <div className='flex flex-col gap-4' >
            <div className='bg-gray-400 flex flex-row items-center px-2 gap-3'>
              <User color='white 'fontSize={18} />
              <input 
              type='text' 
              value={firstName} 
              onChange={(e)=>setFirstName(e.target.value)} 
              placeholder='First Name' 
              className='py-2.5 border-black focus:outline-0 w-full'
              />
            </div>
            <div className='bg-gray-400 flex flex-row items-center px-2 gap-3 '>
                <User color='white 'fontSize={18} />
                <input 
                type='text' 
                value={surName} 
                onChange={(e)=>setsurName(e.target.value)} 
                placeholder='Surname' 
                className='py-2.5 border-black focus:outline-0 w-full'
                />
            </div>
            <div className='bg-gray-400 flex flex-row items-center gap-3 px-2 ' >
              <User color='white 'fontSize={18} />
              <input 
              type='text' 
              value={lastName} 
              onChange={(e)=>setlastName(e.target.value)} 
              placeholder='Last name' 
              className='py-2.5 border-black focus:outline-0 w-full'
              />
            </div>

                      
          </div>
          ):null}

          <div className='flex flex-col space-y-1 gap-4 last:bottom-0 h-full first:items-center'>
            <div className='bg-gray-400 flex flex-row gap-3 items-center px-2 rounded-lg' >
              <Mail fontSize={20}color='white'  />
              <input 
              type='email' 
              value={email} 
              onChange={(e)=>setemail(e.target.value) }
              placeholder='email@example.com'
              className='py-2.5 border-black focus:outline-0 w-full '
              />              
            </div>
            <div className='bg-gray-400 flex flex-row gap-3 items-center px-2 '>
              <Lock fontSize={20} color='white' />
              <input 
              type='password' 
              value={password} 
              onChange={(e)=>setpassword(e.target.value)} 
              placeholder='Password' 
              className='py-2.5 border-black focus:outline-0 w-full'
              />
            </div>

          </div>

          <div className='flex items-center w-full justify-center  '>
            <button type='submit'className='bg-gray-900 hover:bg-black hover:text-white hover:cursor-pointer px-40 py-2 rounded-lg shadow-2xl focus:outline-2 focus:outline-green-800 text-gray-300 text-lg font-bold hover:scale-108 transition duartion-500 ' >
              {currentForm}
            </button>
          </div>
          <div className='flex flex-row'>
              {currentForm==="SignUp"? 
              (
                <div className='flex flex-row justify-between items-center gap-65 ' >
                  <p>Have an account?</p><p onClick={()=>setCurrentForm("Login")} >Login</p>
                </div>
              
            ):(
              <div className='flex flex-row w-full justify-between' >
                <p>Don't have an account?</p><p onClick={()=>setCurrentForm("SignUp")} >SignUp</p>
              </div>
              
            ) }
            
          </div>

      </form>
    </div>
  )
}

export default Form
