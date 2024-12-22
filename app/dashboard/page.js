"use client"
import React from 'react'
import { useSession } from 'next-auth/react'
import {useRouter} from 'next/navigation'
const page = () => {
  
  const {data:session}=useSession();

  if(!session){
    const router=useRouter();
    router.push('/');
  }
  return (
    <div className='flex justify-center items-center text-center flex-col'>
       {/* form container  */}
        <div className='flex flex-col rounded-lg items-center w-[90vw] md:w-[47vw] lg:[35vw] my-10'>
        <h1 className='text-3xl font-semibold my-6 '>Dashboard</h1>
          <form className='flex flex-col gap-8  p-4 m-4 text-slate-400'>
            <span className='flex gap-2 justify-between'><label for="name" >Name</label><input type="text" className='px-2 rounded-md bg-slate-600 text-white'
            id="name" name="name"></input></span>
            <span className='flex gap-2 justify-between'><label for="email" >Email</label><input type="text" className='px-2 rounded-md bg-slate-600 text-white'
            id="email" name="email"></input></span>
            <span className='flex gap-2 justify-between'><label for="username" >Username</label><input type="text" className='px-2 rounded-md bg-slate-600 text-white'
            id="username" name="username"></input></span>
            <span className='flex gap-2 justify-between'><label for="pfp" >Profile Pic</label><input type="text" className='px-2 rounded-md bg-slate-600 text-white'
            id="pfp" name="pfp"></input></span>
            <span className='flex gap-2 justify-between'><label  for="razorpay_id">Razorpay ID</label><input type="text" className='px-2 rounded-md bg-slate-600 text-white'
            id="razorpay_id" name="razorpay_id"></input></span>
            <span className='flex gap-1 md:gap-4 justify-between'><label for="razorpay_secret" >Razorpay Secret</label><input type="text" className='px-2 rounded-md bg-slate-600 text-white'
            id="razorpay_secret" name="razorpay_secret"></input></span>
            <div className='my-6'>
          <button type="submit" className='text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-8 py-2 text-center me-2 mb-2'>
            Save</button>
          </div>
          </form>

        </div>
    </div>
  )
}

export default page