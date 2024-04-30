import amqp, { Connection ,Channel} from 'amqplib';


class RabbitMq {
    private _connection?:Connection;
    private _channel?:Channel;
    get connection(){
        if(!this._connection){
            throw new Error("Not Connected to RabbiMq")
        }
        return this._connection
    }
    get channel(){
        if(!this._channel){
            throw new Error("Not Connected to RabbiMq")
        }
        return this._channel
    }
     async connect(url:string) {
         this._connection=await amqp.connect(url).catch((err:Error)=>{
            
            
            throw new Error("Can't Connect to RabbitMq")
         })
         this._channel=await this._connection.createChannel().catch(err=>{
            console.log(err.message);
            throw new Error("Can't Crate Channel to RabbitMq")
         });
         console.log("🐇 Connected to RabbitMq");
         
      }
}


export const rabbitMq=new RabbitMq();