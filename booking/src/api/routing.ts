import express from 'express'
import {
    createBooking,
    updateBooking,
    deleteBooking,
    getBookingById,
    cancelBooking,
    getAllBookingsForTheDate,
    getAllBookingsOfMonth
} from './controller/booking-controller';

const router = express.Router()
router.post("/create", createBooking)
router.post("/update/:id/id", updateBooking)
router.post("/delete/:id/id", deleteBooking)
router.post("/cancel/:id/id", cancelBooking)
router.post("/getallbookingsforthedate", getAllBookingsForTheDate)
router.post("/getallbookingsofthemonth", getAllBookingsOfMonth)
router.get("/:id/id", getBookingById)


export { router as BookingRouter }