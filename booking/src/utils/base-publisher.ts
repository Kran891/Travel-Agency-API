import { Channel } from "amqplib";
import { JetStreamClient } from "nats";
interface Event {
    subject: Subjects,
    data: any
}
export enum Subjects {
    Booking_Created = "BOOKING-CREATED", Booking_Cancelled = "BOOKING-CANCELLED"
}
export abstract class Publisher<T extends Event>{
    abstract subject: T['subject']
   // private client: JetStreamClient;
    private channel:Channel;
    constructor(channel:Channel) { this.channel = channel }
    async publish(data: T['data']): Promise<void> {
       return new Promise<void>((resolve,reject)=>{
        this.channel.assertQueue(this.subject, {
            durable: true
          });
          const _bool=this.channel.sendToQueue(this.subject, Buffer.from(JSON.stringify(data)), {
            persistent: true
          });
          if(_bool){
            console.log("📤 Data sent to the Queue",this.subject);
            
            resolve()
          }else{

          reject()
          }
        })
    }
}



