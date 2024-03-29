import { IVehicleStorage,VehicleStorage } from "../../core/storage/vehicle-storage";
import { IVehicleService, VehicleService } from "../../core/services/vehicle-service";
import { IVehicleHandler,VehicleHandler } from "../handlers/vehicle-handler";
import { asyncErrorMiddleware } from "../middlewares/async-error-middleware";
const vehicleStorage:IVehicleStorage=new VehicleStorage();
const vehicleService:IVehicleService=new VehicleService(vehicleStorage);
const vehicleHandler:IVehicleHandler=new VehicleHandler(vehicleService);

const createVehilce=asyncErrorMiddleware(vehicleHandler.createVehicle.bind(vehicleHandler))
const addroute=asyncErrorMiddleware(vehicleHandler.addRoute.bind(vehicleHandler))
const getVehicleById=asyncErrorMiddleware(vehicleHandler.getVehicleById.bind(vehicleHandler))
const updateVehicle=asyncErrorMiddleware(vehicleHandler.updateVehicle.bind(vehicleHandler))
const removeRoute=asyncErrorMiddleware(vehicleHandler.removeRoute.bind(vehicleHandler))
export {createVehilce,addroute,getVehicleById,updateVehicle,removeRoute}