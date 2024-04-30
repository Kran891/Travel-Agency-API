import { Channel, Message } from "amqplib";
import { json } from "body-parser";
interface Event {
    subject: string,
    data: any
}
export abstract class Listener<T extends Event>{
    abstract subject: T['subject']
    channel: Channel;
    abstract queueGroup:string;
    constructor(channel: Channel) { this.channel = channel }
    abstract message(data: T['data']): Promise<void>;
    parseData(msg: Message): T['data'] {
        return JSON.parse(msg.content.toString())
    }
    listen() {
        this.channel.assertQueue(this.queueGroup, {
            durable: true
        });
        this.channel.prefetch(1);
        console.log(" [*] Waiting for messages in %s.", this.subject);
        this.channel.consume(this.subject, async (msg) => {
            if (!msg) {
                console.log('❌ Not received any message ', this.subject);
            } else {
                const parsedData = this.parseData(msg!)
                console.log('📥 Received Message for ', this.subject);
             await this.message(parsedData)
             this.channel.ack(msg);
             console.log('☑️  Message Acknowleged Succeessfully...');
             
            }
        },{noAck:false})
    }
}