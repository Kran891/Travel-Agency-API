import mongoose from 'mongoose';
import http from 'http'
import { app } from './app';

const mongoURL=process.env.MONGO_URL || "mongodb://localhost:27017/travel-agency-users"




const start=async()=>{
    try {
        mongoose.connect(mongoURL)
        console.log("🍀 Successfly connected to MongoDB LocalService.");
        
        http.createServer(app).listen(4000,()=>
        {
            console.log(`✅ Service is running on http://localhost:4000/api/user/docs`);
            
        }) 
    } catch (error) {
        console.log(`❌ Error in Connection ${error}`);
        
    }
    
}
start();