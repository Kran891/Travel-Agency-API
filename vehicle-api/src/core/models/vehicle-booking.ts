import mongoose from "mongoose";
const VehicleBookingSchema=new mongoose.Schema({
    bookingDate:Date,
    capacity:Number,
    vehicleId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'vehicles'
    }
},
{
    toJSON:{
        transform(doc,ret){
               ret.id=ret._id,
               delete ret._id
               delete ret.__v
        }
    }
}
)
interface VehicleBookingAttr{
    bookingDate:Date,
    capacity:Number,
    vehicleId: string,
    id?:string
}
interface VehicleBookingDoc extends mongoose.Document{
    bookingDate:Date,
    capacity:Number,
    vehicleId: string
}
interface VehicleBookingModel extends mongoose.Model<VehicleBookingDoc>{
      build(vehicleBooking:VehicleBookingAttr):VehicleBookingDoc;
}
VehicleBookingSchema.statics.build=(vehicleBooking:VehicleBookingAttr)=>{
    return new VehicleBooking(vehicleBooking)
}
const VehicleBooking=mongoose.model<VehicleBookingDoc,VehicleBookingModel>('VehicleBooking',VehicleBookingSchema)

export {VehicleBooking,VehicleBookingAttr}