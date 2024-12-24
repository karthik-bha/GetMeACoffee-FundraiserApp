import React from 'react'
import { useSession } from 'next-auth/react'
import PaymentPage from '../components/PaymentPage'

const page = ({ params }) => {
  
  return (
    <div>
     <PaymentPage username={params.username}/>
    </div>
  )
}

export default page