export interface Booking{
    vehicleId : string,
    bookingDate : Date,
    journeyDate : Date,
    boardingPoint : string,
    dropPoint : string,
    contactNumber : Number,
    fare : Number,
    bookingStatus : string,
    id?: string,
    jwt:string
}