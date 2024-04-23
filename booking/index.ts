import mongoose from 'mongoose';
import { app } from './app';
import http from 'http'
const mongoURL=process.env.MONGOURL || "mongodb://localhost:27017/travel-agency-vehicles"
const start=async()=>{
    try {
        mongoose.connect(mongoURL)
        console.log("🍀 Successfly connected to MongoDB LocalService");
        
        http.createServer(app).listen(4002,()=>
        {
            console.log(`✅ Service is running on http://localhost:4002/api/booking/docs`);
            
        }) 
    } catch (error) {
        console.log(`❌ Error in Connection ${error}`);
    }
    
}
start();