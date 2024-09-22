import React from 'react'
import { FaGithub, FaLinkedin, FaMapMarkerAlt } from 'react-icons/fa'
import { FaEnvelope, FaFacebook, FaPhone } from 'react-icons/fa6'
import { Form } from 'react-router-dom'

const Contact = () => {
  return (
    <div className=' bg-black text-white py-16'id='Contact'> 
    <div className='container mx-auto px-8 md:px-16 lg:px-24'>
        <h2 className=' text-4xl font-bold text-center mb-12'>Contact ME
        </h2>
         <div className=' flex flex-col md:flex-row  items-center md:space-x-12'>
            <div className=' flex-1'>
                <h3 className=' text-3xl font-bold text-transparent bg-clip-text 
                     bg-gradient-to-tr from-green-400 to-blue-5'>Let's Tak</h3>
                <p>diskivson</p>
                <div className=' mb-4 mt-8'>
                    <FaEnvelope className=' inline-block text-green-400 mr-2'></FaEnvelope>
                    <a href="mailto: taohidislamanik92@gmail.com" className=' hover:underline'>
                    taohidislamanik92@gmail.com
                    </a>
                </div>
                <div className=' mb-4 mt-8'>
                    <FaPhone className=' inline-block text-green-400 mr-2'></FaPhone>
                      <span>01910414788</span>
                </div>
                <div className=' mb-4 mt-8'>
                    <FaMapMarkerAlt className=' inline-block text-green-400 mr-2'></FaMapMarkerAlt>
                     <span>1285/1, Uttarkhan, Dhaka, Bangladesh</span>
                </div>
            </div>
            <div className=' flex-1 w-full'>
                <form className=' space-y-4'>
                    <div>
                        <label htmlFor="name" className=' block mb-2'>your name</label>
                        <input type="text" className=' w-full p-2 rounded bg-gray-800 border border-gray-600
                         focus:outline-none focus:border-green-400' 
                          placeholder='enter your name'/>
                    </div>
                    <div>
                        <label htmlFor="email" className=' block mb-2'>your email</label>
                        <input type="text" className=' w-full p-2 rounded bg-gray-800 border border-gray-600
                         focus:outline-none focus:border-green-400' 
                          placeholder='enter your email'/>
                    </div>
                    <div>
                        <label htmlFor="message" className=' block mb-2'>message</label>
                        <textarea type="text" className=' w-full p-2 rounded bg-gray-800 border border-gray-600
                         focus:outline-none focus:border-green-400' 
                         rows="5"
                          placeholder='enter your email'/>
                    </div>
                    <button className=' bg-gradient-to-tr from-green-400 to-blue-500 text-white hidden md:inline
                     transform transition-transform duration-300 hover:scale-125 px-10 py-4  rounded-full'>Send</button>
                </form>
            </div>
        </div>
        <div className=' border-t border-gray-600 pt-4 flex flex-col md:flex-row
         gap-14 items-center'>

            <p className=' text-gray-400'>&copy; {new Date().setFullYear}</p>

            <div className=' flex space-x-4 my-4 md:my-0'>
                <a href="#" className=' text-gray-400 hover:text-white'></a>
                <FaFacebook />

                <a href="#" className=' text-gray-400 hover:text-white'></a>
                < FaLinkedin />

                <a href="#" className=' text-gray-400 hover:text-white'></a>
                <FaGithub />
            </div>
        </div>
    </div>
</div>
  )
}

export default Contact