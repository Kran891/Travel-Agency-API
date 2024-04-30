import { IBookingStorage,BookingStorage } from "../../core/storage/booking-storage";
import { IBookingService,BookingService } from "../../core/services/booking-service";
import { IBookingHandler,BookingHandler } from "../handlers/booking-handler";
import { asyncErrorMiddleware } from "../middlewares/async-error-middleware";

const bookingStorage:IBookingStorage = new BookingStorage();
const bookingService:IBookingService = new BookingService(bookingStorage);
const bookingHandler:IBookingHandler = new BookingHandler(bookingService);

const createBooking = asyncErrorMiddleware(bookingHandler.createBooking.bind(bookingHandler));
const updateBooking = asyncErrorMiddleware(bookingHandler.updateBooking.bind(bookingHandler));
const deleteBooking = asyncErrorMiddleware(bookingHandler.deleteBooking.bind(bookingHandler));
const getBookingById = asyncErrorMiddleware(bookingHandler.getBookingById.bind(bookingHandler));
const cancelBooking = asyncErrorMiddleware(bookingHandler.cancelBooking.bind(bookingHandler));
const getAllBookingsForTheDate = asyncErrorMiddleware(bookingHandler.getAllBookingsForTheDate.bind(bookingHandler));
const getAllBookingsOfMonth = asyncErrorMiddleware(bookingHandler.getAllBookingsOfMonth.bind(bookingHandler));


export {
    createBooking,
    updateBooking,
    deleteBooking,
    getBookingById,
    cancelBooking,
    getAllBookingsForTheDate,
    getAllBookingsOfMonth
}
