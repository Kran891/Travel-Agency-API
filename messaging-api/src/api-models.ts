interface Message{
    name:string,
    type:EmailType,
    email:string,
    dateOfJourney:Date
}
enum EmailType{
    "BOOKING_CONFORM","BOOKING_CANCELLED","ACCOUNT_CREATE"
}
export {Message}