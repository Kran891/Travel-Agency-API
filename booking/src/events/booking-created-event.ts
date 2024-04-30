import { BookingCreateResponse } from "../api/api-modelsv2";
import { Publisher, Subjects } from "../utils/base-publisher";
interface BookingCreated{
    subject:Subjects.Booking_Created,
    data:any
}
export class BookinCreatedEvent extends Publisher<BookingCreated>{
    subject: Subjects.Booking_Created=Subjects.Booking_Created;
}