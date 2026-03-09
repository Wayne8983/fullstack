import React, { useState } from 'react';
export const BackendURL ='http://localhost:3000';
import Form from './Components/Form';
import { ToastContainer } from 'react-toastify';

const App = () => {

  const [token,setToken]=useState("")
  return (
    <>
    <ToastContainer />
      {token===""? (<Form setToken={setToken} />):(<Grids />)}
    </>
  )
}

export default App
