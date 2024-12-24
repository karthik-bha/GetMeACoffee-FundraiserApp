import mongoose from "mongoose";

const connectDB=async()=>{
    try{
        const db=await mongoose.connect("mongodb://localhost:27017/getMeACoffeeDB ",{useNewUrlParser:true});
         console.log("success")   
        
    }catch(error){
        console.log(error);
    }
}
export default connectDB;