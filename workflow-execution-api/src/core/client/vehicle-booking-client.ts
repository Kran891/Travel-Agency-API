import { Booking } from "../../events/models";
import { UpdateVehicleBooking } from "./client-urls";
import { postData } from "./fetch";

interface IVehicleBookingClient{
    updateBooking(data:Booking):void;
}
class VehicleBookingClient implements IVehicleBookingClient{
    async updateBooking(data: Booking): Promise<void> {
        const response=await postData(UpdateVehicleBooking(data.jwt || 'TESTING'),data).catch((err:Error)=>{
            throw new Error(`AN Error Occured ${err.message}`)
        })
        
    }
    
} 
export {IVehicleBookingClient,VehicleBookingClient} 