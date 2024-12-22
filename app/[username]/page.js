import React from 'react'

const page = ({ params }) => {
  return (
    <div>
      <div className='relative'>
        <img src="https://c10.patreonusercontent.com/4/patreon-media/p/campaign/7110284/3216aec993d046fea4c3e1438dc4fe62/eyJ3IjoxNjAwLCJ3ZSI6MX0%3D/1.jpg?token-time=1735948800&token-hash=Atomq69U9_20n8fRHYtMYvDCdwaVZutqnme58FsYCrc%3D"
          className='relative w-full max-h-[45vh]'alt="coverpic" />
        <div className='absolute right-[34%] md:right-[46%] -bottom-10  '>
          <img src="https://c10.patreonusercontent.com/4/patreon-media/p/campaign/7110284/c922fa2c0a7744d5807b0d2c7d3e2fab/eyJoIjoxMDgwLCJ3IjoxMDgwfQ%3D%3D/1.jpg?token-time=1736121600&token-hash=7t2dfRW3kb8iS2zUldTKsHdjDjx8RpwOBwv0kAI6tWc%3D"
            width={125} height={125} className='rounded-full border-4 border-black' alt="pfp"/>
        </div>
      </div>
      <div className='flex flex-col my-12  text-center'>
        <div className=' font-semibold'>
          @{params.username}
        </div>
        <div className='text-slate-400'>
          Creating stuff for Oracle, Microsoft, Google and more..
        </div>
        <div>
          20,000 members. 20 posts .$14000/release 
          </div>
      </div>
      <div className='flex w-[80%]  justify-center mx-auto gap-2 flex-col md:flex-row'>
      <div className='bg-slate-900 w-full md:w-1/2 mb-2 py-10 px-4'>
      <h1 className='my-5 text-2xl  font-semibold'>  Supporters</h1>
        <ul className='px-4 overflow-auto'>
          <li>John Doe donated <b>$30</b> with a message "keep it up"</li>
          <li>John Doe donated <b>$30</b> with a message "keep it up"</li>
          <li>John Doe donated <b>$30</b> with a message "keep it up"</li>
          <li>John Doe donated <b>$30</b> with a message "keep it up"</li>
          <li>John Doe donated <b>$30</b> with a message "keep it up"</li>
        </ul>
      </div>
      <div className='bg-slate-900  px-6 w-full md:w-1/2  mb-2 py-10'>
      <h1 className='my-5 text-2xl  font-semibold'>Make a donation</h1>
        <div className='flex flex-col my-2 gap-2'>
          <input placeholder='Enter Name' type="text" className='rounded-lg bg-slate-700 p-2'></input>
          <input placeholder='Enter Message' type="text" className='rounded-lg bg-slate-700 p-2'></input>
          <input placeholder='Enter Amount' type="number" className='rounded-lg bg-slate-700 no-spinner p-2'></input>
        </div>
        <div className='my-6  flex  justify-center'>
        <button className='w-full bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2'>Donate now</button>
        </div>
        <div className=' flex gap-3 flex-col md:flex-row'>
        <button className='bg-slate-700 px-2 py-2 rounded-md text-[14px] hover:bg-slate-800 hover:font-semibold'>Donate $10</button>
        <button className='bg-slate-700 px-2 py-2 rounded-md text-[14px] hover:bg-slate-800 hover:font-semibold'>Donate $20</button>
        <button className='bg-slate-700 px-2 py-2 rounded-md text-[14px] hover:bg-slate-800 hover:font-semibold'>Donate $30</button>

      </div>
      <p className='flex gap-2 items-center my-4'>Powered by <span><img src="/assets/razorpay-icon.svg" width={70} className='bg-white opacity-70 rounded-sm'/></span></p>
      </div>
     
      </div>

    </div>
  )
}

export default page