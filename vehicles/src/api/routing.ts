import express from 'express'
import { addroute, createVehilce, getVehicleById, updateVehicle } from './controllers/vehicle-controller'
const router=express.Router()
router.post("/create",createVehilce)
router.post("/update/:id/id",updateVehicle)
router.get("/:id/id",getVehicleById)
router.post("/:id/id/route",addroute)

export {router as VehicleRouter}