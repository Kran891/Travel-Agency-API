

import jwt from 'jsonwebtoken'
const tokenGeneratorMiddleware=async(data:any)=>{
    const userjwt=jwt.sign({id:data.id,email:data.email},KEY,{expiresIn:'1h'})
    return userjwt;
}

export const KEY='KRANTRANSPORT'

export {tokenGeneratorMiddleware}