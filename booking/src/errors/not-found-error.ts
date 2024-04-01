import { CustomError } from "./custom-error";

export class NotFoundError extends CustomError{
    statusCode: number=404;
    setError(): { msg: string; }[] {
        return [{msg:"Page Not Found "}]
    }
    constructor(){
        super('Page Not Found');
        Object.setPrototypeOf(this,NotFoundError.prototype)
    }
}