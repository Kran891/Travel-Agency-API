import { UserService } from "../../core/services/user-service";
import { UserStorage } from "../../core/storage/user-storage";
import { UserHandler } from "../handlers/user-handler";

const userStorage=new UserStorage();
const userService=new UserService(userStorage);
const userHandler=new UserHandler(userService);

export {userHandler}