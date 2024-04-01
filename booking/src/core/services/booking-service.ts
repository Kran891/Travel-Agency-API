import { ServiceError } from "../../errors/service-error";
import { BookingAttr } from "../models/booking";
import { IBookingStorage } from "../storage/booking-storage";

export interface IBookingService {
    createBooking(booking: BookingAttr): Promise<BookingAttr>;
    updateBooking(id: string, booking: BookingAttr): Promise<BookingAttr | null>;
    deleteBooking(id: string): Promise<string>;
    getBookingById(id: string): Promise<BookingAttr | null>;
    cancelBooking(id: string): Promise<BookingAttr | null>;
    getAllBookingsForTheDate(date:Date) : Promise<BookingAttr[] | null>;
    getAllBookingsOfMonth(month : number) : Promise<BookingAttr[] | null>;
}

export class BookingService implements IBookingService {
    constructor(private bookingStorage: IBookingStorage) { }
    async createBooking(booking: BookingAttr): Promise<BookingAttr> {
        if (booking) {
            const createdBooking = await this.bookingStorage.createBooking(booking);
            return createdBooking;
        }
        else {
            throw new ServiceError(`Can't create the booking ${booking}`)
        }
    }
    async updateBooking(id: string, booking: BookingAttr): Promise<BookingAttr | null> {
        const updateBooking = await this.bookingStorage.updateBooking(id, booking);
        if (updateBooking) {
            return updateBooking;
        }
        else {
            throw new ServiceError(`No booking found with ${id}`);
        }
    }
    async deleteBooking(id: string): Promise<string> {
        if (id) {
            const res = await this.bookingStorage.deleteBooking(id);
            if (res) {
                return res;
            }
            else {
                throw new ServiceError(`No Booking found with ${id}`);
            }
        }
        else {
            throw new ServiceError(`Id not found`);
        }
    }
    async cancelBooking(id: string): Promise<BookingAttr | null> {
        if (id) {
            const res = await this.bookingStorage.cancelBooking(id);
            if (res) {
                return res;
            } else {
                throw new ServiceError(`Booking not found with ${id}`);
            }
        }
        else {
            throw new ServiceError(`Id not found`);
        }
    }
    async getBookingById(id: string): Promise<BookingAttr | null> {
        if (id) {
            const res = await this.bookingStorage.getBookingById(id);
            if (res) {
                return res;
            }
            else {
                throw new ServiceError(`Booking not found with ${id}`);
            }
        }
        else {
            throw new ServiceError(`Id not found`);
        }
    }
    async getAllBookingsForTheDate(date:Date) : Promise<BookingAttr[] | null>{
        if(date){
            const res = await this.bookingStorage.getAllBookingsForTheDate(date);
            if(res){
                return res;
            }
            else{
                throw new ServiceError(`Bookings not found with ${date}`);
            }
        }
        else {
            throw new ServiceError(`Date not found`);
        }
    }
    async getAllBookingsOfMonth(month : number) : Promise<BookingAttr[] | null>{
        if(month){
            const res = await this.bookingStorage.getAllBookingsOfMonth(month);
            if(res){
                return res;
            }
            else{
                throw new ServiceError(`Bookings not found with ${month}`);
            }
        }
        else {
            throw new ServiceError(`Month not found`);
        }
    }
}