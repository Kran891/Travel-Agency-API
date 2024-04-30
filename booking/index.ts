import mongoose from 'mongoose';
import { app } from './app';
import http from 'http'

import { rabbitMq } from './src/utils/rabbitmq-wrapper';
import { BookinCreatedEvent } from './src/events/booking-created-event';
const mongoURL=process.env.MONGOURL || "mongodb://localhost:27017/travel-agency-vehicles"
const RabbitMqUrl=process.env.RABBITMQ || 'amqp://localhost'
const start=async()=>{
    try {
        //await natsWrapper.connect(natsUrl)
        await rabbitMq.connect(RabbitMqUrl);
        mongoose.connect(mongoURL)
        console.log("🍀 Successfly connected to MongoDB LocalService");
        new BookinCreatedEvent(rabbitMq.channel).publish({
            capacity:2,
            date:'2024-04-03'
        })
        http.createServer(app).listen(4002,()=>
        {
            console.log(`✅ Service is running on http://localhost:4002/api/booking/docs`);
            
        }) 
    } catch (error) {
        console.log(`❌ Error in Connection ${error}`);
    }
    
}
start();