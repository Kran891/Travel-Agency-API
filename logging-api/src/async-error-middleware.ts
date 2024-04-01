import { NextFunction,Response, Request } from "express"
import { LoggingService } from "./logging-service"
const loggingService=LoggingService()
type Middleware=(req:Request,res:Response,next:NextFunction)=>Promise<void>
const asyncErrorMiddleware= (middlware:Middleware)=>async (req:Request,res:Response,next:NextFunction)=>{
    try{
      await middlware(req,res,next)
    }catch(err:any){
        console.error(err);
    }
}
const createLogAsync=asyncErrorMiddleware(loggingService.createLog)
const getLogsAsync=asyncErrorMiddleware(loggingService.getLogs)

export {createLogAsync,getLogsAsync}