import { NextFunction, Request, Response } from "express";
import { DatabaseError } from "../../errors/database-error";
import { CustomError } from "../../errors/custom-error";
import { BadRequest } from "express-openapi-validator/dist/openapi.validator";

const jsonErrorMiddle=(err:Error,req:Request,res:Response,_next:NextFunction)=>{
    if(err  instanceof CustomError){
        const customError= err as CustomError;
        res.status(err.statusCode).json(customError.setError())
    }
    else if(err instanceof BadRequest){
        res.status(400).json([{msg:err.message}])
    }
    else
      res.status(500).json(err.message);
}
export {jsonErrorMiddle}