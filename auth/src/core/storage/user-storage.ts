import { User, UserAttr } from "../models/user";

export class UserStorage {
    async createUser(userData: UserAttr): Promise<UserAttr> {
        const user = User.build(userData)
        await user.save()
        return user
    }
    async deleteUser(userId:string):Promise<boolean>{
        const user=await User.findByIdAndDelete(userId)
        return !!user;
    }
    async findUserByEmail(email:string){
        const user=await User.findOne({email:email});
        
        return user
    }
    async getUserById(id:string){
        const user=await User.findById(id);
        return user
    }
    async updateUser(user:UserAttr){
       const data=await User.findByIdAndUpdate(user.id,user);
       return data
    }
}