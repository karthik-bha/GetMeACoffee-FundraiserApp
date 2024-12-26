"use client"
import React, { useEffect, useState } from 'react'
import Script from 'next/script'
import { fetchPayments, initiate, fetchuser } from '@/actions/useractions'
import { useSearchParams } from 'next/navigation'
import { ToastContainer, toast } from 'react-toastify';
import { Bounce } from 'react-toastify'
import { useRouter } from 'next/navigation'
import 'react-toastify/dist/ReactToastify.css'
import CustomLoader from './CustomLoader';


const PaymentPage = ({ username }) => {
    // const session=useSession();
    const [paymentForm, setPaymentForm] = useState({
        name: '',
        message: '',
        amount: '',
    })

    const router = useRouter();
    const [currentUser, setcurrentUser] = useState({})
    const [payments, setPayments] = useState([]);
    const searchParams = useSearchParams();
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        getData();
    }, [])

    useEffect(() => {
        if (searchParams.get("payment") === "true") {
            toast('Thanks for your donation!', {
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
            router.push(`/${username}`)
        }
    }, [searchParams]);

    const handleChange = (e) => {
        setPaymentForm({ ...paymentForm, [e.target.name]: e.target.value })
    }

    const getData = async (params) => {
        try {
            let u = await fetchuser(username);
            setcurrentUser(u);
            let dbPayments = await fetchPayments(username);
            setPayments(dbPayments);
            console.log(u, dbPayments);
            setLoading(false);
        } catch (err) {
            setLoading(false);
            console.log({ message: "error fetching user", err });
        }
    }

    const pay = async (amount) => {
        // get order id 
        setLoading(true);
        let a = await initiate(amount, username, paymentForm);
        let orderId = a.id;
        var options = {
            "key": currentUser.razorpayid, // Enter the Key ID generated from the Dashboard
            "amount": amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
            "currency": "INR",
            "name": "Get me a coffee", //your business name
            "description": "Test Transaction",
            "image": "https://example.com/your_logo",
            "order_id": orderId, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
            "callback_url": `${process.env.NEXT_PUBLIC_URL}/api/razorpay`,
            "prefill": { //We recommend using the prefill parameter to auto-fill customer's contact information especially their phone number
                "name": "Gaurav Kumar", //your customer's name
                "email": "gaurav.kumar@example.com",
                "contact": "9000090000" //Provide the customer's phone number for better conversion rates 
            },
            "notes": {
                "address": "Razorpay Corporate Office"
            },
            "theme": {
                "color": "#3399cc"
            }
        };
        var rzp1 = new Razorpay(options);
        rzp1.open();
        setLoading(false);
    }
    return (
        <>
            {loading ? 
            <div className='min-h-screen bg-black'>
                <CustomLoader/>
            </div> : <> <ToastContainer
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

                <Script src="https://checkout.razorpay.com/v1/checkout.js"></Script>
                <div className='relative'>
                    <img src={currentUser.coverpic}
                        className='relative w-full max-h-[45vh]' alt="coverpic" />
                    <div className='absolute right-[34%] md:right-[46%] -bottom-10  '>
                        <img src={currentUser.profilepic}
                            className='rounded-full border-4 border-black size-32 overflow-auto object-cover' alt="pfp" />
                    </div>
                </div>
                <div className='flex flex-col my-12  text-center'>
                    <div className=' font-semibold'>
                        @{username}
                    </div>
                    <div className='text-slate-400'>
                        Help {currentUser.name} with a Coffee
                    </div>
                    <div>
                        {payments.length} Payments. ₹{payments.reduce((a, b) => a + b.amount, 0)} Raised.
                    </div>
                </div>
                <div className='flex w-[80%]  justify-center mx-auto gap-2 flex-col md:flex-row'>
                    <div className='bg-slate-900 w-full md:w-1/2 mb-2 py-10 px-4'>
                        <h1 className='my-5 text-2xl  font-semibold'>  Supporters</h1>
                        <ul className='px-4 overflow-auto'>
                            {payments.length === 0 && <li>No payments yet.</li>}
                            {payments.map((items, index) => {
                                return (
                                    <li key={index}>{items.name} donated <b>₹{items.amount}</b> with a message &quot;{items.message}&quot;</li>
                                )
                            })}


                        </ul>
                    </div>
                    <div className='bg-slate-900  px-6 w-full md:w-1/2  mb-2 py-10'>
                        <h1 className='my-5 text-2xl  font-semibold'>Make a donation</h1>
                        <div className='flex flex-col my-2 gap-2'>
                            <input onChange={handleChange} name="name" value={paymentForm.name} placeholder='Enter Name' type="text" className='rounded-lg bg-slate-700 p-2' required></input>
                            <input onChange={handleChange} name="message" value={paymentForm.message} placeholder='Enter Message' type="text" className='rounded-lg bg-slate-700 p-2' required></input>
                            <input onChange={handleChange} name="amount" value={paymentForm.amount} placeholder='Enter Amount' type="number" className='rounded-lg bg-slate-700 no-spinner p-2' required></input>
                        </div>
                        <div className='my-6  flex  justify-center'>
                            <button className='w-full bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2
                        disabled:to-slate-800'
                                onClick={() => pay(Number.parseInt(paymentForm.amount) * 100)} disabled={paymentForm.name?.length < 3 || paymentForm.message?.length < 4 || paymentForm.amount?.length < 1}  >Donate now</button>
                        </div>
                        <div className=' flex gap-3 flex-col md:flex-row'>
                            <button className='bg-slate-700 px-2 py-2 rounded-md text-[14px] hover:bg-slate-800 hover:font-semibold disabled:bg-slate-900' disabled={paymentForm.name?.length < 3 || paymentForm.message?.length < 4 } onClick={() => pay(1000)}>Donate ₹10</button>
                            <button className='bg-slate-700 px-2 py-2 rounded-md text-[14px] hover:bg-slate-800 hover:font-semibold disabled:bg-slate-900' disabled={paymentForm.name?.length < 3 || paymentForm.message?.length < 4 }  onClick={() => pay(2000)}>Donate ₹20</button>
                            <button className='bg-slate-700 px-2 py-2 rounded-md text-[14px] hover:bg-slate-800 hover:font-semibold disabled:bg-slate-900' disabled={paymentForm.name?.length < 3 || paymentForm.message?.length < 4 }  onClick={() => pay(3000)}>Donate ₹30</button>

                        </div>
                        <p className='flex gap-2 items-center my-4'>Powered by <span><img src="/assets/razorpay.png" width={70} className=' rounded-sm' /></span></p>
                        <p className='text-slate-600'>
                            Please note that the fields have a:
                        </p>
                        <ul className='mx-2 text-slate-600'>
                            <li>Minimum required name length of 3</li>
                            <li>Minimum required message length of 4</li>
                            <li>Minimum required amount length of 1</li>
                        </ul>
                            <p className='text-slate-600'>You will not be able to pay for a custom amount if you do not satisfy the above 3 conditions</p>
                            <p className='text-slate-600'>Need not enter amount for a pre-given donation amount</p>
                    </div>


                </div></>}


        </>
    )
}

export default PaymentPage