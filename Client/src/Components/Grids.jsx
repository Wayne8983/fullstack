import React from 'react';
import axios from 'axios';
import { BackendURL } from '../App';
import {toast} from 'react-toastify';

const Grids = () => {
  const logout = async(e)=>{
    e.preventDefault();
    try{
      const response = await axios.delete(BackendURL+'/api/users/logout');
      if(response.data.success){
        toast.success(response.data.message);
      }else{
        toast.error(response.data.error);
      }

    }catch(err){
      toast.error(err.response.data.error);
    }
  }
  return (
    <div className="
      grid 
      grid-cols-1 
      md:grid-cols-[250px_1fr] 
      grid-rows-[60px_1fr] 
      h-screen
    ">
        <nav className="col-span-1 md:col-span-2 bg-slate-800 text-white p-4">
          Navbar
          <button>Logout</button>
          
        </nav>

        <aside className="hidden md:block bg-slate-200 p-4">
          Sidebar
        </aside>

        <main className="bg-white p-4">
          Main Content
        </main>
    </div>
  )
}

export default Grids;
