import { NextFunction, Request, Response } from "express";
import { Route, Vehicle } from "../api-models";
import { IVehicleService } from "../../core/services/vehicle-service";


export interface IVehicleHandler{
    createVehicle(req:Request,res:Response,next:NextFunction):void;
    updateVehicle(req:Request,res:Response,next:NextFunction):void;
    getVehicleById(req:Request,res:Response,next:NextFunction):void;
    addroute(req:Request,res:Response,next:NextFunction):void;
}
export class VehicleHandler implements IVehicleHandler{
    constructor(private vehicleService:IVehicleService){}
    async createVehicle(req: Request, res: Response, next: NextFunction): Promise<void> {
        const vehicle=await this.vehicleService.createVehicle(req.body as Vehicle)
        res.status(201).json(vehicle)
    }
    async updateVehicle(req: Request, res: Response, next: NextFunction): Promise<void> {
        const {id}=req.params
        const vehicle=await this.vehicleService.updateVehicle(id,{...req.body})
        res.json(vehicle)
    }
    async getVehicleById(req: Request, res: Response, next: NextFunction): Promise<void> {
        const {id}=req.params
        const vehicle=await this.vehicleService.getVehicleById(id);
        res.json(vehicle);
    }
    async addroute(req: Request, res: Response, next: NextFunction): Promise<void> {
        const {id}=req.params
        const vehicle=await this.vehicleService.addroute(id,req.body as Route)
        res.json(vehicle)
    }
    
}
