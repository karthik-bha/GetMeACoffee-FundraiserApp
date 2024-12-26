import mongoose from "mongoose";
import dotenv from 'dotenv';
dotenv.config();

const connectDB = async () => {
    try {
       
        const db = await mongoose.connect(process.env.MONGO_URL , {
            useNewUrlParser: true,
            useUnifiedTopology: true, 
        });
        console.log(process.env.MONGO_URL);
        console.log(`MongoDB connected: ${db.connection.host}`);
    } catch (error) {
        console.error(`Error connecting to MongoDB: ${error.message}`);
        process.exit(1); 
    }
};

export default connectDB;
