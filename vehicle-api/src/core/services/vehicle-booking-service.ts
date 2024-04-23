import { VehicleAttr } from "../models/vehicle";
import {  VehicleBookingAttr } from "../models/vehicle-booking";
import { IVehicleBookingStorage } from "../storage/vehicle-booking-storage";

interface IVehicleBookingService{
    createBooking(vehicleBooking:VehicleBookingAttr):Promise<VehicleBookingAttr>;
    updateBooking(vehicleId:string,capacity:Number,date:Date):Promise<VehicleBookingAttr | null>;
    getByVehicleId(vehicleId:string,date:Date):Promise<VehicleBookingAttr | null>;
}
class VehicleBookingService implements IVehicleBookingService{
    constructor(private vehicleBookingStorage:IVehicleBookingStorage){}
    async createBooking(vehicleBooking: VehicleBookingAttr): Promise<VehicleBookingAttr> {
        const booking=await this.vehicleBookingStorage.createBooking(vehicleBooking);
        return booking
    }
    async updateBooking(vehicleId:string,capacity: Number,date:Date): Promise<VehicleBookingAttr | null> {
        let booking:VehicleBookingAttr | null=await this.getByVehicleId(vehicleId,date);
        if(!booking){
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