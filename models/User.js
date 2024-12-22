import mongoose from "mongoose";

const userSchema=new Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    username:{
        type:String,
        required:true
    },
    pfp:{
        type:String,
        required:true,

    },
    razorpay_id:{
        type:String,
        required:true
    },
    razorpay_secret:{
        type:String,
        required:true
    }

})

const User=mongoose.model("User", userSchema);

export default User; 