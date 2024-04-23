import { VehicleBooking, VehicleBookingAttr } from "../models/vehicle-booking";

interface IVehicleBookingStorage{
    createBooking(vehicleBooking:VehicleBookingAttr):Promise<VehicleBookingAttr>;
    updateBooking(id:string,capacity:Number):Promise<VehicleBookingAttr | null>;
    getByVehicleId(vehicleId:string,date:Date):Promise<VehicleBookingAttr | null>;
}
class VehicleBookingStorage implements IVehicleBookingStorage{
    async createBooking(vehicleBooking: VehicleBookingAttr): Promise<VehicleBookingAttr> {
        const booking=await VehicleBooking.build(vehicleBooking);
        booking.save();
        return booking;
    }
    async updateBooking(id: string, capacity: Number): Promise<VehicleBookingAttr | null> {
        const booking=await VehicleBooking.findByIdAndUpdate(id,{$inc:{capacity:capacity}},{new:true});
        return booking;
    }
    async getByVehicleId(vehicleId: string, date: Date): Promise<VehicleBookingAttr | null> {
        const booking=await VehicleBooking.findOne({vehicleId:vehicleId,bookingDate:date});
        return booking;

    }
    
}
export {IVehicleBookingStorage,VehicleBookingStorage}