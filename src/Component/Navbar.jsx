import React from 'react'

const Navbar = () => {
  return (
    <>
    <nav className='bg-black text-white px-8 md:px-16 lg:px-24'>
        <div className='container py-2 flex justify-center md:justify-between items-center'>
           <div className=' text-2xl w-12 font-bold hidden md:inline'> 
            <img src="public/images/Logo.png" alt="logo" />
           </div>
            <div className=' space-x-6'>
                <a href="#Home" className=' hover:text-gray-400'>Home</a>
                <a href="#About" className=' hover:text-gray-400'>About</a>
                <a href="#Skill" className=' hover:text-gray-400'>Skill</a>
                <a href="#Projact" className=' hover:text-gray-400'>Projacte</a>
                <a href="#Contact" className=' hover:text-gray-400'>Contact</a>
            </div>
            <button className=' bg-gradient-to-tr from-green-400 to-blue-500 text-white hidden md:inline
             transform transition-transform duration-300 hover:scale-125 px-4 py-3 rounded-[10px]'>Contact ME</button>
        </div>
    </nav>
    </>
  )
}

export default Navbar