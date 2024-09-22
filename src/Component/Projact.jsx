import React from 'react';

const skill = [
  {
    id: 1,
    title: "Namta",
    Image: <img src="public/images/namta.png" alt="Namta logo" />,
    submit: "submit-class-1",
  },
  {
    id: 2,
    title: "To-Do",
    Image: <img src="public/images/todo.png" alt="To-Do logo" />,
    submit: "submit-class-2",
  },
  {
    id: 3,
    title: "Portfolio",
    Image: <img src="public/images/pot.png" alt="Portfolio logo" />,
    submit: "submit-class-3",
  },
  {
    id: 4,
    title: "CatinApp",
    Image: <img src="public/images/cati.png" alt="CatinApp logo" />,
    submit: "submit-class-4",
  },
  {
    id: 5,
    title: "JsonBin",
    Image: <img src="public/images/bike.png" alt="JsonBin logo" />,
    submit: "submit-class-5",
  },
  {
    id: 6,
    title: "eki",
    Image: <img src="public/images/am.png" alt="Redux logo" />,
    submit: "submit-class-6",
  },
];

const Projact = () => {
  return (
    <div className='bg-black text-white py-16' id='Skill'>
      <div className='container mx-auto px-8 md:px-16 lg:px-24'>
        <h2 className='text-4xl font-bold text-center mb-11'>My Project</h2>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-3'>
          {skill.map(skill => (
            <div
              key={skill.id}
              className='bg-gray-800 px-6 pb-3 rounded-lg transform transition-transform duration-300 hover:scale-110'
            >
              <div
                className='text-right text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-tr from-green-400 to-blue-500'
              >
                {skill.id}
              </div>
              <h3
                className='mt-2 text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-tr from-green-400 to-blue-500'
              >
                {skill.title}
              </h3>
              <div className='mt-2'>{skill.Image}</div>
              <a
                href="#"
                className='mt-4 inline-block text-green-400 hover:text-blue-500'
              >
                Read More
              </a>
              <button className={skill.submit}>Submit</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projact;
