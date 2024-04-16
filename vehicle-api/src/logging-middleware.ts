import axios from "axios";
import { Request, Response } from "express"

const loggingMiddleware = async (req: Request | Response | any, parentId?: string | undefined) => {
    let content;
    if ('body' in req) {
        const url = req.protocol + '://' + req.get('host') + req.originalUrl;
        const { body, params, method } = req
        const service = req.baseUrl || "NA"
        content = {
            url,
            body: { ...body, params },
            service,
            method,
            parentId: parentId!
        }
    }
    else {
        content = {
            body: {error:req},
            parentId
        }
    }

const res = await axios.post("http://localhost:4040/api/log/create", content).catch((err:any) => {
    console.log(err);

})
return res?.data

}
export { loggingMiddleware }