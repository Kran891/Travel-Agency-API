import { Booking, BookingAttr } from '../models/booking'

export interface IBookingStorage {
    createBooking(booking: BookingAttr): Promise<BookingAttr>;
    updateBooking(id: string, booking: BookingAttr): Promise<BookingAttr | null>;
    deleteBooking(id: string): Promise<string>;
    getBookingById(id: string): Promise<BookingAttr | null>;
    cancelBooking(id : string) : Promise<BookingAttr | null>;
    getAllBookingsForTheDate(date:Date) : Promise<BookingAttr[] | null>;
    getAllBookingsOfMonth(month : number) : Promise<BookingAttr[] | null>;

}

export class BookingStorage implements IBookingStorage {
    async createBooking(booking: BookingAttr): Promise<BookingAttr> {
        const bookingDb = new Booking(booking);
        bookingDb.save();
        return bookingDb;
    }
    async updateBooking(id: string, booking: BookingAttr): Promise<BookingAttr | null> {
        const existingBooking = Booking.findByIdAndUpdate(id, booking);
        return booking;
    }
    async deleteBooking(id: string): Promise<string> {
        Booking.findByIdAndDelete(id);
        return id;
    }
    async getBookingById(id: string): Promise<BookingAttr | null> {
        const existingBooking = Booking.findById(id);
        return existingBooking;
    }
    async cancelBooking(id: string): Promise<BookingAttr | null> {
        const existingBooking = await Booking.findById(id);
        if(existingBooking){
            existingBooking.bookingStatus  = "CANCELLED";
            await Booking.findByIdAndUpdate(id,existingBooking);
            return existingBooking;
        }
        return existingBooking;
    }
    async getAllBookingsForTheDate(date:Date) : Promise<BookingAttr[] | null>{
        const allBookingsForTheDate = await Booking.find({bookingDate:date});
        return allBookingsForTheDate;
    }
    async getAllBookingsOfMonth(month : number) : Promise<BookingAttr[] | null>{
        const year = new Date(Date.now());
        const presentYear = year.getFullYear();
        const startDate = new Date(presentYear, month, 1); 
        const endDate = new Date(presentYear, month + 1, 0);
        const allBookingsOfMonth = await Booking.find({
            bookingDate : {
                $gte : startDate,
                $lte: endDate
            }
        });
        return allBookingsOfMonth;
    }
}