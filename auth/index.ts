import express from 'express';
import { json } from 'body-parser';
import mongoose from 'mongoose';
import cookieSession from 'cookie-session'
import { NotFoundError } from './src/errors/not-found-error';
import { jsonErrorMiddle } from './src/api/middlewares/json-error-middleware';
import { UserRouting } from './src/api/routing';
import { tokenGeneratorMiddleware } from './src/api/middlewares/token-generator-middleware';

const app=express()
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
        mongoose.connect("mongodb://localhost:27017/travel-agency-users")
        app.listen(4000,()=>
        {
            console.log("Running on port ",4000);
            
        }) 
    } catch (error) {
        
    }
    
}
start();