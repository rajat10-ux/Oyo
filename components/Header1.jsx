import React from 'react'
import Image from 'next/image'
import Block from './Block'
const Header1 = () => {
  return (
    <div className='flex h-24 justify-between border-2 border-gray-300  px-10  items-center'>
    <Image src={'/oyo.jpg'} alt='logo' width={200} height={180}
    style={{mixBlendMode:'color-burn'}}
        className='w-24 h-28 '
    />
    <div className=' border-gray-300 h-full flex'>
        <Block title={'Become a member'} para={'Additional 10% off on stays'}/>
        <Block title={'OYO for business'} para={'Trusted By by 5000 corporates'}/>
        <Block title={'List Your Property'} para={'Start earning in 30min'}/>
        <Block title={'015-115-7551'} para={'call us to Book Now'}/>
       <div className='flex items-center px-300'>
       <Image src={'/vercel.svg'} alt="demo" width={100} height={100}
className="w-10 h-10 rounded-full mr-5"/>
<h3 className='font-bold'>Login/Sign-up</h3>
         </div> 
    </div>
    </div>
  )
}

export default Header1;
