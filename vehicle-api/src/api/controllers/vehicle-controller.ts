import { IVehicleStorage,VehicleStorage } from "../../core/storage/vehicle-storage";
import { IVehicleService, VehicleService } from "../../core/services/vehicle-service";
import { IVehicleHandler,VehicleHandler } from "../handlers/vehicle-handler";
import { asyncErrorMiddleware } from "../middlewares/async-error-middleware";
const vehicleStorage:IVehicleStorage=new VehicleStorage();
const vehicleService:IVehicleService=new VehicleService(vehicleStorage);
const vehicleHandler:IVehicleHandler=new VehicleHandler(vehicleService);

const createVehicleAsync=asyncErrorMiddleware(vehicleHandler.createVehicle.bind(vehicleHandler))
const addrouteAsync=asyncErrorMiddleware(vehicleHandler.addRoute.bind(vehicleHandler))
const getVehicleByIdAsync=asyncErrorMiddleware(vehicleHandler.getVehicleById.bind(vehicleHandler))
const updateVehicleAsync=asyncErrorMiddleware(vehicleHandler.updateVehicle.bind(vehicleHandler))
const removeRouteAsync=asyncErrorMiddleware(vehicleHandler.removeRoute.bind(vehicleHandler))
const getVehiclesByRouteAsync=asyncErrorMiddleware(vehicleHandler.getVehiclesByRoute.bind(vehicleHandler))
export {createVehicleAsync,addrouteAsync,getVehicleByIdAsync,updateVehicleAsync,removeRouteAsync,getVehiclesByRouteAsync}
