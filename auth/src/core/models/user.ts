import mongoose from "mongoose";
import { Password } from "../utils/password";
import { Roles } from "./roles";
const userSchema=new mongoose.Schema({
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    mobileNumber:{
        type:String,
        required:true
    },
    role:{
        type:String,
        required:true,
        enum:Roles
    }
},{
    toJSON:{
        transform(doc, ret) {
          ret.id = ret._id;
          delete ret._id;
          delete ret.password;
          delete ret.__v;
          
        }
      }
})

interface UserAttr{
    email:string,
    password:string,
    mobileNumber:string,
    role:Roles,
    id?:string
}
interface UserDoc extends mongoose.Document{
    email:string,
    password:string,
    mobileNumber:string,
    role:Roles
}
interface UserModel extends mongoose.Model<UserDoc>{
   build(user:UserAttr):UserDoc;
}

userSchema.statics.build=(user:UserAttr)=>{
    return new User(user);
}
userSchema.pre('save',async function(done){
  if(this.isModified('password') || this.isNew){
   const hashed=await Password.hash(this.get('password'))
   this.password=hashed
  }
  done()
}

)
const User=mongoose.model<UserDoc,UserModel>('user',userSchema);
export {User,UserAttr}