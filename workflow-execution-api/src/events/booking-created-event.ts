import { Channel, Message } from "amqplib";
import { Subjects } from "../../../booking/src/utils/base-publisher";
import { Listener } from "../utils/base-listener";
import { Booking } from "./models";
import { IVehicleBookingClient } from "../core/client/vehicle-booking-client";
interface BookingCreated{
    subject:Subjects.Booking_Created;
    data:Booking
}
class VehicleBookingCreatedEvent extends Listener<BookingCreated>{
    subject: Subjects.Booking_Created=Subjects.Booking_Created;
    queueGroup:string= "VehicleBookingCreatedEvent";
    constructor(private bookingClient:IVehicleBookingClient,channel:Channel){
        super(channel);
    }
    async message(data: Booking): Promise<void> {
      await  this.bookingClient.updateBooking(data);
    }

}
export {VehicleBookingCreatedEvent}