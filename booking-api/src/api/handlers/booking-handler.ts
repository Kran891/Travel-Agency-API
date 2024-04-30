import { NextFunction,Request,Response, Router } from "express";
import { IBookingService } from "../../core/services/booking-service";
import { Booking } from "../api-models";

export interface IBookingHandler{
    createBooking(req: Request, res: Response,next:NextFunction): void;
    updateBooking(req: Request, res: Response,next:NextFunction): void;
    deleteBooking(req: Request, res: Response,next:NextFunction): void;
    getBookingById(req: Request, res: Response,next:NextFunction): void;
    cancelBooking(req: Request, res: Response,next:NextFunction): void;
    getAllBookingsForTheDate(req: Request, res: Response,next:NextFunction): void;
    getAllBookingsOfMonth(req: Request, res: Response,next:NextFunction): void;

}

export class BookingHandler implements IBookingHandler{
    constructor(private bookingService : IBookingService){

    }
    async createBooking(req: Request, res: Response, next: NextFunction): Promise<void> {
        const booking = await this.bookingService.createBooking(req.body as Booking);
        res.status(201).json(booking)
    }
    async updateBooking(req: Request,res: Response, next: NextFunction): Promise<void> {
        const {id} = req.params;
        const updatedBooking = await this.bookingService.updateBooking(id,{...req.body});
        res.status(200).json(updatedBooking);
    }
    async deleteBooking(req: Request,res: Response, next: NextFunction): Promise<void> {
        const {id} = req.params;
        const deletedBooking = await this.bookingService.deleteBooking(id);
        res.status(200).json(deletedBooking);
    }
    async cancelBooking(req: Request, res: Response,next:NextFunction): Promise<void>{
        const {id} = req.params;
        const cancelledBooking = await this.bookingService.cancelBooking(id,{...req.body});
        res.status(200).json(cancelledBooking);
    }
    async getBookingById(req: Request,res: Response, next: NextFunction): Promise<void> {
        const {id} = req.params;
        const fetchedBooking = await this.bookingService.getBookingById(id);
        res.status(200).json(fetchedBooking);
    }
    async getAllBookingsForTheDate(req: Request, res: Response,next:NextFunction): Promise<void>{
        const {date} = req.body;
        const allBookingsForTheDate = await this.bookingService.getAllBookingsForTheDate(date);
        res.status(200).json(allBookingsForTheDate);
    }
    async getAllBookingsOfMonth(req: Request, res: Response,next:NextFunction): Promise<void>{
        const {month} = req.body;
        const allBookingsOfMonth = await this.bookingService.getAllBookingsOfMonth(month);
        res.status(200).json(allBookingsOfMonth);
    }
}