import React from 'react'

const Grids = () => {
  return (
    <div className='grid grid-cols-3 gap-x-3 gap-y-5 grid-flow-row-dense ' >
      <div className='bg-red-600 rounded-lg shadow-2xl min-h-[50px] col-span-2 '  />
      <div className='bg-blue-800 rounded-lg shadow-2xl min-h-[50px] col-span-3 ' />
      <div className='bg-gray-800 rounded-lg shadow-2xl min-h-[50px]' />
      <div className='bg-black rounded-lg shadow-2xl min-h-[50px]' />
      <div className='bg-pink-600 rounded-lg shadow-2xl min-h-[50px]' />
      <div className='bg-purple-600 rounded-lg shadow-2xl min-h-[50px]' />
      <div className='bg-yellow-600 rounded-lg shadow-2xl min-h-[50px]' />
      <div className='bg-green-600 rounded-lg shadow-2xl min-h-[50px]' />
    </div>
  )
}

export default Grids;
