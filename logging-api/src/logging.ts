import mongoose from "mongoose";
const logSchema=new mongoose.Schema({
    url:String,
    body:mongoose.Schema.Types.Mixed,
    method:String,
    service:String,
    parentId:String,
    createdTime:{type:Date,
        default:Date.now
    }
})
interface LoggingAttr{
    url?:string,
    body:any,
    service?:string,
    createdTime?:Date,
    method?:string
}
interface LoggingDoc extends mongoose.Document{
    url?:string,
    body?:any,
    service?:string,
    createdTime?:Date,
    parentId?:string,
    method?:string   
}
interface LoggingModel extends mongoose.Model<LoggingDoc>{
    build(log:LoggingAttr):LoggingDoc;
}
logSchema.statics.build=(log:LoggingAttr)=>{
    return new Log(log)
}
const Log=mongoose.model<LoggingDoc,LoggingModel>("log",logSchema);

export {Log,LoggingAttr}