import { Booking } from "../../events/models";
import { UpdateVehicleBooking } from "./client-urls";
import { postData } from "./fetch";

interface IVehicleBookingClient{
    updateBooking(data:Booking):void;
}
class VehicleBookingClient implements IVehicleBookingClient{
    async updateBooking(data: Booking): Promise<void> {
        const response=await postData(UpdateVehicleBooking(data.jwt,data.vehicleId),data).catch((err:Error)=>{
            throw new Error(`An Error Occured ${err}`)
        })
        
    }
    
} 
export {IVehicleBookingClient,VehicleBookingClient} 