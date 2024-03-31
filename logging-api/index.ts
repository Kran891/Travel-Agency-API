import express from 'express'
import { json } from 'body-parser'
import { createLogAsync, getLogsAsync } from './src/async-error-middleware'
import mongoose from 'mongoose';
const app=express()
app.use(json())
app.post("/api/log/create",createLogAsync);
app.get("/api/log/:id/id",getLogsAsync);

const start=async()=>{
    try {
        mongoose.connect("mongodb://localhost:27017/travel-agency-logs")
        console.log("🍀 Successfly connected to MongoDB LocalService");
        
        app.listen(4040,()=>{
            console.log(`✅ Service is running on http://localhost:4040/api/log`);
            
        })
    } catch (error) {
        console.log(`❌ Error in Connection ${error}`);
        
    }  
}
start()