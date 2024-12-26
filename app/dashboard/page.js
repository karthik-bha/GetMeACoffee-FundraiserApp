"use client"
import React, { useEffect, useState } from 'react'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { fetchuser, updateUser } from '@/actions/useractions'
import { ToastContainer, toast } from 'react-toastify';
import { Bounce } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import CustomLoader from '../components/CustomLoader';


const page = () => {

  const { data: session, update, status } = useSession();
  const [form, setForm] = useState({});
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (status === 'loading') {
      // Wait for the session to load
      setLoading(true);
    } else if (status === 'authenticated') {
      // If session is authenticated, get the user data
      getData();
    } else {
      // If not authenticated, redirect to home
      router.push('/');
    }
  }, [session, status, router]);

  const getData = async () => {
    try {
      let u = await fetchuser(session.user.name)
      setForm(u);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.error("Not logged in", error);
      throw new Error("Not logged in!");

    }
  }
  const handleSubmit = async (e) => {
    update();
    let a = await updateUser(e, session.user.name);
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
  useEffect(() => {
    if (session !== "loading") {
      setLoading(false);
    }
  }, [session])

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  return (
    <>{loading ?
      <div className='min-h-screen flex bg-black'>
        <CustomLoader />
      </div> :
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
        <div className='flex justify-around '>
          <div className='flex justify-center items-center text-center flex-col'>
            {/* form container  */}
            <div className='flex flex-col rounded-lg items-center w-[90vw] md:w-[47vw] lg:[35vw] my-10'>
              <h1 className='text-3xl font-semibold my-6 '>Dashboard</h1>
              <form className='flex flex-col gap-8  p-4 m-4 text-slate-400' action={handleSubmit}>
                <span className='flex gap-2 justify-between'><label for="name" >Name</label><input type="text" className='px-2 rounded-md bg-slate-600 text-white'
                  id="name" name="name" onChange={handleChange} value={form.name ? form.name : ""}></input></span>
                <span className='flex gap-2 justify-between'><label for="email" >Email</label><input type="text" className='px-2 rounded-md bg-slate-600 text-white'
                  id="email" name="email" onChange={handleChange} value={form.email ? form.email : ""}></input></span>
                <span className='flex gap-2 justify-between'><label for="username" >Username</label><input type="text" className='px-2 rounded-md bg-slate-600 text-white'
                  id="username" name="username" onChange={handleChange} value={form.username ? form.username : ""}></input></span>
                <span className='flex gap-2 justify-between'><label for="profilepic" >Profile Pic</label><input type="text" className='px-2 rounded-md bg-slate-600 text-white'
                  id="profilepic" name="profilepic" onChange={handleChange} value={form.profilepic ? form.profilepic : ""}></input></span>
                <span className='flex gap-2 justify-between'><label for="coverpic" >coverpic Pic</label><input type="text" className='px-2 rounded-md bg-slate-600 text-white'
                  id="coverpic" name="coverpic" onChange={handleChange} value={form.coverpic ? form.coverpic : ""}></input></span>
                <span className='flex gap-2 justify-between'><label for="razorpayid">Razorpay ID</label><input type="text" className='px-2 rounded-md bg-slate-600 text-white'
                  id="razorpayid" name="razorpayid" onChange={handleChange} value={form.razorpayid ? form.razorpayid : process.env.NEXT_PUBLIC_KEY_ID}></input></span>
                <span className='flex gap-1 md:gap-4 justify-between'><label for="razorpaysecret" >Razorpay Secret</label><input type="password" className='px-2 rounded-md bg-slate-600 text-white'
                  id="razorpaysecret" name="razorpaysecret" onChange={handleChange} value={form.razorpaysecret ? form.razorpaysecret : ""}></input></span>
                <div className='my-6'>
                  <button type="submit" className='text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-8 py-2 text-center me-2 mb-2'>
                    Save</button>
                </div>
              </form>
              <div className=' text-left max-w-[370px] text-slate-300'>
                <h1 className='text-center text-[18px] md:text-2xl font-bold'>Guide for a good profile</h1>
                <h2 className='mt-2 md:text-[18px] font-semibold'>You can do the folowing (<i>recommended</i> )</h2>

                <ul className='mx-2 decoration-current text-[14px] md:text-[16px] text-slate-400'>
                  <li>Set your Name </li>
                  <li>Change your username</li>
                  <li>Set a cover pic and profile pic</li>
                </ul>
                <div className='my-2 text-[14px] md:text-[16px] '>
                  <h3 className='mt-2'>You CANNOT change your e-mail</h3>

                  <p className='mt-2'>If you'd like to recieve payments, set your own Razorpay id and secret. </p>

                  <p className='mt-2'>By default, a test key and secret is used.</p>

                  <p className='mt-2'>Never share your razorpay secret.</p>

                </div>
              </div>
            </div>
          </div>

        </div>
      </>}

    </>
  )
}

export default page