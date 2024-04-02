import express from 'express';
import { json } from 'body-parser';
import mongoose from 'mongoose';
import cookieSession from 'cookie-session'
import { NotFoundError } from './src/errors/not-found-error';
import { jsonErrorMiddle } from './src/api/middlewares/json-error-middleware';
import { UserRouting } from './src/api/routing';


const app=express()
const mongoURL=process.env.MONGO_URL || "mongodb://localhost:27017/travel-agency-users"
app.set('trust proxy',true)
app.use(cookieSession({
    signed:false,
    secure:true,
    httpOnly:true
}))
app.use(json())
app.get("/",(req,res)=>{
    res.json("Welcome To Auth API")
})

app.use("/api/user/",UserRouting);
app.all('*',async(req,res,next) =>{
    try {
      throw new NotFoundError()   
    } catch (error) {
        next(error)
    }
})

app.use(jsonErrorMiddle);
const start=async()=>{
    try {
        mongoose.connect(mongoURL)
        console.log("🍀 Successfly connected to MongoDB LocalService");
        
        app.listen(4000,()=>
        {
            console.log(`✅ Service is running on http://localhost:4000/api/user`);
            
        }) 
    } catch (error) {
        console.log(`❌ Error in Connection ${error}`);
        
    }
    
}
start();