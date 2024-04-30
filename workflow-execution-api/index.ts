import http from 'http'
import { app } from './app'

import { IVehicleBookingClient, VehicleBookingClient } from './src/core/client/vehicle-booking-client';
import { VehicleBookingCreatedEvent } from './src/events/booking-created-event';
import { rabbitMq } from './src/rabbitmq-wrapper';
const RabbitMqUrl='amqp://localhost'
const storage:IVehicleBookingClient=new VehicleBookingClient();
const start=async ()=>{try{
 await rabbitMq.connect(RabbitMqUrl)
 new VehicleBookingCreatedEvent(storage,rabbitMq.channel).listen()
}catch(err){
    console.log(err);
    
}}
start()
http.createServer(app).listen(4041,()=>{
    console.log("Running on 4041");
    
})