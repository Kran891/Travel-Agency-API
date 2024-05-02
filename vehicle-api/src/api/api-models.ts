interface Vehicle{
    registrationNumber:string,
    capacity:number,
    priceperkm:number,
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
    distance:number,
    startTime:string,
  }
export {Vehicle,Route}