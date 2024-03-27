import { CustomError } from "./custom-error";

export class DatabaseError extends CustomError{
    statusCode: number=500;
    setError(): { msg: string; }[] {
        return [{msg:this.err}]
    }
    constructor(private err:string){
        super('Database error')
        Object.setPrototypeOf(this,DatabaseError.prototype)
    }
}
