"use client"
import React, { useState, useEffect } from 'react'
import { useSession, signIn } from "next-auth/react"
import { useRouter } from 'next/navigation'
import CustomLoader from '../components/CustomLoader';


const Page = () => {
    const { data: session } = useSession();
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    useEffect(() => {
        if (session) {
            // Redirect to dashboard if session exists
            router.push('/dashboard');
        }
    }, [session, router]);

    const handleSignin = () => {
        try {
            setLoading(true);
            signIn("github");
        } catch (error) {
            console.error("Error logging in!", error);
            setLoading(false);
        }
    }

    return (
        <>
            {loading ? (
                <div className='min-h-screen bg-black'>
                    <CustomLoader />
                </div>
            ) : (
                <>
                    <div className='flex flex-col m-auto h-[50vh]'>
                        <div className='flex flex-col m-auto p-2'>
                            <div className='mx-auto my-10'>
                                <h1 className='text-white text-3xl font-semibold'>Login to get started</h1>
                            </div>
                            <div className='flex flex-col md:flex-row gap-2 hover:gap-4'>
                                <div className='bg-white p-2 mx-auto rounded-md hover:scale-105 text-black'>
                                    <button
                                        className='flex gap-2 items-center hover:font-semibold'
                                        onClick={handleSignin}
                                    >
                                        Login with GitHub <span><img src="/assets/github.svg" width={30} /></span>
                                    </button>
                                </div>
                                <div className='bg-white p-2 mx-auto rounded-md hover:scale-105 text-black'>
                                    <button className='flex gap-2 items-center hover:font-semibold'>
                                        Login with Google <span><img src="/assets/google.svg" width={30} /></span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </>
    );
}

export default Page;
