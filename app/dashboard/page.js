"use client"
import React, { useEffect, useState } from 'react'
import { useSession } from 'next-auth/react'
import {useRouter} from 'next/navigation'
import { fetchuser, updateUser } from '@/actions/useractions'
import { ToastContainer, toast } from 'react-toastify';
import { Bounce } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const page = () => {
  
  const {data:session, update}=useSession();
  const [form, setForm]=useState({});
  const router=useRouter();

  useEffect(()=>{
    getData();
    if(!session){
     
      router.push('/');
    }
  },[router, session])
  
  const getData=async()=>{
    let u=await fetchuser(session.user.name)
    setForm(u);
  }
  const handleSubmit=async(e)=>{
    update();
    let a=await updateUser(e, session.user.name);
     toast('Profile Updated!', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: false,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                    transition: Bounce,
                });
  }

  const handleChange=(e)=>{
    setForm({...form, [e.target.name]:e.target.value})
  }

  return (
    <>
       <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick={false}
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
              
            />
    <div className='flex justify-center items-center text-center flex-col'>
       {/* form container  */}
        <div className='flex flex-col rounded-lg items-center w-[90vw] md:w-[47vw] lg:[35vw] my-10'>
        <h1 className='text-3xl font-semibold my-6 '>Dashboard</h1>
          <form className='flex flex-col gap-8  p-4 m-4 text-slate-400' action={handleSubmit}>
            <span className='flex gap-2 justify-between'><label for="name" >Name</label><input type="text" className='px-2 rounded-md bg-slate-600 text-white'
            id="name" name="name" onChange={handleChange} value={form.name? form.name:""}></input></span>
            <span className='flex gap-2 justify-between'><label for="email" >Email</label><input type="text" className='px-2 rounded-md bg-slate-600 text-white'
            id="email" name="email" onChange={handleChange} value={form.email? form.email:""}></input></span>
            <span className='flex gap-2 justify-between'><label for="username" >Username</label><input type="text" className='px-2 rounded-md bg-slate-600 text-white'
            id="username" name="username" onChange={handleChange} value={form.username? form.username:""}></input></span>
            <span className='flex gap-2 justify-between'><label for="profilepic" >Profile Pic</label><input type="text" className='px-2 rounded-md bg-slate-600 text-white'
            id="profilepic" name="profilepic" onChange={handleChange} value={form.profilepic? form.profilepic:""}></input></span>
             <span className='flex gap-2 justify-between'><label for="coverpic" >coverpic Pic</label><input type="text" className='px-2 rounded-md bg-slate-600 text-white'
            id="coverpic" name="coverpic" onChange={handleChange} value={form.coverpic? form.coverpic:""}></input></span>
            <span className='flex gap-2 justify-between'><label  for="razorpayid">Razorpay ID</label><input type="text" className='px-2 rounded-md bg-slate-600 text-white'
            id="razorpayid" name="razorpayid" onChange={handleChange} value={form.razorpayid? form.razorpayid:""}></input></span>
            <span className='flex gap-1 md:gap-4 justify-between'><label for="razorpaysecret" >Razorpay Secret</label><input type="text" className='px-2 rounded-md bg-slate-600 text-white'
            id="razorpaysecret" name="razorpaysecret" onChange={handleChange} value={form.razorpaysecret? form.razorpaysecret:""}></input></span>
            <div className='my-6'>
          <button type="submit" className='text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-8 py-2 text-center me-2 mb-2'>
            Save</button>
          </div>
          </form>

        </div>
    </div>
    </>
  )
}

export default page