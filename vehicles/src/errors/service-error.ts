import { CustomError } from "./custom-error";

export class ServiceError extends CustomError{
    statusCode: number=400;
    setError(): { msg: string; }[] {
        return [{msg:this.err}]
    }
    constructor(private err:string){
        super('Service error')
        Object.setPrototypeOf(this,ServiceError.prototype)
    }
}