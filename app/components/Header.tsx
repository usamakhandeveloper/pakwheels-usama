import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <div className='bg-blue-800 flex gap-x-3 h-20 text-white text-2xl items-center justify-evenly'>
        <Link href="/">
      <img src="/assets/logo.png" alt="logo" width={245} className='mr-9'/> 
        </Link>
      <h3 className='hover:text-red-400'>Used Cars</h3> 
      <h3 className='hover:text-red-400'>New Cars</h3>
      <h3 className='hover:text-red-400'>Bikes</h3>
      <h3 className='hover:text-red-400'>Auto Store</h3>
      <h3 className='hover:text-red-400'>Videos</h3>
      <h3 className='hover:text-red-400'>Forums</h3>
      <h3 className='hover:text-red-400'>Blog</h3>
      <h3 className='hover:text-red-400'>More</h3>
      <button className='bg-red-500 font-bold px-4 py-3 rounded-full hover:bg-red-800'>Post An Ad</button>
    </div>
  )
}

export default Header
