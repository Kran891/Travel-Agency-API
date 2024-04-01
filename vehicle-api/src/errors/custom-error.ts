export abstract class CustomError extends Error{
  abstract statusCode:number
  abstract setError():{msg:string}[]
  constructor(msg:string){
    super(msg)
    Object.setPrototypeOf(this,CustomError.prototype)
  }
}