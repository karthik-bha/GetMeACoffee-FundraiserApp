import React from 'react'
import { useSession } from 'next-auth/react'
import PaymentPage from '../components/PaymentPage'
import connectDB from '@/db/connectDB'
import User from '@/models/User'
import { notFound } from 'next/navigation'

const page =async ({ params }) => {
  const checkUser=async()=>{
    await connectDB();
    let user= await User.findOne({username:params.username});
    if(!user){
      return notFound();
    }
  }
  await checkUser();
  
  return (
    <div>
     <PaymentPage username={params.username}/>
    </div>
  )
}

export default page