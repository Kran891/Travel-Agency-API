import { NextFunction, Request, Response } from "express";
import  Jwt  from "jsonwebtoken";
import { KEY } from "./token-generator-middleware";
import { UnAuthorizeError } from "../../errors/unauthorize-error";
const authMiddleware=(req:Request,res:Response,next:NextFunction)=>{
  try {
    const data=Jwt.verify(req.session?.jwt || req.query.jwt,KEY)
  if(!data){
    throw new UnAuthorizeError();
  }
  } catch (error) {
    throw new UnAuthorizeError();
    
  }
  
  
  
}

export {authMiddleware}