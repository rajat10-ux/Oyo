'use-client'
import React from 'react'
const Header3 = () => {
  return (
    <div className='bg-gradient-to-r from-red-600 to-red-400 h-60'>
      <div className='p-5'>
      <h2 className='text-4xl text-white font-bold text-center'>
      Over 160,000 hotels and homes across 50 countries</h2>
      <div className=' mx-20 grid grid-cols-5 my-5'>
        <input type='text' placeholder='Search..' className=' h-16 outline-none px-3 text-lg border-r-2 border-gray-200 col-span-2'/>
        <input type='text' placeholder='Search..' className=' h-16 outline-none px-3 text-lg border-r-2 border-gray-200 col-span-1'/>
        <input type='text' placeholder='Search..' className=' h-16 outline-none px-3 text-lg border-r-2 border-gray-200 cols-span-1'/>
        <button type='submit' className='h-16 px-3 py-2 col-span-1 bg-green-400 hover:cursor-pointer hover:bg-green-600 text-white'>Search</button>
      </div>
      <div className='flex'>
      <button type='submit' className='h-16 px-3 py-2  hover:cursor-pointer hover: text-white mr-5'>Continue Your Search</button>
      <button type='submit'  
      className='h-16  px-3 py-2 rounded-2xl  hover:cursor-pointer border-2 text-white mr-2 hover:bg-gray-500'>Homestay in India hotels</button>
      </div>
      </div>
    </div>
  )
}

export default Header3;
