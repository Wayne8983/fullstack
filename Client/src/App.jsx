import React, { useState } from 'react';
export const BackendURL ='http://localhost:3000';
import Form from './Components/Form';
import { ToastContainer } from 'react-toastify';
import Grids from '../src/Components/Grids';

const App = () => {

  const [token,setToken]=useState("")
  return (
    <>
    <ToastContainer
      progressClassName="my-progress"
      toastClassName="custom-toast"
      bodyClassName="custom-toast-body"
      position="bottom-left"
      autoClose={2000}
      hideProgressBar={false}
      newestOnTop={true}
      closeOnClick
      pauseOnHover
      background="black"
      draggable
      theme="dark"
    />
      {token===""? (<Form setToken={setToken} />):(<Grids />)}
    </>
  )
}

export default App
