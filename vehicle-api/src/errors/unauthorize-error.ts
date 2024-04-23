import { CustomError } from "./custom-error";

export class UnAuthorizeError extends CustomError{
    statusCode: number=401;
    setError(): { msg: string; }[] {
        return [{msg:`You're not authorized to this page`}]
    }
    constructor(){
        super('Service error')
        Object.setPrototypeOf(this,UnAuthorizeError.prototype)
    }
}