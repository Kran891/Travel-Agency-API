import { Publisher, Subjects } from "../../utils/base-publisher";
import { BookingCreateRequest } from "../api-modelsv2";
interface BookingCreated{
    subject:Subjects.Booking_Created,
    data:BookingCreateRequest
}
class BookingCreatedEvent extends Publisher<BookingCreated>{
    subject: Subjects.Booking_Created=Subjects.Booking_Created;
    
}