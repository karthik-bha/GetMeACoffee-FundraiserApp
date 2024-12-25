"use server"
import Razorpay from "razorpay"
import Payment from "@/models/Payment"

import connectDB from "@/db/connectDB"
import User from "@/models/User"

export const initiate = async (amount, to_username, paymentForm) => {
    await connectDB();
    let user=await User.findOne({username: to_username})
    const secret=user.razorpaysecret;
    let instance = new Razorpay({ key_id: user.razorpayid , key_secret:secret })
    //CREATES ORDERS
    let options={
        amount:Number.parseInt(amount),
        currency:"INR",
    }
    // create new orderbased on options 
    let x=await instance.orders.create(options);

    // create payment object that shows pending payment in db 
    await Payment.create({oid:x.id, amount:amount/100, to_user:to_username, name:paymentForm.name,
        message:paymentForm.message })

    return x;

}
export const fetchuser=async(username)=>{
    await connectDB();
    let u=await User.findOne({username:username});
    let user=u.toObject({flattenObjectIds:true});
    return user;
}

export const fetchPayments=async(username)=>{
    await connectDB();
    let p=await Payment.find({to_user:username, done:true}).sort({amount:-1}).lean();
    return p;
}

export const updateUser=async(data, oldusername)=>{
    await connectDB();
    let ndata=Object.fromEntries(data);
    if(oldusername!==ndata.username){
        let u=await User.findOne({username:ndata.username});
        if(u){
            return {error:"Username already exists"};
        }
        await User.updateOne({email:ndata.email}, ndata);
        await Payment.updateMany({to_user:oldusername}, {to_user:ndata.username})
    }
    else{
    await User.findOneAndUpdate({email:ndata.email}, ndata);

    }
}