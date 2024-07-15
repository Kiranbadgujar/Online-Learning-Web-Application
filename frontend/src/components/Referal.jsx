import React from 'react'
import upstox from "../assets/upstox.png"

const Referal = () => {
  return (
    <section className='flex flex-col justify-center items-center bg-black gap-6 py-24 font-mono'>
      <h1 className='text-white font-semibold text-[30px]'>We Recommend</h1>
      <h1 className='text-white font-light text-[40px] lg:text-[45px] -mb-[35px]'>Open an account with</h1>
      <img src={upstox} className='w-[305px] h-[183px]'/>
    </section>
  )
}

export default Referal
