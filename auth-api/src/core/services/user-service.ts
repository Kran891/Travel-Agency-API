import { ServiceError } from "../../errors/service-error";
import { UserAttr } from "../models/user";
import { UserStorage } from "../storage/user-storage";
import { Password } from "../utils/password";

export class UserService {
  constructor(private userStorage: UserStorage) { }
  async createUser(user: UserAttr) {
    const existingUser = await this.userStorage.findUserByEmail(user.email);
    if (!existingUser) {
      const newUser = await this.userStorage.createUser(user)
      return newUser
    }
    throw new ServiceError(USER_EXSITS)
  }
  async signInUser(user: { email: string, password: string }) {
    const findUser = await this.userStorage.findUserByEmail(user.email)
    if (findUser) {
      const result = await Password.compare(user.password, findUser.password)
      if (result) {
        return findUser
      }
    }
    throw new ServiceError(INVALID_USER)
  }
  async getUserById(id: string) {
    const user = await this.userStorage.getUserById(id)
    if (user) {
      return user
    }
    throw new ServiceError(INVALID_USERID(id))

  }
  async updateUser(user:UserAttr){
    const upuser=await this.userStorage.updateUser(user)
    if(upuser){
      return upuser
    }
    throw new ServiceError(INVALID_USERID(user.id!))
  }

}

export const USER_EXSITS = "Email Id has been taken"
export const INVALID_USER = "Email or password incorrect"
export const INVALID_USERID=(id:string)=>`No user found with the ID ${id}`