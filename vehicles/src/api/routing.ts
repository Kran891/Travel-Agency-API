import express from 'express'
import { addroute, createVehilce, getVehicleById, removeRoute, updateVehicle } from './controllers/vehicle-controller'
const router=express.Router()
router.post("/create",createVehilce)
router.post("/update/:id/id",updateVehicle)
router.get("/:id/id",getVehicleById)
router.post("/:id/id/addRoute",addroute)
router.post("/:id/id/removeRoute",removeRoute)
export {router as VehicleRouter}