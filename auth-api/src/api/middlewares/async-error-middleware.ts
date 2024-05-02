import { NextFunction, Request, Response } from "express";

type Middleware=(req:Request,res:Response,next:NextFunction)=>void;
const asyncErrorMiddleware=(middleware:Middleware)=>async (req:Request,res:Response,next:NextFunction)=>{
    try {
     await middleware(req,res,next);
    } catch (error) {
        next(error)
    }
}

export {asyncErrorMiddleware}