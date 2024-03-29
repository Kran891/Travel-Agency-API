import { Router } from "express";
import { createUserAsync, getUserByIdAsync, updateUserAsyc, userSignInAsync } from "./controllers/user-controller";
import { authMiddleware } from "./middlewares/auth-middleware";
const router=Router()
router.post("/create",createUserAsync);
router.post("/signin",userSignInAsync);
router.get("/:id/id",getUserByIdAsync);
router.post("/:id/update",updateUserAsyc);
export {router as UserRouting};