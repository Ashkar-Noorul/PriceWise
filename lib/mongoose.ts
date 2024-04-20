import mongoose from "mongoose";

let isConnected = false;

export const connectToDB=async()=>{
    mongoose.set('strictQuery',true);

    if(!process.env.MONGODB_URI){
        console.log('Mongodb URI is not defined');
        return;
    }
    if(isConnected){
        console.log('=> using existing db connection');
        return;
    }
    try{
        await mongoose.connect(process.env.MONGODB_URI);
        isConnected = true;
        console.log('MongoDb connected');
    }
    catch(error){
        console.log(error);
    }
}