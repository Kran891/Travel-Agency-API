import { asyncErrorMiddleware } from "../middlewares/async-error-middleware";
import { userHandler } from "../utils/services";

const createUserAsync=asyncErrorMiddleware(userHandler.createUser.bind(userHandler));
const userSignInAsync=asyncErrorMiddleware(userHandler.userSignIn.bind(userHandler));
const getUserByIdAsync=asyncErrorMiddleware(userHandler.getUserId.bind(userHandler));
const updateUserAsyc=asyncErrorMiddleware(userHandler.updateUser.bind(userHandler));
export {createUserAsync,userSignInAsync,getUserByIdAsync,updateUserAsyc}
