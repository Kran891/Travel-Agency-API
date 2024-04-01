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

router.route("/create").post(createBooking);
router.route("/update/:id/id").post(updateBooking)
router.route("/delete/:id/id").post(deleteBooking)
router.route("/cancel/:id/id").post(cancelBooking)
router.route("/getallbookingsforthedate").post(getAllBookingsForTheDate)
router.route("/getallbookingsofthemonth").post(getAllBookingsOfMonth)
router.route("/:id/id", ).get(getBookingById)


export { router as BookingRouter }