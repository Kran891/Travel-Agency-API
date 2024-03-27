import bcrypt from 'bcrypt';
export class Password{
    static hash=async (password:string)=>{
      return await bcrypt.hash(password,10)//salt rounds 10
    }
    static  compare=async (password:string,hashed:any):Promise<boolean>=>{
        return await bcrypt.compare(password,hashed);
    }
}
