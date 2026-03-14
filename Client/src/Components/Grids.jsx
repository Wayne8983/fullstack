import { LogOut, Settings } from 'iconoir-react'
import React from 'react'

const Grids = () => {
  return (
    <div className='flex flex-col h-screen' >

      <nav className='bg-gray-400 w-full h-30 flex flex-row p-4 items-center justify-end ' >
        <div className='flex flex-row' >
          <p>Home</p>
          <p>Home</p>
          <p>Home</p>
          <p>Home</p>
        </div>
      </nav>

      <div className='flex flex-row h-screen'>

        <aside className= 'bg-blue-950 flex flex-col w-80 h-full p-3 gap-3 justify-end items-center' >
          <p>Profile</p>
          <div className='flex flex-row items-center gap-1 text-white font-bold' >
            <Settings fontSize={13} color='white' />
            <p>Settings</p>
          </div>
          <div className='flex flex-row items-center gap-1 text-white font-bold justify-center active:bg-white active:text-black' >
            <LogOut color='white' />
            <p>Logout</p>
          </div>
        </aside>

        <main className=' w-full' >
          <p>main</p>
        </main>
        
      </div>

      <footer className='bg-black h-60' >
        <p className='text-white'>footer</p>
      </footer>

    </div>
  )
}

export default Grids
