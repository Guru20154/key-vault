import React from 'react'

const Contact = () => {
  return (
    <div className='text-white'>
      <div className="relative items-center justify-center w-3/5 mx-auto my-20 p-28 bg-gradient-to-br from-black via-indigo-900 to-black rounded-lg shadow-lg border border-white/20 backdrop-blur-sm">
        <div className='flex gap-3'>
          <h1 className="text-4xl font-extrabold text-white tracking-wider uppercase mb-5 m-auto">Gurkanwal Singh</h1>
        </div>
        <p className="text-lg font-light text-white opacity-90 font-mono" >
          Mail<span className='ml-12'>:</span> gurkanwal04singh@gmail.com
        </p>
        <p className="text-lg font-light text-white opacity-90 font-mono" >
          LinkedIn : <a href ="https://www.linkedin.com/in/gurkanwal-singh-5534a7237" target='_blank' rel='noopener noreferrer' className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Gurkanwal Singh</a>  
        </p>
        <p className="text-lg font-light text-white opacity-90 font-mono" >
          Git <span className='ml-12'>:</span> <a href ="https://github.com/Guru20154 " target='_blank' rel='noopener noreferrer' className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Guru20154</a>  
        </p>
      </div>
    </div>
  )
}

export default Contact
