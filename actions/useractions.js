"use server"
import Razorpay from "razorpay"
import Payment from "@/models/Payment"

import connectDB from "@/db/connectDB"
import User from "@/models/User"

export const initiate = async (amount, to_username, paymentForm) => {
    await connectDB();
    let instance = new Razorpay({ key_id: process.env.NEXT_PUBLIC_KEY_ID , key_secret:process.env.KEY_SECRET })
    //CREATES ORDERS
    let options={
        amount:Number.parseInt(amount),
        currency:"INR",
    }
    // create new orderbased on options 
    let x=await instance.orders.create(options);

    // create payment object that shows pending payment in db 
    await Payment.create({oid:x.id, amount:amount, to_user:to_username, name:paymentForm.name,
        message:paymentForm.message })

    return x;

}