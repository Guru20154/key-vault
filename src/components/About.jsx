import React from 'react'

const About = () => {
  return (
    <div className='text-white'>
      <div className="relative flex flex-col items-center justify-center w-4/5 mx-auto my-20 p-28 bg-gradient-to-br from-black via-indigo-900 to-black rounded-lg shadow-lg border border-white/20 backdrop-blur-sm">
          <div className='flex gap-3'>
            <h1 className="text-4xl font-extrabold text-white tracking-wider uppercase mb-2">About</h1>
          </div>
          <p className="text-lg font-light text-white opacity-90 font-mono" >[  This is a password manager project that utilizes React for the frontend, Express for the backend, and MongoDB and Local Storage for database storage. It offers users the flexibility to save their passwords either locally in their browser’s storage or in a MongoDB database with just a few clicks. Additionally, it provides useful features such as editing and deleting passwords, copying passwords to the clipboard, and the ability to toggle password visibility for enhanced user convenience. This ensures both security and user-friendly functionality in managing passwords.  ]</p>
        </div>
    </div>
  )
}

export default About
