import { Route, Vehicle, VehicleAttr } from "../models/vehicle";

export interface IVehicleStorage{
    createVehicle(vehicle:VehicleAttr):Promise<VehicleAttr>;
    updateVehicle(id:string,vehicle:VehicleAttr):Promise<VehicleAttr  | null>;
    getVehicleById(id:string):Promise<VehicleAttr  | null>;
    addRoute(id:string,route:Route):Promise<VehicleAttr | null>
    removeRoute(id:string,route:Route):Promise<VehicleAttr | null>
}
export class VehicleStorage implements IVehicleStorage{
    async createVehicle(vehicle: VehicleAttr): Promise<VehicleAttr> {
        const vehicleDb=Vehicle.build(vehicle);
        await vehicleDb.save()
        return vehicleDb
    }
    async updateVehicle(id:string,vehicle: VehicleAttr): Promise<VehicleAttr | null> {
        const exsitingVehicle=await Vehicle.findByIdAndUpdate(id,vehicle);
        return exsitingVehicle
    }
    async getVehicleById(id: string): Promise<VehicleAttr  | null>{
        const vehicle=await Vehicle.findById(id);
        return vehicle
    }
    async addRoute(id: string, route: Route): Promise<VehicleAttr | null> {
        const vehicle=await Vehicle.findById(id);
         vehicle?.routes.push(route)
        await vehicle?.save()
        return vehicle
    }
    async removeRoute(id:string,route:Route): Promise<VehicleAttr | null>{
      const vehicle=await Vehicle.findByIdAndUpdate(id,{$pull:{routes:{source:route.source,destination:route.destination}}});
      return vehicle
      
    }
    
}
