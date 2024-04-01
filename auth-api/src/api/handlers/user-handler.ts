import { NextFunction, Request, Response } from "express";
import { UserService } from "../../core/services/user-service";
import { CreateUserRequest, CreateUserResponse } from "../api-model";
import { tokenGeneratorMiddleware } from "../middlewares/token-generator-middleware";
export class UserHandler {
  constructor(private userService: UserService) { }
  async createUser(req: Request, res: Response, next: NextFunction) {
    const { body } = req;
    const user = await this.userService.createUser(body)
    const userjwt = await tokenGeneratorMiddleware(user);
    req.session = {
      data: userjwt
    }
    res.cookie('jwt', userjwt);
    
    res.json(user)
  }
  async userSignIn(req: Request, res: Response, next: NextFunction) {
    const { body } = req;
    const user = await this.userService.signInUser(body)
    const userjwt = await tokenGeneratorMiddleware(user);
    req.session = {
      data: userjwt
    }
    res.cookie('jwt', userjwt);
    res.json(user)
    

  }
  async getUserId(req: Request, res: Response, next: NextFunction) {
    const { id } = req.params
    const user = await this.userService.getUserById(id)
    res.json(user)
  }
  async updateUser(req:Request,res:Response,next:NextFunction){
    const {id}=req.params
    const user=await this.userService.updateUser({...req.body,id:id})
    res.json(user) 
  }
}