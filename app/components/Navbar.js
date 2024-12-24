"use client"
import Link from 'next/link';
import React from 'react'
import { useSession, signIn, signOut } from "next-auth/react"
import {useState} from 'react'


const Navbar = () => {
  const { data: session } = useSession()
  const[dropdown, setdropdown]=useState(false)

  return (
    <nav className='text-white bg-gray-800 flex justify-between items-center h-16 py-auto px-1 md:px-20'>
   
      <div>
      <Link href="/">
        <h1 className='flex items-center font-bold text-auto md:text-[20px]'>Get Me a Coffee<span><img src="/assets/coffee.gif" width={44}/></span></h1>
        </Link>
      </div>
      <div>
        {session && <ul className='flex justify-between gap-2 items-center'>
  <div className="relative inline-block">
          <button class="relative flex items-center gap-2 text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
           onClick={()=>setdropdown(!dropdown)} onBlur={()=>{setTimeout(()=>{setdropdown(false)},100)}}>
            Welcome {session.user.name}
            <img src='/assets/dropdown.svg' width={20}/>
            </button>

            {dropdown &&  <ul className='absolute top-full left-[75px]  z-20 bg-slate-800 flex flex-col gap-2 rounded-md'>
              <Link href="/dashboard">
                <li className='px-8 py-2 hover:cursor-pointer hover:font-semibold text-[15px] hover:bg-slate-600'>
                  Dashboard</li>
              </Link>
              <Link href={`/${session.user.name}`}>
                <li className='px-8 py-2 hover:cursor-pointer hover:font-semibold text-[15px] hover:bg-slate-600'>
                  Your Profile</li>
                  </Link>
                <li className='px-8 py-2 hover:cursor-pointer hover:font-semibold text-[15px] hover:bg-slate-600'
                onClick={()=>{signOut()}}
                >Sign Out</li>
     
              </ul>
              }
             
             </div>
        </ul>

        }
        {!session && <ul className='flex justify-between gap-4'>
          <Link href="/login">
            <button
              type="button"
              class="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
            >Log In</button>
          </Link>
        </ul>}

      </div>

    </nav>
  )
}

export default Navbar;
