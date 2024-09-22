import React from 'react'

const About = () => {
  return (
    <div className=' bg-black text-white py-16'id='About'> 
        <div className='container mx-auto px-8 md:px-16 lg:px-24'>
            <h2 className=' text-4xl font-bold text-center mb-12'>About ME
            </h2>
             <div className=' flex flex-col md:flex-row  items-center md:space-x-12'>
                <img src="public/images/Anik-Photo.jpg" alt="logo" 
                className=' w-72 h-80 rounded object-cover mb-8 md:mb-0'/>
                <div className=' flex-1'>
                  <p className=' text-lg mb-8'>
                   I am a dedicated front-end developer with 3 years of experience, 
                   focusing on React to build intuitive and responsive web applications. 
                   My expertise includes designing user-centric interfaces and ensuring optimal
                   performance. Committed to continuous learning, I stay current with industry 
                   trends and best practices to deliver high-quality solutions.
                  </p>
                </div>
             </div>
             <div className=' flex justify-center gap-16'>
             <div className=' flex justify-center  text-center'>
                  <div>
                    <h2 className=' text-4xl font-bold text-transparent bg-clip-text 
                     bg-gradient-to-tr from-green-400 to-blue-500'>3+</h2>
                    <p>Years Experience</p> 
                  </div>
                </div>
                <div className=' flex  justify-center text-center'>
                  <div>
                    <h2 className=' text-4xl font-bold text-transparent bg-clip-text 
                     bg-gradient-to-tr from-green-400 to-blue-500'>20+</h2>
                    <p>Projects Completed</p> 
                  </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About