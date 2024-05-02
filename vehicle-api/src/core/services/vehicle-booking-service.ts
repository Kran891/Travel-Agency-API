import { ServiceError } from "../../errors/service-error";

import {  VehicleBookingAttr } from "../models/vehicle-booking";
import { IVehicleBookingStorage } from "../storage/vehicle-booking-storage";
import { IVehicleService } from "./vehicle-service";

interface IVehicleBookingService{
    createBooking(vehicleBooking:VehicleBookingAttr):Promise<VehicleBookingAttr>;
    updateBooking(vehicleId:string,capacity:number,date:Date):Promise<VehicleBookingAttr | null>;
    getByVehicleId(vehicleId:string,date:Date):Promise<VehicleBookingAttr | null>;
}
class VehicleBookingService implements IVehicleBookingService{
    constructor(private vehicleBookingStorage:IVehicleBookingStorage,private vehicleService:IVehicleService){}
    async createBooking(vehicleBooking: VehicleBookingAttr): Promise<VehicleBookingAttr> {
        const booking=await this.vehicleBookingStorage.createBooking(vehicleBooking);
        return booking
    }
    async updateBooking(vehicleId:string,capacity: number,date:Date): Promise<VehicleBookingAttr | null> {
        let booking:VehicleBookingAttr | null=await this.getByVehicleId(vehicleId,date);
        const vehicle=await this.vehicleService.getVehicleById(vehicleId);
        if(!vehicle){
            throw new ServiceError(`No Vehicle Found with Id ${vehicleId}`);
        }
        else if(!booking){
             booking= await this.createBooking({vehicleId,bookingDate:date,capacity})
        }
        else{
            booking=await this.vehicleBookingStorage.updateBooking(booking.id!,capacity)
        }
        return booking

    }
    async getByVehicleId(vehicleId: string, date: Date): Promise<VehicleBookingAttr | null> {
       const booking=await this.vehicleBookingStorage.getByVehicleId(vehicleId,date);
       return booking
    }
}
export {IVehicleBookingService,VehicleBookingService};