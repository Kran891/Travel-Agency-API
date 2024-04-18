import express from 'express';
import { json } from 'body-parser';
import mongoose from 'mongoose';
import cookieSession from 'cookie-session'
import { NotFoundError } from './src/errors/not-found-error';
import { jsonErrorMiddle } from './src/api/middlewares/json-error-middleware';
import { UserRouting } from './src/api/routing';
import { openApiMiddleware } from './src/api/middlewares/open-api-middleware';
import { SwaggerDoc, SwaggerUI } from './src/api/utils/swagger-ui';


const app=express()
const mongoURL=process.env.MONGO_URL || "mongodb://localhost:27017/travel-agency-users"

app.use(json())
// app.get("/",(req,res)=>{
//     res.json("Welcome To Auth API")
// })
app.use("/api/user/docs/",SwaggerUI.serve,SwaggerUI.setup(SwaggerDoc));
app.use(openApiMiddleware())
app.use(jsonErrorMiddle);

export {app}