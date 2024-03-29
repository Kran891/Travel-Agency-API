import { Route ,VehicleAttr} from "../models/vehicle";
import { NotFoundError } from "../../errors/not-found-error";
import { ServiceError } from "../../errors/service-error";

import { IVehicleStorage } from "../storage/vehicle-storage";

export interface IVehicleService{
    createVehicle(vehicle:VehicleAttr):Promise<VehicleAttr>;
    updateVehicle(id:string,vehicle:VehicleAttr):Promise<VehicleAttr  | null>;
    getVehicleById(id:string):Promise<VehicleAttr  | null>;
    addRoute(id:string,route:Route):Promise<VehicleAttr | null>
    removeRoute(id:string,route:Route):Promise<VehicleAttr | null>
}
export class VehicleService implements IVehicleService{
    constructor(private vehicleStorage:IVehicleStorage){}
    async createVehicle(vehicle: VehicleAttr): Promise<VehicleAttr> {
        const creVehicle=await this.vehicleStorage.createVehicle(vehicle);
        if(vehicle){
            return creVehicle
        }
        throw new ServiceError(`Can't created the vehicle ${vehicle}`)
    }
    async updateVehicle(id:string,vehicle: VehicleAttr): Promise<VehicleAttr | null> {
        const upVehcile=await this.vehicleStorage.updateVehicle(id,vehicle);
        if(upVehcile){
            return upVehcile
        }
        throw new ServiceError(`No Vehicle was Found with Id ${id}`)
    }
    async getVehicleById(id: string): Promise<VehicleAttr  | null>{
        const vehicle=await this.vehicleStorage.getVehicleById(id)
        if(vehicle){
            return vehicle
        }
        throw new ServiceError(`No Vehicle was Found with Id ${id}`)
    }
    async addRoute(id: string, route: Route): Promise<VehicleAttr | null> {
        const vehicle=await this.vehicleStorage.addRoute(id,route)
        if(vehicle){
            return vehicle
        }
        throw new ServiceError(`No Vehicle was Found with Id ${id}`)
    }
    async removeRoute(id: string, route: Route): Promise<VehicleAttr | null> {
        const vehicle=await this.vehicleStorage.removeRoute(id,route)
        if(vehicle){
            return vehicle
        }
        throw new ServiceError(`No Vehicle was Found with Id ${id}`)
    }
    
}
