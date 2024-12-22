"use client"
import React from 'react'
import { useSession, signIn, signOut } from "next-auth/react"
import { useRouter } from 'next/navigation'


const page = () => {
    const {data:session}=useSession();
    if(session){
        const router=useRouter();
        router.push('/dashboard')
    }
    return (
        <div className='flex flex-col m-auto  h-[50vh] '>
            <div className='flex flex-col m-auto p-2'>
                <div className='mx-auto my-10'>
                    <h1 className='text-white text-3xl font-semibold'>Login here</h1>
                </div>
                <div className='flex flex-col md:flex-row  gap-2 hover:gap-4'>
                <div className=' bg-white p-2 mx-auto  rounded-md  hover:scale-105 text-black'>
                    <button className='flex gap-2 items-center hover:font-semibold'onClick={()=>{signIn("github")}}>Login with GitHub <span><img src="/assets/github.svg" width={30} /></span></button>
                </div>
                <div className=' bg-white p-2 mx-auto  rounded-md  hover:scale-105 text-black'>
                    <button className='flex gap-2 items-center hover:font-semibold'>Login with Google <span><img src="/assets/google.svg" width={30} /></span></button>
                </div>
                </div>
            </div>
        </div>
    )
}

export default page