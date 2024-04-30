import { NextFunction, Request, Response } from "express";

import { IVehicleBookingService } from "../../core/services/vehicle-booking-service";
import { authMiddleware } from "../middlewares/auth-middleware";
import { VehicleBookingAttr } from "../../core/models/vehicle-booking";

interface IVehicleBookingHandler{
    updateBooking(req:Request,res:Response,next:NextFunction):Promise<void>;
}
class VehicleBookingHandler implements IVehicleBookingHandler{
    constructor(private vehicleBookingSerivce:IVehicleBookingService){}
    async updateBooking(req: Request, res: Response, next: NextFunction): Promise<void> {
      //  await authMiddleware(req,res,next);
        const {date,capacity}=req.body
        const {vehicleId}=req.params
        const booking=await this.vehicleBookingSerivce.updateBooking(vehicleId,capacity,new Date(date));
        res.jsonp(booking)
    }
    
    
}
export {IVehicleBookingHandler,VehicleBookingHandler};