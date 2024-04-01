import { Roles } from "../core/models/roles";

interface CreateUserRequest{
    email:string,
    password:string,
    mobileNumber:string,
    role:Roles
}
interface CreateUserResponse{
    email:string,
    mobileNumber:string,
    role:Roles
}
export {CreateUserRequest,CreateUserResponse}