
import { Log, LoggingAttr } from "./logging"

const LogStorage=()=>({
    createLog:async (log:LoggingAttr)=>{
        const logDb=await Log.build(log);
        await logDb.save()
        console.log(logDb)
        return logDb._id
    },
    getLogs:async (parentId:string)=>{
        const logArray=await Log.find(
            {parentId:parentId});
        return logArray
    }
})
export {LogStorage}