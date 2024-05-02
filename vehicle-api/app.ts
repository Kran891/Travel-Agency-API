import express from 'express';
import { json } from 'body-parser';

import cookieSession from 'cookie-session'

import { jsonErrorMiddle } from './src/api/middlewares/json-error-middleware';

import { openApiMiddleware } from './src/api/middlewares/open-api-middleware';
import { SwaggerDoc, SwaggerUI } from './src/api/utils/swagger-ui';
import cookieParser from 'cookie-parser';

const app=express()
app.set('trust proxy',true)
app.use(cookieSession({
    signed:false,
    secure:true,
    httpOnly:true
}))
app.use(cookieParser())
app.use(json())
app.use("/api/vehicles/docs",SwaggerUI.serve,SwaggerUI.setup(SwaggerDoc))
app.use(openApiMiddleware())
app.use(jsonErrorMiddle);

export {app}