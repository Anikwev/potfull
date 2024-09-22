import React from 'react'
const skill =[
  {
    id: 1,
    title:"HTML",
    Image: <img src="public/images/HTML.png" alt="logo" />
  },
  {
    id: 2,
    title:"CSS",
    Image: <img src="public/images/csa.png" alt="logo" />
  },  
  {
    id: 3,
    title:"java-script",
    Image: <img src="public/images/images.jpeg" alt="logo" />
  }, 
  {
    id: 4,
    title:"Bootstrap",
    Image: <img src="public/images/bostav.png" alt="logo" />
  }, 
  {
    id: 5,
    title:"tal",
    Image: <img src="public/images/tal.png" alt="logo" />
  }, 
  {
    id: 6,
    title:"Reduex",
    Image: <img src="public/images/reduex.png" alt="logo" />
  }, 
  {
    id: 7,
    title:"REACT",
    Image: <img src="public/images/react.png" alt="logo" />
  }, 
  {
    id: 8,
    title:"Firebase",
    Image: <img src="public/images/Firebase.png" alt="logo" />
  }, 
  {
    id: 9,
    title:"Figma",
    Image: <img src="public/images/figma.png" alt="logo" />
  }, 

  {
    id: 10,
    title:"canba",
    Image: <img src="public/images/canba.png" alt="logo" />
  }, 
  {
    id: 11,
    title:"Themeforest",
    Image: <img src="public/images/themeforest.jpeg" alt="logo" />
  }, 

];
 






const Skill = () => {
    
  return (
    <div className=' bg-black text-white py-16'id='Skill'> 
      <div className='container mx-auto px-8 md:px-16 lg:px-24'>
        <h2 className=' text-4xl font-bold text-center mb-11'>My Skill</h2>
        <div className=' grid grid-cols-1 md:grid-cols-3 gap-3'>
          {skill.map(skill => (
            <div key={skill.id} className=' bg-gray-800 px-6 pb-3 rounded-lg transform
            transition-transform duration-300 hover:scale-110'>
                <div className=' text-right text-2xl font-bold text-transparent
               bg-clip-text bg-gradient-to-tr from-green-400 to-blue-500'>
                {skill.id}
               </div>
               <h3 className=' mt-2 text-2xl font-bold text-transparent bg-clip-text 
                     bg-gradient-to-tr from-green-400 to-blue-500'>
                  {skill.title}
               </h3>
               <p className=' mt-2'>{skill.Image}</p>
               <a href="#" className=' mt-4 inline-block text-green-400 hover:text-blue-500'>Read More</a>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Skill