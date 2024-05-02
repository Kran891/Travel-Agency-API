import express from 'express';
import { json } from 'body-parser';
import { jsonErrorMiddle } from './src/api/middlewares/json-error-middleware';
import { openApiMiddleware } from './src/api/middlewares/open-api-middleware';
import { SwaggerDoc, SwaggerUI } from './src/api/utils/swagger-ui';
import cookieParser from 'cookie-parser'
const app=express()
app.use(json())
app.use(cookieParser())
app.use("/api/user/docs/",SwaggerUI.serve,SwaggerUI.setup(SwaggerDoc));
app.use(openApiMiddleware())
app.use(jsonErrorMiddle);

export {app}