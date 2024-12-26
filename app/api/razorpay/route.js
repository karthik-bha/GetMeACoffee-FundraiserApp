import { NextResponse } from "next/server";
import { validatePaymentVerification } from "razorpay/dist/utils/razorpay-utils";
import Payment from "@/models/Payment";
import Razorpay from "razorpay";
import connectDB from "@/db/connectDB";
import User from "@/models/User";

export const POST = async (req) => {
    try {
        await connectDB();
        let body = await req.formData();
        body = Object.fromEntries(body)

        let p = await Payment.findOne({ oid: body.razorpay_order_id })
        if (!p) {
            return NextResponse.json({ success: false, message: "Order not found!" })
        }

        // fetch razerpaysecret from db 
        let user = await User.findOne({ username: p.to_user })
        const secret = user.razorpaysecret;

        let xx = validatePaymentVerification({
            "order_id": body.razorpay_order_id,
            "payment_id": body.razorpay_payment_id
        }, body.razorpay_signature, secret || process.env.KEY_SECRET)

        if (xx) {
            const updatedPayment = await Payment.findOneAndUpdate({ oid: body.razorpay_order_id },
                { done: "true" }, { new: true })
            return NextResponse.redirect(`${process.env.NEXT_PUBLIC_URL}/${updatedPayment.to_user}?payment=true`)
        }
        else {
            return NextResponse.json({ success: false, message: "verificaton fail" })
        }
    } catch (error) {
        console.error("Payment failed!", error);
        throw new Error("Payment failed!");
    }

}