import React from 'react'

const Navbar = () => {
  return (
    <nav className='text-white bg-gray-800 flex justify-between items-center h-16 py-auto px-1 md:px-20'>
      <div>
        <h1 className='font-bold text-auto md:text-[20px]'>Get Me a Coffee</h1>
      </div>
      <ul className='flex justify-between gap-4'>
        <li>Home</li>
        <li>About</li>
        <li>Projects</li>
        <li>Sign Up</li>
        <li>Log In</li>
     </ul>
     
    </nav>
  )
}

export default Navbar;
