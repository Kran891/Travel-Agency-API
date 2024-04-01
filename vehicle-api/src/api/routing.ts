import express from 'express'
import { addroute, createVehilce, getVehicleById, getVehiclesByRoute, removeRoute, updateVehicle } from './controllers/vehicle-controller'
const router=express.Router()
router.route("/create").post(createVehilce)
router.route("/update/:id/id").post(updateVehicle)
router.route("/:id/id").get(getVehicleById)
router.route("/:id/id/addRoute").post(addroute)
router.route("/:id/id/removeRoute").post(removeRoute)
router.route("/routes").get(getVehiclesByRoute)
export {router as VehicleRouter}