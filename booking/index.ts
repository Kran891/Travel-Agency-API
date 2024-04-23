import express from "express";
import { json } from "body-parser";
import mongoose from "mongoose";
import cookieSession from "cookie-session";
import { NotFoundError } from "./src/errors/not-found-error";
import { jsonErrorMiddle } from "./src/api/middlewares/json-error-middleware";
import { BookingRouter } from "./src/api/routing";
import { openApiMiddleware } from "./src/api/middlewares/open-api-middleware";
import swaggerUi from "swagger-ui-express";
import YAML from 'yamljs';
import path from 'path'

const app = express();
app.set('trust proxy',true);
app.use(cookieSession({
    signed:false,
    secure:true,
    httpOnly:true
}))
app.use(json())
const oasFile = YAML.load(path.join(__dirname , './src/api/oas.yaml'));
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(oasFile));
app.use(openApiMiddleware());
app.all('*',async(req,res,next) =>{
    try {
      throw new NotFoundError()   
    } catch (error) {
        next(error)
    }
});

app.use(jsonErrorMiddle);
const start=async()=>{
    try {
        mongoose.connect("mongodb://localhost:27017/travel-agency-vehicles")
        app.listen(4002,()=>
        {
            console.log("Running on port ",4002);
            
        }) 
    } catch (error) {
        
    }
    
}
start();
