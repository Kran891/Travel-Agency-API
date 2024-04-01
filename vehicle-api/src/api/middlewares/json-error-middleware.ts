import { NextFunction, Request, Response } from "express";
import { DatabaseError } from "../../errors/database-error";
import { CustomError } from "../../errors/custom-error";

const jsonErrorMiddle=(err:Error,req:Request,res:Response,_next:NextFunction)=>{
    if(err  instanceof CustomError){
        const customError= err as CustomError;
        res.status(err.statusCode).json(customError.setError())
    }
    else
    res.status(500).json(err.message);
}
export {jsonErrorMiddle}