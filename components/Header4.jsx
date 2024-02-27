'use-client'
import React from 'react'
import Image from 'next/image'
const Header4 = () => {
  return (
    <div className='flex my-14 border-2 rounded
     border-gray-200 justify-between items-center'>
    <div className='flex items-center'>
    <Image src={'/fire.jpg'} 
    alt="fire"
    width={200}
    height={200}
    className='w-32 h-22 rounded-full mr-5'
    />
    <div>
    <p className='font-bold '>get access to exlusive deals</p>
    <p>only the best deals reach your inbox</p>
    </div>
    </div>
    <div className='flex'>
    <input type='email' className='
    w-80 h-16
    outline-none border border-gray-300 
    px-6 py-3 rounded-lg mr-5' placeholder='e.gjohn@gmail.com'/>
        <button type='submit' className='w-40 px-8 h-14 bg-red-500 text-xl text-white cursor-pointer rounded-lg '>Notify</button>
    </div>
    </div>
  )
}
export default Header4;
