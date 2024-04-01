import { NextFunction, Request, Response } from "express";
import { LogStorage } from "./logging-storage";
const logStorage=LogStorage();
const LoggingService=()=>({
    createLog:async (req:Request,res:Response,next:NextFunction)=>{
     const Id=await logStorage.createLog(req.body)
     res.json(Id);
    },
    getLogs:async (req:Request,res:Response,next:NextFunction)=>{
        const {id}=req.params
        const logArray=await logStorage.getLogs(id);
        if(logArray?.length){
            res.json(logArray)
        }else
        res.status(404).json(`No logs Found for Id ${id}`)
    }
})
export {LoggingService}