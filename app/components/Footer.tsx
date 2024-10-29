"use client"
import Link from 'next/link'

const Footer = () => {
  return (
    <div className='bg-red-500 flex gap-x-3 h-20 text-white text-2xl items-center justify-evenly '>
<h4 className='font-bold'> PakWheels 2024 Made By <Link href="https://www.linkedin.com/in/usama-khan-1a9124280/" target='_blank'><span className='hover:underline'>@Usama Khan</span></Link></h4>
    </div>
  )
}

export default Footer