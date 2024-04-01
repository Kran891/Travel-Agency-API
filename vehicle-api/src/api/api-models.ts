interface Vehicle{
    registrationNumber:string,
    capacity:Number,
    priceperkm:Number,
    vehicleStatus:VehicleStatus,
    driverId:string,
    vehicleType:VehicleType,
    routes:Route[],
    id?:string
}
enum VehicleStatus{
    "ON_DUTY","OFF_DUTY"
}
enum VehicleType{
    "SUV","MINI","MACRO","CUV","MINIVAN"
}
interface Route{
    source:string,
    destination:string,
    distance:Number
  }
export {Vehicle,Route}