import { NextFunction, Request, Response } from "express";
import { loggingMiddleware } from "../../logging-middleware"


type Middleware=(req:Request,res:Response,next:NextFunction)=>void;
const asyncErrorMiddleware=(middleware:Middleware)=>async (req:Request,res:Response,next:NextFunction)=>{
    let parentId=''
    try {
       loggingMiddleware(req,parentId)
     await middleware(req,res,next);
    } catch (error) {
        loggingMiddleware(error,parentId)
        next(error)
    }
}
export {asyncErrorMiddleware}