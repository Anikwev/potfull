import React from 'react'


const Home = () => {
  return (
    <div className=' bg-black text-white text-center py-14'>
        <img src="public/images/ANIK.jpeg" alt="logo"
        className=' mx-auto mb-8 w-48 h-48 rounded-full object-cover transform transition-transform
         duration-300 hover:scale-125' />
        <h1 className=' text-4xl font-bold'>
            I'm{" "} <span className=' text-transparent bg-clip-text bg-gradient-to-tr from-green-400 to-blue-500'>MD:Tawhid Islam Anik</span>
        </h1>
        <p className='mt-4 text-lg text-gray-300'>
            Font-End React Davolopar
        </p>
        <div className=' mt-8 space-x-4'>
            <button className=' bg-gradient-to-tr from-green-400 to-blue-500 text-white hidden md:inline
            transform transition-transform duration-300 hover:scale-110 px-4 py-3 rounded-[10px]'>Contact With me</button>
            
            <button className=' bg-gradient-to-tr from-green-400 to-blue-500 text-white hidden md:inline
             transform transition-transform duration-300 hover:scale-110 px-4 py-3 rounded-[10px]'>Ruseme</button>
        </div>
    </div>
  )
}

export default Home