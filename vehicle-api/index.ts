import express from 'express';
import { json } from 'body-parser';
import mongoose from 'mongoose';
import cookieSession from 'cookie-session'
import { NotFoundError } from './src/errors/not-found-error';
import { jsonErrorMiddle } from './src/api/middlewares/json-error-middleware';
import { VehicleRouter } from './src/api/routing';
import { openApiMiddleware } from './src/api/middlewares/open-api-middleware';
import { SwaggerDoc, SwaggerUI } from './src/api/utils/swagger-ui';


const app=express()
const mongoURL=process.env.MONGOURL || "mongodb://localhost:27017/travel-agency-vehicles"
app.set('trust proxy',true)
app.use(cookieSession({
    signed:false,
    secure:true,
    httpOnly:true
}))
app.use(json())
// app.get("/",(req,res)=>{
//     res.json("Welcome To Vehicle API")
// })
app.use("/api/vehicles/docs",SwaggerUI.serve,SwaggerUI.setup(SwaggerDoc))
//app.use("/api/vehicles/",VehicleRouter);
// app.all('*',async(req,res,next) =>{
//     try {
//       throw new NotFoundError()   
//     } catch (error) {
//         next(error)
//     }
// })
app.use(openApiMiddleware())
app.use(jsonErrorMiddle);
const start=async()=>{
    try {
        mongoose.connect(mongoURL)
        console.log("🍀 Successfly connected to MongoDB LocalService");
        
        app.listen(4001,()=>
        {
            console.log(`✅ Service is running on http://localhost:4001/api/vehicles`);
            
        }) 
    } catch (error) {
        console.log(`❌ Error in Connection ${error}`);
    }
    
}
start();