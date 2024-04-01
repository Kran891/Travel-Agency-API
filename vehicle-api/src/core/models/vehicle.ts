import mongoose from "mongoose";
enum VehicleStatus{
    "ON_DUTY","OFF_DUTY"
}
enum VehicleType{
    "SUV","MINI","MACRO","CUV","MINIVAN"
}
const vehicleSchema=new mongoose.Schema({
 registrationNumber:{
    type:String,
    required:true
 },
 capacity:{
    type:Number,
    required:true,
    min:2,
    max:50
 },
 priceperkm:{
    type:Number,
    required:true,
    min:1
 },
 driverId:{
    type:String
 },
 vehicleStatus:{
    type:String,
    enum:VehicleStatus
 },
 vehicleType:{
    type:String,
    enum:VehicleType
 },
 
 routes:[]
},{
    toJSON:{
        transform(doc,ret){
            ret.id=ret._id
            delete ret._id
            delete ret.__v
        }
    }
})
interface Route{
  source:string,
  destination:string,
  distance:Number
}
interface VehicleAttr{
    registrationNumber:string,
    capacity:Number,
    priceperkm:Number,
    vehicleStatus:VehicleStatus,
    driverId:string,
    vehicleType:VehicleType,
    routes:Route[],
    id?:string,
    
}
interface VehicleDoc extends mongoose.Document{
    registrationNumber:string,
    capacity:Number,
    priceperkm:Number,
    vehicleStatus:VehicleStatus,
    driverId:string,
    vehicleType:VehicleType,
    routes:Route[]
    id?:string
}
interface VehicleModel extends mongoose.Model<VehicleDoc>{
  
    build(vehicle:VehicleAttr):VehicleDoc;
}
vehicleSchema.statics.build=(vehicle:VehicleAttr)=>{
    return new Vehicle(vehicle);
}
const Vehicle=mongoose.model<VehicleDoc,VehicleModel>('vehicle',vehicleSchema);
export {Vehicle,VehicleAttr,Route,VehicleStatus};
