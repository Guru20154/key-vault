import React from 'react'
import VaultIcon from './VaultIcon'
import { Link, useNavigate } from 'react-router-dom'

const Navbar = () => {
  const navigate = useNavigate(); // Hook to programmatically navigate

  const handleSelectChange = (e) => {
    const selectedValue = e.target.value;
    if (selectedValue === "Cloud") {
      navigate('/'); // Navigate to cloud storage route
    } else if (selectedValue === "Local") {
      navigate('/local'); // Navigate to local storage route
    }
  }
  return (
    <nav className='text-white sticky top-0 z-10 bg-black'>
      <div className="mycontainer flex justify-between items-center px-5 py-5">

        <div className="logo font-bold flex gap-3">
          KeyVault
          <VaultIcon h="24" />
        </div>
        <div className='flex flex-row gap-5 '>
          <select className='bg-black rounded-sm border border-none' onChange={handleSelectChange}>
            <option value="Cloud">Cloud Storage</option>
            <option value="Local">Local Storage</option>
          </select>
          <ul>
            <li className='flex gap-4'>
              <Link className='hover:font-bold' to="/">Home</Link>
              <Link className='hover:font-bold' to="/about">About</Link>
              <Link className='hover:font-bold' to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
