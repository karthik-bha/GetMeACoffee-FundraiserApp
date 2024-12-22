import mongoose from "mongoose";

const paymentSchema=new Schema ({
    name:{
        type:String,
        required:true,
    },
    to_user:{
        type:String,
        required:true
    },
    oid:{
        type:String,
        required:true
    },
    message:{
        type:String
    }, 
    amount:{
        type:Number,
        required:true
    },
    createdAt:{
        type:Date,
        default:Date.now
    },
    updatedAt:{
        type:Date,
        default:Date.now
    },
    done:{
        type:boolean,
        default:false
    }
})

const Payment=mongoose.model("Payment", paymentSchema);
export default Payment;