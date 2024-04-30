import { Channel, Message } from "amqplib";
import { Subjects } from "../../../booking/src/utils/base-publisher";
import { Listener } from "../utils/base-listener";
import { Booking } from "./models";
interface BookingCreated{
    subject:Subjects.Booking_Created;
    data:Booking
}
class MessageBookingCreatedEvent extends Listener<BookingCreated>{
    subject: Subjects.Booking_Created=Subjects.Booking_Created;
    queueGroup:string= "";
    constructor(private bookingClient:any,channel:Channel){
        super(channel);
    }
    async message(data: Booking): Promise<void> {
      await  this.bookingClient.updateBooking(data);
    }

}