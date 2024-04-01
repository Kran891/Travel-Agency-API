import { Router } from "express";
import { createUserAsync, getUserByIdAsync, updateUserAsyc, userSignInAsync } from "./controllers/user-controller";
import { authMiddleware } from "./middlewares/auth-middleware";
const router=Router()
router.route("/create").post(createUserAsync);
router.route("/signin").post(userSignInAsync);
router.route("/:id/id").get(getUserByIdAsync);
router.route("/:id/update").post(updateUserAsyc);
export {router as UserRouting};