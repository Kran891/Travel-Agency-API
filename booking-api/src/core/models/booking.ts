import mongoose from "mongoose";
enum BookingStatus{
    "BOOKED","CANCELLED"
}

const bookingSchema = new mongoose.Schema({
    vehicleId : {
        type : String,
        require : true
    },
    bookingDate : {
        type : Date,
        require : true,
        default : Date.now
    },
    journeyDate : {
        type : Date,
        require : true
    },
    boardingPoint : {
        type : String,
        require : true
    },
    dropPoint : {
        type : String,
        require : true
    },
    contactNumber : {
        type : Number,
        require : true
    },
    fare : {
        type : Number,
        require : true
    },
    bookingStatus : {
        type : String,
        enum : BookingStatus
    },
    passengerDetails : []
},{
    toJSON : {
        transform(doc,ret){
            ret.id = ret._id;
            delete ret._id;
            delete ret._v;
        }
    }
}
);
interface PassengerDetails {
    name : string,
    gender : string,
    age : Number
}
interface BookingAttr{
    vehicleId : string,
    bookingDate : Date,
    journeyDate : Date,
    boardingPoint : string,
    dropPoint : string,
    contactNumber : Number,
    fare : Number,
    bookingStatus : string,
    passengerDetails? : PassengerDetails[],
    id?: string
}

interface BookingDoc extends mongoose.Document{
    vehicleId : string,
    bookingDate : Date,
    journeyDate : Date,
    boardingPoint : string,
    dropPoint : string,
    contactNumber : Number,
    fare : Number,
    bookingStatus : string,
    passengerDetails? : PassengerDetails[],
    id?: string
}

interface BookingModel extends mongoose.Model<BookingDoc>{
    build(booking:BookingAttr) : BookingDoc;
}

bookingSchema.statics.build = (booking : BookingAttr) => {
    return new Booking(booking);
}

const Booking = mongoose.model<BookingDoc,BookingModel>('booking',bookingSchema);

export {Booking,BookingAttr}