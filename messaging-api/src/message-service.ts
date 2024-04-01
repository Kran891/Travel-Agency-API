import { NextFunction, Request ,Response} from "express";
import { ParamsDictionary } from "express-serve-static-core";
import { ParsedQs } from "qs";
import { SgMail } from "../../config";
import { emailData } from "./send-data";
const ElasticEmail = require('@elasticemail/elasticemail-client');
const client = ElasticEmail.ApiClient.instance;
const apikey = client.authentications['apikey'];
apikey.apiKey = process.env.SgMail ||SgMail;
const emailsApi = new ElasticEmail.EmailsApi();
interface IMessageService{
    
    sendMail(req:Request,res:Response,next:NextFunction):Promise<void>;
    
}
class MessageService implements IMessageService{
   async sendMail(req: Request, res: Response, next: NextFunction): Promise<void> {
    emailsApi.emailsPost(emailData(req.body));
    res.json("Email Sent Succesfully")
    }
    

}
export {IMessageService,MessageService}