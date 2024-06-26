import { IVehicleBookingService, VehicleBookingService } from "../../core/services/vehicle-booking-service";
import { IVehicleBookingStorage, VehicleBookingStorage } from "../../core/storage/vehicle-booking-storage";
import { IVehicleBookingHandler, VehicleBookingHandler } from "../handlers/vehicle-booking-handler";
import { asyncErrorMiddleware } from "../middlewares/async-error-middleware";
import { vehicleService } from "./vehicle-controller";

const vehicleBookingStorage:IVehicleBookingStorage=new VehicleBookingStorage();
const vehicleBookingService:IVehicleBookingService=new VehicleBookingService(vehicleBookingStorage,vehicleService);
const vehicleHandler:IVehicleBookingHandler=new VehicleBookingHandler(vehicleBookingService);
const updateBookingAsync=asyncErrorMiddleware(vehicleHandler.updateBooking.bind(vehicleHandler));

export {updateBookingAsync}